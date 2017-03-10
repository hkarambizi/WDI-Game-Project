$(document).ready(function() {

$('div.modal').modal('show');
	function soundEffectChaChing() {
		var audio = $("#cha-ching")[0];
		audio.pause();
		audio.currentTime = 0;
		audio.play();
	}
soundEffectChaChing();
	/*
	//Game Variables:

	//These are the variables related to each round
	var roundResult;
	var roundWinner;
	var roundLoser;
	var roundTie;
	var roundNumber;

	//these are the variables related to the players
	var currentPlayer;
	var computer;
	var userPlayerName;
	var userPlayerThrowVelocity;
	var userPlayer;
	var computerRollPoints;
	var userRollPoints;
	var userDice1PointValue;
	var userDice2PointValue;
	var userDice3PointValue;
	var computerDice1PointValue;
	var computerDice2PointValue;
	var computerDice3PointValue;
	var userCoins;
	var computerCoins;


	const Game = {
		this.
	}
	*/
	function randomizeNumber() {
		//Randimizes a number between 1 and 6
		var random = Math.floor((Math.random() * 6) + 1);
		console.log(random);
	}
//side is the paramater to call the class change
	function rollDiceSide(side) {

		//Removes old class and adds the new
		var diceOne = $('#dice-one');
		var diceTwo = $('#dice-two');
		var diceThree = $('#dice-three');
		console.log("this: " + diceOne);
		console.log("Step 1 good!");
		//jquery grab div with id of dice
		var currentClassOne = diceOne.attr('class');
		console.log("CurrentClassOne:  " + currentClassOne);
		var currentClassTwo = diceTwo.attr('class');
		var currentClassThree = diceThree.attr('class');
		//variable to jquery grab attribiute value of class
		//variable to change class to newClass based on randomized number
		var newClass = 'show-' + side;
		console.log("newClassOne is :" + newClass);
		
		//predefined function attached to var dice (above) selecting #dice and removing class
		diceOne.removeClass();
		diceTwo.removeClass();
		diceThree.removeClass();
		//function attached to var dice (above) and adding the class chosen by randomized number
		diceOne.addClass(newClass);
		diceTwo.addClass(newClass);
		diceThree.addClass(newClass);
	
	
	}
	//function to call on audio clip (research more)
	function soundEffectDiceRoll() {
		var audio = $("#dice-roll")[0];
		audio.pause();
		audio.currentTime = 0;
		audio.play();
	}
	
	/*
	
	$('.dice-container').on('click', function() {
		//Function triggered When the event of the dice is dragged by the mouse
		//getElementbyID = Dice container
	//'dragstop' is an event that means you can drag something. 
		//var number = randomizeNumber();
//defining var number to represent the randomize number result 
		
		//conditinals to tell what class should be added to dice div if the randomized number matched each of these values.
		if (Player.dice1Val == 1) { rollDiceSide('front-one'); }
		else if (Player.dice1Val == 2) { rollDiceSide('back-one'); }
		else if (Player.dice1Val == 3) { rollDiceSide('right-one'); }
		else if (Player.dice1Val == 4) { rollDiceSide('left-one'); }
		else if (Player.dice1Val == 5) { rollDiceSide('top-one'); }
		else if (Player.dice1Val == 6) { rollDiceSide('bottom-one'); }
		
		soundEffect();
		
	});
	*/


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
	
	//conditinals to tell what class should be added to dice div if the randomized number matched each of these values.
		/*
		if (Player.dice1Val == 1) { rollDiceSide('front'); }
		else if (Player.dice1Val == 2) { rollDiceSide('back'); }
		else if (Player.dice1Val == 3) { rollDiceSide('right'); }
		else if (Player.dice1Val == 4) { rollDiceSide('left'); }
		else if (Player.dice1Val == 5) { rollDiceSide('top'); }
		else if (Player.dice1Val == 6) { rollDiceSide('bottom'); }
		
		
			Player.dice2Val = Math.floor(Math.random() * 6) + 1;
			if (Player.dice2Val == 1) { rollDiceSide('front'); }
		else if (Player.dice2Val == 2) { rollDiceSide('back'); }
		else if (Player.dice2Val == 3) { rollDiceSide('right'); }
		else if (Player.dice2Val == 4) { rollDiceSide('left'); }
		else if (Player.dice2Val == 5) { rollDiceSide('top'); }
		else if (Player.dice2Val == 6) { rollDiceSide('bottom'); }
			Player.dice3Val = Math.floor(Math.random() * 6) + 1;
			if (Player.dice1Val == 1) { rollDiceSide('front'); }
		else if (Player.dice1Val == 2) { rollDiceSide('back'); }
		else if (Player.dice1Val == 3) { rollDiceSide('right'); }
		else if (Player.dice1Val == 4) { rollDiceSide('left'); }
		else if (Player.dice1Val == 5) { rollDiceSide('top'); }
		else if (Player.dice1Val == 6) { rollDiceSide('bottom'); }
		*/
			//$('#dice-one').text(Player.dice1Val);
			//$('#dice-two').text(Player.dice2Val);
			//$('#dice-three').text(Player.dice3Val);
			Player.dice1Val = Math.floor(Math.random() * 6) + 1;
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
		else if (Player.dice1Val == 2) {$('#dice-three').attr('class', 'side-2')}
		else if (Player.dice1Val == 3) { $('#dice-three').attr('class', 'side-3')}
		else if (Player.dice1Val == 4) {$('#dice-three').attr('class', 'side-4')}
		else if (Player.dice1Val == 5) {$('#dice-three').attr('class', 'side-5')}
		else if (Player.dice1Val == 6) { $('#dice-three').attr('class', 'side-6')}
		}

	};
var rollsArray = [Player.dice1Val, Player.dice2Val, Player.dice3Val];
		console.log("this should put the values into an array!!!: " + rollsArray);
		var orderedRollsArray = rollsArray.sort;
			console.log("This is the sorted version!: " + orderedRollsArray);
			

	$('#roll-dice').click(function(){

		Player.rollDice();
		soundEffectDiceRoll();
		console.log("These are the player's values: " + Player.dice1Val);
		console.log(Player.dice2Val);
		console.log(Player.dice3Val);
	});

	$('#about').click(function(){
		$('div.modal').modal('show');
	});




const Computer = {
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
		compRollDice: function(){
			console.log('computer function activated')
			this.dice1Val = Math.floor(Math.random() * 6) + 1;
			this.dice2Val = Math.floor(Math.random() * 6) + 1;
			this.dice3Val = Math.floor(Math.random() * 6) + 1;
			$('#dice-one').text(this.dice1Val);
			$('#dice-two').text(this.dice2Val);
			$('#dice-three').text(this.dice3Val);
		}
	};
		
	$('#computer-dice').click(function(){
		Computer.compRollDice();
		console.log("These are the computer's values: " + Computer.dice1Val);
		console.log(Computer.dice2Val);
		console.log(Computer.dice3Val);
			});




/*
	// //these are the functions related to game play
	// var playerWin() {};
	// var playerLose() {};
	// var tieGame() {};

	// var rollDice() {};
	// var nextTurn() {};
	// var newRound() {};
	// var newPlayer() {};
	// var computerPlayFirst() {};
	// var userPlayFirst() {};
	// var winCoin() {};
	// var loseCoin() {};

	// var calcRollScore() {};
	// var compareScore() {};
	// var autoLose() {};
	// var autoWin() {};
	// var validateAnswers() {};
	// var setTimeout() {};
	// var pauseGame() {};
	// var playPrompt() {};


	// //These are the functions related to events
	// var diceAudio() {};
	// var cheerAudio() {};
	// var awAudio() {};
	// var backgroundAudio() {};
	// var coinAudio() {};
	// var rollOverAudio() {};
	// var hoverToneAudio() {};
	// var popAudio() {};
	// var stopAudio() {};
	// var laughAudio() {};
	// var shake() {};
	// var throwIncrease() {};
	// var popElement() {};
	// var pushInElement() {};


*/
});