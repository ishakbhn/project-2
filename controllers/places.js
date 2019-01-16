module.exports = (db) => {

    // controller for /robots
    let index = (request, response)=>{

        // run this function when the query is done
        let doneWithQuery = (places) =>{

        response.render('home',{all:places});
        };

        db.places.getAllPlaces(doneWithQuery);

    };


    return {
        index,
    };

};