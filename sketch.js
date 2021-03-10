var squares = [];
var pieces = [];
var bking,bknight,bqueen,bbishop,bpawn,brook;
var wking,wknight,wqueen,wqueen,wbishop,wpawn;

function preload(){
  bking=loadimage("Images/Black/king-removebg-preview.png");
  bknight=loadimage("Images/Black/king-removebg-preview.png");
  bqueen=loadimage("Images/Black/king-removebg-preview.png");
  bbishop=loadimage("Images/Black/king-removebg-preview.png");
  brook=loadimage("Images/Black/king-removebg-preview.png");
  bpawn=loadimage("Images/Black/king-removebg-preview.png");
  wking=loadimage("Images/White/king-removebg-preview.png");
  wknight=loadimage("Images/White/knight-removebg-preview.png");
  wqueen=loadimage("Images/White/king-removebg-preview.png");
  wbishop=loadimage("Images/White/king-removebg-preview.png");
  wrook=loadimage("Images/White/rook-removebg-preview.png");
  wpawn=loadimage("Images/White/pawn-removebg-preview.png");

}
function setup() {
  createCanvas(400, 400);

  // Create the squares
  for (y = 0; y < height; y += 50) {
    for (x = 0; x < width; x += 50) {
      square = new Square(x, y);
      squares.push(square);
    }
  }

  pieces.push(new Rook(squares[0], 1));
  pieces.push(new Knight(squares[1], 1));
  pieces.push(new Bishop(squares[2], 1));
  pieces.push(new Queen(squares[3], 1));
  pieces.push(new King(squares[4], 1,"white"));
  pieces.push(new Bishop(squares[5], 1));
  pieces.push(new Knight(squares[6], 1));
  pieces.push(new Rook(squares[7], 1));


  for (i = 8; i < 16; i++) {
    pawn = new Pawn(squares[i], 1);
    pieces.push(pawn);
  }

  for (i = 48; i < 56; i++) {
    pawn = new Pawn(squares[i], 2);
    pieces.push(pawn);
  }

  pieces.push(new Rook(squares[56], 0));
  pieces.push(new Knight(squares[57], 0));
  pieces.push(new Bishop(squares[58], 0));
  pieces.push(new Queen(squares[59], 0));
  pieces.push(new King(squares[60], 0,"black"));
  pieces.push(new Bishop(squares[61], 0));
  pieces.push(new Knight(squares[62], 0));
  pieces.push(new Rook(squares[63], 0));


}

function draw() {
  background(255);
  drawBoard();
  for (i = 0; i < pieces.length; i++) {
    pieces[i].show();
  }
}

// Function just for drawing the board
function drawBoard() {
  black = 220;
  white = 30;
  for (y = 0; y < height; y += 50) {
    for (x = 0; x < width; x += 50) {
      if (x % 100 == 0) {
        if (y % 100 == 0) {
          fill(black);
        }
        if (y % 100 == 50) {
          fill(white);
        }
      }
      if (x % 100 == 50) {
        if (y % 100 == 50) {
          fill(black);
        }
        if (y % 100 == 0) {
          fill(white);
        }
      }

      rect(x, y, 50, 50);
    }
  }
}