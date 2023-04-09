"strict mode";
const bill = document.querySelector(".headerbill");
const reset = document.querySelector(".reset");
const custom = document.querySelector(".custom");
const people = document.querySelector(".person");
const totalbill = document.querySelector(".totalbill");
const onebill = document.querySelector(".perpesonbill");
const percentage = document.querySelectorAll(".percent");
const zero = document.querySelector(".zero");
const numberpercentage = document.querySelectorAll(".number");
const perpersondollar = document.querySelector(".perpersondollar");
const totalpersondollar = document.querySelector(".totalpersondollar");

const perperson = perpersondollar;
console.log(perperson);
const totalperson = totalpersondollar;
console.log(totalperson);
// TURNING THE  NUMBERS IN NODE LIST TO ARRAY
const numberPercentArray = Array.from(percentage);
console.log(numberPercentArray);

const billvalue = parseFloat(bill.value);
const peoplevalue = parseFloat(people.value);



// THE RESET BUTTON

reset.addEventListener("click", function () {
  // RESETTING THE INPUT TAGS AND VALUES
  bill.value = 0;
  people.value = 0;
  totalperson.textContent = 0.0;
  custom.value = 0;
  perperson.textContent = 0.0;
  zero.style.display = "none";
  peopleborder.style.border = "none";
});

bill.value = "";
people.value = "";

// CHAINGING PEOPLE.VALUE TO NUMBER FROM STRING


console.log(people.value);
let nopeoplevalue = Number(people.value);
console.log(nopeoplevalue);
// ASSIGNING THE BORDER OF PEOPLE INPUT SO IT WILL BE EASY TO CHANGE THE STYLES
let peopleborder = document.querySelector(".input input[type=number]");



// SELECT TIP BUTTON


for (let i = 0; i < numberpercentage.length; i++)
  console.log(Number(numberpercentage[i].textContent));
for (let i = 0; i < numberPercentArray.length; i++)

  numberPercentArray[i].addEventListener("click", function () {
    if (
people.value <= 0
    ) {
      zero.style.display = "inline-flex";
      peopleborder.style.border = "2px solid red";
      perperson.textContent = '0.00'
      totalperson.textContent = '0.00'
     
    } else {
      console.log(numberPercentArray);
      let firstresult =
        ((Number(numberpercentage[i].textContent) / 100) * bill.value) /
        people.value;
      console.log(firstresult);
      console.log((perperson.textContent = firstresult));

      let secondresult = firstresult + Number(bill.value);
      console.log(secondresult);
      console.log((totalperson.textContent = secondresult));

      zero.style.display = "none";
      peopleborder.style.border = "2px solid hsl(189, 41%, 97%)";
    }
  });

perperson.textContent = 0.0;
totalperson.textContent = 0.0;


// CUSTOM INPUT

custom.addEventListener("input", function () {

  if (
    people.value <= 0
        ) {
          zero.style.display = "inline-flex";
          peopleborder.style.border = "2px solid red";
          perperson.textContent = '0.00'
          totalperson.textContent = '0.00'
          //  alert('you cant use zero')
        } else {
  const customresult = ((custom.value / 100) * bill.value) / people.value;
  console.log(customresult);

  console.log((perperson.textContent = customresult));
  const customtotalresult = customresult + Number(bill.value);
  totalperson.textContent = customtotalresult;

  
  zero.style.display = "none";
  peopleborder.style.border = "2px solid hsl(189, 41%, 97%)";
        }
});



