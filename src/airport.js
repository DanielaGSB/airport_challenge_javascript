function Airport() {
this.planes = [];
}
Airport.prototype.instruct_land = function(plane) {
  plane.land();
  if(weather.stormy() === false);{
    this.planes.push(plane);
}
  if(weather.stormy() === true) {
    throw("plane cannot land in stormy weather");
  }
};

Airport.prototype.instruct_takeoff = function(plane) {
  plane.takeoff();
  this.planes.splice(this.planesIndex(plane), 1);
};

Airport.prototype.planesIndex = function(plane) {
  return this.planes.indexOf(plane);
};
