var answerArr = ["Captain America", "Catwoman", "The Green Lantern", "Storm", "Spiderman",
"Daredevil", "The Beast", "Star City"];
var right = 0;
var wrong = 0;
var time;

$(document).ready(function(){
    $("#questionOne").click(function() {
        var answer = $('input[name=questionOne]:checked').val(); 
         console.log(answer);
    });
});