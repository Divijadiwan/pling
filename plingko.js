class plingko
{
    constructor(x,y,r)
    {
        var options = {
            isStatic: true
        }
        this.body = Bodies.circle(x,y,r,options);
        this.radius = r;
        World.add(world, this.body);
      }
      display(){
        var pos =this.body.position;
        rectMode(CENTER);
        fill("white");
        circle(pos.x, pos.y, this.radius);
      }
    };
