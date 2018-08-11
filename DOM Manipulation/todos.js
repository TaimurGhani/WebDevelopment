var lis = document.querySelectorAll('li');

for (var i = lis.length - 1; i >= 0; i--) {
	lis[i].addEventListener('mouseover', function() {
		this.classList.add("selected");
	});
	lis[i].addEventListener('mouseout', function() {
		this.classList.remove("selected");
	});
	lis[i].addEventListener('click', function() {
		this.classList.toggle("done");
	});
}

