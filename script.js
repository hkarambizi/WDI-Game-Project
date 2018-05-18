$(document).ready(function() {

	function soundEffectDiceRoll() {
			var audio = $("#dice-roll")[0];
			audio.pause();
			audio.currentTime = 0;
			audio.play();
		}

	function soundEffectChaChing() {
			var audio = $("#cha-ching")[0];
			audio.pause();
			audio.currentTime = 0;
			audio.play();
		}

	function soundEffectHover() {
			var audio = $("#beep")[0];
			audio.pause();
			audio.currentTime = 0;
			audio.play();
		}

	function soundEffectLaugh() {
			var audio = $("#laugh")[0];
			audio.pause();
			audio.currentTime = 0;
			audio.play();
		}

	$('#myModal').modal('show');
	soundEffectLaugh();

// To-Do: Parse out the logic into UI, Game, Player, Round, Roll, Dice, Score	

// This should take in a dice object, make three instances, randomly assign their initial values
const Player = {
	name: 0,
	dice1Val: 0,
	dice2Val: 0,
	dice3Val: 0,
	tripleScore: 0,
	wins: 0,
	ties: 0,
	coins: 3,
	playTurn: false,
	throw: 0,
	rollDice: function(){  
		console.log('roll Dice function activated')
		
		// To-Do: create a roll array with initial random values, assign x,y,z each to the below math function

		Player.dice1Val = Math.floor(Math.random() * 6) + 1;


		//TO-DO: make this a switch statement taking in x, y, z
		if (Player.dice1Val == 1) { $('#dice-one').attr('class', 'side-1')}
			else if (Player.dice1Val == 2) { $('#dice-one').attr('class', 'side-2')}
			else if (Player.dice1Val == 3) { $('#dice-one').attr('class', 'side-3')}
			else if (Player.dice1Val == 4) { $('#dice-one').attr('class', 'side-4')}
			else if (Player.dice1Val == 5) { $('#dice-one').attr('class', 'side-5')}
			else if (Player.dice1Val == 6) { $('#dice-one').attr('class', 'side-6')}
	
		Player.dice2Val = Math.floor(Math.random() * 6) + 1;

		if (Player.dice2Val == 1) { $('#dice-two').attr('class', 'side-1')}
			else if (Player.dice2Val == 2) {$('#dice-two').attr('class', 'side-2')}
			else if (Player.dice2Val == 3) {$('#dice-two').attr('class', 'side-3')}
			else if (Player.dice2Val == 4) { $('#dice-two').attr('class', 'side-4')}
			else if (Player.dice2Val == 5) {$('#dice-two').attr('class', 'side-5') }
			else if (Player.dice2Val == 6) { $('#dice-two').attr('class', 'side-6') }

		Player.dice3Val = Math.floor(Math.random() * 6) + 1;

		if (Player.dice3Val == 1) {$('#dice-three').attr('class', 'side-1')}
			else if (Player.dice3Val == 2) {$('#dice-three').attr('class', 'side-2')}
			else if (Player.dice3Val == 3) { $('#dice-three').attr('class', 'side-3')}
			else if (Player.dice3Val == 4) {$('#dice-three').attr('class', 'side-4')}
			else if (Player.dice3Val == 5) {$('#dice-three').attr('class', 'side-5')}
			else if (Player.dice3Val == 6) { $('#dice-three').attr('class', 'side-6')}
		},
	calcRollScore: function() {
			var rollsArray = [Player.dice1Val, Player.dice2Val, Player.dice3Val];
			var orderedRollsArray = rollsArray.sort();
			console.log("calcRollScore; rollsArray is:  " + rollsArray);
			console.log("calcRollScore; orderedRollsArray is:  " + orderedRollsArray);
			console.log("calcRollScore; orderedRollsArray[1] is:  " + orderedRollsArray[1]);
			// Sort the array

				// Map over the sorted array to create a new array with the unique value(s)

				// Assign the new arrays length to a variable
					
					// If the new array has zero length to see if it was a triple score, if so, assign triple value to score - end roll, next player

					// If the new array has a length of 1, assign the only value to the players score - end roll, next player

					// If the new array has a length of 3, 
			
						// Check if the new array matches winCombo of [4,5,6] - end round, player wins
			
						// Check if the new array matches loseCombo of [1,2,3] - end round, player loses

						// Otherwise, assign null to the player's score



			// CODE TO REFACTOR
			for(var i = 0; i < orderedRollsArray.length; i++) {
				// In the sorted array, check if the 1st and 2nd value
				if (orderedRollsArray[0] === orderedRollsArray[1] && orderedRollsArray[1] === orderedRollsArray[2]) {
					return orderedRollsArray[0] + 6;
				} else if (orderedRollsArray[0] === orderedRollsArray[1] && orderedRollsArray[1] !== orderedRollsArray[2]) {
					return orderedRollsArray[2];
				} else if (orderedRollsArray[0] === orderedRollsArray[2] && orderedRollsArray[2] !== orderedRollsArray[1]) {
					return orderedRollsArray[1];
				} else if (orderedRollsArray[0] !== orderedRollsArray[1] && orderedRollsArray[1] === orderedRollsArray[2]) {
					return orderedRollsArray[0];
				} else if (orderedRollsArray[0] === 4 && orderedRollsArray[1] === 5 && orderedRollsArray[2] === 6) {
					return 13;
				} else if (orderedRollsArray[0] === 1 && orderedRollsArray[1] === 2 && orderedRollsArray[2] === 3) {
					return -1;
				} else {
					return 0;
					}
	}

},
	updateScore: function() {
		if (Player.calcRollScore < 0) {
		$('autolose-modal').modal('show');
		} else if (Player.calcRollScore > 12) {
		$('win-modal').modal('show');
		soundEffectChaChing()
		} else if (0 < Player.calcRollScore < 7) {
		$('points-modal').modal('show');
		$('#points').text(Player.calcRollScore);
		}
		else {$('try-again-modal').modal('show');
			}
		},

	};


//THIS IS THE JQUERY FOR THE "ROLL DICE" BUTTON


	$('#roll-dice').click(function(){
		Player.calcRollScore();
		Player.rollDice();
		Player.calcRollScore();
		soundEffectDiceRoll();
		Player.updateScore();

		});



	$('#about').click(function(){
		$('myModal').modal('show');
	});



});

