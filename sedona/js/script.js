var link = document.querySelector(".form-btn");
var popup = document.querySelector(".form-hotel-search");
	link.addEventListener('click', function(event){
		event.preventDefault();
                if(popup.classList.contains('form-show')){
                    popup.classList.remove('form-show');
                }
                else {
                popup.classList.add('form-show');
                }
	});