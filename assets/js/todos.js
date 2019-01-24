//Check off specific to-dos by clicking

$('ul').on('click', 'li', function(){
	$(this).toggleClass('completed');
});

//Click on x to delete to-do

$('ul').on('click', 'span', function(event){
	//select parent li around span, fadeout, then remove
	$(this).parent().fadeOut(500, function(){
		$(this).remove();
	});
	//stop event bubbling
	event.stopPropagation();
});

//Add new todo and clear input

$("input[type='text']").keypress(function(event){
	if (event.which === 13){
		//grab new todo text from input
		var todoText = $(this).val();
		//create new li and add to ul
		$('ul').append('<li><span><i class="fa fa-trash"></i></span> ' + todoText + '</li>')
		//clear input
		$(this).val('');
	}
});

//Toggle input box visibility

$('#icon').click(function(){
	$("input[type='text']").fadeToggle();
})