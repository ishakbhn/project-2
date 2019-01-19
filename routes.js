module.exports = (app, db) => {

  const places = require('./controllers/places.js') (db);
  const users = require('./controllers/users.js') (db);


  /*
   *  =========================================
   *  Routes for one controller
   *  =========================================
   */

     app.get('/places', places.index);
     app.get('/places/new', places.createPlace);
     app.get('/users/new', users.createForm);
     app.get('/places/search', places.filter);
     // app.get('users/login',users.login);
     app.post('/users/new',users.registerUser);

};