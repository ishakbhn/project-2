module.exports = (db) => {

    let createForm = (request, response) => {
        response.render('users/register');
    };

    let registerUser = (request, response) => {
        db.users.newUser(request.body, (error,queryResult) =>{
            if (error) {
                console.log("error", error);
            } else {
                console.log("Okay!");
                response.redirect('/places')
            }
        });
    };

    return {
        createForm,
        registerUser,
    };
};




// let index = (request, response)=>{

//         // run this function when the query is done
//         let doneWithQuery = (places) =>{

//         response.render('home',{all:places});
//         };

//         db.places.newUser(doneWithQuery);

//     };