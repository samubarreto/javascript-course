// greeting();
// function greeting() {
//   console.log('hello');
// }
// greeting();

// const num = 2;

// const function1 = function() { // anonymous function
//   console.log('hello2')
// }; // functions are values

// console.log(function1);
// console.log(typeof function1);
// function1();

// ////////////////////////////////////////////////////////////////////////////////////////

// const object1 = {
//   num: 2,
//   fun: function() { // a method (function inside a object) (anonymous function)
//     console.log('hello3')
//   }
// };

// object1.fun();

// ////////////////////////////////////////////////////////////////////////////////////////

// function display(text) {
//   console.log(text);
// }

// display('oi');

// ////////////////////////////////////////////////////////////////////////////////////////

// function run(paramêtro) {
//   paramêtro()
// }

// run(function() { // callback, passing a function inside another function (functions are  values)
//   console.log('como é amigo?')
// });

// setTimeout(function() { // espera 3 segundos e chama a função (código assíncrono)
//   console.log('timeout')
//   console.log('timeout2')
// }, 3000);

// console.log('next line');

// setInterval(function() { // roda a cada 3 segundos
//   console.log('interval');
// }, 3000);

// console.log('next line2');

// [ // melhor método pra percorrer um array
//   'make dinner',
//   'wash dishes',
//   'watch youtube'
// ].forEach((value, index) => { // valor e posição
//   if (value === 'wash dishes') {
//     return;
//   }
//   console.log(index, value)
// })

// /////////////////////////////////// arrow function

// const regularFunction = function(paramêtro1, paramêtro2) {
//   console.log('hie');
//   return 5;
// };

// regularFunction();

// const arrowFunction = (paramêtro1, paramêtro2) => {
//   console.log('hi there');
//   return 6;
// };

// arrowFunction();

// const oneParam = paramêtro => {
//   console.log(paramêtro + 1);
// }

// oneParam(2);

// const oneLine = () => 2+3;

// console.log(oneLine());

// const object2 = {
//   method: () => {

//   },
//   method() {
    
//   }
// };

const buttonElement = document.querySelector('.js-button');
const eventListener = () => {
  console.log('click1')
}

buttonElement.addEventListener('click', eventListener);

buttonElement.removeEventListener('click', eventListener)

buttonElement.addEventListener('click', () => {
  console.log('click2')
});