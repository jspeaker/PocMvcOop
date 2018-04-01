// ReSharper disable UseOfImplicitGlobalInFunctionScope
// ReSharper disable PossiblyUnassignedProperty

describe("GivenHtml",
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