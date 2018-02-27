let keyTrainer = {
	chars: ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'z', 'x', 'c', 'v', 'b', 'n', 'm'],
	charCount: 0,
	setCharCount: function() {
		let charCountInput;
		let res = 0;
		while (this.checkPositiveInteger(res) === false) {
			charCountInput = prompt("Введите колличество символов");
			res = Number(charCountInput);
		}
		this.charCount = res;
		return res;
	},
	checkPositiveInteger: function(num) {
		if (num % 1 === 0 && num > 0) {
			return true;
		} else {
		return false;
		}
	},
	task: "",
	createTask: function(){
		let res = [];
		for (let i = 0; i < this.charCount; i++) {
			res.push(this.chars[Math.floor(Math.random() * this.chars.length)]);
		}
		this.task = res.join('');
		return res;
	},
	startTask: function() {
		let userInput = prompt(`Наберите следующую строку: ${this.task}`);
		let res = 0;
		if (userInput !== this.task) {
			let taskArr = this.task.split("");
			let userArr = userInput.split("");
			res = (function(arr1, arr2) {
				for (let i = 0; i < taskArr.length; i++) {
					arr1[i] === arr2[i] ? res : res++;
				}
			return res;
			})(userArr, taskArr);
		} 
		this.userErrors = res;
		return res;
	},
	userErrors: 0
};
let run = function(obj){
	obj.setCharCount();
	obj.checkPositiveInteger();
	obj.createTask();
	obj.startTask();
	if (obj.userErrors === 0) {
		console.log("Поздравляем!");
	} else {
		console.log(`У вас  ${obj.userErrors} ошибок. Удачи в следующей попытке!`)
	};
};

run(keyTrainer);