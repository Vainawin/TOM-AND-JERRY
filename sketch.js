var bgImg;
var cat;
var mouse;
var cat1Img,cat2Img,mouse2Img,mouse1Img;

function preload() {
    //load the images here
    bgImg = loadImage("images/garden.png");
    cat1Img = loadAnimation("images/cat1.png");
    mouse1Img = loadAnimation("images/mouse1.png");
    cat2Img = loadAnimation("images/cat2.Img","images/cat3.png");
    mouse2Img = loadAnimation("images/mouse2.png","images/mouse3.png");
    cat3Img = loadAnimation("images/cat4.png");
    mouse3Img = loadAnimation("images/mouse4.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
cat = createSprite(870,600);
cat.addAnimation("catSleeping",cat1Img);
cat.scale = 0.2;

mouse = createSprite(200,600);
mouse.addAnimation("mouseStanding",mouse1Img);
mouse.scale = 0.15


}

function draw() {

    background(bgImg);
    //Write condition here to evalute if tom and jerry collide
    if(cat.x-mouse.x<(cat.width-mouse.width)/2){
    cat.velocityX = 0
    cat.addAnimation("catlastImage",cat3Img);
    cat.scale = 0.2;
    cat.x = 300;
    cat.changeAnimation("catlastImage");
    mouse.addAnimation("mouselastImage",mouse3Img);
    mouse.scale = 0.15;
    mouse.changeAnimation("mouselastImage");
    }
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
    if(keyCode === LEFT_ARROW){
    cat.velocityX = -5
    cat.addAnimation("catRunning",cat2Img);
    cat.changeAnimation("catRunning");
    mouse.addAnimation("mouseteasing",mouse2Img);
    mouse.frameDelay = 25;
    mouse.changeAnimation("mouseteasing");

    }
    

}
