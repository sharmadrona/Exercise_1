function setup() {
  createCanvas(1000, 1000);
  background(255);
}

function draw() {
  push();
  translate(500, 0);
  scale(.5, .5);
  drawMonsterSawyer();
  push();
  pop();
  pop();
  //////
  push();
  translate(700, 300);
  scale(.3, .3);
  drawMonsterSawyer();
  push();
  pop();
  pop();
  ////
  push();
  translate(0, 0);
  scale(.2, .2);
  drawMonsterSawyer();
  push();
  pop();
  pop();
  ///
  push();
  translate(500, 400);
  scale(.5, .5);
  drawMonsterSharma(random(255), random(255), random(255));
  push();
  pop();
  pop();
  ///2
  push();
  translate(30, 450);
  scale(.5, .5);
  drawMonsterSharma(random(255), random(255), random(255));
  push();
  pop();
  pop();
  ///2
  push();
  translate(830, 250);
  scale(.3, .3);
  drawMonsterSharma(random(255), random(255), random(255));
  push();
  pop();
  pop();
  ///2
  push();
  translate(130, 250);
  scale(.3, .3);
  fill(180, 182, 184);
  if (mouseIsPressed === true) {
    fill(255);
    triangle(110, 80, 107, 49, 130, 60);
    triangle(275, 65, 300, 58, 296, 85);
    rotate(PI / 3.0);
    println('mouseIsPressed');
  } else {
    fill(0);
    triangle(110, 80, 107, 49, 130, 60);
    triangle(275, 65, 300, 58, 296, 85);
  }
  monster3();
  push();
  pop();
  pop();
  ////
  push();
  translate(300, 0);
  scale(.5, .5);

  fill(180, 182, 184);
  triangle(110, 80, 107, 49, 130, 60);
  triangle(275, 65, 300, 58, 296, 85);
  monster3();
  push();
  pop();
  pop();
  noLoop();
  ///
  push();
  translate(270, 200);
  scale(.8, .8);

  fill(180, 182, 184);
  triangle(110, 80, 107, 49, 130, 60);
  triangle(275, 65, 300, 58, 296, 85);
  rotate()
  monster3();

  push();
  pop();
  pop();
  noLoop();
}

function drawMonsterSawyer() { ///this is the first main monster function
  drawMowhawk(25.0, 2.5); ////calling different body parts
  drawHead();
  drawNeck(random(255), random(255), random(255));
  drawBody();
  drawLegs(random(255), random(255), random(255));
}

function drawMowhawk(x, y) { // This is a mowhawk
  strokeWeight(5);
  stroke(random(255), random(255), random(255));
  line(300, 100, 500, 80);
  line(300, 100, 300 - x, 170);
  line(300 + x, 100 - y, 300, 170 - y);
  line(300 + 2 * x, 100 - 2 * y, 300 + x, 170 - 2 * y);
  line(300 + 3 * x, 100 - 3 * y, 300 + 2 * x, 170 - 3 * y);
  line(300 + 4 * x, 100 - 4 * y, 300 + 3 * x, 170 - 4 * y);
  line(300 + 5 * x, 100 - 5 * y, 300 + 4 * x, 170 - 5 * y);
  line(300 + 6 * x, 100 - 6 * y, 300 + 5 * x, 170 - 6 * y);
  line(300 + 7 * x, 100 - 7 * y, 300 + 6 * x, 170 - 7 * y);
  line(300 + 8 * x, 100 - 8 * y, 300 + 7 * x, 170 - 8 * y);
  stroke(0);
  strokeWeight(1);
}

function drawHead() { //This is the head
  noFill();
  line(100, 187.5, 475, 150);
  line(150, 287.5, 375, 250);
  bezier(100, 187.5, 275, 180, 200, 287.5, 150, 287.5);
  bezier(475, 150, 350, 200, 350, 200, 375, 250);
  fill(random(255), random(255), random(255));
  ellipse(256, 196, 30, 30);
  fill(0);
  ellipse(256, 196, 10, 10);
  fill(0);
  ellipse(256, 196, 1, 1);
  noFill();
  fill(random(255), random(255), random(255));
  quad(100, 187.5, 103, 204, 112, 207, 111, 187);
  quad(111, 187, 112, 199, 116, 199, 119, 187);
  quad(119, 187, 115, 204, 124, 205, 126, 189);
  quad(126, 185, 127, 199, 132, 193, 136, 191);
  quad(135, 189, 140, 207, 147, 200, 145, 187);
  quad(145, 187, 148, 198, 156, 200, 155, 192);
  quad(137, 272, 150, 288, 159, 287, 153, 273);
  quad(155, 279, 159, 287, 168, 285, 165, 275);
  quad(169, 263, 168, 285, 181, 278, 173, 258);
  quad(176, 268, 181, 278, 191, 270, 187, 256);
  noFill();

}


function drawNeck(r, g, b) { //this is neck
  fill(r, g, b);
  quad(315, 259, 221, 323, 470, 291, 374, 250);
  noFill();
}

function drawBody() { //this is body
  noFill();
  fill(random(255), random(255), random(255));
  bezier(221, 323, 153, 385, 89, 460, 62, 538);
  bezier(62, 538, 186, 575, 340, 512, 444, 489);
  bezier(470, 291, 516, 355, 501, 432, 444, 489);
  ///this is the "wing" part
  bezier(221, 323, 50, 750, 520, 432, 470, 291);
  noFill();
}

function drawLegs(r, g, b) { ///this is legs
  fill(r, g, b);
  stroke(0);
  rect(136, 551, 22, 70);
  quad(307, 527, 307, 597, 329, 597, 329, 520);
  fill(r, g, b);
  arc(146, 656, 90, 70, PI, TWO_PI, PIE);
  arc(319, 632, 90, 70, PI, TWO_PI, PIE);
}





///-----------------------------------------------------------------

function drawMonsterSharma(r, g, b) { ///this is second main monster function
  fill(r, g, b); { // random color on each draw
    ellipse(250, 250, 320, 320); //body+face


    strokeWeight(20);
    stroke(204, 255, 0); //green
    line(160, 450, 175, 390);
    //leg #1

    strokeWeight(20);
    stroke(204, 255, 0); //green 
    line(340, 450, 325, 390);
    //leg #2 

    strokeWeight(15);
    stroke(204, 255, 0); //green
    line(30, 225, 100, 250);
    //arm #1

    strokeWeight(15);
    stroke(204, 255, 0); //green
    line(400, 250, 470, 225);
    //arm #2 

    strokeWeight(15);
    stroke(204, 255, 0); //green
    line(30, 225, 30, 180);
    //forearm #1

    strokeWeight(15);
    stroke(204, 255, 0); //green 
    line(470, 225, 470, 270);
    //forearm #2

    fill(204, 255, 0); //green
    ellipse(30, 180, 20, 20);
    //hand #1 

    fill(204, 255, 0); //green
    ellipse(470, 270, 20, 20);
    //hand #2 

    fill(204, 255, 0); //green
    ellipse(142, 450, 40, 20);
    //foot #1

    fill(204, 255, 0); //green
    ellipse(358, 450, 40, 20);
    //foot #2 

    fill(250, 50, 0);
    arc(250, 275, 130, 150, -1, PI + QUARTER_PI, PIE);
    //tongue 

    fill(225);
    ellipse(210, 270, 10, 10);
    //random #1

    fill(225);
    ellipse(290, 270, 10, 10);
    //random #2

    fill(250);
    ellipse(250, 150, 200, 110);
    //eye

    fill(1);
    ellipse(250, 150, 60, 60);
    //eyeball

    noSmooth();
    stroke(250);
    point(250, 165);
    //pupil #1

    noSmooth();
    stroke(250);
    point(250, 135);
    //pupil #2

    noSmooth();
    stroke(250);
    point(235, 150);
    //pupil #3

    noSmooth();
    stroke(250);
    point(265, 150);
    //pupil #4 

    fill(1);
    ellipse(240, 215, 10, 10);
    //nostril #1

    fill(1);
    ellipse(260, 215, 10, 10);
    //nostril #2 

    strokeWeight(4);
    stroke(1);
    line(130, 240, 370, 215);
    //upper-jawline

    strokeWeight(4);
    fill(250);
    triangle(140, 240, 160, 270, 180, 236);
    //tooth left

    strokeWeight(4);
    fill(250);
    triangle(320, 221, 340, 245, 360, 217);
    //tooth right

    strokeWeight(4);
    fill(250);
    triangle(230, 230, 250, 260, 270, 226);
    // tooth center 

    noSmooth();
    stroke(100, 0, 50);
    point(30, 180);
    //random point on hand #1

    noSmooth();
    stroke(100, 0, 50);
    point(470, 270);
    //random point on hand #2

    fill(225);
    rect(240, 40, 20, 50);


    fill(250);
    quad(210, 5, 290, 5, 290, 40, 210, 40);
    // unnecessary banner

    strokeWeight(4);
    stroke(1);
    line(240, 33, 240, 12);
    // "M" left leg

    noFill();
    strokeWeight(4);
    strokeJoin(MITER);
    beginShape();
    vertex(240, 12);
    vertex(250, 22);
    vertex(260, 12);
    endShape();
    // "M" joiner 

    strokeWeight(4);
    stroke(1);
    line(260, 33, 260, 12);
    // "M" right leg 
  }
}


////---------------------------------------------------------------------------------


function monster3(r, z) {

  legs();
  body();
  abdomen();
  head();
  antenna();
  arms(r, z);
}

function legs() {
  fill(209, 113, 117);
  quad(100, 575, 125, 454, 160, 478, 170, 575); // left
  quad(220, 575, 235, 478, 275, 454, 290, 575); // right
}

function body() {
  // body
  fill(41, 20, 3);
  ellipse(200, 360, 220, 250); // shell

}


function abdomen() {
  // body
  fill(41, 20, 3);
  ellipse(200, 360, 220, 250); // shell
  // abdomen
  fill(209, 113, 117);
  ellipse(200, 360, 150, 180);
  noFill();
  arc(200, 300, 109, 20, 0, PI);
  arc(200, 330, 139, 20, 0, PI);
  arc(200, 360, 147, 20, 0, PI);
  arc(200, 390, 139, 20, 0, PI);
  arc(200, 420, 109, 20, 0, PI);
  fill(209, 113, 117);

}

function head() {
  ellipse(200, 200, 140, 170); // head
  noStroke();
  fill(157, 67, 67);
  ellipse(194, 208, 8, 8);
  ellipse(205, 208, 8, 8);
  fill(122, 67, 67);
  rect(160, 162, 34, 3); // left eyebrow
  rect(205, 162, 34, 3); // right eyebrow
  fill(255);
  ellipse(180, 180, 30, 20); // left eye
  ellipse(220, 180, 30, 20); // right eye
  fill(127, 4, 222);
  ellipse(180, 183, 20, 20); // left eye
  ellipse(220, 183, 20, 20); // right eye
  ellipseMode(CENTER); // left pupil
  fill(0);
  ellipse(180, 183, 12, 12);
  ellipseMode(CENTER); // right pupil
  fill(0);
  ellipse(220, 183, 12, 12);
  fill(73, 20, 3);
  stroke(100, 0, 0);
  arc(200, 225, 90, 80, 0, PI); // mouth
  // teeth
  fill(225);
  triangle(165, 225, 170, 265, 175, 225); // left fang
  triangle(180, 225, 190, 245, 200, 225);
  triangle(200, 225, 210, 245, 220, 225);
  triangle(225, 225, 230, 265, 235, 225); // right fang
}

function antenna() {
  // antena

  line(160, 128, 120, 70); // left
  line(235, 128, 285, 70); // right


}

function arms(r, z) {
  // arms
  r = radians(-20);
  z = radians(50);
  fill(209, 113, 117);
  rotate(r);
  ellipse(130, 465, 60, 150); // right
  rotate(z);
  ellipse(295, 280, 60, 150); // left
}