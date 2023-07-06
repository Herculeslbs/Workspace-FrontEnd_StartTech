const btn1 = document.querySelector("#send1");
const btn2 = document.querySelector("#send2");
const btn3 = document.querySelector("#send3");
const btn4 = document.querySelector("#send4");
let nota1;
let nota2;
let nota3;
let nota4;

btn1.addEventListener("click", function (e) {
  e.preventDefault();
  const resultado = document.querySelector("#n1");
  nota1 = resultado.value;
  console.log(nota1);
});

btn2.addEventListener("click", function (e) {
  e.preventDefault();
  const resultado = document.querySelector("#n2");
  nota2 = resultado.value;
  console.log(nota2);
});

btn3.addEventListener("click", function (e) {
  e.preventDefault();
  const resultado = document.querySelector("#n3");
  nota3 = resultado.value;
  console.log(nota3);
});

btn4.addEventListener("click", function (e) {
  e.preventDefault();
  const resultado = document.querySelector("#n4");
  nota4 = resultado.value;
  console.log(nota4);
});
