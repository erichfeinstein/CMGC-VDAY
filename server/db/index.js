const Sequelize = require('sequelize');
const db = new Sequelize(
  process.env.DATABASE_URL || 'postgres://localhost:5432/CMGCVDAY',
  {
    logging: false,
  }
);

const Valentine = db.define('valentine', {
  valentineContent: {
    type: Sequelize.STRING,
    allowEmpty: false,
    allowNull: false,
  },
  complete: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
    defaultValue: false,
  },
});

module.exports = { db, Valentine };
