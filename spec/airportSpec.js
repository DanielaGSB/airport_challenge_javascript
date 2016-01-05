// getScript("plane.js")

describe("Airport", function() {
  var airport;
  var plane;

  beforeEach(function() {
    airport = new Airport();
    plane = {
      land: function() {},
      takeoff: function(){}
    };
    weather = {
      stormy: function() {},
    };
  });

  describe("Plane lands", function() {
    it("should confirm that plane has landed", function() {
      airport.instruct_land(plane);
      expect(airport.planes).toContain(plane);
    });
    // it("should allow plane to land if not stormy", function() {
    //   spyOn(weather, "stormy").and.returnValue(false);
    //   airport.instruct_land(plane);
    //   expect(airport.planes).toContain(plane);
    // });
  });

  describe("Plane takes off", function() {
    it("should confirm a plane has taken off", function() {
      airport.instruct_land(plane);
      airport.instruct_takeoff(plane);
      expect(airport.planes).not.toContain(plane);
    });
  });
});
