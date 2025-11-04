const display = document.getElementById("display");
const one = document.getElementById("one");
const two = document.getElementById("two");
const three = document.getElementById("three");
const body = document.querySelector("body");
const toggle = document.getElementById("circle");

function del(){
  display.value = display.value.slice(0,-1);
}

function appendtodisplay(input){
  display.value += input;
}

function resetDisplay(){
  display.value = "";
}

function equalDisplay(){
  display.value = eval(display.value);
}

two.addEventListener('click',function(){
  body.classList.add('active1');
  body.classList.remove('active2');
  toggle.style.left = '36%';
})

one.addEventListener('click',function(){
  body.classList.remove('active1');
  body.classList.remove('active2');
  toggle.style.left = '0%';
})

three.addEventListener('click',function(){
  body.classList.add('active2');
  body.classList.remove('active1');
  toggle.style.left = '75%';
})