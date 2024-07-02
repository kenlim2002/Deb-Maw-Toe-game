var xImageSrc = "x.png"; // replace with the actual path to your X image
var oImageSrc = "y.png"; // replace with the actual path to your O image
var xImage = '<img class="cell-img" src="' + xImageSrc + '" alt="X">';
var oImage = '<img class="cell-img" src="' + oImageSrc + '" alt="O">';

     var board = ['','','','','','','','',''];
    
    var currentPlayer = 'X';

    function drawBoard() {
    document.getElementById('board').innerHTML = '';
    for(i = 0; i < board.length; i++) {
        if(i % 3 == 0) {
            document.getElementById('board').innerHTML += '<div class="row">';
        }
        document.getElementById('board').innerHTML += '<div class="cell" onclick="makeMove(' + i + ')">' + board[i] + '</div>';
        if(i % 3 == 2) {
            document.getElementById('board').innerHTML += '</div>';
        }
    }}

    function makeMove(i) {
    if(board[i] == '') {
        board[i] = currentPlayer == 'X' ? xImage : oImage;
        currentPlayer = currentPlayer == 'X' ? 'O' : 'X';
    }
    drawBoard();
    checkWin();
}

function checkWin() {
    var winningCombinations = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
    for(i = 0; i < winningCombinations.length; i++) {
        if(board[winningCombinations[i][0]] == xImage && board[winningCombinations[i][1]] == xImage && board[winningCombinations[i][2]] == xImage) {
            document.getElementById('modal-content').innerHTML = 'Player <img class="modal-img" src="' + xImageSrc + '" alt="Player Image"> wins!';
            document.getElementById('modal').style.display = 'block';
            resetBoard();
        } else if(board[winningCombinations[i][0]] == oImage && board[winningCombinations[i][1]] == oImage && board[winningCombinations[i][2]] == oImage) {
            document.getElementById('modal-content').innerHTML = 'Player <img class="modal-img" src="' + oImageSrc + '" alt="Player Image"> wins!';
            document.getElementById('modal').style.display = 'block';
            resetBoard();
        }
    }
}

    function resetBoard() {
        board = ['','','','','','','','',''];
        currentPlayer = 'X';
        drawBoard();
    }

    drawBoard();