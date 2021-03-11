let Sequelize = require("sequelize");

let db = new Sequelize(
    "postgres: // gcgmrslmsipedh : 0a7624bc541c48f50e28e2550f0ef3538ce0ec7cf58682e4ce1cb737be1245c2 @ ec2-52-203-27-62.compute-1.amazonaws.com : 5432 / ddqehffmakacjl",
    {
        dialect: "postgres",
        dialectOptions: {
            ssl: {
                rejectUnauthorized: false, //very important
            }
        }
    });

    module.exports = db;