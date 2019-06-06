const {Cargo, Colaborador} = require('../models')
const query = require('../util/query')

module.exports.list = async (req, res) => {
    res.send(await Cargo.findAll({...query.removeTimestamp(), include: [{model: Colaborador, as: 'colaboradores'}]}))
}

module.exports.findById = async (req, res) => {
    const result = await Cargo.findByPk(req.params.id, query.removeTimestamp())
    if (result) {
        res.send(result)
    } else {
        res.status(404).send()
    }
}

module.exports.save = async (req, res) => {
    try {
        const result = await Cargo.create(req.body)
        res.send(result)
    } catch (e) {
        res.send({erro: e.errors[0].message})
    }
}

module.exports.update = async (req, res) => {
    try {
        await Cargo.update({...req.body}, {
            where: {
                id: req.body.id
            }
        })
        const result = await Cargo.findByPk(req.body.id)
        res.send(result)
    } catch (e) {
        res.send(e)
    }
}

module.exports.delete = async (req, res) => {
    await Cargo.destroy({where: {id: req.params.id}})
    res.status(200).send()
}
