// Check off Specific Todos by Clicking
$("ul").on("click", "li", function() {
	//toggle the strike through and color change of a todo
	$(this).toggleClass('completed');
});

//Click X to delete todo
$("ul").on("click", "span", function(event) {
	$(this).parent().fadeOut('500', function() {
		$(this).remove();
	});
	event.stopPropagation();
});

//add a Todo by hitting enter
$("input[type='text']").keypress(function(e) {
	if (e.which === 13) {
		//grab the new todo from input box
		var todoText = $(this).val();
		//add new todo
		$("ul").append('<li><span><i class="fas fa-trash-alt"></i></span> ' + todoText + '</li>');
		$(this).val("");
	}
});

$("#toggle-form").click(function() {
	$("input[type='text']").fadeToggle();
});