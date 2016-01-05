function Airport() {
this.planes = [];
}
Airport.prototype.instruct_land = function(plane) {
  plane.land();
  this.planes.push(plane);
};

Airport.prototype.instruct_takeoff = function(plane) {
  plane.takeoff();
  this.planes.splice(this.planesIndex(plane), 1);
};

Airport.prototype.planesIndex = function(plane) {
  return this.planes.indexOf(plane);
};
