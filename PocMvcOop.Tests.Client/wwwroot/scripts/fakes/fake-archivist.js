Output.FakeArchivist = function () {
  // ReSharper disable CallerCalleeUsing
  if (!(this instanceof arguments.callee)) return new arguments.callee();
  // ReSharper restore CallerCalleeUsing

  var cacheData = [];

  var cache = function (target, key, value) {
    cacheData.push({ target: target, key: key, value: value });
  };

  return {
    cache: cache,
    cacheData: function (data) {
      if (data) cacheData = data;
      return cacheData;
    }
  };
};
