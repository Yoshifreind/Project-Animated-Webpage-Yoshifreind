
let z = 0; //setting variable for loop
let funny = ["#800000", "#008B8B", "#BDB76B", "#FF1493", 	"#FFA07A", "#FFFFE0", "#00FA9A", "#FFC0CB"] //creating variable for the random circle colour
function setup() {
  createCanvas(windowWidth, windowHeight); //creating canvas
  colourShapes(); // calls the colourShapes function
  drawDots();// calls the drawDots function
  circleFunny();// calls the circleFunny function

}

function colourShapes() {
  let colourMenu = document.getElementById("colour-menu"); //gets the value of the dropdown menu and assigns it to a variable
  let index = colourMenu.selectedIndex; //sets up an index variable to order dropdown menu results
  let colour = colourMenu[index].value; //sets the colour variable to the value selected by the dropdown menu
  fill(colour); //changes the colour of the shapes
  
	drawDots(); //calls the drawDots function once again to redraw the shapes with the new colour
  
}

function drawDots() { 
  
   while (z < width) { //setting up a while loop to place the shapes over and over until the hit the edge of the screen.
    ellipse(z + 70, 275, 25); //creaing the circles that will be looped
    rect(z + 25, 280, 100); //creating the rectangles that will be looped
    z += 50 //increasing the z value by 50 to set the distance between each shape
   }
	z = 0; //setting z to zero to reset the loop
  
}

function circleFunny() {
  fill(random(funny)); //fills the circle created below with the colour randomly selected from the funny variable. 
  ellipse(width/2, height/3, 100)
}

function draw() {
  fill(0); //sets colour for name text
	textSize(20); // sets size for name text 
	textAlign(LEFT, BOTTOM); // aligns the name text to the bottom left.
  text("Jacob Groves", width/20, height); //displays text of my name 
  
}
