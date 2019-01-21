
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
        res.render('places/add-place');
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

    let deletePlace = (req,res)=> {
        db.places.deleteCurrent(req.params.id, (err, queryResult)=>{
            if (err) {
                console.log("There is an error! ", err);
            } else {
                res.redirect("/places");
            }
        });
    };

    let editForm = (req,res)=> {
        db.places.currentPlace(req.params.id,(err,queryResult)=>{
            if (err) {
                console.log("error",err);
            } else {
                res.render('places/edit-form',queryResult);

            }
        });
    };

    let updateForm = (req,res)=> {
        console.log("params id", req.params.id);
        db.places.updatePlace(req.body, req.params.id,(err,queryResult)=>{
            if (err) {
                console.log("error at controller",err);
            } else {
                res.redirect('/places');
            }
        });
    };

    return {
        index,
        filter,
        createPlace,
        addPlace,
        deletePlace,
        editForm,
        updateForm,
    };
};