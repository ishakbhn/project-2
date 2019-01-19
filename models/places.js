module.exports = (dbPoolInstance) => {

    let getAllPlaces = (completed) =>{
        let queryText = 'SELECT * FROM places';

        dbPoolInstance.query(queryText, (error, queryResult )=>{
        // console.log( "done with query", queryResult.rows );
        completed(queryResult.rows);
          // return queryResult.rows;
        });
    }

    // let getAllPlaces = (completed) =>{
    //     let queryText = 'SELECT * FROM places';

    //     dbPoolInstance.query(queryText, (error, queryResult )=>{
    //     // console.log( "done with query", queryResult.rows );
    //     completed(queryResult.rows);
    //       // return queryResult.rows;
    //     });
    // }

    let filterArea = (query,callback)=> {
        // console.log(query);
        // let numOfObj = Object.keys(query);
        // console.log("numOfObj length =", numOfObj.length);

        // console.log("okayyy!");

        let numFilter = Object.keys(query);
        let areaId = null;
        let amenityId = null;


            if (numFilter.length > 1) {
                areaId = query.area;
                amenityId = query.amenities;
             } else {
                areaId = query.area;
                amenityId = query.amenities;
             }

        // console.log("container of areaId", areaId);
        // console.log("container of amenityId", amenityId);

        let queryText = 'SELECT areas.area, places.place_name,places.img_url, places.address, places.amenities, places.open_hours FROM places INNER JOIN areas ON (areas.id = places.areas_id) WHERE places.areas_id =' + areaId;

        dbPoolInstance.query(queryText, (error,queryResult)=>{
                callback(null, queryResult.rows[0]);
        })
    };

    return {
    getAllPlaces,
    filterArea,
    };
};