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
            if (error){
                callback(error);
            } else {
                callback(null, queryResult.rows);
            }
        });
    }

    let logIn = (body,callback) => {
        //get everything from users table
        let queryText = 'SELECT * FROM users';

        dbPoolInstance.query(queryText, (error, queryResult)=>{
            if (error){
                console.log(error, null);
                callback("error at logIn dbPoolInstance ", error);
            } else {
                console.log(queryResult.rows);
                callback(null,queryResult.rows);
            }
        });
    }


  return {
    hash,
    newUser,
    logIn,
    };
};