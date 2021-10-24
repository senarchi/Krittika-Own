var human,humanImg,zombie,zombieImg;
var ground,groundImg;
var coin, coinImg;
var rock, rockImg;

function preload(){
    humanImg = loadImage("human(nor).png");
    zombieImg = loadImage("zombie.png");
    coinImg = loadImage("coin.jpg");
    rockImg = loadImage("rock.jpg");
    groundImg = loadImage("background.jpg");
    
}

function setup(){
    canvas = createCanvas(800,800);

    //human = createSprite(100,100,40,40);
    zombie = createSprite(100,100,40,40);
    zombie.addImage(zombieImg);
    zombie.scale = 0.2;

    ground = createSprite(400,400);
    ground.addImage(groundImg);
    ground.scale = 1.9;
    ground.velocityY = -4;
    //rock = createSprite(100,100,40,40);
    //coin = createSprite(100,100,40,40);
    
}

function draw(){
    background(0);
    //image(backgroundImg,0,0,800,800);
     
    if(keyDown(LEFT_ARROW)){
        zombie.velocityX = -2;
    }

    if(keyDown(RIGHT_ARROW)){
        zombie.velocityX = 2;
    }

    if(ground.y <190){
        ground.y =height/2;
        }

        zombie.depth==ground.depth;
        zombie.depth++;

    drawSprites();
}
