const { Sequelize } = require("sequelize");
const dotEnv = require("dotenv");
dotEnv.config();
const sequelize = new Sequelize(
  process.env.myDB,
  process.env.user,
  process.env.password,
  {
    host: process.env.host,
    dialect: process.env.dialect,
  }
);

sequelize
  .authenticate()
  .then(() => {
    console.log("connection established successfully");
  })
  .catch((error) => {
    console.log("unable to connect", error);
  });

module.exports = sequelize;
