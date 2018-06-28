const PubSub = require('../helpers/pub_sub.js');

const Munros = function () {};

Munros.prototype.bindEvents = function () {
  PubSub.subscribe('SelectView:get-names', () => {
    console.log('subscribe.bindEvents');

  });
};

Munros.prototype.getData = function () {
  const url = 'https://munroapi.herokuapp.com/api/munros';


};
module.exports = Munros;
