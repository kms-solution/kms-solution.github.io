$(document).ready(function () {
	var input = $('#calendar-date');

	var currentDay = moment().locale('ru').format('DD');
	var currentDayAndMouth = moment().locale('ru').format('DD.MM');
	var currentMouth = moment().locale('ru').format('MMMM');
	var currentMouthM = moment().locale('ru').format('MM');
	var currentYear = moment().locale('ru').format('YYYY');
	var currentDayOfWeek = moment().locale('ru').format('dddd');

	$('#calendar-date').val(currentDay + '.' + currentMouthM + '.' + currentYear);

	var inputVal = $('#calendar-date').val().split('.').join("");

	$('.date-slider li.today .day').text(currentDay);
	$('.date-slider li.today .mounth').text(currentMouth);
	$('.date-slider li.today .day-of-week').text(currentDayOfWeek);

	$('.current-date .today-date').text(currentDayAndMouth);
	$('.current-date .today-day-of-the-week').text(currentDayOfWeek);	
	$('.return-current-date .today-date').text(currentDayAndMouth);
	$('.return-current-date .today-day-of-the-week').text(currentDayOfWeek);

	var firstDay = moment().subtract(3 , 'days').locale('ru').format('DD');
	var firstMouth = moment().subtract(3 , 'days').locale('ru').format('MMMM');
	var firstDayOfWeek = moment().subtract(3 , 'days').locale('ru').format('dddd');

	$('.date-slider li.today').prev().prev().prev().find('.day').text(firstDay);
	$('.date-slider li.today').prev().prev().prev().find('.mounth').text(firstMouth);
	$('.date-slider li.today').prev().prev().prev().find('.day-of-week').text(firstDayOfWeek);

	var secondDay = moment().subtract(2 , 'days').locale('ru').format('DD');
	var secondMouth = moment().subtract(2 , 'days').locale('ru').format('MMMM');
	var secondDayOfWeek = moment().subtract(2 , 'days').locale('ru').format('dddd');

	$('.date-slider li.today').prev().prev().find('.day').text(secondDay);
	$('.date-slider li.today').prev().prev().find('.mounth').text(secondMouth);
	$('.date-slider li.today').prev().prev().find('.day-of-week').text(secondDayOfWeek);

	var thirdDay = moment().subtract(1 , 'days').locale('ru').format('DD');
	var thirdMouth = moment().subtract(1 , 'days').locale('ru').format('MMMM');
	var thirdDayOfWeek = moment().subtract(1 , 'days').locale('ru').format('dddd');

	$('.date-slider li.today').prev().find('.day').text(thirdDay);
	$('.date-slider li.today').prev().find('.mounth').text(thirdMouth);
	$('.date-slider li.today').prev().find('.day-of-week').text(thirdDayOfWeek);

	var fifthDay = moment().add(1 , 'days').locale('ru').format('DD');
	var fifthMouth = moment().add(1 , 'days').locale('ru').format('MMMM');
	var fifthDayOfWeek = moment().add(1 , 'days').locale('ru').format('dddd');

	$('.date-slider li.today').next().find('.day').text(fifthDay);
	$('.date-slider li.today').next().find('.mounth').text(fifthMouth);
	$('.date-slider li.today').next().find('.day-of-week').text(fifthDayOfWeek);

	var sixthDay = moment().add(2 , 'days').locale('ru').format('DD');
	var sixthMouth = moment().add(2 , 'days').locale('ru').format('MMMM');
	var sixthDayOfWeek = moment().add(2 , 'days').locale('ru').format('dddd');

	$('.date-slider li.today').next().next().find('.day').text(sixthDay);
	$('.date-slider li.today').next().next().find('.mounth').text(sixthMouth);
	$('.date-slider li.today').next().next().find('.day-of-week').text(sixthDayOfWeek);

	var seventhDay = moment().add(3 , 'days').locale('ru').format('DD');
	var seventhMouth = moment().add(3 , 'days').locale('ru').format('MMMM');
	var seventhDayOfWeek = moment().add(3 , 'days').locale('ru').format('dddd');

	$('.date-slider li.today').next().next().next().find('.day').text(seventhDay);
	$('.date-slider li.today').next().next().next().find('.mounth').text(seventhMouth);
	$('.date-slider li.today').next().next().next().find('.day-of-week').text(seventhDayOfWeek);



	var waypoint = new Waypoint({
	  element: document.getElementById('firstBlock'),
	  handler: function() {
		var date = $('#firstBlock').attr('data-date');
	  	if ($('#blocks-events').hasClass('active') == true) {
		    $('#calendar-date').datepicker('update', date);
	  	}
	  }
	})

	var waypoint = new Waypoint({
	  element: document.getElementById('secondBlock'),
	  handler: function() {
	    var date = $('#secondBlock').attr('data-date');
	    if ($('#blocks-events').hasClass('active') == true) {
		    $('#calendar-date').datepicker('update', date);
		}
	  }
	})

	var waypoint = new Waypoint({
	  element: document.getElementById('thirdBlock'),
	  handler: function() {
	    var date = $('#thirdBlock').attr('data-date');
	  	if ($('#blocks-events').hasClass('active') == true) {
		    $('#calendar-date').datepicker('update', date);
		}
	  }
	})

	var waypoint = new Waypoint({
	  element: document.getElementById('fourthBlock'),
	  handler: function() {
	    var date = $('#fourthBlock').attr('data-date');
	    if ($('#blocks-events').hasClass('active') == true) {
		    $('#calendar-date').datepicker('update', date);
		}
	  }
	})

	var waypoint = new Waypoint({
	  element: document.getElementById('fifthBlock'),
	  handler: function() {
	    var date = $('#fifthBlock').attr('data-date');
	    if ($('#blocks-events').hasClass('active') == true) {
		    $('#calendar-date').datepicker('update', date);
		}
	  }
	})


	$(document).on('click', '.event-dates .return-current-date', function(){
		$('#calendar-date').val(currentDay + '.' + currentMouthM + '.' + currentYear);
		$('#calendar-date').datepicker('update', currentDay + '.' + currentMouthM + '.' + currentYear);
		$('html, body').animate({scrollTop: 0},500);
		return false;
	});

	$(input).change(function() {
		var dateValue = $(input).val();

		var dateValueInput= $('#calendar-date').val().split('.').join("");


		if (dateValue == (moment().locale('ru').format('DD.MM.YYYY') )) {
			$('.event-dates .current-date').slideDown('slow');
			$('.event-dates .return-current-date').slideUp('slow');
		}else{
			$('.event-dates .current-date').slideUp('slow');
			$('.event-dates .return-current-date').slideDown('slow');
		}

		var currentDay = moment(dateValue, 'DD.MM.YYYY').locale('ru').format('DD');
		var currentMouth = moment(dateValue, 'DD.MM.YYYY').locale('ru').format('MMMM');
		var currentDayOfWeek = moment(dateValue, 'DD.MM.YYYY').locale('ru').format('dddd');
		
		$('.date-slider li.current .day').text(currentDay);
		$('.date-slider li.current .mounth').text(currentMouth);
		$('.date-slider li.current .day-of-week').text(currentDayOfWeek);

		var firstDay = moment(dateValue, 'DD.MM.YYYY').subtract(3 , 'days').locale('ru').format('DD');
		var firstMouth = moment(dateValue, 'DD.MM.YYYY').subtract(3 , 'days').locale('ru').format('MMMM');
		var firstDayOfWeek = moment(dateValue, 'DD.MM.YYYY').subtract(3 , 'days').locale('ru').format('dddd');

		$('.date-slider li.today').prev().prev().prev().find('.day').text(firstDay);
		$('.date-slider li.today').prev().prev().prev().find('.mounth').text(firstMouth);
		$('.date-slider li.today').prev().prev().prev().find('.day-of-week').text(firstDayOfWeek);

		var secondDay = moment(dateValue, 'DD.MM.YYYY').subtract(2 , 'days').locale('ru').format('DD');
		var secondMouth = moment(dateValue, 'DD.MM.YYYY').subtract(2 , 'days').locale('ru').format('MMMM');
		var secondDayOfWeek = moment(dateValue, 'DD.MM.YYYY').subtract(2 , 'days').locale('ru').format('dddd');

		$('.date-slider li.today').prev().prev().find('.day').text(secondDay);
		$('.date-slider li.today').prev().prev().find('.mounth').text(secondMouth);
		$('.date-slider li.today').prev().prev().find('.day-of-week').text(secondDayOfWeek);

		var thirdDay = moment(dateValue, 'DD.MM.YYYY').subtract(1 , 'days').locale('ru').format('DD');
		var thirdMouth = moment(dateValue, 'DD.MM.YYYY').subtract(1 , 'days').locale('ru').format('MMMM');
		var thirdDayOfWeek = moment(dateValue, 'DD.MM.YYYY').subtract(1 , 'days').locale('ru').format('dddd');

		$('.date-slider li.today').prev().find('.day').text(thirdDay);
		$('.date-slider li.today').prev().find('.mounth').text(thirdMouth);
		$('.date-slider li.today').prev().find('.day-of-week').text(thirdDayOfWeek);

		var fifthDay = moment(dateValue, 'DD.MM.YYYY').add(1 , 'days').locale('ru').format('DD');
		var fifthMouth = moment(dateValue, 'DD.MM.YYYY').add(1 , 'days').locale('ru').format('MMMM');
		var fifthDayOfWeek = moment(dateValue, 'DD.MM.YYYY').add(1 , 'days').locale('ru').format('dddd');

		$('.date-slider li.today').next().find('.day').text(fifthDay);
		$('.date-slider li.today').next().find('.mounth').text(fifthMouth);
		$('.date-slider li.today').next().find('.day-of-week').text(fifthDayOfWeek);

		var sixthDay = moment(dateValue, 'DD.MM.YYYY').add(2 , 'days').locale('ru').format('DD');
		var sixthMouth = moment(dateValue, 'DD.MM.YYYY').add(2 , 'days').locale('ru').format('MMMM');
		var sixthDayOfWeek = moment(dateValue, 'DD.MM.YYYY').add(2 , 'days').locale('ru').format('dddd');

		$('.date-slider li.today').next().next().find('.day').text(sixthDay);
		$('.date-slider li.today').next().next().find('.mounth').text(sixthMouth);
		$('.date-slider li.today').next().next().find('.day-of-week').text(sixthDayOfWeek);

		var seventhDay = moment(dateValue, 'DD.MM.YYYY').add(3 , 'days').locale('ru').format('DD');
		var seventhMouth = moment(dateValue, 'DD.MM.YYYY').add(3 , 'days').locale('ru').format('MMMM');
		var seventhDayOfWeek = moment(dateValue, 'DD.MM.YYYY').add(3 , 'days').locale('ru').format('dddd');

		$('.date-slider li.today').next().next().next().find('.day').text(seventhDay);
		$('.date-slider li.today').next().next().next().find('.mounth').text(seventhMouth);
		$('.date-slider li.today').next().next().next().find('.day-of-week').text(seventhDayOfWeek);
	});
});