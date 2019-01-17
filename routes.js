module.exports = (app, db) => {

  const places = require('./controllers/places.js') (db);
  const users = require('./controllers/users.js') (db);


  /*
   *  =========================================
   *  Routes for one controller
   *  =========================================
   */

     app.get('/places', places.index);
     app.get('/users/new', users.createForm);
     // app.post('/users/new',users.registerUser);
};