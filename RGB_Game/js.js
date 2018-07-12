var numSquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll('.square');
var colorDisplay = document.getElementById('colorDisplay');
var message = document.getElementById("message");
var header = document.querySelector('h1');
var resetButton = document.querySelector('#reset');
var modeButtons = document.querySelectorAll('.mode');

init();

function init() {
	//mode buttons event listeners
	setupModeButtons();

	setupSqaures();
	reset()
	colorDisplay.textContent = pickedColor;
}

function setupModeButtons() {
	for (var i = 0; i < modeButtons.length; i++) {
		modeButtons[i].addEventListener("click", function() {
			modeButtons[0].classList.remove("selected");
			modeButtons[1].classList.remove("selected");
			this.classList.add("selected");
			this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
			reset();
		});
	}
}

function setupSqaures() {
	for (var i = 0; i < squares.length; ++i) {
		//add click listener to squares
		squares[i].addEventListener('click', function(e) {
			//grab color of square
			var clickedColor = this.style.backgroundColor;

			//compare color to pickedColor
			if (clickedColor === pickedColor) {
				message.textContent = 'Correct!';
				changeColors();
				header.style.backgroundColor = pickedColor;
				resetButton.textContent = "Play Again?"
			}
			else{
				this.style.backgroundColor = "#232323";
				message.textContent = 'Try Again';
			}
		});
	}
}


resetButton.addEventListener("click", function() {
	reset()
});


function reset() {
	message.textContent = "";
	resetButton.textContent = "New Colors";
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for (var i = 0; i < squares.length; ++i) {
		if (colors[i]) {
			squares[i].style.display = "block";
			squares[i].style.backgroundColor = colors[i];
		}
		else{
			squares[i].style.display = "none";
		}
	}
	header.style.backgroundColor = "steelblue";
}

function changeColors() {
	for (var i = 0; i < squares.length; ++i) {
		squares[i].style.backgroundColor = pickedColor;
	}
}

function pickColor() {
	var randNum = Math.floor(Math.random() * colors.length);
	return colors[randNum];
}

function generateRandomColors(num) {
	var colors = [];
	for (var i = 0; i < num; ++i) {
		colors.push(randomColor())
	}
	return colors;
}

function randomColor() {
	var r = Math.floor(Math.random() * 255);
	var g = Math.floor(Math.random() * 255);
	var b = Math.floor(Math.random() * 255);
	return "rgb(" + r + ", " + g + ", " + b + ")";
}