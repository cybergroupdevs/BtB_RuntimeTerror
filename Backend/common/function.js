const sql = require("mssql");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("config");
const { config } = require("../config/config");
const tokenKey = keys.get("tokenKey");

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

exports.runSP = async sp_name => {
    try {
      let pool = await sql.connect(config);
      if (pool) {
        try {
          let result = await pool.request().execute(sp_name);
          return result;
        } catch (err) {
          return result = {
            "message" : "proc_error",
            "error" : err.message
          }
        }
      }
      pool.close();
    } catch (err) {
      return (result = {
        message: "Connection Error",
        error: err.originalError
      });
    }
}

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
          : Values + "'"+hashedPassword(data[key]) + "'";
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

exports.getSetCondition = (data) => {
  var condition = "",count=0;
  for(key in data){
    condition =
      count !== Object.keys(data).length - 1
        ? typeof data[key] === "string"
          ? condition + key + "='" + data[key] + "',"
          : condition + key + "=" + data[key] + ","
        : typeof data[key] === "string"
        ? condition + key + "='" + data[key] + '\''
        : condition + key + "=" + data[key];
    count++;
  }
  return condition;
}

const hashedPassword = password => {
  var salt = bcrypt.genSaltSync(10);
  var hash = bcrypt.hashSync(password, salt);
  return hash;
};

exports.checkPassword = (password, hash) => {
  return bcrypt.compareSync(password, hash);
}

exports.getToken = (data) => {
  return (token = jwt.sign(data, tokenKey));
}
