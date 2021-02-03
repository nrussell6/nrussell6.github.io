//Defining Game Spaces
var button1 = document.querySelector("#button1");
var button2 = document.querySelector("#button2");
var button3 = document.querySelector("#button3");
var button4 = document.querySelector("#button4");
var button5 = document.querySelector("#button5");
var button6 = document.querySelector("#button6");
var button7 = document.querySelector("#button7");
var button8 = document.querySelector("#button8");
var button9 = document.querySelector("#button9");
var gameTable = document.querySelector(".table");

//Defining Reset Button
var resetButton = document.querySelector(".resetButton");

//defines game pieces
var xTurn = "X";
var oTurn = "O";

var claimedBy = [" ", " ", " ", " ", " ", " ", " ", " ", " "];

var currentTurn = xTurn; //governs whose turn it is
var currentTurnIndicator = document.querySelector(".currentTurnIndicator");
var gameOn = "yes"; //while true game is on. When false game is over.

//Tracks How Many Times Player Wins
var xWins = document.querySelector(".xWin");
var oWins = document.querySelector(".oWin");
var timesXWins = 0;
var timesOWins = 0;

function turnChange(){ //switches turn
	if(currentTurn == xTurn){
		currentTurn = oTurn;
	} else{
		currentTurn = xTurn;
	}
	currentTurnIndicator.innerHTML = currentTurn;
}

function gameSpaceEventListener(){
	button1.addEventListener("click", function(){
		this.innerHTML = "<h1>" + currentTurn + "</h1>"; //sets piece to whose turn it is.
		claimedBy[0] = currentTurn; //sets who claims this piece, X or O

		turnChange();
		this.style.cssText = "pointer-events: none; width:4em; height:4em;"; //disables additional clicking
	});
	button2.addEventListener("click", function(){
		this.innerHTML = "<h1>" + currentTurn + "</h1>"; //sets piece to whose turn it is.
		claimedBy[1] = currentTurn; //sets who claims this piece, X or O

		turnChange();
		this.style.cssText = "pointer-events: none; width:4em; height:4em;"; //disables additional clicking
	});
	button3.addEventListener("click", function(){
		this.innerHTML = "<h1>" + currentTurn + "</h1>"; //sets piece to whose turn it is.
		claimedBy[2] = currentTurn; //sets who claims this piece, X or O

		turnChange();
		this.style.cssText = "pointer-events: none; width:4em; height:4em;"; //disables additional clicking
	});
	button4.addEventListener("click", function(){
		this.innerHTML = "<h1>" + currentTurn + "</h1>"; //sets piece to whose turn it is.
		claimedBy[3] = currentTurn; //sets who claims this piece, X or O

		turnChange();
		this.style.cssText = "pointer-events: none; width:4em; height:4em;"; //disables additional clicking
	});
	button5.addEventListener("click", function(){
		this.innerHTML = "<h1>" + currentTurn + "</h1>"; //sets piece to whose turn it is.
		claimedBy[4] = currentTurn; //sets who claims this piece, X or O

		turnChange();
		this.style.cssText = "pointer-events: none; width:4em; height:4em;"; //disables additional clicking
	});
	button6.addEventListener("click", function(){
		this.innerHTML = "<h1>" + currentTurn + "</h1>"; //sets piece to whose turn it is.
		claimedBy[5] = currentTurn; //sets who claims this piece, X or O

		turnChange();
		this.style.cssText = "pointer-events: none; width:4em; height:4em;"; //disables additional clicking
	});
	button7.addEventListener("click", function(){
		this.innerHTML = "<h1>" + currentTurn + "</h1>"; //sets piece to whose turn it is.
		claimedBy[6] = currentTurn; //sets who claims this piece, X or O

		turnChange();
		this.style.cssText = "pointer-events: none; width:4em; height:4em;"; //disables additional clicking
	});
	button8.addEventListener("click", function(){
		this.innerHTML = "<h1>" + currentTurn + "</h1>"; //sets piece to whose turn it is.
		claimedBy[7] = currentTurn; //sets who claims this piece, X or O

		turnChange();
		this.style.cssText = "pointer-events: none; width:4em; height:4em;"; //disables additional clicking
	});
	button9.addEventListener("click", function(){
		this.innerHTML = "<h1>" + currentTurn + "</h1>"; //sets piece to whose turn it is.
		claimedBy[8] = currentTurn; //sets who claims this piece, X or O

		turnChange();
		this.style.cssText = "pointer-events: none; width:4em; height:4em;"; //disables additional clicking
	});
}

function resetButtonToggle(gameOn){ //Makes each space clickable or unclickable
	switch(gameOn){
		case "yes":
			button1.style.cssText = "pointer-events: auto; width:4em; height:4em;";
			button2.style.cssText = "pointer-events: auto; width:4em; height:4em;";
			button3.style.cssText = "pointer-events: auto; width:4em; height:4em;";
			button4.style.cssText = "pointer-events: auto; width:4em; height:4em;";
			button5.style.cssText = "pointer-events: auto; width:4em; height:4em;";
			button6.style.cssText = "pointer-events: auto; width:4em; height:4em;";
			button7.style.cssText = "pointer-events: auto; width:4em; height:4em;";
			button8.style.cssText = "pointer-events: auto; width:4em; height:4em;";
			button9.style.cssText = "pointer-events: auto; width:4em; height:4em;";
			break;
		case "no":
			button1.style.cssText = "pointer-events: none; width:4em; height:4em;";
			button2.style.cssText = "pointer-events: none; width:4em; height:4em;";
			button3.style.cssText = "pointer-events: none; width:4em; height:4em;";
			button4.style.cssText = "pointer-events: none; width:4em; height:4em;";
			button5.style.cssText = "pointer-events: none; width:4em; height:4em;";
			button6.style.cssText = "pointer-events: none; width:4em; height:4em;";
			button7.style.cssText = "pointer-events: none; width:4em; height:4em;";
			button8.style.cssText = "pointer-events: none; width:4em; height:4em;";
			button9.style.cssText = "pointer-events: none; width:4em; height:4em;";
			break;

	}
}

function gameReset(){
	gameOn = "yes";
	resetButtonToggle(gameOn);
	currentTurn = "X";
	currentTurnIndicator.innerHTML = currentTurn;
	//button1
	button1.innerHTML = " "; //resets innerHTML.
	claimedBy[0] = " "; //resets claimed by

	//button2
	button2.innerHTML = " "; //resets innerHTML.
	claimedBy[1] = " "; //resets claimed by

	//button3
	button3.innerHTML = " "; //resets innerHTML.
	claimedBy[2] = " "; //resets claimed by

	//button4
	button4.innerHTML = " "; //resets innerHTML.
	claimedBy[3] = " "; //resets claimed by

	//button5
	button5.innerHTML = " "; //resets innerHTML.
	claimedBy[4] = " "; //resets claimed by

	//button6
	button6.innerHTML = " "; //resets innerHTML.
	claimedBy[5] = " "; //resets claimed by

	//button7
	button7.innerHTML = " "; //resets innerHTML.
	claimedBy[6] = " "; //resets claimed by

	//button8
	button8.innerHTML = " "; //resets innerHTML.
	claimedBy[7] = " "; //resets claimed by

	//button9
	button9.innerHTML = " "; //resets innerHTML.
	claimedBy[8] = " "; //resets claimed by

}

function addToScore(winner){
	switch(winner){
		case "X":
			timesXWins++; //Adds 1 to X's score
			xWins.innerHTML = "X: " + timesXWins; //Prints new score
			break;
		case "O":
			timesOWins++; //adds 1 to Y's score
			oWins.innerHTML = "O: " + timesOWins; //Prints new score
			break;
	}
	return(winner);
}

function victoryCondition(){
	var winner = " "; //Will be set to who the winner is.

	/*---X WINS---*/
	//spaces 1, 2, 3
	if(claimedBy[0] == "X" && claimedBy[1] == "X" && claimedBy[2] == "X"){
		winner = "X";
		gameOn = "no";
		resetButtonToggle(gameOn);
	}
	//spaces 1, 4, 7
	else if(claimedBy[0] == "X" && claimedBy[3] == "X" && claimedBy[6] == "X"){
		winner = "X";
		gameOn = "no";
		resetButtonToggle(gameOn);
	}
	//spaces 1, 5, 9
	else if(claimedBy[0] == "X" && claimedBy[4] == "X" && claimedBy[8] == "X"){
		winner = "X";
		gameOn = "no";
		resetButtonToggle(gameOn);
	}
	//spaces 2, 5, 8
	else if(claimedBy[1] == "X" && claimedBy[4] == "X" && claimedBy[7] == "X"){
		winner = "X";
		gameOn = "no";
		resetButtonToggle(gameOn);
	}
	//spaces 3, 5, 7
	else if(claimedBy[2] == "X" && claimedBy[4] == "X" && claimedBy[6] == "X"){
		winner = "X";
		gameOn = "no";
		resetButtonToggle(gameOn);
	}
	//spaces 3, 6, 9
	else if(claimedBy[2] == "X" && claimedBy[5] == "X" && claimedBy[8] == "X"){
		winner = "X";
		gameOn = "no";
		resetButtonToggle(gameOn);
	}
	//spaces 4, 5, 6
	else if(claimedBy[3] == "X" && claimedBy[4] == "X" && claimedBy[5] == "X"){
		winner = "X";
		gameOn = "no";
		resetButtonToggle(gameOn);
	}
	//spaces 7, 5, 3
	else if(claimedBy[6] == "X" && claimedBy[4] == "X" && claimedBy[2] == "X"){
		winner = "X";
		gameOn = "no";
		resetButtonToggle(gameOn);
	}
	//spaces 7, 8, 9
	else if(claimedBy[6] == "X" && claimedBy[7] == "X" && claimedBy[8] == "X"){
		winner = "X";
		gameOn = "no";
		resetButtonToggle(gameOn);
	}

	/*---O WINS---*/
	//spaces 1, 2, 3
	else if(claimedBy[0] == "O" && claimedBy[1] == "O" && claimedBy[2] == "O"){
		winner = "O";
		gameOn = "no";
		resetButtonToggle(gameOn);
	}
	//spaces 1, 4, 7
	else if(claimedBy[0] == "O" && claimedBy[3] == "O" && claimedBy[6] == "O"){
		winner = "O";
		gameOn = "no";
		resetButtonToggle(gameOn);
	}
	//spaces 1, 5, 9
	else if(claimedBy[0] == "O" && claimedBy[4] == "O" && claimedBy[8] == "O"){
		winner = "O";
		gameOn = "no";
		resetButtonToggle(gameOn);
	}
	//spaces 2, 5, 8
	else if(claimedBy[1] == "O" && claimedBy[4] == "O" && claimedBy[7] == "O"){
		winner = "O";
		gameOn = "no";
		resetButtonToggle(gameOn);
	}
	//spaces 3, 5, 7
	else if(claimedBy[2] == "O" && claimedBy[4] == "O" && claimedBy[6] == "O"){
		winner = "O";
		gameOn = "no";
		resetButtonToggle(gameOn);
	}
	//spaces 3, 6, 9
	else if(claimedBy[2] == "O" && claimedBy[5] == "O" && claimedBy[8] == "O"){
		winner = "O";
		gameOn = "no";
		resetButtonToggle(gameOn);
	}
	//spaces 4, 5, 6
	else if(claimedBy[3] == "O" && claimedBy[4] == "O" && claimedBy[5] == "O"){
		winner = "O";
		gameOn = "no";
		resetButtonToggle(gameOn);
	}
	//spaces 7, 5, 3
	else if(claimedBy[6] == "O" && claimedBy[4] == "O" && claimedBy[2] == "O"){
		winner = "O";
		gameOn = "no";
		resetButtonToggle(gameOn);
	}
	//spaces 7, 8, 9
	else if(claimedBy[6] == "O" && claimedBy[7] == "O" && claimedBy[8] == "O"){
		winner = "O";
		gameOn = "no";
		resetButtonToggle(gameOn);
	}

	//Adds score to the game's winner, if someone won the game.
	if( (winner != " ") && (currentTurn != " ")){
		addToScore(winner);
		currentTurn = " ";
	}
	currentTurnIndicator.innerHTML = currentTurn;
}


function artificialIntelligence(){
	var xAiCheckbox = document.querySelector("#xAI");
	var oAiCheckbox = document.querySelector("#oAI");
	var ranNum = Math.floor(Math.random()*10);

	//Player X's AI
	if(currentTurn == "X" && xAiCheckbox.checked === true){
		switch(ranNum){
			case 1:
				if(claimedBy[0] == " "){
					button1.innerHTML = "<h1>" + currentTurn + "</h1>"; //sets piece to whose turn it is.
					claimedBy[0] = currentTurn; //sets who claims this piece, X or O
					turnChange();
					button1.style.cssText = "pointer-events: none; width:4em; height:4em;"; //disables additional clicking
					break;
				} 
			case 2:
				if(claimedBy[1] == " "){
					button2.innerHTML = "<h1>" + currentTurn + "</h1>"; //sets piece to whose turn it is.
					claimedBy[1] = currentTurn; //sets who claims this piece, X or O
					turnChange();
					button2.style.cssText = "pointer-events: none; width:4em; height:4em;"; //disables additional clicking
					break;
				} 
			case 3:
				if(claimedBy[2] == " "){
					button3.innerHTML = "<h1>" + currentTurn + "</h1>"; //sets piece to whose turn it is.
					claimedBy[2] = currentTurn; //sets who claims this piece, X or O
					turnChange();
					button3.style.cssText = "pointer-events: none; width:4em; height:4em;"; //disables additional clicking
					break;
				} 
			case 4:
				if(claimedBy[3] == " "){
					button4.innerHTML = "<h1>" + currentTurn + "</h1>"; //sets piece to whose turn it is.
					claimedBy[3] = currentTurn; //sets who claims this piece, X or O
					turnChange();
					button4.style.cssText = "pointer-events: none; width:4em; height:4em;"; //disables additional clicking
					break;
				} 
			case 5:
				if(claimedBy[4] == " "){
					button5.innerHTML = "<h1>" + currentTurn + "</h1>"; //sets piece to whose turn it is.
					claimedBy[4] = currentTurn; //sets who claims this piece, X or O
					turnChange();
					button5.style.cssText = "pointer-events: none; width:4em; height:4em;"; //disables additional clicking
					break;
				} 
			case 6:
				if(claimedBy[5] == " "){
					button6.innerHTML = "<h1>" + currentTurn + "</h1>"; //sets piece to whose turn it is.
					claimedBy[5] = currentTurn; //sets who claims this piece, X or O
					turnChange();
					button6.style.cssText = "pointer-events: none; width:4em; height:4em;"; //disables additional clicking
					break;
				} 
			case 7:
				if(claimedBy[6] == " "){
					button7.innerHTML = "<h1>" + currentTurn + "</h1>"; //sets piece to whose turn it is.
					claimedBy[6] = currentTurn; //sets who claims this piece, X or O
					turnChange();
					button7.style.cssText = "pointer-events: none; width:4em; height:4em;"; //disables additional clicking
					break;
				} 
			case 8:
				if(claimedBy[7] == " "){
					button8.innerHTML = "<h1>" + currentTurn + "</h1>"; //sets piece to whose turn it is.
					claimedBy[7] = currentTurn; //sets who claims this piece, X or O
					turnChange();
					button8.style.cssText = "pointer-events: none; width:4em; height:4em;"; //disables additional clicking
					break;
				} 
			case 9:
				if(claimedBy[8] == " "){
					button9.innerHTML = "<h1>" + currentTurn + "</h1>"; //sets piece to whose turn it is.
					claimedBy[8] = currentTurn; //sets who claims this piece, X or O
					turnChange();
					button9.style.cssText = "pointer-events: none; width:4em; height:4em;"; //disables additional clicking
					break;
				} 
			default:
				artificialIntelligence();
		}
	}

	//Player O's AI
	if(currentTurn == "O" && oAiCheckbox.checked === true){
		switch(ranNum){
			case 1:
				if(claimedBy[0] == " "){
					button1.innerHTML = "<h1>" + currentTurn + "</h1>"; //sets piece to whose turn it is.
					claimedBy[0] = currentTurn; //sets who claims this piece, X or O
					turnChange();
					button1.style.cssText = "pointer-events: none; width:4em; height:4em;"; //disables additional clicking
					break;
				} 
			case 2:
				if(claimedBy[1] == " "){
					button2.innerHTML = "<h1>" + currentTurn + "</h1>"; //sets piece to whose turn it is.
					claimedBy[1] = currentTurn; //sets who claims this piece, X or O
					turnChange();
					button2.style.cssText = "pointer-events: none; width:4em; height:4em;"; //disables additional clicking
					break;
				} 
			case 3:
				if(claimedBy[2] == " "){
					button3.innerHTML = "<h1>" + currentTurn + "</h1>"; //sets piece to whose turn it is.
					claimedBy[2] = currentTurn; //sets who claims this piece, X or O
					turnChange();
					button3.style.cssText = "pointer-events: none; width:4em; height:4em;"; //disables additional clicking
					break;
				} 
			case 4:
				if(claimedBy[3] == " "){
					button4.innerHTML = "<h1>" + currentTurn + "</h1>"; //sets piece to whose turn it is.
					claimedBy[3] = currentTurn; //sets who claims this piece, X or O
					turnChange();
					button4.style.cssText = "pointer-events: none; width:4em; height:4em;"; //disables additional clicking
					break;
				} 
			case 5:
				if(claimedBy[4] == " "){
					button5.innerHTML = "<h1>" + currentTurn + "</h1>"; //sets piece to whose turn it is.
					claimedBy[4] = currentTurn; //sets who claims this piece, X or O
					turnChange();
					button5.style.cssText = "pointer-events: none; width:4em; height:4em;"; //disables additional clicking
					break;
				} 
			case 6:
				if(claimedBy[5] == " "){
					button6.innerHTML = "<h1>" + currentTurn + "</h1>"; //sets piece to whose turn it is.
					claimedBy[5] = currentTurn; //sets who claims this piece, X or O
					turnChange();
					button6.style.cssText = "pointer-events: none; width:4em; height:4em;"; //disables additional clicking
					break;
				} 
			case 7:
				if(claimedBy[6] == " "){
					button7.innerHTML = "<h1>" + currentTurn + "</h1>"; //sets piece to whose turn it is.
					claimedBy[6] = currentTurn; //sets who claims this piece, X or O
					turnChange();
					button7.style.cssText = "pointer-events: none; width:4em; height:4em;"; //disables additional clicking
					break;
				} 
			case 8:
				if(claimedBy[7] == " "){
					button8.innerHTML = "<h1>" + currentTurn + "</h1>"; //sets piece to whose turn it is.
					claimedBy[7] = currentTurn; //sets who claims this piece, X or O
					turnChange();
					button8.style.cssText = "pointer-events: none; width:4em; height:4em;"; //disables additional clicking
					break;
				} 
			case 9:
				if(claimedBy[8] == " "){
					button9.innerHTML = "<h1>" + currentTurn + "</h1>"; //sets piece to whose turn it is.
					claimedBy[8] = currentTurn; //sets who claims this piece, X or O
					turnChange();
					button9.style.cssText = "pointer-events: none; width:4em; height:4em;"; //disables additional clicking
					break;
				} 
			default:
				artificialIntelligence();
		}
	}
}


//Old gameFlow() function
function gameFlow(){
	gameSpaceEventListener();
	currentTurnIndicator.innerHTML = currentTurn;
	artificialIntelligence();
	document.addEventListener("click", function(){
		victoryCondition();
		artificialIntelligence();
		victoryCondition();
	});

	//Let "Game Reset Button" reset the game board.
	resetButton.addEventListener("click", function(){
		gameReset();
	});
}
gameFlow();

