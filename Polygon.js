class Polygon
{
    constructor(x,y)
    {
    var options ={
        restitution:1,
     friction:1
    }
    this.image=loadImage("Images/polygon.png")
   
    
    }
    display()
    {
       if(this.body.velocity.x>10)
       {
           var position=[this.body.position.x,this.body.position.y]
           this.image.push(position)
       }
       for(var i=0;i<this.A.lenght;i++)
       
    }
}