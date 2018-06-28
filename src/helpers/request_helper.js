const RequestHelper = function (url) {
  this.url = url
}

RequestHelper.prototype.get = function (onComplete) {
  fetch(this.url)
    .then(result => result.json())
    .then(json => onComplete(json))
    .catch((error) => console.error(error))
};

module.exports = RequestHelper;
