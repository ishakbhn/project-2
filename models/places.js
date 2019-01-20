
var cloudinary = require('cloudinary');

cloudinary.config({
  cloud_name: 'dhapevpz3',
  api_key: '838369681129464',
  api_secret: 'We6XJXDK-Md0GOR1ZSr17_uDua0'
});

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
                console.log(queryResult.rows);
                callback(null, queryResult.rows);
        })
    };


    let addNewPlace = (requestBody,photoName,callback) => {
        // console.log("request body ", requestBody);

        let path = `photo-uploads/${photoName}`;

        uploadPhoto(path, insertData);
        function uploadPhoto (link,callback) {
                console.log("Second Upload photo function");
                cloudinary.uploader.upload(link, (result)=>{
                console.log("Third execute cloudinary");
                console.log("Fourth value in result ", result.public_id);

                callback(result.public_id);

                });
            };


        function insertData (publicId) {
            let amenities = requestBody.amenities.join(", ");
            let queryText = 'INSERT INTO places (place_name, address, img_url, amenities, open_hours,areas_id) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *';
            let values = [requestBody.name, requestBody.address,  publicId, amenities, requestBody.open_hours, requestBody.area];
                dbPoolInstance.query(queryText, values, (error, queryResult)=>{
                    console.log(queryResult.rows);
                    callback(error,queryResult.rows);
                });
        }

        // cloudinary.uploader.upload(reqFilePath, (result) => {

        //         res.send(data);
        //     }
        // console.log("places addNewPlace ", reqFilePath);
        // console.log(requestBody);
    }

    return {
    getAllPlaces,
    filterArea,
    addNewPlace,
    };
};