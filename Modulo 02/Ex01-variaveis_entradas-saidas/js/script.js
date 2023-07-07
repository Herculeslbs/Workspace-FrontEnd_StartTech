// 1 - Faça um Programa que peça as 4 notas bimestrais e mostre a média;
const btn_nota1 = document.querySelector("#send1");
const btn_nota2 = document.querySelector("#send2");
const btn_nota3 = document.querySelector("#send3");
const btn_nota4 = document.querySelector("#send4");
const btn_calcular = document.querySelector("#media");
const resultado_media = document.querySelector("#resultado_media");
let nota1 = 0;
let nota2 = 0;
let nota3 = 0;
let nota4 = 0;
let media = 0;

btn_nota1.addEventListener("click", function (e) {
  e.preventDefault();
  const resultado = document.querySelector("#n1");
  nota1 = parseFloat(resultado.value);
  console.log("Nota 1° Bimestre: " + nota1);
});

btn_nota2.addEventListener("click", function (e) {
  e.preventDefault();
  const resultado = document.querySelector("#n2");
  nota2 = parseFloat(resultado.value);
  console.log("Nota 2° Bimestre: " + nota2);
});

btn_nota3.addEventListener("click", function (e) {
  e.preventDefault();
  const resultado = document.querySelector("#n3");
  nota3 = parseFloat(resultado.value);
  console.log("Nota 3° Bimestre: " + nota3);
});

btn_nota4.addEventListener("click", function (e) {
  e.preventDefault();
  const resultado = document.querySelector("#n4");
  nota4 = parseFloat(resultado.value);
  console.log("Nota 4° Bimestre: " + nota4);
});

btn_calcular.addEventListener("click", function (e) {
  e.preventDefault();
  media = parseFloat(nota1 + nota2 + nota3 + nota4) / 4;
  console.log("Sua média anual foi: " + media);
  resultado_media.value = media;
});

// 2 - Faça um Programa que peça o raio de um círculo, calcule e mostre sua área;
const btn_raio = document.querySelector("#send5");
const btn_area = document.querySelector("#area");
const resultado_area = document.querySelector("#resultado_area");
let raio = 0;
let area = 0;

btn_raio.addEventListener("click", function (e) {
  e.preventDefault();
  const resultado = document.querySelector("#raio");
  raio = parseFloat(resultado.value);
  console.log("Raio do círculo: " + raio);
});

btn_area.addEventListener("click", function (e) {
  e.preventDefault();
  const pi = 3.14159;
  area = pi * raio ** 2;
  console.log("Resultado da área do círculo: " + area.toFixed(2));
  resultado_area.value = area;
});

// 3 - Faça um Programa que peça a temperatura em graus Fahrenheit, transforme e mostre a temperatura em graus Celsius. C = 5 * ((F-32) / 9);
const btn_farh = document.querySelector("#send6");
const btn_celsius = document.querySelector("#celsius");
const resultado_celsius = document.querySelector("#resultado_celsius");
let farh = 0;
let celsius = 0;

btn_farh.addEventListener("click", function (e) {
  e.preventDefault();
  const resultado = document.querySelector("#fahr");
  farh = parseFloat(resultado.value);
  console.log("temperatura em graus Fahrenheit: " + farh + "°");
});

btn_celsius.addEventListener("click", function (e) {
  e.preventDefault();
  celsius = (farh - 32) * 5/9;
  console.log("Resultado da temperatura em graus Celsius: " + celsius.toFixed(1) + "°");
  resultado_celsius.value = celsius;
});

// 4 - Faça um programa que calcule e mostre a área e o perímetro de uma sala retangular cujas medidas são fornecidas pelo usuário.
const btn_comp = document.querySelector("#send7");
const btn_larg = document.querySelector("#send8");
const resultado_area_sl = document.querySelector("#resultado_area_sala");
const resultado_area_s = document.querySelector("#resultado_area_s");
const resultado_perimetro = document.querySelector("#resultado_perimetro");
const resultado_p = document.querySelector("#resultado_p");

let comp = 0;
let larg = 0;
let resultado_area_sala1 = 0;
let resultado_perimetro1 = 0

btn_comp.addEventListener("click", function (e) {
  e.preventDefault();
  const resultado = document.querySelector("#comp");
  comp = parseFloat(resultado.value);
  console.log("Comprimeto da sala: " + comp + "Mt");
});

btn_larg.addEventListener("click", function (e) {
  e.preventDefault();
  const resultado = document.querySelector("#larg");
  larg = parseFloat(resultado.value);
  console.log("Largura da sala: " + larg + "Mt");
});

resultado_area_sl.addEventListener("click", function (e) {
  e.preventDefault();
  resultado_area_sala1 = comp * larg;
  console.log("Resultado da área da sala: " + resultado_area_sala1.toFixed(1) + "M²");
  resultado_area_s.value = resultado_area_sala1;
});

resultado_perimetro.addEventListener("click", function (e) {
  e.preventDefault();
  resultado_perimetro1 = comp + comp + larg + larg;
  console.log("Resultado do perímetro da sala: " + resultado_perimetro1.toFixed(1) + "Mt");
  resultado_p.value = resultado_perimetro1;
});

// 5 - Escreva um programa para ler as dimensões de uma cozinha retangular, em seguida calcular e escrever a quantidade de caixas de azulejos necessarias para cobrir o chão da cozinha. Cada caixa de azulejos possui 2,5 m2.
const btn_comp_coz = document.querySelector("#send9");
const btn_larg_coz = document.querySelector("#send10");
const resultado_azul1 = document.querySelector("#resultado_azul");
const resultado_azul0 = document.querySelector("#resultado_azul0");
// const resultado_perimetro = document.querySelector("#resultado_perimetro");
// const resultado_p = document.querySelector("#resultado_p");

let comp_coz = 0;
let larg_coz = 0;
let resultado_azul = 0;
// let resultado_perimetro1 = 0

btn_comp_coz.addEventListener("click", function (e) {
  e.preventDefault();
  const resultado = document.querySelector("#comp_coz");
  comp_coz = parseFloat(resultado.value);
  console.log("Comprimeto da cozinha: " + comp_coz + "Mt");
});

btn_larg_coz.addEventListener("click", function (e) {
  e.preventDefault();
  const resultado = document.querySelector("#larg_coz");
  larg_coz = parseFloat(resultado.value);
  console.log("Largura da cozinha: " + larg_coz + "Mt");
});

resultado_azul1.addEventListener("click", function (e) {
  e.preventDefault();
  resultado_azul = (comp_coz * larg_coz)/2.5;
  console.log("Resultado quantidade de caixas de azuleijos: " + resultado_azul.toFixed(1) + "Cx");
  resultado_azul0.value = resultado_azul;
});