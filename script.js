(function (window) {


var names = ["Shubham", "Yaakov", "Jasmine", "Wild Frank", "Bear", "Preti", "Bhopdi", "Jitu", "Lehsun", "Jerry"];

for (var i in names) {

  var firstLetter = ((names[i]).charAt(0)).toLowerCase();

  if (firstLetter == 'j') {
     window.byeSpeaker.speak(names[i]);
  } else {
     window.helloSpeaker.speak(names[i]);
  }
}
})(window);