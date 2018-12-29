$(document).ready(function(){
  $('#userInput').submit(function(event){
    var sentence = $('input#userSentence').val();
    var arraySentence = sentence.split(' ');//seperates words in a string and makes a new array with user input
    var newArray = arraySentence.filter(word => word.length >3);//The filter() method creates a new array with all elements that pass the test implemented by the provided function.

    $('.word').text(newArray)

    event.preventDefault();
  });
});
