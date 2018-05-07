$('li').click(function() {
	if ($(this).css('color') === 'rgb(128, 128, 128)'){
			console.log('It is currently gray');
		} else {
			$(this).css({
				color: 'gray', 
				textDecoration: 'line-through'
			});
		}
});



// Stopped on Step 19