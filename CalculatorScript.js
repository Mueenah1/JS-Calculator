let Name = prompt('Hi there, please enter your name: ');
if(Name == ''){
    alert('This field cannot be empty');
    Name = prompt('Hi there, please enter your name: ')
}else
alert('Hello ' + Name + '. Welcome to JS calculator.' )
alert(Name + ', enter "+" for Addition, "-" for Subtraction, "*" for Multiplication, "/" for Division')
let operator = prompt('Please enter your operation: ')
let number1 = parseFloat(prompt('Enter your first number: '))
let number2 = parseFloat(prompt('Enter your second number: '))
let answer = 0;
if (isNaN(number1) || isNaN(number2)){
    alert('Wrong input! Refresh the page and provide data')
} else{
    if(operator == '+'){
        answer = number1 + number2;
    }else if(operator == '-'){
        answer = number1 - number2;
    }else if(operator == '*'){
        answer = number1 * number2;
    }else if (operator == '/'){
        answer = number1 / number2;
    }
    alert(number1 +' ' + operator + ' ' + number2 + ' = ' + answer);
    alert('Refresh to try again.');
}

