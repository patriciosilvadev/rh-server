const {Usuario, Empresa, Companhia} = require('../models');
const query = require('../util/query');
const addIdEmpresa = require('../util/util').addIdEmpresa;

module.exports.list = async (req, res) => {
    res.send(await Usuario.findAll({...query.removeTimestamp()}))
};

module.exports.findById = async (req, res) => {
    const result = await Usuario.findByPk(req.params.id, {
        ...query.removeTimestamp(), ...params
    });
    if (result) {
        res.send(result)
    } else {
        res.status(404).send()
    }
};

module.exports.save = async (req, res, next) => {
    try {
        const result = await Usuario.create(addIdEmpresa(req.body, req.authData.empresa));
        res.send(result)
    } catch (e) {
        next(e)
    }
};

module.exports.update = async (req, res, next) => {
    const {senha, ...data} = req.body;
    if (senha) {
        res.status(500).json({erro: 'senha nao pode ser alterada por aqui'})
    }
    try {
        await Usuario.update(data, {
            where: {
                id: req.body.id
            }, individualHooks: true
        });
        const result = await Usuario.findByPk(req.body.id);
        res.send(result)
    } catch (e) {
        next(e)
    }
};

module.exports.delete = async (req, res) => {
    await Usuario.destroy({where: {id: req.params.id}});
    res.status(200).send()
};

module.exports.userLogged = async (req, res, next) => {
    try {
        const result = await Usuario.findByPk(req.authData.usuario, {...query.removeTimestamp(), ...params}).then(v => {
            if (v === null) {
                res.status(403).send();
                throw new Error('Usuario nao logado')
            }
            return v.get({plain: true})
        });

        const {empresas, companhia, ...usuario} = result;
        const index = empresas.findIndex(v => v.id === usuario.empresaLogada);
        const empresaLogada = empresas[index];
        res.json({usuario, empresaLogada, empresas, companhia})
    } catch (e) {
        next(e)
    }
};


module.exports.updatePassword = async (req, res, next) => {
    try {
        const {senhaAtual, ...data} = req.body;
        if (!senhaAtual) {
            res.status(500).json({erro: 'senha atual origatoria'});
            return
        }
        const usuario = await Usuario.findByPk(req.body.id);
        const senhaCorreta = await usuario.compararSenha(senhaAtual);

        if (!senhaCorreta) {
            res.status(400).json({erro: 'senha incorreta'});
            return
        }

        await Usuario.update({...data}, {
            where: {
                id: req.body.id
            }, individualHooks: true
        });
        const result = await Usuario.findByPk(req.body.id);
        res.send(result)
    } catch (e) {
        next(e)
    }
};


const params = {
    include: [
        {
            model: Empresa,
            as: 'empresas',
            attributes: {exclude: ['createdAt', 'updatedAt', 'UsuariosEmpresas']}
        },
        {
            model: Companhia,
            as: 'companhia',
            attributes: {exclude: ['createdAt', 'updatedAt']}
        },
    ]
};
