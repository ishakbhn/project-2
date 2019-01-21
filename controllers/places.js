
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
                        res.render('places/home',{all:queryResult});
                    }
            }
        });
    };

    let createPlace = (req,res)=> {
        res.render('places/add-place')
    };



    let addPlace = (req,res)=> {
        let photo = req.files.img_url;

        upload(photo, doneQuery);

        function upload (data,next) {
             data.mv(`photo-uploads/${data.name}`, (err)=>{
                if (err) {
                    console.log("ERROR",err);
                } else {
                    console.log("this first upload okay!");
                }
            });
             next()
        }

        function doneQuery () {
            db.places.addNewPlace (req.body,photo.name,(err,queryResult)=>{
                console.log("Result of query ", queryResult);

                res.redirect("/places");
            });
        }
    };

    return {
        index,
        filter,
        createPlace,
        addPlace,
    };
};