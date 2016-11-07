var board = document.getElementById("board");

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

board.addEventListener("click", shoot);

function shoot(space) {

  var x = space.target.id.substring(0,1);
  var y = space.target.id.substring(1,2);

  if (boardArray[y][x] == 0) {
    space.target.style.background = 'white';
  } 

  else if (boardArray[y][x] == 1) {
    space.target.style.background = 'red';
  } 
}
