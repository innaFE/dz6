let keyTrainer ={
chars: ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'z', 'x', 'c', 'v', 'b', 'n', 'm'],
charCount: null,
task: [],
userInput: [],
userErrors : null,
setCharCount: function() {
    return this.charCount = keyTrainer.checkPositiveInteger(prompt('Кол-во символов: '));
   
},
    
    checkPositiveInteger: function(number) {
		while(true){
			if (parseInt(number) > 0 && Number.isInteger(parseInt(number))) {
				return parseInt(number);
			} else if (number == null ) {
				return;
			} else {
				alert('Введите целое, положительное число')
				return keyTrainer.checkPositiveInteger(prompt('Кол-во символов: '));
			}
		}
    }, 
createTask: function(){
    let arr = [];
    for (let i = 0; i < this.charCount; i++){
        this.task.push(this.chars[Math.floor(Math.random() * (this.chars.length - 0))]);
    }
},
startTask: function() {
    this.userInput = prompt('Введите ' + this.task + ' :', '');
    for (let i = 0; i < this.userInput.length; i++) {
        if (this.userInput[i] !== this.task[i]) {
            this.userErrors++
        }
    }
    if (this.userErrors == null) {
        return console.log('Невероятно! Все правильно !');
    } else {
        return console.log('Вы допустили ' + this.userErrors + ' ошибок, старайтесь лучше!')
    }
}


};
function run() {
	keyTrainer.setCharCount();
	keyTrainer.createTask();
	keyTrainer.startTask();
}
run();



