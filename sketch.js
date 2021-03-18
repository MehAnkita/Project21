var canvas;
var music;
var surface1,surface2,surface3,surface4;
var box;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(650,600);

    //create 4 different surfaces
    surface1=createSprite(90,570,150,20);
    surface1.shapeColor="orange";
    surface2=createSprite(250,570,150,20);
    surface2.shapeColor="yellow";
    surface3=createSprite(405,570,150,20);
    surface3.shapeColor="blue";
    surface4=createSprite(560,570,150,20);
    surface4.shapeColor="green";
    
    //create box sprite and give velocity
    box=createSprite(100,20,20,20);
    box.shapeColor="white";
    box.velocityX=3;
    box.velocityY=5;

}

function draw() {
    background(0);
    //create edgeSprite
   edges=createEdgeSprites();
    box.bounceOff(edges);

    
  
    //add condition to check if box touching surface and make it box
    if(boxTouching(surface1))
    {
        
        box.shapeColor="orange";
        box.bounceOff(surface1);
        music.stop();
   
     }

    if(boxTouching(surface2)){
     
        box.shapeColor="yellow";
        box.bounceOff(surface2);
        music.stop();
    }
    if(boxTouching(surface3)){
       
        box.shapeColor="blue";
        box.bounceOff(surface3);
        music.play();
   
    
    }
    
    if(boxTouching(surface4))
    {
        
        box.shapeColor="green";
        box.bounceOff(surface4);
        box.velocityX=0;
        box.velocityY=0;
        music.stop();
    }
    
    drawSprites();
  
}
function boxTouching(surface)
{
    if(surface.y - box.y < surface.height/2 + box.height/2)
    {
        console.log("hello");
        
    return true;
    }
    else 
    {
        
        return false;
    }

}


