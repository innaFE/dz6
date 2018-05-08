let keyTrainer ={
chars: ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'z', 'x', 'c', 'v', 'b', 'n', 'm'],
charCount: '',
task: '',
userInput: [],
userErrors : null,
    setCharCount: function() {
      let num;
      while(true){
        num = prompt("Вам нужно ввести число: ");
     if (num === null) return;
     if(this.checkPositiveInteger(+num)) break;
    }
    this.charCount = +num;
},
    checkPositiveInteger: function(a) {
      if((Number.isInteger(a)) && a > 0){ 
        return true;
      }
    },
createTask: function(){
    if (this.charCount === null){
        return ; 
    } else {
    let arr = new Array(this.charCount);
    for (let i = 0; i < this.charCount; i++){
        arr[i] = this.chars[Math.floor(Math.random() * (this.chars.length ))];
    }
    this.task = arr;
}
},
startTask: function() {
    let entersymb = prompt('Введите ' + this.task.join(''));
    if (entersymb === null) 
        return;
    this.userInput = entersymb.split('');
    
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
const run = function(obj) {
    obj.setCharCount();
    if (obj.charCount === "") return
	obj.createTask();
	obj.startTask();
}
run(keyTrainer);



