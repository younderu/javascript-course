
(function() {
  var names = [
    "Bill",
    "John",
    "Jen",
    "Jason",
    "Paul",
    "Frank",
    "Steven",
    "Larry",
    "Paula",
    "Laura",
    "Jim",
  ];
  
  for (let i = 0; i < names.length; i++) {
    if (names[i].charAt(0).toUpperCase() === "J") {
      SpeakGoodBye.speak(names[i])
      //console.log("Goodbye " + names[i])
    } else {
    SpeakHello.speak(names[i])
    //console.log("Hello " + names[i])
  
    }
  }

  console.log("//// New way of selection ////")

  for (let i = 0; i < names.length; i++) {
    if (sumASCII(names[i]) >= 430) {
      SpeakGoodBye.speak(names[i])
      //console.log("Goodbye " + names[i])
    } else {
    SpeakHello.speak(names[i])
    //console.log("Hello " + names[i])
  
    }
  }


  function sumASCII(str){
    let sum = 0
    for(let i = 0; i < str.length; i++){
      sum += str.charCodeAt(i)
    }
    return sum
  }

//console.log(sumASCII(names[4]))

console.log(window)

})();




