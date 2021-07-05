
//rain class. MAth.random is just making the raindrops have variation. 
class Rain {
    constructor() {
        this.x = Math.random() * 400;
        this.y = Math.random() * -3000; 
        this.radius = Math.random() * 10;
        this.color = [161, 198, 204];
        this.speed = Math.random() * 4;

    }

    //update method sets up the raindrop to have movement, and sets up the creation of the raindrop. 
    update() {
        this.y = this.y + this.speed;
        fill(this.color);
        circle(this.x, this.y, this.radius);


        //this if statement makes it so when it hits the ground it runs the hit function in the ground class, and 
        //will reset the raindrop. 
        if (this.y >= 391) {

            this.x = Math.random() * 400;
            this.y = Math.random() * -3000; 
            DaGround.hit();
          }

    }


}

//array of raindrops in for loop to make 200 raindrops.
let DaRain = [];
for(let i = 0; i < 200; i++){
    DaRain[i] =  new Rain();
}


//ground class sets up the floor
class Ground {
    constructor() {
        this.x = 0;
        this.y = 391;
        this.w = 400;
        this.h = 10;
        this.blue = 12.75;
    }

    //this sets up the floor to be in correct position
    update() {
        fill(0, 0, this.blue);
        rect (this.x, this.y, this.w, this.h);

        // console.log("ground is good");


    }

    //hit method for a splash aka rain hits ground
    hit() {

        //if 1 splash occurs add a splash
        if(splash = 1) {
            splash++;
        }
       

        //if it reaches 10 splashes reset to 0, and add blue color into the ground. 
        if(splash = 10) {
            
            splash = 0;
            this.blue = this.blue + 2;

            

            console.log("hit");

        }

    }

}

//object DaGround from ground class
let DaGround = new Ground();

//starts with splash at 0
var splash = 0;





//set up the canvas at 400x400
function setup(){
createCanvas(400, 400);

}


//runs the application by calling the methods from the classes. 
function draw(){
    //background black
    background(0, 0, 0);

    //for loop that runs the length of DaRain which is 200 drops.
    for(var i=0; i<DaRain.length; i++){
        DaRain[i].update();
    }

    //runs the update function from ground class that displays the ground.
  DaGround.update();

}









