const Sequelize = require('sequelize');
const postgresURL = "postgres://localhost:5432/acme_schools_db";
const db = new Sequelize(postgresURL);

const Student = db.define("student", {

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
    email: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
        isUnique: true,
        validate: {
            notEmpty: true,
            isEmail: true
        }
    },
    image: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
        defaultValue: "/anonymousPerson.jpeg"
    },
    gpa: {
        type: Sequelize.DataTypes.DECIMAL,
        allowNull: false,
        defaultValue: 0,
        validate: {
            min:0,
            max: 4
        }
    }
});

const Campus = db.define("campus", {

    name: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false
    },
    address: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: Sequelize.DataTypes.TEXT,
        allowNull: true,
        defaultValue: "A higher education institution that provides a range of undergraduate, graduate, and professional programs. Students at this university can choose from a wide variety of subjects to study, from the arts and humanities to the sciences and engineering."
    },
    image: {
        type: Sequelize.DataTypes.STRING,
        allowNull: true,
        defaultValue: "/anonymousUniversity.jpeg"
    }
});

Student.belongsTo(Campus);
Campus.hasMany(Student);

module.exports = {
    db,
    Student,
    Campus
};

