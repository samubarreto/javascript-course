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

[ // melhor método pra percorrer um array
  'make dinner',
  'wash dishes',
  'watch youtube'
].forEach(function(value, index) { // valor e posição
  if (value === 'wash dishes') {
    return;
  }
  console.log(index, value)
})
