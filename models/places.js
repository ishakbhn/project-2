module.exports = (dbPoolInstance) => {

  let getAllPlaces = (completed) =>{
      let queryText = 'SELECT * FROM places';

      dbPoolInstance.query(queryText, (error, queryResult )=>{
        console.log( "done with query", queryResult.rows );

        completed(queryResult.rows);
          // return queryResult.rows;
      });

  }

  return {
    getAllPlaces,
  };
};