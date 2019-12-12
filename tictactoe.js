
function refresh() {
	for (var i=1; i < 10 ; i++){
		$('#'+i).attr('src', 'media/blank.jpg');
	}

	$('#win').css('display', 'none');
	$('#lose').css('display', 'none');
	$('#tie').css('display', 'none');
	play();
}

/* Return the index of the turn */
function doTurn(board) {
			var BLANK = '$'
			var X = 'X'
			var O = 'O'

		if (board[4] == BLANK){
			return 4;
		}

		else if (board[4] == X && board[0] == BLANK){
			return 0;
		}

		else if (twoInARow(0,1,2,O,board)){
			return empty(0,1,2, board)
		}

		else if (twoInARow(3,4,5,O,board)){
			return empty(3,4,5, board)
		}

		else if (twoInARow(6,7,8,O,board)){
			return empty(6,7,8, board)
		}

		else if (twoInARow(0,3,6,O,board)){
			return empty(0,3,6, board)
		}

		else if (twoInARow(1,4,7,O,board)){
			return empty(1,4,7, board)
		}

		else if (twoInARow(2,5,8,O,board)){
			return empty(2,5,8, board)
		}

		else if (twoInARow(0,4,8,O,board)){
			return empty(0,4,8, board)
		}

		else if (twoInARow(2,4,6,O,board)){
			return empty(2,4,6, board)
		}

		else if (twoInARow(0,1,2,X,board)){
			return empty(0,1,2, board)
		}

		else if (twoInARow(3,4,5,X,board)){
			return empty(3,4,5, board)
		}

		else if (twoInARow(6,7,8,X,board)){
			return empty(6,7,8, board)
		}

		else if (twoInARow(0,3,6,X,board)){
			return empty(0,3,6, board)
		}

		else if (twoInARow(1,4,7,X,board)){
			return empty(1,4,7, board)
		}

		else if (twoInARow(2,5,8,X,board)){
			return empty(2,5,8, board)
		}

		else if (twoInARow(0,4,8,X,board)){
			return empty(0,4,8, board)
		}

		else if (twoInARow(2,4,6,X,board)){
			return empty(2,4,6, board)
		}

		else{
			do {
				var turn =  Math.round(Math.random() * 9 + .5);
			}
			while ( board[turn] != BLANK);

			return turn--;
		}
}

function twoInARow(a,b,c, player, board) {
	var BLANK = '$'

	if (board[a] == board[b] && board[c] == BLANK && board[a] == player)
		return true

	else if (board[a] == board[c] && board[b] == BLANK && board[a] == player)
		return true

	else if (board[b] == board[c] && board[a] == BLANK && board[b] == player)
		return true

	else	
		return false;	
}

function empty(a,b,c, board) {
	var BLANK = '$'
	if (board[a] == BLANK)
		return a;

	if (board[b] == BLANK)
		return b;

	if (board[c] == BLANK)
		return c;
}

function printBoard(board) {
	for (var i = 0; i < board.length; i++) {
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
