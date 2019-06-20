'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
  return queryInterface.addColumn('Endereco', 'ColaboradorId',
              {
                  type: Sequelize.INTEGER,
                  references: {
                      model: 'Colaborador',
                      key: 'id'
                  },
                  onUpdate: 'CASCADE',
                  onDelete: 'SET NULL'
              })
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
  }
};
