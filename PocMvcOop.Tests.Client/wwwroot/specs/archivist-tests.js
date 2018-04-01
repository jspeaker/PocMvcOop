// ReSharper disable UseOfImplicitGlobalInFunctionScope
// ReSharper disable PossiblyUnassignedProperty

/// <reference path="../dependencies/jquery-3.3.1.min.js" />

/// <reference path="../../../PocMvcOop/wwwroot/scripts/output.js" />
/// <reference path="../../../PocMvcOop/wwwroot/scripts/carlot.js" />

/// <reference path="../scripts/fakes/fake-scribe.js" />
/// <reference path="../scripts/fakes/fake-archivist.js" />
/// <reference path="../scripts/fakes/intl-polyfill.js" />

describe("GivenArchivistAndData",
  function () {
    var scribe = new Output.HtmlScribe($);
    var archivist = new Output.Archivist($);

    afterEach(function () {
      $("#child").remove();
    });

    describe("WithData", function() {
      var data = { Surname: 'Hill', Firstname: 'Hank' };

      it("WhenAskingToCache_ThenItShouldCacheTheObject",
        function () {
          scribe.inscribe("body", "div", "child", "", "");

          archivist.cache("#child", "the-data", data);

          expect($("#child").data("the-data").Surname).toEqual("Hill");
          expect($("#child").data("the-data").Firstname).toEqual("Hank");
        });
    });

    describe("WithoutData", function() {
      var data = null;

      it("WhenAskingToCache_ThenItShouldNotCacheAnObject",
        function () {
          scribe.inscribe("body", "div", "child", "", "");

          archivist.cache("#child", "the-data", data);

          expect($("#child").data("the-data")).toBe(undefined);
        });
    });
  });

// ReSharper restore PossiblyUnassignedProperty
// ReSharper restore UseOfImplicitGlobalInFunctionScope