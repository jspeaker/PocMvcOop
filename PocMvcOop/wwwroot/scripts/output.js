var Output = Output || {};

Output.HtmlScribe = function (domAccess) {
  if (!domAccess) return new arguments.callee($);
  if (!(this instanceof arguments.callee)) return new arguments.callee(domAccess);

  var clear = function (target) {
    domAccess(target).html("");
  };

  var setAttribute = function (element, attribute, value) {
    if (value === undefined || value === null || value === "") return;
    domAccess(element).attr(attribute, value);
  };

  var createElement = function (tag, content, id, cssClass) {
    var element = domAccess("<" + tag + ">" + content + "</" + tag + ">");
    setAttribute(element, "id", id);
    setAttribute(element, "class", cssClass);
    return element;
  };

  var inscribe = function (target, tag, id, cssClass, content) {
    domAccess(createElement(tag, content, id, cssClass)).appendTo(target);
  };

  return {
    clear: clear,
    inscribe: inscribe
  };
};

Output.Archivist = function (domAccess) {
  if (!domAccess) return new arguments.callee($);
  if (!(this instanceof arguments.callee)) return new arguments.callee(domAccess);

  var cache = function (target, key, value) {
    if (!target || !key || value === null || value === undefined) return;

    domAccess(target).data(key, value);
  };

  return {
    cache: cache
  };
};