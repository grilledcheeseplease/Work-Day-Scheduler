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

        var timeLine = parseInt($(this).attr('id'));

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



// save btn event listener for localStorage
$('.saveBtn').on('click', function() {
    console.log(this);
    var text = $(this).siblings('.description').val();
    var time = $(this).parent().attr('id');
    localStorage.setItem(time, text);
},(getItemsFromStorage, function() {
    $(this).siblings('.description').val(text);
    $(this).parent().attr('id', time)
}));
