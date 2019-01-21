
var cloudinary = require('cloudinary');

cloudinary.config({
  cloud_name: 'dhapevpz3',
  api_key: '838369681129464',
  api_secret: 'We6XJXDK-Md0GOR1ZSr17_uDua0'
});

module.exports = (dbPoolInstance) => {

    let getAllPlaces = (completed) =>{
        let queryText = 'SELECT * FROM places ORDER BY place_name ASC';

        dbPoolInstance.query(queryText, (error, queryResult )=>{
        // console.log( "done with query", queryResult.rows );
        completed(queryResult.rows);
          // return queryResult.rows;
        });
    }


    let filterArea = (query,callback)=> {


        let filterOption = Object.keys(query);
        let areaId = null;
        let amenities = null;
        console.log("Object.keys query ", filterOption);
        console.log("length", filterOption.length);
        console.log("amenities ", query.amenities);
        // console.log("amenities 0 and 1",query.amenities[0], query.amenities[1])

            if (filterOption.length > 1) {
                if(query.amenities.length > 1) {
                    areaId = query.area;
                    amenities = query.amenities.join(", ");
                    console.log(amenities);

                let queryText = `SELECT areas.area, places.place_name,places.img_url, places.address, places.amenities, places.open_hours FROM places INNER JOIN areas ON (areas.id = places.areas_id) WHERE places.areas_id = ${areaId} AND places.amenities LIKE '%${amenities}%'`;
                    console.log(queryText);

                    doQuery(queryText);
                }
            } else {
                if (query.area != "select area") {
                    areaId = query.area;
                    console.log("value of areaId",areaId);


                    // console.log("areaId and amenities ", areaId, amenities);

                    let queryText = `SELECT areas.area, places.place_name,places.img_url, places.address, places.amenities, places.open_hours FROM places INNER JOIN areas ON (areas.id = places.areas_id) WHERE places.areas_id = ${areaId}` ;

                    doQuery(queryText);
                }

            }

                function doQuery (queryText) {
                    dbPoolInstance.query(queryText, (error,queryResult)=>{
                            console.log(queryResult.rows);
                            callback(null, queryResult.rows);
                    });
                }

    };


    let addNewPlace = (requestBody,photoName,callback) => {
        // console.log("request body ", requestBody);
        let path = `photo-uploads/${photoName}`;

        uploadPhoto(path, insertData);

            function uploadPhoto (link,callback) {
                    // console.log("Second Upload photo function");
                    cloudinary.uploader.upload(link, (result)=>{
                    // console.log("Third execute cloudinary");
                    // console.log("Fourth value in result ", result.public_id);
                        callback(result.public_id);
                    });
            };


            function insertData (publicId) {
                let amenities = requestBody.amenities.join(", ");
                let queryText = 'INSERT INTO places (place_name, address, img_url, amenities, open_hours,areas_id) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *';
                let values = [requestBody.name, requestBody.address,  publicId, amenities, requestBody.open_hours, requestBody.area];
                    dbPoolInstance.query(queryText, values, (error, queryResult)=>{
                        // console.log(queryResult.rows);
                        callback(error,queryResult.rows);
                    });
            }
    }

    let deleteCurrent = (params,callback) => {
        let queryText = `DELETE FROM places WHERE id = ${params}`
            dbPoolInstance.query(queryText,(error,queryResult)=>{
                if (error) {
                    callback(error, null);
                } else {
                    console.log("Delete Okay!");
                    callback(null,null);
                }
            });
    }

    return {
    getAllPlaces,
    filterArea,
    addNewPlace,
    deleteCurrent,
    };
};