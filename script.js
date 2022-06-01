// variables 
var currentDate = moment().format('dddd, MMMM Do');
// console.log(currentDate);

// date at top of calendar 
$('#currentDay').append(currentDate);

// color code blocks for past(gray), present(red), and future(green)
function blockColors () {
    
    var currentTime = moment().hours();
    var timeBlock = $('.time-block');
    
    $('.time-block').each(function() {

        var timeLine = parseInt($('.time-block').attr('id'));

        if (timeLine > currentTime) {
            $('.time-block').addClass('past');

        } else if (timeLine === currentTime) {
            // $('.time-block').removeClass('past');
            $('.time-block').addClass('present');
            // $('.time-block').removeClass('future');

        } else {
            // $('.time-block').removeClass('past');
            // $('.time-block').removeClass('present');
            $('.time-block').addClass('future');
        }
    })  
};

blockColors();



// save btn event listener for localStorage
$('.saveBtn').on('click', function() {
    console.log('.time-block');
    var text = $('.time-block').siblings('.description').val();
    var time = $('.time-block').parent().attr('id');
    localStorage.setItem(time, text);
},(getItemsFromStorage, function() {
    $('.time-block').siblings('.description').val(text);
    $('.time-block').parent().attr('id', time)
}));
