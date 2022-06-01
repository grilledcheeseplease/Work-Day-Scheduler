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
function saveData () {
    var text = $('.time-block .description').val([]);
    var time = $('.time-block').parent().attr('id');
    localStorage.setItem(time, JSON.stringify(text));
}

// retrieve items from storage
function displayStorage() {
    var lastText = JSON.parse(localStorage.getItem('text', 'time'));
    $('.description').innerHTML = lastText.description;
    $('.time').innerHTML = lastText.time-block;
    
}

displayStorage();

// save btn event listener for localStorage
$('.saveBtn').on('click', function(event) {
    console.log(saveData());
}); 


