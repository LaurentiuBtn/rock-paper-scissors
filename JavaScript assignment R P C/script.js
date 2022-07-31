const arr = ['Rock', 'Paper', 'Scissors'];
let playerScore = 0;
let computerScore = 0;

function computerPlay() {
	return arr[Math.floor(Math.random() * arr.length)]
}
const playerSelection = () => {
    return prompt("Type your selection");
}

function playRound(playerSelect, computerSelection){
	const player = playerSelect.toLowerCase();
	const computer = computerSelection;

	let result ='';

	if (player == computer){
		result = 'Equality';
	}
	else if (player == 'rock' ) {
		if(computer == 'paper') {
			result = 'You lose! Paper beats Rock!';
			computerScore++;
		}else{
			result = 'You won! Rock beats Scissors!';
			playerScore++;
		}
	}
	else if(player == 'paper'){
		if(computer == 'scissors') {
			result = 'You lose! Scissors beats Paper!';
			computerScore++;
		}else{
			result = 'You won! Paper beats Rock!';
			playerScore++;
		}
	}
	else if(player == 'scissors'){
		if(computer == 'paper') {
			result = 'You won! Scissors beats paper!';
			playerScore++;
		}else{
			result = 'You lose! Rock beats scissors!';
			computerScore++;
		}
	}
alert(`${result} \nPlayer Score ${playerScore}  -  ${computerScore} Computer Score`);
		
	
}

function game () {
	for(let i = 0; i < 5; i++) {
		let receivedPlayer = playerSelection();
        if(receivedPlayer.toLocaleLowerCase() !== "rock" && receivedPlayer.toLowerCase() !== "paper" && receivedPlayer.toLowerCase() !== "scissors"){
        	alert('Wrong input!');
        	i--;
        }else{
        	playRound(receivedPlayer, computerPlay());
        }
    }
}

console.log('Lets play : ' + game());
