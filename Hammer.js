class Hammer{
    constructor(x,y){
        var options = {
            'restitution': 1.5,
            'friction':1.5,
            'density':3,
        }
        this.body=Bodies.rectangle(x,y,160,50,options);
        this.width=160;
        this.height=60;

        World . add(world,this.body);
    }
    display (){
        var pos = this.body.position;
        pos.x=mouseX;
        pos.y=mouseY;
        var angle=this.body.angle;
        push ();
        translate (pos.x,pos.y);
        rotate (angle);
        strokeWeight (5);
        stroke ("black");
        fill ("red");
        rectMode (CENTER);
        rect(0,0,this.width,this.height);
        pop ();
    }
}