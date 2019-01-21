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
     app.post('/places/new',places.addPlace);
     app.get('/users/login', users.logForm);
     app.post('/users/login', users.checkLogin);
     app.get('/users/new', users.createForm);
     app.post('/users/new',users.registerUser);
     app.get('/places/search', places.filter);
     // app.get('/places/:id/edit', places.editForm);
     app.delete('/places/delete/:id', places.deletePlace);


};