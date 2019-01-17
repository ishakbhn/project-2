module.exports = (app, db) => {

  const places = require('./controllers/places.js') (db);

  app.get('/places', places.index);


  /*
   *  =========================================
   *  Routes for one controller
   *  =========================================
   */

};