const SelectView = require('./views/select_view.js');
const DetailView = require('./views/detail_view.js')
const Munros = require('./models/munros.js');

document.addEventListener('DOMContentLoaded', () => {
  const selectElement = document.querySelector('#scottish-munros')
  const selectView = new SelectView(selectElement);
  selectView.bindEvents();

  const munros = new Munros();
  munros.bindEvents();

  const detailElement = document.querySelector('#munro-detail')
  const detailView = new DetailView(detailElement);
  detailView.bindEvents();

  selectView.getNames();

});
