function createElement(elementType, text) {
  const element = document.createElement(elementType)
  element.id = text
  element.textContent = text
  return element;
};

module.exports = createElement;
