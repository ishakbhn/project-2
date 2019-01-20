module.exports = (db) => {

    let createForm = (req, res) => {
        res.render('users/register');
    };

    let registerUser = (req, res) => {
        db.users.newUser(req.body, (error,queryResult) =>{
            if (error) {
                console.log("error", error);
            } else {
                console.log("Okay registered User!");
                res.redirect('/places')
            }
        });
    };

    let logIn = (req,res) => {
        res.render('users/login');
    }

    return {
        createForm,
        registerUser,
        logIn,
    };
};




// let index = (request, response)=>{

//         // run this function when the query is done
//         let doneWithQuery = (places) =>{

//         response.render('home',{all:places});
//         };

//         db.places.newUser(doneWithQuery);

//     };