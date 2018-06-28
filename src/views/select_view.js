const PubSub = require('../helpers/pub_sub.js');

const SelectView = function (selectElement) {
  this.element = selectElement;
};

SelectView.prototype.bindEvents = function () {


};

SelectView.prototype.getNames = function () {
PubSub.publish('SelectView:get-names')
};

module.exports = SelectView;
