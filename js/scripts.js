$(document).ready(function() {
let testString = "This is a test sentence for an exercise.";
let testArray = testString.split(' ');
let newTestArray = [];


testArray.forEach(function(word) {
  if (word.length >= 3) {
    newTestArray.push(word);
  }
  })


  newTestArray.reverse();
  newTestArray = newTestArray.join(" ");
  console.log(newTestArray);

  // let newTestString = "";
  // for (let i = newTestArray.length - 1; i >= 0; i--){
  //   newTestString += newTestArray[i] + " ";
  // }
  // console.log(newTestString);
});