const _ = require('lodash');

const parseData = data => {
  return _.reduce(data, (acc, value, index) => {
    var tuple = value.split('=');
    acc[tuple[0].trim()] = tuple[1].trim();
    return acc;
  }, {});
};

const parseCookies = (req, res, next) => {
  //console.log(req.headers.cookie);
  if (req.headers.cookie) {
    var cookies = req.headers.cookie.split(';');    
    req.cookies = parseData(cookies);
    //console.log(parseData(cookies));
  }
  next();
};

module.exports = parseCookies;

