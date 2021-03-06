const message = require('../util/validationMessage')

module.exports = (sequelize, DataTypes) => {

    const Evento = sequelize.define('Evento', {
        id: {
            primaryKey: true,
            type: DataTypes.INTEGER,
            autoIncrement: true,
        },
        nome: {
            type: DataTypes.STRING,
            ...message.notNull('nome')
        },
        codigo: {
            type: DataTypes.STRING,
            ...message.notNull('codigo')
        },
        eSocial: {
            type: DataTypes.STRING,
        },
        padraoSistema: {
            type: DataTypes.STRING,
        },
        tributarIrrf: {
            allowNull: false,
            defaultValue: false,
            type: DataTypes.BOOLEAN,
        },
        tributarInss: {
            allowNull: false,
            defaultValue: false,
            type: DataTypes.BOOLEAN,
        },
        tributarFgts: {
            allowNull: false,
            defaultValue: false,
            type: DataTypes.BOOLEAN,
        },
        considerarNoCalculoDsr: {
            allowNull: false,
            defaultValue: false,
            type: DataTypes.BOOLEAN,
        },
        adicionarAoArquivoDeIntegracao: {
            allowNull: false,
            defaultValue: false,
            type: DataTypes.BOOLEAN,
        },
        sobrescreverCalculoDoSistema: {
            allowNull: false,
            defaultValue: false,
            type: DataTypes.BOOLEAN,
        },
        campoAtivo: {
            allowNull: false,
            defaultValue: true,
            type: DataTypes.BOOLEAN,
        },
        campoAparece: {
            allowNull: false,
            defaultValue: true,
            type: DataTypes.BOOLEAN,
        },
        idEmpresa: {
            type: DataTypes.INTEGER,
        },
    }, {
        tableName: 'Evento'
    })

    Evento.associate = models => {
        Evento.hasMany(models.FechamentoFolhaItem, {as: 'fechamentoFolhaItens', foreignKey: 'FechamentoEventoId'});
        Evento.belongsTo(models.TipoProvento, {as: 'tipo', foreignKey: 'TipoProventoId'});
    }

    return Evento
}


module.exports.eventosPreDefinidos = [
    {
        nome: 'Salario',
        codigo: '001',
        eSocial: 'Salario, vencimento, soldo, ou subsidio',
        tributarIrrf: true,
        tributarInss: true,
        tributarFgts: true,
        considerarNoCalculoDsr: false,
        adicionarAoArquivoDeIntegracao: false,
        sobrescreverCalculoDoSistema: false,
        campoAtivo: false,
        campoAparece: false,
        padraoSistema: 'SALARIO',
        createdAt: new Date(),
    },
    {
        nome: 'Ferias',
        codigo: '991',
        eSocial: 'Ferias - gozadas',
        tributarIrrf: true,
        tributarInss: true,
        tributarFgts: true,
        considerarNoCalculoDsr: false,
        adicionarAoArquivoDeIntegracao: false,
        sobrescreverCalculoDoSistema: true,
        campoAtivo: true,
        campoAparece: true,
        padraoSistema: 'FERIAS',
        createdAt: new Date(),
    },
    {
        nome: 'Afastamentos',
        codigo: '992',
        eSocial: 'Atrasos',
        tributarIrrf: false,
        tributarInss: false,
        tributarFgts: false,
        considerarNoCalculoDsr: false,
        adicionarAoArquivoDeIntegracao: false,
        sobrescreverCalculoDoSistema: true,
        campoAtivo: true,
        campoAparece: true,
        padraoSistema: 'AFASTAMENTOS',
        createdAt: new Date(),
    },
    {
        nome: 'Contribuicao sindical',
        codigo: '994',
        eSocial: 'Contribuicao sindical - Confederativa',
        tributarIrrf: false,
        tributarInss: false,
        tributarFgts: false,
        considerarNoCalculoDsr: false,
        adicionarAoArquivoDeIntegracao: false,
        sobrescreverCalculoDoSistema: true,
        campoAtivo: true,
        campoAparece: true,
        padraoSistema: 'CONTRIBUICAO_SINDICAL',
        createdAt: new Date(),
    },
    {
        nome: 'DSR',
        codigo: '995',
        eSocial: 'Descanso semanal remunerado - DSR',
        tributarIrrf: true,
        tributarInss: true,
        tributarFgts: true,
        considerarNoCalculoDsr: false,
        adicionarAoArquivoDeIntegracao: false,
        sobrescreverCalculoDoSistema: false,
        campoAtivo: false,
        campoAparece: false,
        padraoSistema: 'DSR',
        createdAt: new Date(),
    },
    {
        nome: 'FGTS',
        codigo: '996',
        eSocial: 'Desconto de outros impostos e contribuicoes',
        tributarIrrf: false,
        tributarInss: false,
        tributarFgts: false,
        considerarNoCalculoDsr: false,
        adicionarAoArquivoDeIntegracao: false,
        sobrescreverCalculoDoSistema: false,
        campoAtivo: false,
        campoAparece: false,
        padraoSistema: 'FGTS',
        createdAt: new Date(),
    },
    {
        nome: 'IRRF',
        codigo: '997',
        eSocial: 'Imposto de renda retido na fonte',
        tributarIrrf: false,
        tributarInss: false,
        tributarFgts: false,
        considerarNoCalculoDsr: false,
        adicionarAoArquivoDeIntegracao: false,
        sobrescreverCalculoDoSistema: false,
        campoAtivo: false,
        campoAparece: false,
        padraoSistema: 'IRRF',
        createdAt: new Date(),
    },
    {
        nome: 'INSS patronal',
        codigo: '998',
        eSocial: 'Contribuicao previdenciaria',
        tributarIrrf: false,
        tributarInss: false,
        tributarFgts: false,
        considerarNoCalculoDsr: false,
        adicionarAoArquivoDeIntegracao: false,
        sobrescreverCalculoDoSistema: false,
        campoAtivo: false,
        campoAparece: false,
        padraoSistema: 'INSS_PATRONAL',
        createdAt: new Date(),
    },
    {
        nome: 'INSS',
        codigo: '999',
        eSocial: 'Contribuicao previdenciaria',
        tributarIrrf: false,
        tributarInss: false,
        tributarFgts: false,
        considerarNoCalculoDsr: false,
        adicionarAoArquivoDeIntegracao: false,
        sobrescreverCalculoDoSistema: false,
        campoAtivo: false,
        campoAparece: false,
        padraoSistema: 'INSS',
        createdAt: new Date(),
    },
    {
        nome: 'Faltas',
        codigo: '1001',
        eSocial: 'Faltas',
        tributarIrrf: true,
        tributarInss: true,
        tributarFgts: true,
        considerarNoCalculoDsr: false,
        adicionarAoArquivoDeIntegracao: false,
        sobrescreverCalculoDoSistema: false,
        campoAtivo: false,
        campoAparece: false,
        padraoSistema: 'FALTAS',
        createdAt: new Date(),
    },
    {
        nome: '13 salário - Parcela Única',
        codigo: '5001',
        eSocial: '13 salário',
        tributarIrrf: true,
        tributarInss: true,
        tributarFgts: true,
        considerarNoCalculoDsr: false,
        adicionarAoArquivoDeIntegracao: false,
        sobrescreverCalculoDoSistema: false,
        campoAtivo: false,
        campoAparece: false,
        padraoSistema: 'DECIMO_TERCEIRO_PARCELA_UNICA',
        createdAt: new Date(),
    },
    {
        nome: '13 salário - Primeira Parcela',
        codigo: '5002',
        eSocial: '13 salário',
        tributarIrrf: false,
        tributarInss: false,
        tributarFgts: false,
        considerarNoCalculoDsr: false,
        adicionarAoArquivoDeIntegracao: false,
        sobrescreverCalculoDoSistema: false,
        campoAtivo: false,
        campoAparece: false,
        padraoSistema: 'DECIMO_TERCEIRO_PRIMEIRA_PARCELA',
        createdAt: new Date(),
    },
    {
        nome: '13 salário - Segunda Parcela',
        codigo: '5002',
        eSocial: '13 salário',
        tributarIrrf: true,
        tributarInss: true,
        tributarFgts: true,
        considerarNoCalculoDsr: false,
        adicionarAoArquivoDeIntegracao: false,
        sobrescreverCalculoDoSistema: false,
        campoAtivo: false,
        campoAparece: false,
        padraoSistema: 'DECIMO_TERCEIRO_SEGUNDA_PARCELA',
        createdAt: new Date(),
    },
    {
        nome: '13 salário - Desconto de adiantamento',
        codigo: '5004',
        eSocial: '13 salário - Primeira Parcela',
        tributarIrrf: true,
        tributarInss: true,
        tributarFgts: true,
        considerarNoCalculoDsr: false,
        adicionarAoArquivoDeIntegracao: false,
        sobrescreverCalculoDoSistema: false,
        campoAtivo: false,
        campoAparece: false,
        padraoSistema: 'DECIMO_TERCEIRO_DESCONTO_ADIANTAMENTO',
        createdAt: new Date(),
    },
    {
        nome: 'Horas extraordinárias - 1',
        codigo: '11003',
        eSocial: 'Horas extraordinarias',
        tributarIrrf: false,
        tributarInss: false,
        tributarFgts: false,
        considerarNoCalculoDsr: false,
        adicionarAoArquivoDeIntegracao: false,
        sobrescreverCalculoDoSistema: false,
        campoAtivo: false,
        campoAparece: false,
        padraoSistema: 'HORA_EXTRAORDINARIA_UM',
        createdAt: new Date(),
    },
    {
        nome: 'Horas extraordinárias - 2',
        codigo: '11004',
        eSocial: 'Horas extraordinarias',
        tributarIrrf: false,
        tributarInss: false,
        tributarFgts: false,
        considerarNoCalculoDsr: false,
        adicionarAoArquivoDeIntegracao: false,
        sobrescreverCalculoDoSistema: false,
        campoAtivo: false,
        campoAparece: false,
        padraoSistema: 'HORA_EXTRAORDINARIA_DOIS',
        createdAt: new Date(),
    },
    {
        nome: 'Horas extraordinárias - 3',
        codigo: '11005',
        eSocial: 'Horas extraordinarias',
        tributarIrrf: false,
        tributarInss: false,
        tributarFgts: false,
        considerarNoCalculoDsr: false,
        adicionarAoArquivoDeIntegracao: false,
        sobrescreverCalculoDoSistema: false,
        campoAtivo: false,
        campoAparece: false,
        padraoSistema: 'HORA_EXTRAORDINARIA_TRES',
        createdAt: new Date(),
    },
    {
        nome: 'Horas extraordinárias - 4 ',
        codigo: '11006',
        eSocial: 'Horas extraordinarias',
        tributarIrrf: false,
        tributarInss: false,
        tributarFgts: false,
        considerarNoCalculoDsr: false,
        adicionarAoArquivoDeIntegracao: false,
        sobrescreverCalculoDoSistema: false,
        campoAtivo: false,
        campoAparece: false,
        padraoSistema: 'HORA_EXTRAORDINARIA_QUATRO',
        createdAt: new Date(),
    },
]
