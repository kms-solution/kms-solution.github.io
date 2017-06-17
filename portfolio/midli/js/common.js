$(document).ready(function () {

	$('#event-102 .event-wrap').css('background-image', 'url(' + 'images/socer.jpg' + ')');
	$('.review .delete').magnificPopup({
		closeOnBgClick: false,
		//showCloseBtn: false
	});

	$('.update-photo-link').magnificPopup({
		closeOnBgClick: false,
		callbacks: {
		    open: function() {	
				$('.uploaded-photo #photo').imgAreaSelect({ 
					aspectRatio: '1:1',
					handles: false,
					fadeSpeed: 200,
					onSelectChange: preview 
				});
		    }
		  }
	});

	$('#add-photo-link').magnificPopup({
		closeOnBgClick: false,
		callbacks: {
		    open: function() {	
				$('.uploaded-photo #photo').imgAreaSelect({ 
					aspectRatio: '1:1',
					handles: false,
					fadeSpeed: 200,
					onSelectChange: preview 
				});
		    }
		  }
	});

	$('#other-cause').autosize();
	$('.event-desc textarea').autosize();
	$('#complaint-cause').autosize();

	function preview(img, selection) {
		if (!selection.width || !selection.height)
			return;

		var scaleX_1 = 95 / selection.width;
		var scaleY_1 = 95 / selection.height;
		var scaleX_2 = 32 / selection.width;
		var scaleY_2 = 32 / selection.height;

		$('.lg-min-wrap img').css({
			width: Math.round(scaleX_1 * 300),
			height: Math.round(scaleY_1 * 300),
			marginLeft: -Math.round(scaleX_1 * selection.x1),
			marginTop: -Math.round(scaleY_1 * selection.y1)
		});	
		$('.sm-min-wrap img').css({
			width: Math.round(scaleX_2 * 300),
			height: Math.round(scaleY_2 * 300),
			marginLeft: -Math.round(scaleX_2 * selection.x1),
			marginTop: -Math.round(scaleY_2 * selection.y1)
		});

		$('#x1').val(selection.x1);
		$('#y1').val(selection.y1);
		$('#x2').val(selection.x2);
		$('#y2').val(selection.y2);
		$('#w').val(selection.width);
		$('#h').val(selection.height);    
	}
	$('.update-photo-x').click(function () {
		$('.imgareaselect-outer').hide();
		$('.imgareaselect-selection').hide();
		$('#mCSB_1_scrollbar_vertical + div').hide();
		$('#autosizejs + div').hide();
	});
	$('#update-photo .save-btn').click(function () {
		$('.imgareaselect-outer').hide();
		$('.imgareaselect-selection').hide();
		$('#mCSB_1_scrollbar_vertical + div').hide();
		$('#autosizejs + div').hide();
	});
});

$('a.messages').click(function() {
	if ($('.message-cat').is(':visible')) {
		$('.message-cat').hide('slow');
	}
	else {
		$('.message-cat').show('slow');
	}
});

$('.all-categories').click(function () {
	var checkClass = $('.cat-item').hasClass('active');
	if(!checkClass){
		$('.cat-item').addClass('active');
		$('.all-cat-circle').addClass('active');
	}else{
		$('.cat-item').removeClass('active');
		$('.all-cat-circle').removeClass('active');
	}
	var checkCountOfEl = $('.events-filter .cat-list .cat-item').length;
	var checkCountOfActiveEl = $('.events-filter .cat-list .cat-item.active').length;

	if (checkCountOfEl == checkCountOfActiveEl) {
		$( ".all-cat-circle" ).addClass('active');
	}else{
		$( ".all-cat-circle" ).removeClass('active');
	};
	if (checkCountOfActiveEl > 0 && checkCountOfActiveEl < checkCountOfEl) {
		$( ".all-cat-circle" ).addClass('half-active');
	}else{
		$( ".all-cat-circle" ).removeClass('half-active');
	};
});
$(".cat-item" ).click(function() {
	$(this).toggleClass('active');
	$( ".cat-item" ).each(function( index, element ) {
	  var checkClass = $( this ).hasClass( "active" );
	  if (!checkClass) {
	    $( ".all-cat-circle" ).removeClass('active');
	    return false;
	  }else{
	  	$( ".all-cat-circle" ).addClass('active');
	  }
	});

	var checkCountOfEl = $('.events-filter .cat-list .cat-item').length;
	var checkCountOfActiveEl = $('.events-filter .cat-list .cat-item.active').length;

	if (checkCountOfEl == checkCountOfActiveEl) {
		$( ".all-cat-circle" ).addClass('active');
	}else{
		$( ".all-cat-circle" ).removeClass('active');
	};
	if (checkCountOfActiveEl > 0 && checkCountOfActiveEl < checkCountOfEl) {
		$( ".all-cat-circle" ).addClass('half-active');
	}else{
		$( ".all-cat-circle" ).removeClass('half-active');
	};
});

$('.select-city-btn').click(function(){
	$("#select-city").toggleClass('active');
	var checkClass = $('#select-city li').is('.visible');
	if (!checkClass) {
		$('#select-city li').show().toggleClass('visible');
		$(this).addClass('active');		
	}else{
		$('#select-city li').hide().toggleClass('visible');
		$(this).removeClass('active');	
	}
});

$(document).mouseup(function (e) {
    var container = $("#select-city li");
    var checkClass = $("#select-city").is('.active');
    if (checkClass) {
	    if (container.has(e.target).length === 0){
	        container.hide().toggleClass('visible');
	        $('.select-city-btn').removeClass('active');
	        $('#select-city').removeClass('active');	
	    }
    }
});

$('.view-cat .list').click(function(){
	$('.view-cat .blocks').removeClass('active');
	$(this).addClass('active');
	$('#blocks-events').hide().removeClass('active');
	$('#list-events').show().addClass('active');
});

$('.view-cat .blocks').click(function(){
	$('.view-cat .list').removeClass('active');
	$(this).addClass('active');
	$('#list-events').hide().removeClass('active');
	$('#blocks-events').show().addClass('active');
});


/* Registration  start*/
$('#btn-submit').click(function () {
	$('.registration-grid').addClass('success-grid');
})
/* Registration end*/

/////////////PERSONAL PAGE///////////
$('.about .pencil').click(function(){
	$('.about').addClass('grey');
	$(".about p").replaceWith(function(index, oldHTML){
	 	return $("<textarea>").html(oldHTML);
	});
	$(".about .edit-buttons").show();
	$(".about textarea").addClass('textarea-edit');
	$('.textarea-edit').autosize();
	$('.about').css('border-bottom', 'none');
	$('.personal-page-header').css('border-bottom', 'none');
});

$('.about .save-btn').click(function(){
	$(".about textarea").replaceWith(function(index, oldHTML){
		var text = $('.about textarea').val();
	 	return $("<p>").html(text);
	});
	$(".about .edit-buttons").hide();
	$('.about').removeClass('grey');
	$('.about').css('border-bottom', '1px solid #babdc0');
	$('.personal-page-header').css('border-bottom', '1px solid #babdc0');
});

$('.about .cancel-btn').click(function(){
	$(".about textarea").replaceWith(function(index, oldHTML){
	 	return $("<p>").html(oldHTML);
	});
	$(".about .edit-buttons").hide();
	$('.about').removeClass('grey');
	$('.about').css('border-bottom', '1px solid #babdc0');
	$('.personal-page-header').css('border-bottom', '1px solid #babdc0');
});

$('.delete-form input').click(function () {
	var otherCase = $('.delete-form #other').prop( "checked");
	if (otherCase) {
		$(".delete-form #other-cause").prop( "disabled", false );
		$(".delete-form #other-cause").attr("placeholder", 'Напишите сообщение...');				
	}else{
		$(".delete-form #other-cause").attr("placeholder", '');	
		$(".delete-form #other-cause").val('');
		$(".delete-form #other-cause").prop( "disabled", true );
	}
});

$('.ban-form input').click(function () {
	var otherCase = $('.ban-form #complaint').prop( "checked");
	if (otherCase) {
		$(".ban-form #complaint-cause").prop( "disabled", false );		
	}else{
		$(".ban-form #complaint-cause").val('');
		$(".ban-form #complaint-cause").prop( "disabled", true );
	}
});

$('.contact .pencil').click(function(){
	$('#contact .contact-wrap').addClass('edit-mod');
	$('#contact').addClass('grey');
	$('#contact .regards').addClass('edit-mod');
	$('#contact .contact-details-wrap').hide();
	$('#contact .adres').hide();
	$('#contact .edit-mod-panel').show();
	$('.about').css('border-bottom', 'none');
	$('.organizations').css('border-top', '1px solid #babdc0');
	$('#contact').css('border-bottom', 'none');
});

$('.contact .cancel-btn').click(function(){
	$('#contact .contact-wrap').removeClass('edit-mod');
	$('#contact').removeClass('grey');
	$('#contact .regards').removeClass('edit-mod');
	$('#contact .contact-details-wrap').show();
	$('#contact .adres').show();
	$('#contact .edit-mod-panel').hide();
	$('.about').css('border-bottom', '1px solid #babdc0');
	$('#contact').css('border-bottom', '1px solid #babdc0');
	$('.organizations').css('border-top', 'none');
});
$('.contact .save-btn').click(function(){
	$('#contact .contact-wrap').removeClass('edit-mod');
	$('#contact').removeClass('grey');
	$('#contact .regards').removeClass('edit-mod');
	$('#contact .contact-details-wrap').show();
	$('#contact .adres').show();
	$('#contact .edit-mod-panel').hide();
	$('.about').css('border-bottom', '1px solid #babdc0');
	$('#contact').css('border-bottom', '1px solid #babdc0');
	$('.organizations').css('border-top', 'none');
});
//////////ADRES/////////////////
$('.adres .pencil').click(function(){
	$('#contact .contact-wrap').addClass('edit-mod');
	$('#contact .adres').addClass('edit-mod');
	$('#contact .edit-block').show();
	$('#contact').addClass('grey');
	$('#contact .contact-details-wrap').hide();
	$('#contact .contact').hide();
	$('#contact .edit-mod-panel').show();
	$('.about').css('border-bottom', 'none');
	$('#contact').css('border-bottom', 'none');
});

$('.adres .cancel-btn').click(function(){
	$('#contact .contact-wrap').removeClass('edit-mod');
	$('#contact .adres').removeClass('edit-mod');
	$('#contact').removeClass('grey');
	$('#contact .contact-details-wrap').show();
	$('#contact .contact').show();
	$('#contact .edit-mod-panel').hide();
	$('#contact .edit-block').hide();
	$('.about').css('border-bottom', '1px solid #babdc0');
	$('#contact').css('border-bottom', '1px solid #babdc0');
});
$('.adres .save-btn').click(function(){
	$('#contact .contact-wrap').removeClass('edit-mod');
	$('#contact .adres').removeClass('edit-mod');
	$('#contact').removeClass('grey');
	$('#contact .contact-details-wrap').show();
	$('#contact .contact').show();
	$('#contact .edit-mod-panel').hide();
	$('#contact .edit-block').hide();
	$('.about').css('border-bottom', '1px solid #babdc0');
	$('#contact').css('border-bottom', '1px solid #babdc0');
});

/////////////PERSONAL PAGE///////////

$(document).ready(function () {

	var i=1;

	$('.phone.edit-block').on('click','.add-btn', function () {
		$('.phone.edit-block').append('<div class="extra-el extra-el-'+ i +'"></div>');
		var newElement = "input-block-" + i;
		var cloneElem = ' <div class="input-block phone ' + newElement + ' added"> \
										<div class="inputs"> \
											<input type="text" name="phone-'+ i +'" id="phone" placeholder="+7-000-000-00-00">\
											<input type="text" name="phone-comment-'+ i +'" placeholder="комментарий...">\
										</div>\
										<div class="nav-block">\
											<span class="add-delete-btn">\
												<span class="add-btn">+</span>\
												<span class="delete-btn">+</span>\
											</span>\
											<span class="viber">\
												<input name="viber-phone-'+ i +'" id="viber-phone-'+ i +'" type="checkbox">\
												<label for="viber-phone-'+ i +'">\
													<svg\
													 width="24px" height="24px" viewBox="0 0 1600.000000 1600.000000"\
													 preserveAspectRatio="xMidYMid meet">\
														<g transform="translate(0.000000,1650.000000) scale(0.100000,-0.100000)"\
														fill="#7c519e" stroke="none">\
														<path d="M7370 15029 c-946 -42 -1921 -206 -2655 -446 -1721 -563 -2773 -1628\
														-3110 -3147 -36 -165 -137 -768 -179 -1076 -57 -414 -95 -794 -128 -1260 -17\
														-240 -17 -1105 0 -1335 55 -763 168 -1411 354 -2024 267 -884 723 -1584 1341\
														-2058 312 -239 512 -340 1037 -523 265 -92 409 -156 433 -191 16 -22 17 -132\
														17 -1336 l0 -1313 288 0 287 0 335 326 c531 518 1455 1441 1648 1649 277 298\
														238 265 323 265 225 0 1274 38 1819 65 503 26 717 40 1030 71 1419 139 2440\
														541 3130 1233 296 297 486 573 677 984 225 482 392 992 504 1533 130 634 193\
														1390 193 2319 1 637 -21 1017 -90 1555 -71 562 -217 1247 -354 1660 -246 743\
														-678 1357 -1265 1801 -686 518 -1525 843 -2695 1043 -1010 172 -2048 245\
														-2940 205z m1230 -649 c824 -52 1684 -177 2315 -337 1098 -277 1904 -777 2363\
														-1466 228 -342 356 -648 487 -1162 302 -1183 385 -2479 255 -3960 -78 -878\
														-272 -1621 -612 -2335 -280 -588 -707 -1007 -1328 -1303 -554 -265 -1190 -418\
														-2065 -496 -414 -37 -1202 -78 -1950 -101 -800 -25 -845 -27 -930 -49 -166\
														-43 -281 -120 -422 -283 -161 -186 -493 -525 -1035 -1054 l-553 -542 -5 877\
														c-6 862 -6 877 -27 946 -61 197 -147 313 -310 419 -114 74 -300 151 -793 332\
														-209 76 -361 149 -478 230 -680 470 -1094 1148 -1352 2218 -321 1329 -319\
														2756 6 4636 68 394 117 596 202 830 294 813 855 1416 1732 1860 658 332 1372\
														535 2340 664 332 45 562 64 1040 90 127 7 958 -3 1120 -14z"/>\
														<path d="M8090 12789 c-216 -18 -476 -64 -559 -99 -60 -26 -123 -90 -153 -155\
														-33 -73 -32 -189 3 -265 71 -152 205 -215 380 -177 616 134 1260 61 1817 -203\
														710 -338 1243 -948 1482 -1695 82 -257 119 -485 127 -775 6 -240 -5 -386 -48\
														-626 -28 -153 -30 -178 -19 -228 59 -285 485 -334 602 -70 22 50 61 240 83\
														404 22 155 30 551 16 715 -72 831 -417 1578 -999 2163 -720 724 -1717 1093\
														-2732 1011z"/>\
														<path d="M4995 12141 c-694 -166 -1149 -671 -1148 -1276 1 -202 13 -249 179\
														-668 248 -628 350 -854 519 -1157 279 -500 574 -942 913 -1370 1032 -1302\
														2385 -2319 4042 -3040 315 -137 478 -169 697 -139 255 35 638 245 873 480 141\
														141 243 285 340 479 170 339 141 581 -99 834 -60 64 -945 727 -1145 858 -114\
														75 -238 138 -340 172 -221 74 -449 57 -624 -46 -77 -45 -238 -207 -296 -298\
														-159 -247 -392 -366 -622 -317 -92 20 -170 51 -369 146 -635 305 -1125 716\
														-1487 1246 -206 302 -383 673 -419 881 -16 94 -7 235 21 309 53 139 170 277\
														365 430 264 206 355 342 355 529 0 101 -21 171 -96 326 -213 438 -514 872\
														-858 1239 -284 304 -416 387 -631 397 -66 3 -112 -1 -170 -15z"/>\
														<path d="M8135 11829 c-251 -23 -350 -60 -412 -152 -44 -65 -56 -117 -51 -208\
														6 -96 40 -172 104 -228 84 -74 156 -83 404 -51 228 29 537 -5 778 -85 789\
														-264 1314 -1023 1279 -1850 -4 -77 -12 -171 -18 -210 -17 -105 -8 -203 24\
														-258 56 -95 146 -148 267 -155 186 -11 299 82 334 276 41 226 45 539 11 772\
														-158 1074 -987 1932 -2050 2120 -222 39 -452 49 -670 29z"/>\
														<path d="M8203 10862 c-67 -24 -118 -64 -154 -121 -41 -63 -52 -113 -47 -206\
														7 -124 61 -211 164 -261 46 -22 75 -28 182 -35 300 -20 516 -123 703 -336 137\
														-156 212 -352 228 -595 9 -145 34 -212 97 -267 72 -64 109 -76 224 -76 90 0\
														111 3 147 23 149 79 192 199 164 453 -31 272 -122 520 -274 744 -81 120 -293\
														331 -414 413 -252 171 -535 265 -833 277 -116 5 -142 3 -187 -13z"/>\
														</g>\
													</svg>\
													<span><i class="fa fa-check" aria-hidden="true"></i></span>\
												</label>\
											</span>\
											<span class="whatsapp">\
												<input name="whatsapp-phone-'+ i +'" id="whatsapp-phone-'+ i +'" type="checkbox">\
												<label for="whatsapp-phone-'+ i +'"><i class="fa fa-whatsapp whatsapp-icon" aria-hidden="true"></i><span><i class="fa fa-check" aria-hidden="true"></i></span></label>\
											</span>\
										</div>'
		$('.phone.edit-block').append(cloneElem);
		i++;
	});

	$('.phone.edit-block').on('click','.delete-btn', function () {
		$('.phone.edit-block .extra-el').last().remove();
		$('.phone.edit-block .input-block.added').last().remove();
	});

});

/////////////CREATE EVENT///////////

$(document).ready(function () {

	var i=1;

	$('.event-phone').on('click','.add-btn', function () {
		$('.event-phone').append('<div class="extra-el extra-el-'+ i +'"></div>');
		var newElement = "input-block-" + i;
		var cloneElem = ' <div class="input-block phone ' + newElement + ' added"> \
										<div class="inputs"> \
											<input type="text" name="phone-'+ i +'" id="phone" placeholder="+7-000-000-00-00">\
											<input type="text" name="phone-comment-'+ i +'" placeholder="комментарий...">\
										</div>\
										<div class="nav-block">\
											<span class="add-delete-btn">\
												<span class="add-btn">+</span>\
												<span class="delete-btn">+</span>\
											</span>\
											<span class="viber">\
												<input name="viber-phone-'+ i +'" id="viber-phone-'+ i +'" type="checkbox">\
												<label for="viber-phone-'+ i +'">\
													<svg\
													 width="24px" height="24px" viewBox="0 0 1600.000000 1600.000000"\
													 preserveAspectRatio="xMidYMid meet">\
														<g transform="translate(0.000000,1650.000000) scale(0.100000,-0.100000)"\
														fill="#7c519e" stroke="none">\
														<path d="M7370 15029 c-946 -42 -1921 -206 -2655 -446 -1721 -563 -2773 -1628\
														-3110 -3147 -36 -165 -137 -768 -179 -1076 -57 -414 -95 -794 -128 -1260 -17\
														-240 -17 -1105 0 -1335 55 -763 168 -1411 354 -2024 267 -884 723 -1584 1341\
														-2058 312 -239 512 -340 1037 -523 265 -92 409 -156 433 -191 16 -22 17 -132\
														17 -1336 l0 -1313 288 0 287 0 335 326 c531 518 1455 1441 1648 1649 277 298\
														238 265 323 265 225 0 1274 38 1819 65 503 26 717 40 1030 71 1419 139 2440\
														541 3130 1233 296 297 486 573 677 984 225 482 392 992 504 1533 130 634 193\
														1390 193 2319 1 637 -21 1017 -90 1555 -71 562 -217 1247 -354 1660 -246 743\
														-678 1357 -1265 1801 -686 518 -1525 843 -2695 1043 -1010 172 -2048 245\
														-2940 205z m1230 -649 c824 -52 1684 -177 2315 -337 1098 -277 1904 -777 2363\
														-1466 228 -342 356 -648 487 -1162 302 -1183 385 -2479 255 -3960 -78 -878\
														-272 -1621 -612 -2335 -280 -588 -707 -1007 -1328 -1303 -554 -265 -1190 -418\
														-2065 -496 -414 -37 -1202 -78 -1950 -101 -800 -25 -845 -27 -930 -49 -166\
														-43 -281 -120 -422 -283 -161 -186 -493 -525 -1035 -1054 l-553 -542 -5 877\
														c-6 862 -6 877 -27 946 -61 197 -147 313 -310 419 -114 74 -300 151 -793 332\
														-209 76 -361 149 -478 230 -680 470 -1094 1148 -1352 2218 -321 1329 -319\
														2756 6 4636 68 394 117 596 202 830 294 813 855 1416 1732 1860 658 332 1372\
														535 2340 664 332 45 562 64 1040 90 127 7 958 -3 1120 -14z"/>\
														<path d="M8090 12789 c-216 -18 -476 -64 -559 -99 -60 -26 -123 -90 -153 -155\
														-33 -73 -32 -189 3 -265 71 -152 205 -215 380 -177 616 134 1260 61 1817 -203\
														710 -338 1243 -948 1482 -1695 82 -257 119 -485 127 -775 6 -240 -5 -386 -48\
														-626 -28 -153 -30 -178 -19 -228 59 -285 485 -334 602 -70 22 50 61 240 83\
														404 22 155 30 551 16 715 -72 831 -417 1578 -999 2163 -720 724 -1717 1093\
														-2732 1011z"/>\
														<path d="M4995 12141 c-694 -166 -1149 -671 -1148 -1276 1 -202 13 -249 179\
														-668 248 -628 350 -854 519 -1157 279 -500 574 -942 913 -1370 1032 -1302\
														2385 -2319 4042 -3040 315 -137 478 -169 697 -139 255 35 638 245 873 480 141\
														141 243 285 340 479 170 339 141 581 -99 834 -60 64 -945 727 -1145 858 -114\
														75 -238 138 -340 172 -221 74 -449 57 -624 -46 -77 -45 -238 -207 -296 -298\
														-159 -247 -392 -366 -622 -317 -92 20 -170 51 -369 146 -635 305 -1125 716\
														-1487 1246 -206 302 -383 673 -419 881 -16 94 -7 235 21 309 53 139 170 277\
														365 430 264 206 355 342 355 529 0 101 -21 171 -96 326 -213 438 -514 872\
														-858 1239 -284 304 -416 387 -631 397 -66 3 -112 -1 -170 -15z"/>\
														<path d="M8135 11829 c-251 -23 -350 -60 -412 -152 -44 -65 -56 -117 -51 -208\
														6 -96 40 -172 104 -228 84 -74 156 -83 404 -51 228 29 537 -5 778 -85 789\
														-264 1314 -1023 1279 -1850 -4 -77 -12 -171 -18 -210 -17 -105 -8 -203 24\
														-258 56 -95 146 -148 267 -155 186 -11 299 82 334 276 41 226 45 539 11 772\
														-158 1074 -987 1932 -2050 2120 -222 39 -452 49 -670 29z"/>\
														<path d="M8203 10862 c-67 -24 -118 -64 -154 -121 -41 -63 -52 -113 -47 -206\
														7 -124 61 -211 164 -261 46 -22 75 -28 182 -35 300 -20 516 -123 703 -336 137\
														-156 212 -352 228 -595 9 -145 34 -212 97 -267 72 -64 109 -76 224 -76 90 0\
														111 3 147 23 149 79 192 199 164 453 -31 272 -122 520 -274 744 -81 120 -293\
														331 -414 413 -252 171 -535 265 -833 277 -116 5 -142 3 -187 -13z"/>\
														</g>\
													</svg>\
													<span><i class="fa fa-check" aria-hidden="true"></i></span>\
												</label>\
											</span>\
											<span class="whatsapp">\
												<input name="whatsapp-phone-'+ i +'" id="whatsapp-phone-'+ i +'" type="checkbox">\
												<label for="whatsapp-phone-'+ i +'"><i class="fa fa-whatsapp whatsapp-icon" aria-hidden="true"></i><span><i class="fa fa-check" aria-hidden="true"></i></span></label>\
											</span>\
										</div>'
		$('.event-phone').append(cloneElem);
		i++;
	});

	$('.event-phone').on('click','.delete-btn', function () {
		$('.event-phone .extra-el').last().remove();
		$('.event-phone .input-block.added').last().remove();
	});

});


$(document).ready(function () {

	var i=1;

	$('.event-email').on('click','.add-btn', function () {
		$('.event-email').append('<div class="extra-el extra-el-'+ i +'"></div>');
		var newElement = "input-block-" + i;
		var cloneElem = ' <div class="input-block email ' + newElement + ' added"> \
										<div class="inputs"> \
											<input type="email" name="email-'+ i +'" id="email" placeholder="">\
											<input type="text" name="email-comment-'+ i +'" placeholder="комментарий...">\
										</div>\
										<div class="nav-block">\
											<span class="add-delete-btn">\
												<span class="add-btn">+</span>\
												<span class="delete-btn">+</span>\
											</span>\
										</div>'
		$('.event-email').append(cloneElem);
		i++;
	});

	$('.event-email').on('click','.delete-btn', function () {
		$('.event-email .extra-el').last().remove();
		$('.event-email .input-block.added').last().remove();
	});

});


$(document).ready(function () {

	var i=1;
	var dayOfWeek = {
		monday: 'Пн.',
		tuesday: 'Вт.',
		wednesday: 'Ср.',
		thursday: 'Чт.',
		friday: 'Пт.',
		saturday: 'Сб.',
		sunday: 'Вс.'
	};
	$('.schedule').on('click','.add-btn', function () {
		$(this).css('visibility', 'hidden');
		$(this).next().css('visibility', 'hidden');
		var checkDay = $(this).parents('.day-of-the-week').attr("id");
		console.log(checkDay);
		var Day = '#' + checkDay;
		var cloneElem = '<tr class="day-of-the-week added" id="' + checkDay + '">\
							<td class="day">' + dayOfWeek[checkDay] + '</td>\
							<td class="time"><input type="text" value="00:00" name="' + checkDay + '-start-' + i + '"></td>\
							<td class="time"><input type="text" value="00:00" name="' + checkDay + '-finish-' + i + '"></td>\
							<td class="time"><input type="text" value="00:00:00" name="' + checkDay + '-duration-' + i + '"></td>\
							<td class="price"><input type="text" value="свободный" name="' + checkDay + '-price-' + i + '"></td>\
							<td class="add-delete-btn"><span class="add-btn">+</span><span class="delete-btn">+</span></td>\
						</tr>';
		$(this).parents('tr').after(cloneElem);
		i++;
	});

	$('.schedule').on('click','.delete-btn', function () {
		var checkDay = $(this).parents('.day-of-the-week').attr("id");
		var Day = '#' + checkDay;
		$(this).parents('tr').remove();
		$('.schedule tbody ' + Day + ':last .add-delete-btn span').css('visibility', 'visible');
		$('.schedule tbody ' + Day + ':first .add-delete-btn .delete-btn').css('visibility', 'hidden');
	});

});

/////////////CREATE ORG///////////

$(document).ready(function () {

	var i=1;

	$('.org-phone').on('click','.add-btn', function () {
		$('.org-phone').append('<div class="extra-el extra-el-'+ i +'"></div>');
		var newElement = "input-block-" + i;
		var cloneElem = ' <div class="input-block phone ' + newElement + ' added"> \
										<div class="inputs"> \
											<input type="text" name="phone-'+ i +'" id="phone" placeholder="+7-000-000-00-00">\
											<input type="text" name="phone-comment-'+ i +'" placeholder="комментарий...">\
										</div>\
										<div class="nav-block">\
											<span class="add-delete-btn">\
												<span class="add-btn">+</span>\
												<span class="delete-btn">+</span>\
											</span>\
											<span class="viber">\
												<input name="viber-phone-'+ i +'" id="viber-phone-'+ i +'" type="checkbox">\
												<label for="viber-phone-'+ i +'">\
													<svg\
													 width="24px" height="24px" viewBox="0 0 1600.000000 1600.000000"\
													 preserveAspectRatio="xMidYMid meet">\
														<g transform="translate(0.000000,1650.000000) scale(0.100000,-0.100000)"\
														fill="#7c519e" stroke="none">\
														<path d="M7370 15029 c-946 -42 -1921 -206 -2655 -446 -1721 -563 -2773 -1628\
														-3110 -3147 -36 -165 -137 -768 -179 -1076 -57 -414 -95 -794 -128 -1260 -17\
														-240 -17 -1105 0 -1335 55 -763 168 -1411 354 -2024 267 -884 723 -1584 1341\
														-2058 312 -239 512 -340 1037 -523 265 -92 409 -156 433 -191 16 -22 17 -132\
														17 -1336 l0 -1313 288 0 287 0 335 326 c531 518 1455 1441 1648 1649 277 298\
														238 265 323 265 225 0 1274 38 1819 65 503 26 717 40 1030 71 1419 139 2440\
														541 3130 1233 296 297 486 573 677 984 225 482 392 992 504 1533 130 634 193\
														1390 193 2319 1 637 -21 1017 -90 1555 -71 562 -217 1247 -354 1660 -246 743\
														-678 1357 -1265 1801 -686 518 -1525 843 -2695 1043 -1010 172 -2048 245\
														-2940 205z m1230 -649 c824 -52 1684 -177 2315 -337 1098 -277 1904 -777 2363\
														-1466 228 -342 356 -648 487 -1162 302 -1183 385 -2479 255 -3960 -78 -878\
														-272 -1621 -612 -2335 -280 -588 -707 -1007 -1328 -1303 -554 -265 -1190 -418\
														-2065 -496 -414 -37 -1202 -78 -1950 -101 -800 -25 -845 -27 -930 -49 -166\
														-43 -281 -120 -422 -283 -161 -186 -493 -525 -1035 -1054 l-553 -542 -5 877\
														c-6 862 -6 877 -27 946 -61 197 -147 313 -310 419 -114 74 -300 151 -793 332\
														-209 76 -361 149 -478 230 -680 470 -1094 1148 -1352 2218 -321 1329 -319\
														2756 6 4636 68 394 117 596 202 830 294 813 855 1416 1732 1860 658 332 1372\
														535 2340 664 332 45 562 64 1040 90 127 7 958 -3 1120 -14z"/>\
														<path d="M8090 12789 c-216 -18 -476 -64 -559 -99 -60 -26 -123 -90 -153 -155\
														-33 -73 -32 -189 3 -265 71 -152 205 -215 380 -177 616 134 1260 61 1817 -203\
														710 -338 1243 -948 1482 -1695 82 -257 119 -485 127 -775 6 -240 -5 -386 -48\
														-626 -28 -153 -30 -178 -19 -228 59 -285 485 -334 602 -70 22 50 61 240 83\
														404 22 155 30 551 16 715 -72 831 -417 1578 -999 2163 -720 724 -1717 1093\
														-2732 1011z"/>\
														<path d="M4995 12141 c-694 -166 -1149 -671 -1148 -1276 1 -202 13 -249 179\
														-668 248 -628 350 -854 519 -1157 279 -500 574 -942 913 -1370 1032 -1302\
														2385 -2319 4042 -3040 315 -137 478 -169 697 -139 255 35 638 245 873 480 141\
														141 243 285 340 479 170 339 141 581 -99 834 -60 64 -945 727 -1145 858 -114\
														75 -238 138 -340 172 -221 74 -449 57 -624 -46 -77 -45 -238 -207 -296 -298\
														-159 -247 -392 -366 -622 -317 -92 20 -170 51 -369 146 -635 305 -1125 716\
														-1487 1246 -206 302 -383 673 -419 881 -16 94 -7 235 21 309 53 139 170 277\
														365 430 264 206 355 342 355 529 0 101 -21 171 -96 326 -213 438 -514 872\
														-858 1239 -284 304 -416 387 -631 397 -66 3 -112 -1 -170 -15z"/>\
														<path d="M8135 11829 c-251 -23 -350 -60 -412 -152 -44 -65 -56 -117 -51 -208\
														6 -96 40 -172 104 -228 84 -74 156 -83 404 -51 228 29 537 -5 778 -85 789\
														-264 1314 -1023 1279 -1850 -4 -77 -12 -171 -18 -210 -17 -105 -8 -203 24\
														-258 56 -95 146 -148 267 -155 186 -11 299 82 334 276 41 226 45 539 11 772\
														-158 1074 -987 1932 -2050 2120 -222 39 -452 49 -670 29z"/>\
														<path d="M8203 10862 c-67 -24 -118 -64 -154 -121 -41 -63 -52 -113 -47 -206\
														7 -124 61 -211 164 -261 46 -22 75 -28 182 -35 300 -20 516 -123 703 -336 137\
														-156 212 -352 228 -595 9 -145 34 -212 97 -267 72 -64 109 -76 224 -76 90 0\
														111 3 147 23 149 79 192 199 164 453 -31 272 -122 520 -274 744 -81 120 -293\
														331 -414 413 -252 171 -535 265 -833 277 -116 5 -142 3 -187 -13z"/>\
														</g>\
													</svg>\
													<span><i class="fa fa-check" aria-hidden="true"></i></span>\
												</label>\
											</span>\
											<span class="whatsapp">\
												<input name="whatsapp-phone-'+ i +'" id="whatsapp-phone-'+ i +'" type="checkbox">\
												<label for="whatsapp-phone-'+ i +'"><i class="fa fa-whatsapp whatsapp-icon" aria-hidden="true"></i><span><i class="fa fa-check" aria-hidden="true"></i></span></label>\
											</span>\
										</div>'
		$('.org-phone').append(cloneElem);
		i++;
	});

	$('.org-phone').on('click','.delete-btn', function () {
		$('.org-phone .extra-el').last().remove();
		$('.org-phone .input-block.added').last().remove();
	});

});


$(document).ready(function () {

	var i=1;

	$('.org-email').on('click','.add-btn', function () {
		$('.org-email').append('<div class="extra-el extra-el-'+ i +'"></div>');
		var newElement = "input-block-" + i;
		var cloneElem = ' <div class="input-block email ' + newElement + ' added"> \
										<div class="inputs"> \
											<input type="email" name="email-'+ i +'" id="email" placeholder="">\
											<input type="text" name="email-comment-'+ i +'" placeholder="комментарий...">\
										</div>\
										<div class="nav-block">\
											<span class="add-delete-btn">\
												<span class="add-btn">+</span>\
												<span class="delete-btn">+</span>\
											</span>\
										</div>'
		$('.org-email').append(cloneElem);
		i++;
	});

	$('.org-email').on('click','.delete-btn', function () {
		$('.org-email .extra-el').last().remove();
		$('.org-email .input-block.added').last().remove();
	});

});