let display = document.getElementById("display");
let buttons = Array.from(document.querySelectorAll("button"));
let buttonsArray = Array.from(buttons);
let string="";

buttonsArray.forEach(function(btn){
  btn.addEventListener('click', function(event){
    if(event.target.innerText == "DEL" ){
      string = string.substring(0, string.length - 1);
      display.value = string;
    }
    else if(event.target.innerText == "AC"){
      string = "";
      display.value = string;
    }
    else if(event.target.innerText == "="){
      string = eval(string);
      display.value = string;
    }
    else {
      string += event.target.innerText;
      display.value = string;
    }
  }) 
})