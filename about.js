console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert("Form has been submitted successfully!");
}


let form = document.querySelector('form#contact');

form.addEventListener('submit', handleSubmit);


function messageImage(evt) {
	alert('You are an amazing person!')
}
imgOver.addEventListener("mouseover", messageImage)