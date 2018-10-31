var answerArr = ["Captain America", "Catwoman", "The Green Lantern", "Storm", "Spiderman",
"Daredevil", "The Beast", "Star City"];
var right = 0;
var wrong = 0;
var time = 30;
var guess = {
    one: $('input[name=questionOne]:checked').val(), 
    two: $('input[name=questionTwo]:checked').val(),
    three: $('input[name=questionThree]:checked').val(),
    four: $('input[name=questionFour]:checked').val(),
    five: $('input[name=questionFive]:checked').val(),
    six: $('input[name=questionSix]:checked').val(),
    seven: $('input[name=questionSeven]:checked').val(),
    eight: $('input[name=questionEight]:checked').val(),
};

function timeCount() {
    time--;
    $("#time").text("Time Remaining: " + time);
    console.log(guess.one);
};

function checkAnswers() {
    for(var i = 0; i < answerArr.length; i++) {
        if (guessArr[i] === answerArr[i]) {
            right++;
        } else {
            wrong++;
        }
    };
};
function scoreCheck() {
    checkAnswers();
    $("#questions").empty();
    var r = $("<p>");
    var w = $("<p>");
    r.text("Correct Answers: " + right);
    w.text("Wrong Answers: " + wrong);
    $("#main-container").append(r, w);
};
setTimeout(scoreCheck, 30000);
setInterval(timeCount, 1000);


