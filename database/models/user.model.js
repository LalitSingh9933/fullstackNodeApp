const { Sequelize, STRING } = require("sequelize");

const userModel = (Sequelize, DataTypes) => {
    const User = Sequelize.define("user", {
        username: {
            type: DataTypes.STRING
        },
        password: {
            type: DataTypes.STRING
        },
        email: {
            type: DataTypes.STRING,
        }
    })
    return User;
}
module.exports=userModel;