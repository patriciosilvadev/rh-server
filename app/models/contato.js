const message = require('../util/validationMessage')

module.exports = (sequelize, DataTypes) => {

    const Contato = sequelize.define('Contato', {
        id: {
            primaryKey: true,
            type: DataTypes.INTEGER,
            autoIncrement: true,
        },
        nome: {
            type: DataTypes.STRING,
            ...message.notNull('nome'),
        },
        email: {
            type: DataTypes.STRING,
        },
        telefone: {
            type: DataTypes.STRING,
        },
        celular: {
            type: DataTypes.STRING,
        },
        telefoneTrabalho: {
            type: DataTypes.STRING,
        },
        idEmpresa: {
            type: DataTypes.INTEGER,
        },
    },{
        tableName: 'Contato'
    })

    Contato.associate = models => {
        Contato.belongsTo(models.Colaborador, {as: 'colaborador', foreignKey: 'ContatoId'})
        Contato.belongsTo(models.RelacaoContato, {as: 'relacao', foreignKey: 'RelacaoContatoId'})
    }
    return Contato
}
