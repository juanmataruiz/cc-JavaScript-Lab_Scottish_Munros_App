const PubSub = require('../helpers/pub_sub.js');
const RequestHelper = require('../helpers/request_helper.js');

const Munros = function () {
  this.munros = null;
};

Munros.prototype.bindEvents = function () {
  PubSub.subscribe('SelectView:get-names', () => {
    this.getData();
  });

  PubSub.subscribe('SelectView:get-munro-details', (event) =>{
    const munroName = event.detail;
    const foundMunroDetail = this.munros.find((munro) => {
      return munro.name === munroName;
    })
    PubSub.publish('Munros:munro-details', foundMunroDetail);
  });

};

Munros.prototype.getData = function () {
  const url = 'https://munroapi.herokuapp.com/api/munros';
  const request = new RequestHelper(url);

  request.get((munros) => {
    this.munros = munros;
    const munroNames = this.munros.map((munro) => {
      return munro.name;
    });

    PubSub.publish('Munros:munro-name', munroNames);
  });
};

module.exports = Munros;
