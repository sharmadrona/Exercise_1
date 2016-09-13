background(70); //black
size(500,500); 
fill(204, 255, 0); { // green
ellipse(250, 250, 320, 320); //body+face
}

strokeWeight(20); {
stroke(204, 255, 0); //green
line(160, 450, 175, 390); 
} //leg #1

strokeWeight(20); {
stroke(204, 255, 0); //green 
line(340, 450, 325, 390); 
} //leg #2 

strokeWeight(15); {
stroke(204, 255, 0); //green
line(30, 225, 100, 250); 
} //arm #1

strokeWeight(15); {
stroke(204, 255, 0); //green
line(400, 250, 470, 225);
} //arm #2 

strokeWeight(15); {
stroke(204, 255, 0); //green
line(30, 225, 30, 180); 
} //forearm #1

strokeWeight(15); {
stroke(204, 255, 0); //green 
line(470, 225, 470, 270); 
} //forearm #2

fill(204, 255, 0); { //green
ellipse(30, 180, 20, 20);
} //hand #1 

fill(204, 255, 0); { //green
ellipse(470, 270, 20, 20); 
} //hand #2 

fill(204, 255, 0); { //green
ellipse(142, 450, 40, 20); 
} //foot #1

fill(204, 255, 0); { //green
ellipse(358, 450, 40, 20); 
} //foot #2 

fill(250, 50, 0); {
arc(250, 275, 130, 150, -1, PI+QUARTER_PI, PIE); 
} //tongue 

fill(225); {
ellipse(210, 270, 10, 10); 
} //random #1

fill(225); {
ellipse(290, 270, 10, 10); 
} //random #2

fill(250); { 
ellipse(250, 150, 200, 110); 
} //eye

fill(1); {
ellipse(250, 150, 60, 60); 
} //eyeball

{ noSmooth();
stroke(250);
point(250, 165); 
} //pupil #1

{ noSmooth();
stroke(250);
point(250, 135); 
} //pupil #2

{ noSmooth();
stroke(250); 
point(235, 150); 
} //pupil #3

{ noSmooth(); 
stroke(250);
point(265, 150); 
} //pupil #4 

fill(1); {
ellipse(240, 215, 10, 10);
} //nostril #1

fill(1); {
ellipse(260, 215, 10, 10); 
} //nostril #2 

strokeWeight(4); {
stroke(1); 
line(130, 240, 370, 215); 
} //upper-jawline

strokeWeight(4); {
fill(250); 
triangle(140, 240, 160, 270, 180, 236); 
} //tooth left

strokeWeight(4); { 
fill(250); 
triangle(320, 221, 340, 245, 360, 217); 
} //tooth right

strokeWeight(4); { 
fill(250); 
triangle(230, 230, 250, 260, 270, 226); 
} // tooth center 

{ noSmooth(); 
stroke(100, 0, 50); 
point(30, 180); 
} //random point on hand #1

{ noSmooth(); 
stroke(100, 0, 50); 
point(470, 270); 
} //random point on hand #2

fill(225); {
rect(240, 40, 20, 50); 
}

fill(250); {
quad(210, 5, 290, 5, 290, 40, 210, 40); 
} // unnecessary banner

strokeWeight(4); {
stroke(1);
line(240, 33, 240, 12); 
} // "M" left leg

{ noFill();
strokeWeight(4); 
strokeJoin(MITER); 
beginShape();
vertex(240, 12);
vertex(250, 22);
vertex(260, 12); 
endShape(); 
} // "M" joiner 

strokeWeight(4); {
stroke(1);
line(260, 33, 260, 12); 
} // "M" right leg 



//-----------------------------------THE END-------------------------------------------//