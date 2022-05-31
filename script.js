// variables 
var currentDate = moment().format("dddd, MMMM Do");
// console.log(currentDate);
var timeBlock = $('.time-block')

// date at top of calendar 
$('#currentDay').append(currentDate);

// color code blocks for past(gray), present(red), and future(green)
function blockColors () {
    var currentTime = moment().hours();
    $(".time-block").each(function() {
        var timeLine = parseInt($(this).attr("id"));
        if (timeLine > currentTime) {
            $(this).addClass('past');
        } else if (timeLine === currentTime) {
            $(this).removeClass('past');
            $(this).addClass('present');
            $(this).removeClass('future');
        } else {
            $(this).removeClass('past');
            $(this).removeClass('present');
            $(this).addClass('future');
        }
    })  
};

blockColors();

