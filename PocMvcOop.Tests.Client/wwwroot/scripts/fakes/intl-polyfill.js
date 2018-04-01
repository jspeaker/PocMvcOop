var Intl = Intl || {};

Intl.NumberFormat = function () {
  var format = function (value) {
    return value.toLocaleString();
  };

  return {
    format: format
  };
};