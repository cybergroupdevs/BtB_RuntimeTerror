require('dotenv').config();

// database connection credentials
exports.config = {
    user: process.env.user,
    password: process.env.password,
    server: process.env.server,
    database: process.env.database
};
