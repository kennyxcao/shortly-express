const models = require('../models');
const Promise = require('bluebird');

module.exports.createSession = (req, res, next) => {
  Promise.resolve(req.cookies.shortlyid)
    .then((hash) => {
      if (hash === undefined) {
        return models.Sessions.create()
                .then((newEntry) => {
                  return models.Sessions.get({id: newEntry.insertId});
                });
      } 
      return models.Sessions.get({hash: hash});
    })
    .then((session) => {
      req.session = session;
      res.cookie('shortlyid', session.hash);
      next();
    })
    .catch((error) => {
      console.log('++++++++++++++ Create Session Error +++++++++++++++++++');
      req.cookies = {};
      module.exports.createSession(req, res, next);
    });
};

/************************************************************/
// Add additional authentication middleware functions below
/************************************************************/

