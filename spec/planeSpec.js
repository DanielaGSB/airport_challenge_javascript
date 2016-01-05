describe("Plane", function() {
  var airport;
  var plane;

  beforeEach(function() {
    plane = new Plane();
    airport = {
      instruct_land: function(plane) {
        plane.isFlying = false;
      },
      instruct_takeoff: function(plane) {
        plane.isFlying = true;
      }
    };
  });

  describe("Plane lands", function() {
    it("should set flying to false", function() {
      airport.instruct_land(plane);
      expect(plane.isFlying).toEqual(false);
    });
  });

  describe("Plane takesoff", function() {
    it("should set flying to true", function(){
      airport.instruct_land(plane);
      airport.instruct_takeoff(plane);
      expect(plane.isFlying).toEqual(true);
    });
  });
});
