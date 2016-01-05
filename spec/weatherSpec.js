describe("Weather", function() {
  var weather;

  beforeEach(function() {
    weather = new Weather();
    math = {
      random: function() {
      }
    };
  });

  it("could be stormy", function() {
    spyOn(math, "random").and.returnValue(0.9);
    expect(weather.stormy()).toEqual(true);
  });

});
