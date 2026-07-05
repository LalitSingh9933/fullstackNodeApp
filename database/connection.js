//In here we connect database  and code logic 
 const {Sequelize,DataTypes,} = require("sequelize")
// we also write the above like  this 
//  const sequelize = require("sequelize");
//  const Sequelize = sequelize.Sequelize
//  const DataTypes = sequelize.DataTypes

const sequelize = new Sequelize("postgresql://postgres.auuyhugiorytfkpazpfc:Pramod@5929@aws-1-ap-southeast-2.pooler.supabase.com:6543/postgres")
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