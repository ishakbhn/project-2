module.exports = (db) => {


    let index = (req, res)=>{
        // run this function when the query is done
        let doneQuery = (places) =>{
        res.render('places/home',{all:places});
        };
        db.places.getAllPlaces(doneQuery);
    };


    let filter = (req,res)=> {
        db.places.filterArea(req.query, (error,queryResult)=>{

            if (error) {
                console.log("error at controller", error);
            } else {

                if (queryResult === null) {
                    console.log("error")
                } else {
                    //response.send(queryResult);
                    let result = [queryResult];
                     res.render('places/home',{all:result});

                }
            }
        });
    };

// res.render('places/home',{all:queryResult});

    let createPlace = (req,res)=> {

        res.send("createPlace is working, so need to create form");

    };


    return {
        index,
        filter,
        createPlace,
    };

};