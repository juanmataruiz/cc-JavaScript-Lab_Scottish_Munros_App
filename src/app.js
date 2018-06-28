const SelectView = require('./views/select_view.js');

document.addEventListener('DOMContentLoaded', () => {
  const selectElement = document.querySelector('#scottish-munros')
  const selectView = new SelectView(selectElement);
  SelectView.bindEvents();
  selectView.getNames();

});
