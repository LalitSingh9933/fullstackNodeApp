//In here we connect database  and code logic 
require("dotenv").config();
 const {Sequelize,DataTypes,} = require("sequelize")
// we also write the above like  this 
//  const sequelize = require("sequelize");
//  const Sequelize = sequelize.Sequelize
//  const DataTypes = sequelize.DataTypes

const sequelize = new Sequelize(process.env.DATABASE_URL,{dialect:"postgres",logging:false})
sequelize.authenticate()
.then(()=>{
    console.log("Authonticate Successfully Done,connected !!")
})
.catch((error)=>{
    console.log("faild to Conntect"+ error)
})

const db = {}
db.sequelize = Sequelize
db.sequelize = sequelize

module.export =db