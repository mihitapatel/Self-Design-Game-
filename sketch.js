var sea, fish, coin;
var score;

function preload() {
    seaImg = loadImage("assets/sea.jpg");
    fishImg = loadImage("assets/fish.png");
    coinImg = loadImage("assets/coin.png");
}

function setup() {

    createCanvas(400, 400);

    score = 0;

    sea = createSprite(200, 200);
    sea.addImage(seaImg);

    fish = createSprite(100, 150);
    fish.addImage(fishImg);
    fish.scale = 0.3;

    
}

//createEdgeSprites();


function draw() {

    background("white");


    if (keyDown("up")) {
        fish.y = fish.y - 5;
    }

    else if (keyDown("down")) {
        fish.y = fish.y + 5;
    }

    else if (keyDown("right")) {
        fish.x = fish.x + 5;
    }

    else if (keyDown("left"))
        fish.x = fish.x - 5;

    if (fish.isTouching(coin));
    {
        score = score + 1;
        coin.x = randomNumber(0, 400);
        coin.y = randomNumber(0, 400);
    }

    fill("black");
    textSize(20);
    text(" Score " + score, 30, 40);

    spawnCoins();
    
    drawSprites();
}

function spawnCoins(){
if(frameCount % 60 === 0){
    coin = createSprite(400, 10);
    coins.velocityX = -3;
    coin.addImage(coinImg);
    coin.scale = 0.5;
}
}

































































































