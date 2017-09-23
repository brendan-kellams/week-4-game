// The activates everything when the window opens
window.onload = function() {

	// the click selectors for the different jewels
	
	// our main object
	var game = {

		wins : 0,
		losses : 0,
		totalCount: 0,
		randomNum: Math.floor(Math.random()*120 + 19),
		redNum: Math.floor(Math.random()*19 + 1),
		blueNum: Math.floor(Math.random()*19 + 1),
		yellowNum: Math.floor(Math.random()*19 + 1),
		greenNum: Math.floor(Math.random()*19 + 1),


		// This generates the random number and places it in the random div
		random: function() {
			$('#random').html(game.randomNum);
			console.log(game.randomNum);
		},

		// this keeps track of the wins
		win: function() {
			game.wins++;
			$('#win-loss').html(game.wins);
			$('#win-loss').html('Winner!');
			game.reset();			
		},

		// this keeps track of the losses
		lost: function() {
			game.losses++;
			$('#win-loss').html(game.losses);
			$('#win-loss').html('Loser!');
			game.reset();
		},

		logic: function() {
			if (game.randomNum === game.totalCount) {
				game.win();
				console.log('You Win!')
			}
			else if (game.randomNum < game.totalCount) {
				game.lost();
				console.log('You Lose!')
			}
			else {
				console.log('You are not done yet buddy!');
			}
		},

	
		// this resets the game if you win or lose
		reset: function() {
			game.randomNum = Math.floor(Math.random()*120 + 19);
			game.random();
			$('#win-loss').append('<br><br>' + 'Wins: ' + game.wins + '<br>');
			$('#win-loss').append('<br>' + 'Losses: ' + game.losses);
			game.redNum = Math.floor(Math.random()*19 + 1);
			game.blueNum = Math.floor(Math.random()*19 + 1);
			game.yellowNum = Math.floor(Math.random()*19 + 1);
			game.greenNum = Math.floor(Math.random()*19 + 1);
			game.totalCount = 0;
			$('#sum').html(game.totalCount);
		},

		// generating random number for red jewel
		red: function() {
			game.totalCount += game.redNum;
			$('#sum').html(game.totalCount);
			game.logic();
		},

		// generating random number for bluw jewel
		blue: function() {
			game.totalCount += game.blueNum;
			$('#sum').html(game.totalCount);
			game.logic(); 
		},

		// generating random number for yellow jewel
		yellow: function() {
			game.totalCount += game.yellowNum;
			$('#sum').html(game.totalCount);
			game.logic(); 
		},

		// generating random number for green jewel
		green: function() {
			game.totalCount += game.greenNum;
			$('#sum').html(game.totalCount);
			game.logic();
		},

	};
	$('#win-loss').append('<br><br>' + 'Wins: ' + game.wins + '<br>');
	$('#win-loss').append('<br>' + 'Losses: ' + game.losses);
	$('#red').click(game.red);
	$('#blue').click(game.blue);
	$('#yellow').click(game.yellow);
	$('#green').click(game.green);
	game.random();

		
};