const {
    Colaborador, Cargo, Departamento, CentroDeCusto, Sindicato, Endereco, Escolaridade, JornadaTrabalho, Vinculo,
    FormaPagamento, PeriodoExperiencia, CheckList, Contato, Dependente, Banco, Beneficio, CopiaDocumento,
    ConfiguracaoCheckList
} = require('../models')

module.exports.list = async (req, res) => {
    let params = {}
    if (req.query.status) params = {where: req.query}
    res.send(await Colaborador.findAll({...params, ...colaboradorParams}))
}

module.exports.findById = async (req, res) => {
    const result = await Colaborador.findByPk(req.params.id, {...colaboradorParams})
    if (result) {
        res.send(result)
    } else {
        res.status(404).send()
    }
}

module.exports.save = async (req, res) => {
    try {
        const {cargo, departamento, centroDeCusto, sindicato, checkList, jornadaTrabalho, vinculo, formaPagamento, periodoExperiencia, ...data} = req.body
        colaborador = await Colaborador.create({...data, status: "ADMISSAO_PENDENTE"})
        console.log(cargo)
        await colaborador.setCargo(cargo)
        await colaborador.setDepartamento(departamento)
        await colaborador.setCentroDeCusto(centroDeCusto)
        await colaborador.setSindicato(sindicato)
        await colaborador.setCheckList(checkList)
        await colaborador.setJornadaTrabalho(jornadaTrabalho)
        await colaborador.setVinculo(vinculo)
        await colaborador.setFormaPagamento(formaPagamento)
        await colaborador.setPeriodoExperiencia(periodoExperiencia)
        /* await ConfiguracaoCheckList.findAll({where: {ativo: true}}).then(async result =>
         await CheckList.create({nome: result.nome, concluido: false, CheckListId: colaborador.id})) */

        res.send(colaborador)
    } catch (e) {
        console.log(e)
        const erro = e.errors ? e.errors[0].message : e
        res.status(500).send({erro})
    }
}

module.exports.update = async (req, res) => {
    try {
        const {
            cargo, departamento, centroDeCusto, sindicato, checkList, jornadaTrabalho, vinculo, formaPagamento,
            endereco, escolaridade, banco, periodoExperiencia, contatos, dependentes, copiaDocumentos, ...colaborador
        } = req.body

        await Colaborador.update({...colaborador}, {
            where: {
                id: req.body.id
            },
        })

        let colaboradorSaved = await Colaborador.findByPk(req.body.id,
            {...colaboradorParams},
        )

        if (cargo && typeof cargo === 'number') await colaboradorSaved.setCargo(cargo)
        if (departamento) await colaboradorSaved.setDepartamento(typeof departamento === 'object' ? departamento.id : departamento)
        if (centroDeCusto) await colaboradorSaved.setCentroDeCusto(typeof centroDeCusto === 'object' ? centroDeCusto.id : centroDeCusto)
        if (jornadaTrabalho) await colaboradorSaved.setJornadaTrabalho(typeof jornadaTrabalho === 'object' ? jornadaTrabalho.id : jornadaTrabalho)
        if (vinculo) await colaboradorSaved.setVinculo(typeof vinculo === 'object' ? vinculo.id : vinculo)
        if (formaPagamento) await colaboradorSaved.setFormaPagamento(typeof formaPagamento === 'object' ? formaPagamento.id : formaPagamento)
        if (periodoExperiencia) await colaboradorSaved.setPeriodoExperiencia(typeof periodoExperiencia === 'object' ? periodoExperiencia.id : periodoExperiencia)

        if (endereco) {
            if (endereco.id) {
                await Endereco.update({...endereco}, {where: {id: endereco.id}})
                await colaboradorSaved.setEndereco(endereco.id)
            } else if (typeof endereco === 'number') {
                await colaboradorSaved.setEndereco(endereco)
            } else {
                const enderecoSaved = await Endereco.create({...endereco})
                await enderecoSaved.setColaborador(colaboradorSaved.id)
            }
        }

        if (escolaridade) {
            if (escolaridade.id) {
                await Escolaridade.update({...escolaridade}, {where: {id: escolaridade.id}})
                await colaboradorSaved.setEscolaridade(escolaridade.id)
            } else if (typeof escolaridade === 'number') {
                await colaboradorSaved.setEscolaridade(escolaridade)
            } else {
                const escolaridadeSaved = await Escolaridade.create({...escolaridade})
                await escolaridadeSaved.setColaborador(colaboradorSaved.id)
            }
        }

        if (banco) {
            if (banco.id) {
                await Banco.update({...banco}, {where: {id: banco.id}})
                await colaboradorSaved.setBanco(banco.id)
            } else if (typeof banco === 'number') {
                await colaboradorSaved.setBanco(banco)
            } else {
                const bancoSaved = await Banco.create({...banco})
                await bancoSaved.setColaborador(colaboradorSaved.id)
            }
        }

        if (contatos && contatos.length) {
            await contatos.forEach(async c => {
                if (c.id) {
                    await Contato.update({...c}, {where: {id: c.id}})
                    await colaboradorSaved.addContato(c.id)
                } else if (typeof c === 'number') {
                    await colaboradorSaved.addContato(c)
                } else {
                    const contatoSaved = await Escolaridade.create({...c})
                    await contatoSaved.setColaborador(colaboradorSaved.id)
                }
            })

        }

        if (dependentes && dependentes.length) {
            await dependentes.forEach(async d => {
                if (d.id) {
                    await Dependente.update({...d}, {where: {id: d.id}})
                    await colaboradorSaved.addDependente(d.id)
                } else if (typeof d === 'number') {
                    await colaboradorSaved.addDependente(d)
                } else {
                    const dependenteSaved = await Dependente.create({...d})
                    await dependenteSaved.setColaborador(colaboradorSaved.id)
                }
            })
        }

        if (copiaDocumentos && copiaDocumentos.length) {

            await CopiaDocumento.findAll({where: {CopiaDocumentoId: colaboradorSaved.id}}).then(v => {
                const finalArr = []
                v.forEach(el => {
                    if (copiaDocumentos.findIndex(x => x.id === el.id) === -1) {
                        finalArr.push(el)
                    }
                })
                if (finalArr.length > 0) {
                    finalArr.forEach(async x => await CopiaDocumento.destroy({where: {id: x.id}}))
                }
            })

            await copiaDocumentos.forEach(async v => {
                if (!v.id) {
                    const copiaDocumentoSaved = await CopiaDocumento.create({...v})
                    await copiaDocumentoSaved.setColaborador(colaboradorSaved.id)
                }
            })
        }

        colaboradorSaved = await Colaborador.findByPk(req.body.id, {...colaboradorParams})

        res.send(colaboradorSaved)
    } catch (e) {
        console.log(e)
        res.status(500).send(e)
    }
}

module.exports.delete = async (req, res) => {
    await Colaborador.destroy({where: {id: req.params.id}})
    res.status(200).send()
}

module.exports.qtdColaboradores = async (req, res) => {
    try {
        const ativo = await Colaborador.findAll({where: {status: "ATIVO"}})
        const admissaoPendente = await Colaborador.findAll({where: {status: "ADMISSAO_PENDENTE"}})
        const desligamentoPendente = await Colaborador.findAll({where: {status: "DESLIGAMENTO_PENDENTE"}})
        const desligado = await Colaborador.findAll({where: {status: "DESLIGADO"}})
        res.send({ativo: ativo.length, admissaoPendente: admissaoPendente.length, desligamentoPendente: desligamentoPendente.length, desligado: desligado.length})
    } catch (e) {
        console.log(e)
        res.send(e)
    }
}


const colaboradorParams = {
    include: [
        {
            model: Banco,
            as: 'banco',
            attributes: {exclude: ['createdAt', 'updatedAt']}
        },
        {
            model: Cargo,
            as: 'cargo',
            attributes: {exclude: ['createdAt', 'updatedAt']}
        },
        {
            model: Departamento,
            as: 'departamento',
            attributes: {exclude: ['createdAt', 'updatedAt']}
        },
        {
            model: CentroDeCusto,
            as: 'centroDeCusto',
            attributes: {exclude: ['createdAt', 'updatedAt']}
        },
        {
            model: Sindicato,
            as: 'sindicato',
            attributes: {exclude: ['createdAt', 'updatedAt']}
        },
        {
            model: Escolaridade,
            as: 'escolaridade',
            attributes: {exclude: ['createdAt', 'updatedAt']}
        },
        {
            model: Endereco,
            as: 'endereco',
            attributes: {exclude: ['createdAt', 'updatedAt']}
        }, {
            model: JornadaTrabalho,
            as: 'jornadaTrabalho',
            attributes: {exclude: ['createdAt', 'updatedAt']}
        }, {
            model: Vinculo,
            as: 'vinculo',
            attributes: {exclude: ['createdAt', 'updatedAt']}
        }, {
            model: FormaPagamento,
            as: 'formaPagamento',
            attributes: {exclude: ['createdAt', 'updatedAt']}
        }, {
            model: PeriodoExperiencia,
            as: 'periodoExperiencia',
            attributes: {exclude: ['createdAt', 'updatedAt']}
        }, {
            model: CheckList,
            as: 'checkList',
            attributes: {exclude: ['createdAt', 'updatedAt', 'CheckListId']}
        }, {
            model: Contato,
            as: 'contatos',
            attributes: {exclude: ['createdAt', 'updatedAt', 'ContatoId']}
        }, {
            model: Dependente,
            as: 'dependentes',
            attributes: {exclude: ['createdAt', 'updatedAt', 'DependenteId']}
        }, {
            model: Beneficio,
            as: 'beneficios',
            attributes: {exclude: ['createdAt', 'updatedAt', 'BeneficioId']}
        }, {
            model: CopiaDocumento,
            as: 'copiaDocumentos',
            attributes: {exclude: ['createdAt', 'updatedAt', 'CopiaDocumentoId']}
        },
    ],
    attributes: {
        exclude: ['createdAt', 'updatedAt', 'CargoId', 'DepartamentoId', 'EnderecoId', 'CentroDeCustoId', 'SindicatoId', 'EscolaridadeId', 'JornadaTrabalhoId', 'VinculoId', 'FormaPagamentoId', 'PeriodoExperienciaId', 'BancoId']
    }
}
