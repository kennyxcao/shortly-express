const models = require('../models');
const Promise = require('bluebird');

module.exports.createSession = (req, res, next) => {
  console.log(req.headers);
  //console.log('CREATE SESSION');
  // Promise.resolve(req.cookies.shortlyid)
  //   .then((hash) => {
  //     if (hash === undefined) {
  //       throw hash;
  //     }
  //     console.log(cookie);
  //   })
  //   .catch(() => {
  //     console.log('********* Creating New Session ************');
  //     console.log(models.Sessions.create());
  //   });

  console.log(models.Sessions.get());
};

/************************************************************/
// Add additional authentication middleware functions below
/************************************************************/

