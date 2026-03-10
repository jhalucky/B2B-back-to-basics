// // Write a JavaScript program to display the current day and time in the following format.
// // Today is : Tuesday.
// // Current time is : 10 PM : 30 : 38


// var today = new Date();

// var day = today.getDay()

// // console.log(day);

// const dayList = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

// console.log("Today is: " + dayList[day] + ".")


// var hours = today.getHours();
// var minutes = today.getMinutes();
// var seconds = today.getSeconds();

// // console.log(hours + ":" + minutes + ":" + seconds)

// var prepand = (hours >= 12) ? "PM" : "AM"

// hours = (hours >= 12) ? hours - 12 : hours; //to change into 12-hr format


// // special cases

// // when hr is 0

// if(hours === 0 && prepand === "PM") {
//     if (minutes === 0 && seconds === 0) {
//         hours = 12;
//         prepand = "Noon";
//     } else {
//         hours = 12;
//         prepand = 'PM'
//     }
// }

// // when hr is 0
// if(hours === 0 && prepand === "AM") {
//     if (minutes === 0 && seconds === 0) {
//         hours = 12;
//         prepand = "Midnight";
//     } else {
//         hours = 12;
//         prepand = 'AM'
//     }
// }

// console.log("Current Time: "+ hours + " " + prepand + " : " + minutes + " : " + seconds);

// // console.log(today)




// Write a JavaScript program to get the current date.  
// Expected Output :
// mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy


var today  = new Date();

var date =  today.getDate();
var month = today.getMonth() + 1;
console.log(month);

const monthList = ['January', 'Febrauaray', "March", "April", "May", "June", "July", "August", "September", "October", "Novemeber", "December" ]
var year = today.getFullYear();
console.log(year);

// to get name of the month

// console.log(date+"/"+monthList[month]+"/"+year);
// console.log(date+"-"+monthList[month]+"-"+year);
// console.log(date+"/"+monthList[month]+"/"+year);
// console.log(date+"/"+monthList[month]+"/"+year);
