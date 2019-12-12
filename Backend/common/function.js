const sql = require("mssql");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("config");
const { config } = require("../config/config");
const tokenKey = keys.get("tokenKey");

// returns result of query executed, error if query is wrong
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

// returns result of the Stored Procedure
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

// returns the columns and values for the insert query
exports.getColumnsAndValues = data => {
    var columns = "",
    Values = "",
    count = 0;
  for (key in data) {
    if (key === "Password") {
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

// returns the set conditions for the update query
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

// returns hashed password 
const hashedPassword = password => {
  var salt = bcrypt.genSaltSync(10);
  var hash = bcrypt.hashSync(password, salt);
  return hash;
};

// compares the hash password and entered password
exports.checkPassword = (password, hash) => {
  return bcrypt.compareSync(password, hash);
}

// returns the JWT token
exports.getToken = (data) => {
  return (token = jwt.sign(data, tokenKey));
}

// verifies token and returns data, error if token is invalid
exports.verifyToken = (token) => {
  try{
    var result = jwt.verify(token, tokenKey)
    return result;
  } catch(err) {
    return (result = {
      error: "Invalid Token"
    });
  }
}
