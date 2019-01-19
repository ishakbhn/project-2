const sha256 = require('js-sha256');
// const cloudinary = require

module.exports = (dbPoolInstance) => {

  let hash = (pwd) => {
    const salt = "predatory grandma";
    return sha256(pwd + salt);
  }

  let newUser = (body,callback) =>{
      let queryText = 'INSERT INTO users (name, username, password) VALUES ($1, $2, $3)';
      let values = [body.name, body.username, hash(body.password)];

      dbPoolInstance.query(queryText, values, (error, queryResult )=>{
            callback(error,queryResult);
      });
  }

  return {
    newUser,
  };
};