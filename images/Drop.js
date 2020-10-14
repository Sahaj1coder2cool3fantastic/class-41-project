class Drop {
  constructor(x, y, r) {
      var options = {
        'restitution':0.8,
        'friction':0.1,
        'density':1.0
      }
    this.x = x;
    this.y = y;
    this.r = r;

    this.body = Bodies.circle(this.x,this.y,this.r,options);

   
    }

    function update() {
    ellipse(0,0,this.r,this.r); 
    ellipseMode(CENTRE);
    }
}