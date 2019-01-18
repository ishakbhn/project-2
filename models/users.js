const sha256 = require('js-sha256');

module.exports = (dbPoolInstance) => {

  let hash = (pwd) => {
    const salt = "predatory grandma";
    return sha256(pwd + salt);
  }

  let newUser = (reqBody,callback) =>{
      let queryText = 'INSERT INTO users (name, username, password) VALUES ($1, $2, $3)';
      let values = [reqBody.name, reqBody.username, hash(reqBody.password)];

      dbPoolInstance.query(queryText, values, (error, queryResult )=>{
            callback(error,queryResult);
      });
  }

  return {
    newUser,
  };
};