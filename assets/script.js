$(document).ready(function () {

    function initialize() {
        $('#currentDay').text(moment().format('LL'));
        var eventList = $('.description');
        var currentTime = moment().hour();
        eventList.each(function( index ) {
            var timeBlock = $( this ).parent().attr('time-attr');
            if(localStorage.getItem(timeBlock)){
                $( this ).html( localStorage.getItem(timeBlock));
            }
            if(timeBlock == currentTime){
                $( this ).addClass('current');
            }
            else if (timeBlock < currentTime) {
                $( this ).addClass('past');
            } else {
                $( this ).addClass('future');
            }
          });
        
    }
    $('.saveBtn').on("click", function() {
        var parentValue = $( this ).parent();
        var value = parentValue.find('.description').val();        
        localStorage.setItem(parentValue.attr('time-attr'), value);
      });

    initialize();
});