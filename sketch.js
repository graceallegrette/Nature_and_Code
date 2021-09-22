//NAME:    Created by Grace Allegrette
//CREDIT:  Pieces of code inspired from "https://editor.p5js.org/fauthereea/sketches
//         /Nce8NkMVV"
//DEFF:    This code creates an array of letters with varying colors falling from
//         top of the screen. The user can press letters on their keyboard and
//         watch the letter dissapear from the console. Eventually I want to turn
//         this code into a game that ends if the user doesn't get rid of a letters
//         before it reaches the bottom of the screen.

 words = [];
 wordFall = setInterval(createWord, 100);
 letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k',
  'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

function setup() {
  createCanvas(1000, 1000);
  textFont('Georgia', 30);
}

function draw() {
  background(255);
  var i;

  //Plays and moves letters
  for (i = words.length -1; i > 0; i--) {
    words[i].display();
    words[i].move();

  }

  //sees if you press the key of a letter on console
  if ((keyIsPressed == true) && (key == 'a')) {
    text('a', 150, 200);
  }

  else if ((keyIsPressed == true) && (key == 'b')) {
    text('b', 175, 200);
  }

  else if ((keyIsPressed == true) && (key == 'c')) {
    text('c', 200, 200);
  }

  else if ((keyIsPressed == true) && (key == 'd')) {
    text('d', 225, 200);
  }

  else if ((keyIsPressed == true) && (key == 'e')) {
    text('d', 250, 200);
  }

  else if ((keyIsPressed == true) && (key == 'f')) {
    text('e', 275, 200);
  }

  else if ((keyIsPressed == true) && (key == 'g')) {
    text('g', 300, 200);
  }

  else if ((keyIsPressed == true) && (key == 'h')) {
    text('h', 325, 200);

  }

  else if ((keyIsPressed == true) && (key == 'i')) {
    text('i', 350, 200);
  }

  else if ((keyIsPressed == true) && (key == 'j')) {
    text('j', 375, 200);
  }

  else if ((keyIsPressed == true) && (key == 'k')) {
    text('k', 400, 200);
  }

  else if ((keyIsPressed == true) && (key == 'l')) {
    text('l', 425, 200);
  }

  else if ((keyIsPressed == true) && (key == 'm')) {
    text('m', 450, 200);
  }

  else if ((keyIsPressed == true) && (key == 'n')) {
    text('n', 475, 200);
  }

  else if ((keyIsPressed == true) && (key == 'o')) {
    text('o', 500, 200);
  }

  else if ((keyIsPressed == true) && (key == 'p')) {
    text('p', 525, 200);
  }

  else if ((keyIsPressed == true) && (key == 'q')) {
    text('q', 550, 200);
  }

  else if ((keyIsPressed == true) && (key == 'r')) {
    text('r', 575, 200);
  }

  else if ((keyIsPressed == true) && (key == 's')) {
    text('s', 600, 200);
  }

  else if ((keyIsPressed == true) && (key == 't')) {
    text('t', 625, 200);
  }

  else if ((keyIsPressed == true) && (key == 'u')) {
    text('u', 650, 200);
  }

  else if ((keyIsPressed == true) && (key == 'v')) {
    text('v', 675, 200);
  }

  else if ((keyIsPressed == true) && (key == 'w')) {
    text('w', 700, 200);
  }

  else if ((keyIsPressed == true) && (key == 'x')) {
    text('x', 725, 200);
  }

  else if ((keyIsPressed == true) && (key == 'y')) {
    text('y', 750, 200);
  }

  else if ((keyIsPressed == true) && (key == 'z')) {
    text('z', 775, 200);
  }
}

function createWord() {
  words.push(new Word());
}

class Word {
  constructor() {
    this.lhs = random(width);
    this.speed1 = 2;
    this.speed2 = 2;
    this.randLetter = random(letters);
    this.color = color(random(255),random(255),random(255));
  }

  //letter speed
  move() {
    this.speed1 = this.speed1 + this.speed2;
  }

  //creates letters color and sizes
  display() {
    text(this.randLetter, this.lhs, this.speed1);
    fill(this.color);
  }

  CheckScreen() {
   if (this.speed1 > height) {
     return true
  } else {
    return false
  }
 }
}

//functions
//sees if key is pressed
function keyPressed() {
  DeleteOffScreen(key);
}

function DeleteOffScreen(delLetter) {
  for (i = 0; i < words.length; i++) {
    if (words[i].randLetter == delLetter) {
      print(words[i].randLetter);
      words.splice(i, 1); //gets rid of word on screen
    }
  }
}
