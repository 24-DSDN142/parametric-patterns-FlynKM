//your parameter variables go here!
let rect_width  = 20;
let rect_height = 20;
let tardisBlue = "#003b6f";//003b6f
let tS = 5.5; //tardis Size
let tY = 25 //tardis location y
let tX = 25  //tardis location x
let starOneX = 160//star locations 160
let starOneY = 140 //140
let starTwoX = 10 //10
let starTwoY = 20 //20
let starThreeX = 190 //190
let starThreeY = 130 //130
let arcSize = 90//changes width and height of arcs that make up the squiggle. if set to 50, arcs will align properly
let bgColour = "#43109a" //#43109a
let gallifreyan = 2


function setup_wallpaper(pWallpaper) {
  pWallpaper.output_mode(GRID_WALLPAPER);
  pWallpaper.resolution(NINE_PORTRAIT);
  pWallpaper.show_guide(false); //set this to false when you're ready to print
  
 

  //Grid settings
  pWallpaper.grid_settings.cell_width  = 200;
  pWallpaper.grid_settings.cell_height = 200;
  pWallpaper.grid_settings.row_offset  = 100;
  angleMode(DEGREES)

}

function wallpaper_background() {
  if(tS >=2.5) {
    background(bgColour)

  }

  if (tS <2.5) {//changes background to pink if Tardis is smaller than 2.5


    background(229, 51, 94 )
    
  }; 
  

}

function my_symbol() { // do not rename this function. Treat this similarly to a Draw function


  noFill()
  strokeWeight(30)
  
  
  if(tS >=2.5) {
    stroke("#2b0768")

  }

  if (tS <2.5) {//changes stroke to pink if Tardis is smaller than 2.5


    stroke(216, 18, 66)
    
  }; 
  

  arc(185,35,arcSize,arcSize,345,135) //squiggle in bg
  arc(148,69,arcSize,arcSize,145,315)
  arc(111,103,arcSize,arcSize,315,145)
  arc(70,130,arcSize,arcSize,145,315)
  arc(33,164,arcSize,arcSize,315,145)
  
  strokeWeight(1)
  
   if (gallifreyan === 1){
    
    drawGallifreyan()

   }

  

  strokeWeight(1)
  stroke(0)
  if(tS >=2.5) {

    fill(tardisBlue)

  }

  if (tS <2.5) {//changes fill to pink if Tardis is smaller than 2.5

    fill(203, 20, 65)

  }
    

  rect(20.0*tS+tX,10.0*tS+tY,20.0*tS,40.0*tS)
  rect(19.0*tS+tX,5.5*tS+tY,22.0*tS,2.5*tS)
  rect(18.0*tS+tX,7.0*tS+tY,2.0*tS,43.5*tS) //side panel
  rect(40.0*tS+tX,7.0*tS+tY,2.0*tS,43.5*tS) //side panel
  rect(29.5*tS+tX,10.0*tS+tY,1.0*tS,40.0*tS)  //centre stuff
  rect(17.7*tS+tX,7.5*tS+tY,.3,2.5*tS)//top bit
  rect(42.0*tS+tX,7.4*tS+tY,.3,2.5*tS)
  rect(20.0*tS+tX,4.0*tS+tY,20.0*tS,1.5*tS)

  rect(28.0*tS+tX,3.0*tS+tY,4.0*tS,1.0*tS)//lantern start
  rect(28.5*tS+tX,2.5*tS+tY,3.0*tS,.5*tS)
  
  fill(500)
  rect(28.7*tS+tX,.5*tS+tY,2.6*tS,2.0*tS)

  fill(tardisBlue)
  rect(28.7*tS+tX,.0*tS+tY,2.6*tS,.5*tS)

  beginShape()
    vertex(28.5*tS+tX,.0*tS+tY)
    vertex(30.0*tS+tX,-.5*tS+tY)
    vertex(31.5*tS+tX,.0*tS+tY)

  endShape(CLOSE) //lantern end



  rect(19.0*tS+tX,7.5*tS+tY,22.0*tS,2.5*tS) //sign back
  fill(0)
  rect(19.5*tS+tX,7.8*tS+tY,21.0*tS,1.9*tS)
  fill(500)

  textAlign(CENTER)
  textSize(1.5*tS)
  text("POLICE",25.0*tS+tX,9.4*tS+tY)
  textSize(.8*tS)
  text("PUBLIC",30.0*tS+tX,8.8*tS+tY)
  text("CALL",30.0*tS+tX,9.5*tS+tY)
  textSize(1.5*tS)
  text("BOX",34.0*tS+tX,9.4*tS+tY)//top sign

  fill(0,0,0)
  rect(21.5*tS+tX,12.0*tS+tY,6.5*tS,7.3*tS) //window frame
  fill(500)
  rect(21.9*tS+tX,12.3*tS+tY,1.7*tS,3.2*tS) //window panes
  rect(23.9*tS+tX,12.3*tS+tY,1.7*tS,3.2*tS)
  rect(25.9*tS+tX,12.3*tS+tY,1.7*tS,3.2*tS)
  rect(21.9*tS+tX,15.8*tS+tY,1.7*tS,3.2*tS)
  rect(23.9*tS+tX,15.8*tS+tY,1.7*tS,3.2*tS)
  rect(25.9*tS+tX,15.8*tS+tY,1.7*tS,3.2*tS)

  fill(0,0,0)
  rect(32*tS+tX,12.0*tS+tY,6.5*tS,7.3*tS) //window frame
  fill(500)
  rect(32.4*tS+tX,12.3*tS+tY,1.7*tS,3.2*tS)
  rect(34.4*tS+tX,12.3*tS+tY,1.7*tS,3.2*tS)
  rect(36.4*tS+tX,12.3*tS+tY,1.7*tS,3.2*tS)
  rect(32.4*tS+tX,15.8*tS+tY,1.7*tS,3.2*tS)
  rect(34.4*tS+tX,15.8*tS+tY,1.7*tS,3.2*tS)
  rect(36.4*tS+tX,15.8*tS+tY,1.7*tS,3.2*tS) //windows

   if(tS >=2.5) {

    fill(tardisBlue)

  }

  if (tS <2.5) {

    fill(203, 20, 65)
    
  }
  rect(21.5*tS+tX,21.0*tS+tY,6.5*tS,7.3*tS) 
  fill(500)
  rect(22.2*tS+tX,21.5*tS+tY,5.0*tS,6.3*tS)
  if(tS >=2.5) {

    fill(tardisBlue)

  }

  if (tS <2.5) {

    fill(203, 20, 65)
    
  }

  rect(32.0*tS+tX,21.0*tS+tY,6.5*tS,7.3*tS)

  rect(21.5*tS+tX,30.0*tS+tY,6.5*tS,7.3*tS)
  rect(32.0*tS+tX,30.0*tS+tY,6.5*tS,7.3*tS)

  rect(21.5*tS+tX,39.0*tS+tY,6.5*tS,7.3*tS)
  rect(32.0*tS+tX,39.0*tS+tY,6.5*tS,7.3*tS)
  
  beginShape()  // bottom step
    vertex(18.0*tS+tX,50.5*tS+tY)
    vertex(17.0*tS+tX,51.5*tS+tY)
    vertex(43.0*tS+tX,51.5*tS+tY)
    vertex(42.0*tS+tX,50.5*tS+tY)
  endShape(CLOSE)

  rect(20.0*tS+tX,50.0*tS+tY,20.0*tS,.5*tS)

  rect(16.9*tS+tX,51.5*tS+tY,26.2*tS,2.0*tS)

  fill(0) //Text for sign
  textSize(.48*tS)
  text("POLICE TELEPHONE",24.7*tS+tX,22.5*tS+tY)
  
  textSize(.6*tS)
  text("FREE",24.7*tS+tX,23.5*tS+tY)
  
  textSize(.5*tS)
  text("FOR USE OF",24.7*tS+tX,24.0*tS+tY)
  
  textSize(.6*tS)
  text("PUBLIC",24.7*tS+tX,24.6*tS+tY)

  textSize(.38*tS)
  text("ADVICE & ASSISTANCE",24.7*tS+tX,25.5*tS+tY)
  text("OBTAINABLE IMMEDIATLY",24.7*tS+tX,26.0*tS+tY)

  textSize(.3*tS)
  text("OFFICERS & CARS",24.7*tS+tX,26.5*tS+tY)
  text("RESPOND TO ALL CALLS",24.7*tS+tX,26.8*tS+tY)

  textSize(.65*tS)
  text("PULL TO OPEN",24.7*tS+tX,27.5*tS+tY)

 drawStar1()
 drawStar2()
 drawStar3()  
 
 
//  beginShape() //lightning

//   vertex(15*tS+tX,17*tS+tY) //1
//   vertex(10*tS+tX,13*tS+tY)//2
//   vertex(6*tS+tX,13*tS+tY)//3
//   vertex(3*tS+tX,10*tS+tY)//4
//   vertex(-1*tS+tX,10*tS+tY) //5
//   vertex(-6*tS+tX,2*tS+tY)//6
//   vertex(1*tS+tX,-4*tS+tY)//7
//   vertex(4*tS+tX,6*tS+tY)//8
//   vertex(6*tS+tX,6*tS+tY)//9
//   vertex(8*tS+tX,10*tS+tY)//10
//   vertex(11*tS+tX,10*tS+tY)//11

// endShape(CLOSE)

 


}

function drawStar1() {
    
  fill(500)

  beginShape() //star
  vertex(7+starOneX, 13+starOneY);
  vertex(10+starOneX, 20+starOneY);
  vertex(13+starOneX, 13+starOneY);
  vertex(20+starOneX, 10+starOneY);
  vertex(13+starOneX, 7+starOneY);
  vertex(10+starOneX, 0+starOneY);
  vertex(7+starOneX, 7+starOneY);
  vertex(0+starOneX, 10+starOneY);
  endShape(CLOSE)

}

function drawStar2() {
  
  fill(500)

  beginShape() //star
  vertex(-3+starTwoX, 3+starTwoY);
  vertex(0+starTwoX, 10+starTwoY);
  vertex(3+starTwoX, 3+starTwoY);
  vertex(10+starTwoX, 0+starTwoY);
  vertex(3+starTwoX, -3+starTwoY);
  vertex(0+starTwoX, -10+starTwoY);
  vertex(-3+starTwoX, -3+starTwoY);
  vertex(-10+starTwoX, 0+starTwoY);
  endShape(CLOSE)

}

function drawStar3() {
  
  fill(500)

  beginShape() //star
  vertex(-3+starThreeX, 3+starThreeY);
  vertex(0+starThreeX, 10+starThreeY);
  vertex(3+starThreeX, 3+starThreeY);
  vertex(10+starThreeX, 0+starThreeY);
  vertex(3+starThreeX, -3+starThreeY);
  vertex(0+starThreeX, -10+starThreeY);
  vertex(-3+starThreeX, -3+starThreeY);
  vertex(-10+starThreeX, 0+starThreeY);
  endShape(CLOSE)

}

function drawGallifreyan(){
  //gallifreyan writing
  noFill()
  arc(100,100,150,150,188,120)
  arc(20,140,100,100,277,30)
  ellipse(100,100,160)
  ellipse(39,94,6)
  //first "word"
  arc(100,140,50,50,90,46)
  arc(110,165,20,20,180,315)
  ellipse(110,162,4)
  line(109,160,90,117)
  ellipse(112,135,20)
  ellipse(112,135,4)
  line(103,140,80,155)
  line(112,145,112,155)
  line(103,130,85,120)
  //second "word"
  arc(145,95,40,40,300,277)
  ellipse(145,120,4)
  ellipse(152,101,15)
  line(145,105,131,109)
  arc(149,83,15,15,317,260)
  fill(0)
  ellipse(153,85,2)
  ellipse(151,88,1)
  ellipse(153,81,3)
  noFill()
  //third "word"
  arc(90,60,60,60,120,60)
  arc(90,100,40,40,224,316)
  line(83,81,65,44)
  line(97,81,100,75)
  line(90,80,90,53)
  ellipse(105,63,25)
  ellipse(123,70,4)
  ellipse(84,45,20)
  fill(0)
  ellipse(80,39,1)
  ellipse(78,43,2)
  ellipse(79,48,3)
  ellipse(84,51,4)

}