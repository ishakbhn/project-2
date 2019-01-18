module.exports = (dbPoolInstance) => {

    let getAllPlaces = (completed) =>{
        let queryText = 'SELECT * FROM places';

        dbPoolInstance.query(queryText, (error, queryResult )=>{
        // console.log( "done with query", queryResult.rows );
        completed(queryResult.rows);
          // return queryResult.rows;
        });
    }

    // let filterArea = (callback)=> {
    //     let area = ;
    //     let queryText = 'SELECT areas.area, places.place_name, places.address, places.amenities, places.open_hours FROM places INNER JOIN areas ON (areas.id = places.areas_id) WHERE places.areas_id =' +
    // };

    return {
    getAllPlaces,
    // filterArea,
    };
};