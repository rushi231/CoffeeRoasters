// document.querySelectorAll('.accordion__button').forEach(button => {
//     button.addEventListener('click',() => {
//         const accordionContent = button.nextElementSibling;

//         // toggle the active states on the button
//         button.classList.toggle('accordion__button--active');

//         // if it is active the set the height 
//         if(button.classList.contains('accordion__button--active')){
//             // give the integer value for the # of pixles the content would take up 
//             accordionContent.style.maxhHeight = accordionContent.scrollHeight + 'px';
//         }
//         else{
//             accordionContent.style.maxhHeight =0;
//         }
//     });


// });

const accordionItemHeaders = document.querySelectorAll(".accordion-item-header");
accordionItemHeaders.forEach(accordionItemHeader =>{
    accordionItemHeader.addEventListener("click", event => {
    accordionItemHeader.classList.toggle("active");
    const accordionItemBody  = accordionItemHeader.nextElementSibling;
    if(accordionItemHeader.classList.contains("active")){
        accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + "px";

    }
    else{
       accordionItemBody.style.maxHeight = 0; 
    }
    });
});


//  let test  = "works";
// // document.getElementsByClassName("hi").innerHTML = test;
// function test (){
//     document.getElementsByClassName("hi").innerHTML = test;
// }

// var test = document.getElementById("option");
// var array = [];

// test.addEventListener("click", () => {
//     var user_option = document.getElementById("cap");

//     array[0] = user_option.innerHTML;
//     console.log(array);

// });

// const button = document.querySelector('#popup-button');
// var button1 = document.getElementById("#popupbutton");
// button.disabled = true;

// document.getElementById("changesummary").innerHTML = firstblank;
// document.getElementById("#changesummary1").innerHTML = secondblank;
// document.getElementById("#changesummary2").innerHTML = thirdblank;
// document.getElementById("#changesummary3").innerHTML = fourthblank;
// document.getElementById("#changesummary4").innerHTML = fivthblank;


// if(firstblank != "" && secondblank != "" && thirdblank != "" && fourthblank != "" && fivthblank != ""){
//     // button.disabled = false;
//     alert("sds");
// }


const test = document.getElementById("option");

test.addEventListener("click", () => {
    let testing0 = "Capsual";
    document.getElementById("changesummary").innerHTML = testing0;
    document.getElementById("changesummarytest").innerHTML = testing0;

});

const test1 = document.getElementById("option2");
test1.addEventListener("click", () => {
    let testing1 = "Filter";
    document.getElementById("changesummary").innerHTML = testing1;
    document.getElementById("changesummarytest").innerHTML = testing1;


});

const test2 = document.getElementById("option3");
test2.addEventListener("click", () => {
    let testing2 = "Espresso";
    document.getElementById("changesummary").innerHTML = testing2;
    document.getElementById("changesummarytest").innerHTML = testing2;


});

const test3 = document.getElementById("type1");

test3.addEventListener("click", () => {
    let typecoffee = "Single origin";
    document.getElementById("changesummary1").innerHTML = typecoffee;
    document.getElementById("changesummary1f").innerHTML = typecoffee;

});

const test4 = document.getElementById("type2");
test4.addEventListener("click", () => {
    let typecoffee1 = "Decaf";
    document.getElementById("changesummary1").innerHTML = typecoffee1
    document.getElementById("changesummary1f").innerHTML = typecoffee1

});

const test6 = document.getElementById("type3");
test6.addEventListener("click", () => {
    let typecoffee2 = "Blended";
    document.getElementById("changesummary2").innerHTML = typecoffee2;
    document.getElementById("changesummary2f").innerHTML = typecoffee2


});

const test7 = document.getElementById("grams1");
const changeprice = document.getElementById("perweek");
const changepricetwoweeks = document.getElementById("2weeks");
test7.addEventListener("click", () => {
    let grams = "250g";
    var newweekprice = "$7.20";
    document.getElementById("perweek").innerHTML = newweekprice;
    document.getElementById("changesummary2").innerHTML = grams;
    document.getElementById("changesummary2f").innerHTML = grams;
    document.getElementById("pricechange").innerHTML = newweekprice
    var newprice = "$9.60";
    document.getElementById("2weeks").innerHTML = newprice;
    document.getElementById("pricechange").innerHTML = newprice
    let newmonthprice = "$12.00";
    document.getElementById("monthly").innerHTML = newmonthprice;
    document.getElementById("pricechange").innerHTML = newmonthprice


});
const test8 = document.getElementById("grams2");

test8.addEventListener("click", () => {
    let grams2 = "500g";
    document.getElementById("changesummary2").innerHTML = grams2;
    document.getElementById("changesummary2f").innerHTML = grams2;
    let newweekprice = "$13.00";
    document.getElementById("perweek").innerHTML = newweekprice;
    let newprice = "$17.50";
    document.getElementById("2weeks").innerHTML = newprice;
    let newmonthprice = "$22.00";
    document.getElementById("monthly").innerHTML = newmonthprice;
    document.getElementById("pricechange").innerHTML = newweekprice
    document.getElementById("pricechange").innerHTML = newprice
    document.getElementById("pricechange").innerHTML = newmonthprice

});
const test9 = document.getElementById("grams3");
test9.addEventListener("click", () => {
    let grams3 = "1000g";
    document.getElementById("changesummary2").innerHTML = grams3;
    document.getElementById("changesummary2f").innerHTML = grams3;
    let newweekprice = "$22.00";
    document.getElementById("perweek").innerHTML = newweekprice;
    let newprice = "$32.00";
    document.getElementById("2weeks").innerHTML = newprice;
    let newmonthprice = "$42.00";
    document.getElementById("monthly").innerHTML = newmonthprice;
    document.getElementById("pricechange").innerHTML = newweekprice
    document.getElementById("pricechange").innerHTML = newprice
    document.getElementById("pricechange").innerHTML = newmonthprice

});

const test10 = document.getElementById("grind1");
test10.addEventListener("click", () => {
    let grind = "Wholebean";
    document.getElementById("changesummary3").innerHTML = grind;
    document.getElementById("changesummary3f").innerHTML = grind;

});
const test11 = document.getElementById("grind2");
test11.addEventListener("click", () => {
    let grinds2 = "Filter";
    document.getElementById("changesummary3").innerHTML = grinds2;
    document.getElementById("changesummary3f").innerHTML = grinds2;


});
const test12 = document.getElementById("grind3");
test12.addEventListener("click", () => {
    let grinds3 = "Cafetiére";
    document.getElementById("changesummary3").innerHTML = grinds3;
    document.getElementById("changesummary3f").innerHTML = grinds3;


});

const test13 = document.getElementById("week");
test13.addEventListener("click", () => {
    let weeks = "every week";
    document.getElementById("changesummary4").innerHTML = weeks;
    document.getElementById("changesummary4f").innerHTML = weeks;

});

const test14 = document.getElementById("week2");
test14.addEventListener("click", () => {
    let weeks2 = "every 2 weeks ";
    document.getElementById("changesummary4").innerHTML = weeks2;
    document.getElementById("changesummary4f").innerHTML = weeks2;


});
const test15 = document.getElementById("week3");
test15.addEventListener("click", () => {
    let weeks3 = "every month";
    document.getElementById("changesummary4").innerHTML = weeks3;
    document.getElementById("changesummary4f").innerHTML = weeks3;

});

function myFunction() {
    var x = document.getElementById("myDIV");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
}
// const arrows = document.getElementsByClassName("arrow");
// const accordionitem = document.getElementsByClassName("accordion-item");
// for(let i = 0; i<arrow.length;i++){
//     addEventListener

// }

// create your plan update 
// stained code 



const button = document.querySelector('#popup-button');
const popup = document.querySelector('#popup');
const closeButton = document.querySelector('#close-button');

button.addEventListener('click', () => {
  if (popup.style.display === 'none') {
    popup.style.display = 'block';
    button.disabled = false;

  } else {
    popup.style.display = 'none';
    button.disabled = false;
  }
});

closeButton.addEventListener('click', () => {
  popup.style.display = 'none';
  button.disabled = false;
});

function refreshPage(){
    alert("Order has been placed");
    window.location.reload();
} 