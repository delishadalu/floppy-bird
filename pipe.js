class Pipe {

    constructor(x){
      var y= random(height-100, 200)
   this.body = createSprite(x,y-50,100,100)
   this.body2=createSprite(x,y,100,100)
   this.body.scale=5
   this.body2.scale=5

   this.body.addImage(pipeImg)
   this.body2.addImage(pipe2Img)
   this.body.debug=true
   this.body2.debug=true
  
   this.body.setCollider("rectangle",0,-90,30,100  )
   this.body2.setCollider("rectangle",0,80,30,100  )
    }


}