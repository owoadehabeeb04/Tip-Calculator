"strict mode";
const bill = document.querySelector(".headerbill");
const reset = document.querySelector(".reset");
const custom = document.querySelector(".custom");
const people = document.querySelector(".person");
const totalbill = document.querySelector(".totalbill");
const onebill = document.querySelector(".perpesonbill");
const percentage = document.querySelectorAll(".percent");
const zero = document.querySelector(".zero");
const numberpercentage = document.querySelectorAll('.number');
const perpersondollar = document.querySelector('.perpersondollar');
const totalpersondollar = document.querySelector('.totalpersondollar');

const perperson = (perpersondollar)
console.log(perperson)
const totalperson = (totalpersondollar)
console.log(totalperson)
// turning the numbers in node list to arrAY
 const numberPercentArray = Array.from(percentage)
 console.log(numberPercentArray)



// the reset button

const billvalue = parseFloat(bill.value);
const peoplevalue = parseFloat(people.value);
// const customvalue = parseFloat(people.value);


reset.addEventListener("click", function () {
  // resetting the input tags and values
  bill.value = 0
  people.value =  
  totalperson.textContent = 0.00;
  custom.value = 0;
  perperson.textContent = 0.00;
});


bill.value = "";
people.value = "5";

// for (let i = 0; i < btnsOpenModal.length; i++)
//   btnsOpenModal[i].addEventListener('click', openModal);


// selecttip button
for (let i = 0; i < numberpercentage.length; i++)
console.log(Number(numberpercentage[i].textContent));
for (let i = 0; i < numberPercentArray.length; i++)

numberPercentArray[i].addEventListener('click', function(){
  console.log(numberPercentArray);
const firstresult = ((Number((numberpercentage[i].textContent))/100 * bill.value * people.value));
console.log(firstresult)
console.log( perperson.textContent = firstresult);

const secondresult = (firstresult + Number(bill.value));
console.log(secondresult)
console.log(totalperson.textContent = secondresult);


})


// custominput

custom.addEventListener('input', function(){
const customresult =custom.value /100 * bill.value * people.value
console.log(customresult)

console.log(perperson.textContent = customresult)
const customtotalresult = customresult + Number(bill.value);
 totalperson.textContent = customtotalresult 

})









// console.log(numberpercentage[i])

// const number = Number(numberpercentage);

// console.log(number);





// percentage.forEach(function (btn) {
//   btn.addEventListener("click", function () {
    
//   });
// });





// console.log(billvalue);
// bill.addEventListener("click", function () {});
// custom.addEventListener("click", function () {});
// people.addEventListener("click", function () {});




// people.addEventListener('click', function() {
//   if (people.value = "0") {
//     zero.style.display = "inline-flex";
//   }
//   else {

//   }
// })

// const bills = bill.value
// console.log(bills)

// // const thenoofpeople = function (){
// // if(people.value === 0) {
// // zero.style.display = 'inline-flex';
// // }
// // }
// // thenoofpeople();
// for(let i = 0; i < paragraph.length; i++ )
// for (let i = 0; i < percentage.length ; i++ )
//   percentage[i].addEventListener ('click', thebillfunction())
//   const thebillfunction = function() {
//     const times = (paragraph[i]/100) * bills;
//  times = onebill;
//  }
//  console.log(percentage);

