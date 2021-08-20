class rope{

	

	constructor(body1,body2,pointA,pointB,st,con)
	{
        this.pointA = pointA;
		this.pointB = pointB;
	 	 
		var options = {
         bodyA:body1,
		 bodyB:body2,
		 pointB:{x:this.pointA,y:this.pointB}
		}
	 	
	 //create rope constraint here
       con = Matter.Constraint.create({
         pointA: {x:pointA,y:pointB},
		 bodyA:body1,
		 bodyB:body2,
		 length:100,
		 stiffness:st
	   })

	   World.add(world,con)
       
	   
	   
       
    }



    //create display() here 
   
   
    
}
