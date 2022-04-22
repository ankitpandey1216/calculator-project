var buttons = document.getElementsByClassName("keypad");
var display = document.getElementById("display");
var operand1 = 0;
var operand2 = null;
var operator = null;

for(var i = 0;i < buttons.length ;i++){
    buttons[i].addEventListener('click',function(){
        var value = this.getAttribute('data-value');
        if(value == '+'){
            operator = '+';
            operand1 = parseFloat(display.textContent);
            display.innerText = "";
        }
        
        else if(value == '*'){
            operator = '*';
            operand1 = parseFloat(display.textContent);
            display.innerText = "";
        }
        else if(value == '-'){
            operator = '-';
            operand1 = parseFloat(display.textContent);
            display.innerText = "";
        }
        else if(value == '/'){
            operator = '/';
            operand1 = parseFloat(display.textContent);
            display.innerText = "";
        }
        else if(value == '%'){
            operator = '%';
            operand1 = parseFloat(display.textContent);
            display.innerText = "";
        }
        else if(value == '='){
            operand2 = parseFloat(display.textContent);
            var result = eval(operand1 + " " + operator + " " +operand2);
            display.innerText = result;
        }
        else{
            if(value == 'clear'){
                display.innerText = "";
                
            }else{
                display.innerText += value;
            }
        }

    });
}