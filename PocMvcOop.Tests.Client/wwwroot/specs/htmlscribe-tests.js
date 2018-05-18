// ReSharper disable UseOfImplicitGlobalInFunctionScope
// ReSharper disable PossiblyUnassignedProperty

/// <reference path="../dependencies/jquery-3.3.1.min.js" />

/// <reference path="../../../PocMvcOop/wwwroot/scripts/output.js" />
/// <reference path="../../../PocMvcOop/wwwroot/scripts/carlot.js" />

/// <reference path="../scripts/fakes/fake-scribe.js" />
/// <reference path="../scripts/fakes/fake-archivist.js" />
/// <reference path="../scripts/fakes/intl-polyfill.js" />

describe("GivenScribeAndHtml",
  function () {
    var scribe = new Output.HtmlScribe($);

    afterEach(function() {
      $("#child").remove();
    });

    it("WhenAskingToInscribe_ThenItShouldWriteToTheDom",
      function () {
        scribe.inscribe("body", "p", "child", "some-class", "Strickland Propane");
        expect($("#child").length).toEqual(1);
      });

    it("WhenAskingToClear_ThenItShouldRemoveHtml",
      function() {
        scribe.inscribe("body", "div", "child", "", "");
        scribe.inscribe("#child", "p", "grandchild", "", "Strickland Propane");

        expect($("#grandchild").length).toEqual(1);

        scribe.clear("#child");

        expect($("#grandchild").length).toEqual(0);
      });
  });

// ReSharper restore PossiblyUnassignedProperty
// ReSharper restore UseOfImplicitGlobalInFunctionScope