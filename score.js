const btnOne = document.getElementById('playerOne');
const btnTwo = document.getElementById('playerTwo');
const btnRestart = document.getElementById('restart');

let oneSp = document.getElementById('one');
let twoSp = document.getElementById('two');

const valO = parseInt(document.getElementById('ValOne'));
const valTw = parseInt(document.getElementById('ValTwo'));
const valTh = parseInt(document.getElementById('ValThree'));

let select = document.getElementById('value');

select.addEventListener('change', (event) => {
	btnOne.addEventListener('click', function() {
		oneSp.innerHTML = parseInt(oneSp.innerHTML) + 1;

		if (maxValue == '5' && oneSp.innerHTML == '5') {
			alert('Player One wins!');
			btnOne.disabled = true;
			btnTwo.disabled = true;
		} else if (maxValue == '7' && oneSp.innerHTML == '7') {
			alert('Player One wins!');
			btnOne.disabled = true;
			btnTwo.disabled = true;
		} else if (maxValue == '9' && oneSp.innerHTML == '9') {
			alert('Player One wins!');
			btnOne.disabled = true;
			btnTwo.disabled = true;
		}
	});
	btnTwo.addEventListener('click', function() {
		twoSp.innerHTML = parseInt(twoSp.innerHTML) + 1;
		if (maxValue == '5' && twoSp.innerHTML == '5') {
			alert('Player Two wins!');
			btnOne.disabled = true;
			btnTwo.disabled = true;
		} else if (maxValue == '7' && twoSp.innerHTML == '7') {
			alert('Player Two wins!');
			btnOne.disabled = true;
			btnTwo.disabled = true;
		} else if (maxValue == '9' && twoSp.innerHTML == '9') {
			alert('Player Two wins!');
			btnOne.disabled = true;
			btnTwo.disabled = true;
		}
	});

	let maxValue = event.target.value;
});
