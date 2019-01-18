module.exports = (db) => {

    // controller for /robots
    let index = (request, response)=>{
        // run this function when the query is done
        let doneQuery = (places) =>{
        response.render('places/home',{all:places});
        };
        db.places.getAllPlaces(doneQuery);
    };

    let filter = (request,response)=> {

        // db.places.filterArea(request.body, (error,queryResult)=>{
        //     if (error) {
        //         console.log("error", error);
        //     } else {
        //         console.log("Okay filtered!");

                response.send(request.body);
        //     }
        // })



    };

    return {
        index,
        filter,
    };

};