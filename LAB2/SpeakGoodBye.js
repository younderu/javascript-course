var SpeakGoodBye = (function () {
  var speakWord = "Good Bye";

  function speak(name) {
    console.log(speakWord + " " + name);
  }

  return {
    speak
};
})();
