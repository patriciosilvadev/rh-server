const message = require('../util/validationMessage')

module.exports = (sequelize, DataTypes) => {

    const Banco = sequelize.define('Banco', {
        id: {
            primaryKey: true,
            type: DataTypes.INTEGER,
            autoIncrement: true,
        },
        banco: {
            type: DataTypes.STRING,
        },
        agencia: {
            type: DataTypes.STRING,
        },
        conta: {
            type: DataTypes.STRING,
        },
        digito: {
            type: DataTypes.STRING,
        },
        comprovante: {
            type: DataTypes.STRING,
        },
        idEmpresa: {
            type: DataTypes.INTEGER,
        },
    }, {
        tableName: 'Banco'
    })
    Banco.associate = models => {
        Banco.hasOne(models.Colaborador, {as: 'colaborador', foreignKey: 'BancoId'})
    }
    return Banco
}
