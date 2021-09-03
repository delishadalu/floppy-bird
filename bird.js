class Bird {

    constructor(){
   this.body = createSprite(100,height/2,100,100)
   this.body.scale=0.2

   this.body.velocityX=5
   this.body.addImage(birdImg)
   this.body.debug= true
   this.body.setCollider("rectangle",0,0,300,300  )
    }
    gravity(){
        this.body.velocityY +=1.5
    }
    moveUp(){
        this.body.velocityY =-12
    }

}