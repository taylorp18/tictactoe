
function refresh() {
	location.reload();
}

/* Return the index of the turn */
function doTurn(board) {
			var BLANK = '$'
			var X = 'X'
			var O = 'O'
		do {
			var turn =  Math.round(Math.random() * 9 + .5);
		}
		while ( board[turn] != BLANK);

		return turn--;
//		return miniMax(board, 1);
}

function miniMax(board, player) {
	var BLANK = '$'
	var X = 'X'
	var O = 'O'
	var max = 0;


	var end = gameOver(board);
	if (end != true){
		return player;
	}

	else
		for (var i = 0; i < 9; i++) {
			if (board[i] == BLANK){
				var new_board = board;
				new_board[i] = (player == 1) ? O : X;


			}
		}
	
}

function printBoard(board) {
	for (var i = 0; i < board.length; i++) {
		console.log(board[i])
	}
}

function gameOver(board) {
			var BLANK = '$'
			var X = 'X'
			var O = 'O'
			if (board[0] != BLANK &&
				board[0] == board[3] &&
				board[3] == board[6] ){
					return board[0]
				}
			
			else if (board[0] != BLANK &&
				board[0] == board[1] &&
				board[1] == board[2] ){
					return board[0]
				}
		
			else if (board[0] != BLANK &&
				board[0] == board[4] &&
				board[4] == board[8] ){
					return board[0]
				}

			else if (board[1] != BLANK &&
				board[1] == board[4] &&
				board[4] == board[7] ){
					return board[1];
				}

			else if (board[2] != BLANK &&
				board[2] == board[5] &&
				board[5] == board[8] ){
					return board[2];
				}

			else if (board[2] != BLANK &&
				board[2] == board[4] &&
				board[4] == board[6] ){
					return board[2];
				}

			else if (board[3] != BLANK &&
				board[3] == board[4] &&
				board[4] == board[5] ){
					return board[3];
				}

			else if (board[6] != BLANK &&
				board[6] == board[7] &&
				board[7] == board[8] ){
					return board[6];
				}

			else
				return true;	
}

function play() {
	while (!gameOver()){
		getTurn();

		if(!gameOver())
			doTurn();

	}
}