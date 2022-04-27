var canvas, backgroundImage;
var questions;
var question1img, question2img, question3, question4img;



function preload(){
    backgroundImage= loadImage("images/background.jpg");
    bg= createSprite();
bg.addImage(backgroundImage);

 question1img= loadImage("images/question1.jpeg");
 question2img= loadImage("images/question2.jpeg");
 question3img= loadImage("images/question3.jpeg");
 question4img= loadImage("images/question4.jpeg");




    questions= new Questions();
    questions.display();

}
function setup(){
    var canvas = createCanvas(1200,700);
    

    
    
  //  ground = new Ground(600,20,1200,20);
    //ground.x = ground.width/2; 

    

}

function draw(){
    
   // Engine.update(engine);
     drawSprites();
}

