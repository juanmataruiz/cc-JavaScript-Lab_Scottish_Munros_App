const PubSub = require('../helpers/pub_sub.js');
const createElement = require('../helpers/createElement.js');

const DetailView = function (container){
  this.container = container
};

DetailView.prototype.bindEvents = function () {
  PubSub.subscribe('Munros:munro-details', (event) => {
    const munroDetails = event.detail;
    this.populate(munroDetails);
    console.log(munroDetails);

  });
};

DetailView.prototype.populate = function (munroDetails) {
  this.container.appendChild(createElement('h2', munroDetails.name))

  const ul = document.createElement('ul')
  for (const key in munroDetails) {
    ul.appendChild(createElement('li', `${key}: ${munroDetails[key]}`))
    this.container.appendChild(ul)
  };
};

module.exports = DetailView;
