var right = 0;
var wrong = 0;
var time;

$(document).ready(function(){
    $('#btnGetValue').click(function() {
        var selValue = $('input[name=rbnNumber]:checked').val(); 
        $('p').html('<br/>Selected Radio Button Value is : <b>' + selValue + '</b>');
    });
});