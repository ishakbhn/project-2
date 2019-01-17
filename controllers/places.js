module.exports = (db) => {

    // controller for /robots
    let index = (request, response)=>{

        // run this function when the query is done
        let doneWithQuery = (places) =>{

        response.render('places/home',{all:places});
        };

        db.places.getAllPlaces(doneWithQuery);

    };


    return {
        index,
    };

};