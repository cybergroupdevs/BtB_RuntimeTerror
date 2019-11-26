const sql = require("mssql");
const bcrypt = require("bcryptjs");

const Response = require("./response");
const { config } = require("../config/config");

exports.runQuery = async query => {
  try {
    let pool = await sql.connect(config);
    if (pool) {
      try {
        let result = await pool.request().query(query);
        return result;
      } catch (err) {
        return (result = {
          message: "Query Error",
          error: err.originalError
        });
      }
    }
    pool.close();
  } catch (err) {
    return (result = {
      message: "Connection Error",
      error: err.originalError
    });
  }
};

exports.getColumnsAndValues = data => {
    var columns = "",
    Values = "",
    count = 0;
  for (key in data) {
    if (key === "password") {
      columns =
        count !== Object.keys(data).length - 1
          ? columns + key + ","
          : columns + key;
      Values =
        count !== Object.keys(data).length - 1
          ? Values + "'" + hashedPassword(data[key]) + "'" + ","
          : Values + hashedPassword(data[key]);
    } else {
      columns =
        count !== Object.keys(data).length - 1
          ? columns + key + ","
          : columns + key;
      Values =
        count !== Object.keys(data).length - 1
          ? typeof data[key] === "string"
            ? Values + "'" + data[key] + "'" + ","
            : Values + data[key] + ","
          : typeof data[key] === "string"
          ? Values + "'" + data[key] + "'"
          : Values + data[key];
    }
    count++;
  }
  return {
    columns: columns,
    Values: Values
  };
};

const hashedPassword = password => {
  var salt = bcrypt.genSaltSync(10);
  var hash = bcrypt.hashSync(password, salt);
  return hash;
};
