module.exports = (db) => {

    let createForm = (request, response) => {
        response.render('users/register');
    };

    let registerUser = (request, response) => {

        let completeInsert = (data) => {
            respond.redirect('place/home');
        }
        db.users.newUser(completeInsert);
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