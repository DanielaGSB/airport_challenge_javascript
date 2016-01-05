function Weather() {
  this.stormLevel = Math.random();
}

Weather.prototype.stormy = function() {
  if(this.stormLevel >= 0.8);{
    return(true);
}
};
