const btn_nota1 = document.querySelector("#send1");
const btn_nota2 = document.querySelector("#send2");
const btn_nota3 = document.querySelector("#send3");
const btn_nota4 = document.querySelector("#send4");
const btn_calcular = document.querySelector("#media")
let nota1 = 0;
let nota2 = 0;
let nota3 = 0;
let nota4 = 0;
let media;

btn_nota1.addEventListener("click", function (e) {
  e.preventDefault();
  const resultado = document.querySelector("#n1");
  nota1 = resultado.value;
  console.log(nota1);
});

btn_nota2.addEventListener("click", function (e) {
  e.preventDefault();
  const resultado = document.querySelector("#n2");
  nota2 = resultado.value;
  console.log(nota2);
});

btn_nota3.addEventListener("click", function (e) {
  e.preventDefault();
  const resultado = document.querySelector("#n3");
  nota3 = resultado.value;
  console.log(nota3);
});

btn_nota4.addEventListener("click", function (e) {
  e.preventDefault();
  const resultado = document.querySelector("#n4");
  nota4 = resultado.value;
  console.log(nota4);
});

btn_calcular.addEventListener("click", function (e) {
  e.preventDefault();
  media = nota1 + nota2 + nota3 + nota4;
  console.log(media);
});
