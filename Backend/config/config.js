require('dotenv').config();

exports.config = {
    user: process.env.user,
    password: process.env.password,
    server: process.env.server,
    database: process.env.database
};
