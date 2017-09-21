const _ = require('lodash');

const parseData = data => {
  return _.reduce(data, (acc, value, index) => {
    var tuple = value.split('=');
    acc[tuple[0].trim()] = tuple[1].trim();
    return acc;
  }, {});
};

const parseCookies = (req, res, next) => {
  if (req.headers.cookie) {
    var cookies = req.headers.cookie.split(';');    
    req.cookies = parseData(cookies);
  } else {
    req.cookies = {};
  }
  next();
};

module.exports = parseCookies;

