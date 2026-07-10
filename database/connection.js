//In here we connect database  and code logic 
require("dotenv").config();
const bookModele = require("./models/book.model")
const userModele = require("./models/user.model")
const { Sequelize, DataTypes, } = require("sequelize")
// we also write the above like  this 
//  const sequelize = require("sequelize");
//  const Sequelize = sequelize.Sequelize
//  const DataTypes = sequelize.DataTypes

const sequelize = new Sequelize(process.env.DATABASE_URL, { dialect: "postgres", logging: false })
sequelize.authenticate()
    .then(() => {
        console.log("Authonticate Successfully Done,connected !!")
    })
    .catch((error) => {
        console.log("faild to Conntect" + error)
    })

const db = {}
db.Sequelize = Sequelize
db.sequelize = sequelize

db.books = bookModele(sequelize, DataTypes);
db.users = userModele(sequelize, DataTypes);
//migrate code  ho yo chai hai
sequelize.sync({ alter: false }).then(() => {
    console.log("Migrate vayou hai tw")
})
module.exports = db