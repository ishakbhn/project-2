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

    let createPlace = (req,res)=> {
        res.render('places/add-place')
    };

    let addPlace = (req,res)=> {

        db.places.addNewPlace (req.body, (error, queryResult)=>{
            if (error) {
                console.log("got error ", error);
            } else {
                res.redirect('/places');
            }
        })
    };


    return {
        index,
        filter,
        createPlace,
        addPlace,
    };

};