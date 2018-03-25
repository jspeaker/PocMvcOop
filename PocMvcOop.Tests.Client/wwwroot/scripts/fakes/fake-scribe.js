Output.FakeScribe = function() {
  // ReSharper disable CallerCalleeUsing
  if (!(this instanceof arguments.callee)) return new arguments.callee();
  // ReSharper restore CallerCalleeUsing

  var inscriptions = [];

  var clear = function() {};
  var inscribe = function(target, tag, id, cssClass, content) {
    inscriptions.push(target + ", " + tag + ", " + id + ", " + content);
  };

  return {
    clear: clear,
    inscribe: inscribe,
    inscriptions: function() {
      return inscriptions;
    }
  };
};
