const PubSub = require('../helpers/pub_sub.js');

const SelectView = function (selectElement) {
  this.element = selectElement;
};

SelectView.prototype.bindEvents = function () {
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

function createElement(elementType, text) {
  const element = document.createElement(elementType)
  element.id = text
  element.textContent = text
  return element;
};

module.exports = SelectView;
