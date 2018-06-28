const PubSub = require('../helpers/pub_sub.js');
const createElement = require('../helpers/createElement.js');

const SelectView = function (selectElement) {
  this.element = selectElement;
};

SelectView.prototype.bindEvents = function () {
  this.element.addEventListener('change', (event) =>{
    const munroName = event.target.value;
    PubSub.publish('SelectView:get-munro-details', munroName);
  });

  PubSub.subscribe('Munros:munro-name', (event) => {
    const munroNames = event.detail;
    this.populate(munroNames);
  });

};

SelectView.prototype.getNames = function () {
  PubSub.publish('SelectView:get-names')
};

SelectView.prototype.populate = function (munroNames) {
  for (const munroName of munroNames) {
    this.element.appendChild(createElement('option', munroName));
  }

};

module.exports = SelectView;
