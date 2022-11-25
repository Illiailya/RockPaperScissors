// =========================VARIABLES=================================
let player = document.getElementById("player")
let computer = document.getElementById("computer")
let resultEl = document.getElementById("result-el")
const playEl = document.getElementById("play-btn")
const rockEl = document.getElementById("rock-el")
const paperEl = document.getElementById("paper-el")
const scissorsEl = document.getElementById("scissors-el")
player.textContent = "player: "
computer.textContent = "Computer: "
resultEl.textContent = "Result is:  "
// ==================FUNCTIONS================================
function getRandomNumber(min, max) {
	return Math.floor(Math.random() * (max - min) + min);
}
function gettingValue(number) {
	if (number === 0) {
		return " 👊"
	} else if (number === 1) {
		return " ✋"
	} else {
		return " ✌"
	}
}
	rockEl.addEventListener("click", function() {
		let playersNumber = 0
		reset()
		play(playersNumber)
	})
	paperEl.addEventListener("click", function() {
		let playersNumber = 1
		reset()
		play(playersNumber)
	})
	scissorsEl.addEventListener("click", function() {
		let playersNumber = 2
		reset()
		play(playersNumber)
	})
function play(aaa) {
	let param1 = aaa;
	let param2 = getRandomNumber(0, 3)
	player.textContent = player.textContent + gettingValue(param1);
	computer.textContent = computer.textContent + gettingValue(param2);

	if (param1 === 0 && param2 === 1) {
		resultEl.textContent += "Computer Win"
	} else if (param1 === 0 && param2 === 2) {
		resultEl.textContent += "Player Win"
	} else if (param1 === 1 && param2 === 0) {
		resultEl.textContent += "Player Win"
	} else if (param1 === 1 && param2 === 2) {
		resultEl.textContent += "Computer Win"
	} else if (param1 === 2 && param2 === 0) {
		resultEl.textContent += "Computer Win"
	} else if (param1 === 2 && param2 === 1) {
		resultEl.textContent += "Player Win"
	} else {
		resultEl.textContent += "Draw!"
	}
}
function reset() {
	player.textContent = "Player: "
	computer.textContent = "Computer: "
	resultEl.textContent = "Result is:  "
}












