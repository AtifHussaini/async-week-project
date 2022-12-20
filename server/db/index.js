const Sequelize = require('sequelize');
const postgresURL = "postgres://localhost:5432/nba2k";
const db = new Sequelize(postgresURL);

const Player = db.define("player", {
    
    firstName: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    lastName: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    ranking: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false
    }
})

module.exports = {
    db,
    Player
};

