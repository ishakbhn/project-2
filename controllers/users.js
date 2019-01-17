module.exports = (db) => {

    let createForm = (request, response) => {
        response.render('users/register');
    };

    return {
        createForm,
    };
};




// let index = (request, response)=>{

//         // run this function when the query is done
//         let doneWithQuery = (places) =>{

//         response.render('home',{all:places});
//         };

//         db.places.newUser(doneWithQuery);

//     };