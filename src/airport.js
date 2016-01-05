function Airport() {
this.planes = [];
}
Airport.prototype.instruct_land = function(plane) {
  this.planes.push(plane);
};
