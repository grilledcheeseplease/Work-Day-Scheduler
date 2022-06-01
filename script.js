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

        if (timeLine < currentTime) {
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

// save to localStorage


// retrieve items from storage


// save btn event listener for localStorage
$('.saveBtn').on('click', function() {
    console.log('.description');
    var text = $('.time-block').children('.description').val();
    var time = $(this).parent('.hour').attr('id');
    localStorage.setItem('.description', JSON.stringify(text));
}); 


