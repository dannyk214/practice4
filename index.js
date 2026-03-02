const btn = document.querySelectorAll('.btn');
const display = document.querySelector('#screen');

var clearBtn = document.querySelector("#clear");
var percBtn = document.querySelector("#perc");
var divideBtn = document.querySelector("#divide");
var mulBtn = document.querySelector("#mul");

var sevBtn = document.querySelector("#sev");
var eightBtn = document.querySelector("#eight");
var nineBtn = document.querySelector("#nine");
var minusBtn = document.querySelector("#minus");

var fourBtn = document.querySelector("#four");
var fiveBtn = document.querySelector("#five");
var sixBtn = document.querySelector("#six");
var plusBtn = document.querySelector("#plus");

var oneBtn = document.querySelector("#one");
var twoBtn = document.querySelector("#two");
var threeBtn = document.querySelector("#three");
var equalBtn = document.querySelector("#equal");

var zeroBtn = document.querySelector("#zero");
var decimalBtn = document.querySelector("#decimal");


btn.forEach(function(button){
    button.addEventListener('click', function(){
      
        let output = this.textContent;
        if (this.id !=="clear" && this.id !=="equal"){
            if(display.textContent === "0"){
                display.textContent = output;
            }
            else {
                display.textContent +=output;
            }
        }
        console.log(output);    
    });
});

function result(){
    try{
        let nowvalue =display.textContent;
        let mathcal = nowvalue.replace('x','*');
        let result = eval(mathcal);
        display.textContent = result;
    }
    catch (err){
        display.textContent = "Error";
    }
}

equalBtn.addEventListener('click', result);

clearBtn.addEventListener('click', function(){
    result()
});
clearBtn.addEventListener('click', function(){
    display.textContent = '0';
});