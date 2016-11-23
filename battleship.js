var board = document.getElementById("board");
var board2 = document.getElementById("board2");

for (y = 0; y < 10; y++) {
  for (x = 0; x < 10; x++) {

    var box = document.createElement("div");
    box.style.background = 'blue';
    board.appendChild(box);
    box.id = x.toString() + y.toString();      

    var width = x * 50;
    var height = y * 50;      

    box.style.top = height + 'px';
    box.style.left = width + 'px';
  }
}

for (i = 0; i < 10; i++) {
  for (j = 0; j < 10; j++) {

    var box2 = document.createElement("div");
    box2.style.background = 'blue';
    board2.appendChild(box2);
    box2.id = j.toString() + i.toString();      

    var width = j * 50;
    var height = i * 50;      

    box2.style.top = height + 'px';
    box2.style.left = width + 'px';
  }
}


var boardArray = [[0,0,0,0,0,0,0,0,0,0],
                  [0,0,0,0,0,0,0,0,0,0],
                  [0,0,0,0,0,0,0,0,0,0],
                  [0,0,0,0,0,0,0,0,0,0],
                  [0,0,0,0,0,0,0,0,0,0],
                  [0,0,0,0,0,0,0,0,0,0],
                  [0,0,0,0,0,0,0,0,0,0],
                  [0,0,0,0,0,0,0,0,0,0],
                  [0,0,0,0,0,0,0,0,0,0],
                  [0,0,0,0,0,0,0,0,0,0]]

var board2Array = [[0,0,0,0,0,0,0,0,0,0],
                  [0,0,0,0,0,0,0,0,0,0],
                  [0,0,0,0,0,0,0,0,0,0],
                  [0,0,0,0,0,0,0,0,0,0],
                  [0,0,0,0,0,0,0,0,0,0],
                  [0,0,0,0,0,0,0,0,0,0],
                  [0,0,0,0,0,0,0,0,0,0],
                  [0,0,0,0,0,0,0,0,0,0],
                  [0,0,0,0,0,0,0,0,0,0],
                  [0,0,0,0,0,0,0,0,0,0]]

function or() {
  return (Math.floor(Math.random() * 2));
}

function randomCarrier(board) {
  c = or();
  if (c == 0) { 
    a = Math.floor(Math.random() * 6);
    b = Math.floor(Math.random() * 10);
    board[a][b] = 1;
    board[a+1][b] = 1;
    board[a+2][b] = 1;
    board[a+3][b] = 1;
    board[a+4][b] = 1;
  }
  else {
    a = Math.floor(Math.random() * 10);
    b = Math.floor(Math.random() * 6);
    board[a][b] = 1;
    board[a][b+1] = 1;
    board[a][b+2] = 1;
    board[a][b+3] = 1;
    board[a][b+4] = 1;
  }
}

randomCarrier(boardArray);
randomCarrier(board2Array);  

function randomBattleship(board) {
  c = or();
    if (c==0) {
      a = Math.floor(Math.random() * 7);
      b = Math.floor(Math.random() * 10);
      if (board[a][b] == 1 || board[a+1][b] == 1 || board[a+2][b] == 1 || board[a+3][b] == 1) {
        randomBattleship(board);
      }
      else {
        board[a][b] = 1;
        board[a+1][b] = 1;
        board[a+2][b] = 1;
        board[a+3][b] = 1;
      }

    }
    else {
      a = Math.floor(Math.random() * 10);
      b = Math.floor(Math.random() * 7);
      if (board[a][b] == 1 || board[a][b+1] == 1 || board[a][b+2] == 1 || board[a][b+3] == 1) {
        randomBattleship(board);
      }
      else {
        board[a][b] = 1;
        board[a][b+1] = 1;
        board[a][b+2] = 1;
        board[a][b+3] = 1;
      }
    }
}

randomBattleship(boardArray);
randomBattleship(board2Array);

function randomDestroyer(board) {
  c = or();
    if (c==0) {
      a = Math.floor(Math.random() * 8);
      b = Math.floor(Math.random() * 10);
      if (board[a][b] == 1 || board[a+1][b] == 1 || board[a+2][b] == 1) {
        randomDestroyer(board);
      }
      else {
        board[a][b] = 1;
        board[a+1][b] = 1;
        board[a+2][b] = 1;
      }

    }
    else {
      a = Math.floor(Math.random() * 10);
      b = Math.floor(Math.random() * 8);
      if (board[a][b] == 1 || board[a][b+1] == 1 || board[a][b+2] == 1) {
        randomDestroyer(board);
      }
      else {
        board[a][b] = 1;
        board[a][b+1] = 1;
        board[a][b+2] = 1;
      }
    }
}

randomDestroyer(boardArray);
randomDestroyer(board2Array);

function randomSubmarine(board) {
  c = or();
    if (c==0) {
      a = Math.floor(Math.random() * 8);
      b = Math.floor(Math.random() * 10);
      if (board[a][b] == 1 || board[a+1][b] == 1 || board[a+2][b] == 1) {
        randomSubmarine(board);
      }
      else {
        board[a][b] = 1;
        board[a+1][b] = 1;
        board[a+2][b] = 1;
      }

    }
    else {
      a = Math.floor(Math.random() * 10);
      b = Math.floor(Math.random() * 8);
      if (board[a][b] == 1 || board[a][b+1] == 1 || board[a][b+2] == 1) {
        randomSubmarine(board);
      }
      else {
        board[a][b] = 1;
        board[a][b+1] = 1;
        board[a][b+2] = 1;
      }
    }
}

randomSubmarine(boardArray);
randomSubmarine(board2Array);

function randomBoat(board) {
  c = or();
    if (c==0) {
      a = Math.floor(Math.random() * 9);
      b = Math.floor(Math.random() * 10);
      if (board[a][b] == 1 || board[a+1][b] == 1) {
        randomBoat(board);
      }
      else {
        board[a][b] = 1;
        board[a+1][b] = 1;
      }

    }
    else {
      a = Math.floor(Math.random() * 10);
      b = Math.floor(Math.random() * 9);
      if (board[a][b] == 1 || board[a][b+1] == 1) {
        randomBoat(board);
      }
      else {
        board[a][b] = 1;
        board[a][b+1] = 1;
      }
    }
}
randomBoat(boardArray);
randomBoat(board2Array);

board.addEventListener("click", shoot);
board2.addEventListener("click", shoot2);

var score = 0;
var score2 = 0;

function onewin() {
  alert("Player 1 Wins"); 
}

function twowin() {
  alert("Player 2 Wins");
}

function shoot(space) {

  var x = space.target.id.substring(0,1);
  var y = space.target.id.substring(1,2);

  if (boardArray[y][x] == 0) {
    space.target.style.background = 'white';
  } 

  else if (boardArray[y][x] == 1) {
    boardArray[y][x] = -1;
    space.target.style.background = 'red';
    score++;
    if ((score == 17)&&(score2 != 17)) {
      setTimeout(onewin, 500);
    }
  } 
}

function shoot2(space) {

  var x = space.target.id.substring(0,1);
  var y = space.target.id.substring(1,2);

  if (board2Array[y][x] == 0) {
    space.target.style.background = 'white';
  } 

  else if (board2Array[y][x] == 1) {
    board2Array[y][x] = -1;
    space.target.style.background = 'red';
    score2++;
    if ((score2 == 17)&&(score != 17)) {
      setTimeout(twowin, 500);
    }
  } 
}
