// variable
var currentDate = moment().format('dddd, MMMM Do');
// console.log(currentDate);

// date at top of calendar 
$('#currentDay').append(currentDate);

// color code blocks for past(gray), present(red), and future(green)
$('.time-block').each(function () {

    var hour = moment().hour();

    var currentTime = $(this).find('.hour').data('hour');
    
    var value = localStorage.getItem(currentTime);

    if (hour === currentTime) {

        $(this).addClass('present');

    } else if (hour < currentTime) {

        $(this).addClass('future');

    } else {

        $(this).addClass('past');
    }
    
    $(this).find('.description').val(value);
})

// save btn event listener for localStorage
$('.saveBtn').on('click', function () {

    var text = $(this).siblings('.description').val();
    
    var hour = $(this).siblings('.hour').data('hour');
    
    localStorage.setItem(hour, JSON.stringify(text));
});


