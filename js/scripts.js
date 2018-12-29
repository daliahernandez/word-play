$(document).ready(function(){
  $('#userInput').submit(function(event){
    var sentence = $('input#userSentence').val();
    var arraySentence = sentence.split(' ');//seperates words in a string and makes a new array with user input
    var newArray = arraySentence.filter(word => word.length >3);//The filter() method creates a new array with all elements that pass the test implemented by the provided function.

    var reverse = newArray.reverse();//last word entered is the first one to appear
    var string = reverse.join()//creates and returns a new string by concatenating all of the elements in an array 
    $('.word').text(string)

    event.preventDefault();
  });
});
