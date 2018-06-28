const PubSub = require('../helpers/pub_sub.js');
const createElement = require('../helpers/createElement.js');

const DetailView = function (container){
  this.container = container
};

DetailView.prototype.bindEvents = function () {
  PubSub.subscribe('Munros:munro-details', (event) => {
    const munroDetails = event.detail;
    this.populate(munroDetails);
  });
};

DetailView.prototype.populate = function (munroDetails) {
  const {name, meaning, height} = munroDetails;

  this.container.appendChild(createElement('h2', name))
  const ul = document.createElement('ul')
  ul.appendChild(createElement('li', meaning))
  ul.appendChild(createElement('li', height))

  this.container.appendChild(ul)
};

module.exports = DetailView;
