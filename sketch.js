var balloon,balloonImage1,balloonImage2;

var database, height



function preload(){
   bg =loadImage("cityImage.png");
   balloonImage1=loadAnimation("hotairballoon1.png");
   balloonImage2=loadAnimation("hotairballoon1.png","hotairballoon1.png",
   "hotairballoon1.png","hotairballoon2.png","hotairballoon2.png",
   "hotairballoon2.png","hotairballoon3.png","hotairballoon3.png","hotairballoon3.png");
  }


function setup() {
  database=firebase.database();
  createCanvas(1500,700);

  balloon=createSprite(250,450,150,150);
  balloon.addAnimation("hotAirBalloon",balloonImage1);
  balloon.scale=0.5;
  
  var balloon=database.ref('balloon/height')
  balloon.on("value", readHeight,showError)

  textSize(20); 
}

function readHeight(data){
    height=data.val();
    balloon.x=height.x;
    balloon.y=height.y
}

function updateHeight(x,y){
    database.ref('balloon/height').set({
     'x':height.x+x,
     'y':height.y+y
        })
        }


function showError(){
    console.log("error in witing to the database");
}


function draw() {
  background(bg);

  if(keyDown(LEFT_ARROW)){
   
    updateHeight(-10,0);
  }
  else if(keyDown(RIGHT_ARROW)){

    updateHeight(1,0);
  }
  else if(keyDown(UP_ARROW)){

    updateHeight(0,-1);
  
   }
  else if(keyDown(DOWN_ARROW)){

    updateHeight(0,+1);
  }


  drawSprites();
  fill(0);
  stroke("white");
  textSize(25);
  text("**Use arrow keys to move Hot Air Balloon!",40,40);
}


