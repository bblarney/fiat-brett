const env = require('./env.js');

const Sequelize = require('sequelize');
const sequelize = new Sequelize(env.database, env.username, env.password, {
  host: env.host,
  dialect: env.dialect,
  operatorsAliases: false,
 
  pool: {
    max: env.max,
    min: env.pool.min,
    acquire: env.pool.acquire,
    idle: env.pool.idle
  }
});
 
const db = {};
 
db.Sequelize = Sequelize;
db.sequelize = sequelize;
 
//Models/tables
db.users        = require('../model/user.model.js')(sequelize, Sequelize);
db.advisors     = require('../model/advisor.model.js')(sequelize, Sequelize);
db.assets       = require('../model/asset.model')(sequelize, Sequelize);
db.transactions = require('../model/transactions.model')(sequelize, Sequelize);
db.portfolios   = require('../model/portfolio.model')(sequelize, Sequelize);
db.tokens       = require('../model/token.model')(sequelize, Sequelize);
 
module.exports = db;