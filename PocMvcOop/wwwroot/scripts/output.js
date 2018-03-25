var Output = Output || {};
Output.HtmlScribe = function (domAccess) {
  // ReSharper disable CallerCalleeUsing
  if (!(this instanceof arguments.callee)) return new arguments.callee(domAccess);
  // ReSharper restore CallerCalleeUsing

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
