const btn = document.querySelectorAll<HTMLButtonElement>('.btn');
const display = document.querySelector<HTMLElement>('#screen');

var clearBtn = document.querySelector<HTMLButtonElement>("#clear");
var percBtn = document.querySelector<HTMLButtonElement>("#perc");
var divideBtn = document.querySelector<HTMLButtonElement>("#divide");
var mulBtn = document.querySelector<HTMLButtonElement>("#mul");

var sevBtn = document.querySelector<HTMLButtonElement>("#sev");
var eightBtn = document.querySelector<HTMLButtonElement>("#eight");
var nineBtn = document.querySelector<HTMLButtonElement>("#nine");
var minusBtn = document.querySelector<HTMLButtonElement>("#minus");

var fourBtn = document.querySelector<HTMLButtonElement>("#four");
var fiveBtn = document.querySelector<HTMLButtonElement>("#five");
var sixBtn = document.querySelector<HTMLButtonElement>("#six");
var plusBtn = document.querySelector<HTMLButtonElement>("#plus");

var oneBtn = document.querySelector<HTMLButtonElement>("#one");
var twoBtn = document.querySelector<HTMLButtonElement>("#two");
var threeBtn = document.querySelector<HTMLButtonElement>("#three");
var equalBtn = document.querySelector<HTMLButtonElement>("#equal");

var zeroBtn = document.querySelector<HTMLButtonElement>("#zero");
var decimalBtn = document.querySelector<HTMLButtonElement>("#decimal");


btn.forEach(function(button: HTMLButtonElement){
    button.addEventListener('click', function(){
      
        let output = this.textContent;
        if (this.id !=="clear" && this.id !=="equal"){
            if(display && display.textContent === "0"){
                display.textContent = output;
            }
            else if(display) {
                display.textContent +=output;
            }
        }
        console.log(output);    
    });
});

function result(){
    if (!display) return;

    try{
        const nowvalue = display.textContent ?? '0';
        const mathcal = nowvalue.replace('x','*');
        const result = eval(mathcal);
        display.textContent = String(result);
    }
    catch {
        display.textContent = "Error";
    }
}

if (equalBtn) {
    equalBtn.addEventListener('click', result);
}

clearBtn?.addEventListener('click', function(){
    if (display) {
        display.textContent = '0';
    }
});