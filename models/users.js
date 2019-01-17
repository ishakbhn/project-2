module.exports = (dbPoolInstance) => {

  let newUser = (completed) =>{
      let queryText = 'INSERT INTO users (name, username, password) VALUES ($1, $2, $3)';
      let values = [body.request.name, body.request.username, body.request.password];

      dbPoolInstance.query(queryText, values, (error, queryResult )=>{
        if (err) {
            console.log("error in newUser, user.js models", error);
        } else {
            console.log("okay! insert in name table");
        }
      });

  }

  return {
    newUser,
  };
};