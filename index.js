// type consersion
// console.log("3");
// false valuesARE 0,undified, null, NaN
// function
// function addNumbers(a,b){ functio parameters
//     return a+b;
// }
// console.log(addNumbers(20,30)); function argments
// const kizito = {
//   firn: "umugwaneza",
//   birthd: 2009,
//   age: function () {
//     kizito.age = 2026 - kizito.birthd;
//   },
// };

// kizito.district = "Rusizi";
// delete kizito.district;
// kizito.age();
// console.log(`this is all about kizito, ${kizito}`);
// const kizito = {
//   name: "umuwaneza",
//   birthday: 2009,
//   age: function calculateag() {
//     kizito.age = 2026 - this.birthday;
//   },
// };
// kizito.age();
// console.log(kizito);
// setTimeout(function () {
//   console.log("this run afer 3 second");
// }, 3000);
// setInterval(function () {
//   console.log(new Date().getTime());
// });
// const h1El = document.querySelector("#h1");
// let time = 10;
// setInterval(() => {
//   h1El.textContent = new Date().toLocaleString();

//   time--;
//   const minutes = Math.trunc(time / 60);
//   const seconds = time % 60;
//   h1El.textContent = `${minutes} : ${seconds}`;
//   if (time === 0) {
//     alert("exam i s edded");
//     return;
//   } else if (time === 1) {
//     h1El.textContent = "exam have finished";
//   }
// }, 1000);

// const arrv = [
//   { name: "kizito", age: 12, isSmart: true },
//   { name: "ange", age: 11, isSmart: true },
//   { name: "chriss", age: 13, isSmart: true },
//   { name: "dan", age: 14, isSmart: true },
// ];

// arrv.forEach(function (x) {
//   console.log(x);
// });
// for (const x of arrv) {
//   console.log(x);
// }
// const arr2 = [1, 2, 3, 4, 5, 6, 7, 8];
// let newA = [];
// for (let i = 0; i < arr2.length; i++) {
//   newA.push(arr2[i] * arr2[i]);
// }
// console.log(newA);

// const n1 = [1, 2, 3, 4, 5];
// let y = [];
// for (let num of n1) {
//   y.push(num * num);
// }
// console.log(y);!

// const button = document.querySelector(".convert");
// const output = document.querySelector(".output");

// button.addEventListener("click", function () {
//   const input = Number(document.querySelector(".input").value);
//   const convert = Number(document.querySelector(".convert").value);
//   output.textContent = input * convert;
// });
// const money = [1000, 20000, -3000, -400];
//   money.forEach( functio(value ,i){
//     console.log(`${value} is at index ${i}`);
//     console.log(money);

//   })

// filiter
// const deposits = money.filter(function (value) {
//   if (value > 0) return value;
// });
// console.log(deposits);

// const letters = ["d", "a", "c", "b"];
// console.log(letters.sort());
// const number = [2, 10, 110, 23];
// number.sort(function (a, b) {
//   if (a > b) return 1;
//   else if (a < b) return -1;
// });
// console.log(number);
// number.sort((a, b) => a - b);
// console.log(number);
// const arr = [1, 2, 3, 4, 5];
// const arr2 = [...arr];
// console.log(arr2.sort((a, b) => a - b));
// console.log(arr);
// console.log(arr.slice(1, 3));
// spliceremove
// const arr = [1, 2, 3, 4, 5];
// arr.splice(0, 2);
// console.log(arr);

// const myname = "kizito";
// console.log(myname.toLocaleLowerCase);
// console.log(myname.toLocaleUpperCase);
// console.log(myname.replaceAll("i", "o"));

// console.log(myname.split());
// window.confirm("are you gay");
// console.log(window);
