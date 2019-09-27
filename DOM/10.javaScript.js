const container = document.querySelector('.container');
const utama = document.querySelector('.utama');
const thumbs = document.querySelectorAll('.thumb');
container.addEventListener('click',  function(e){
	if (e.target.className == 'thumb') {
		utama.src = e.target.src;
		utama.classList.add('fade');

		setTimeout(function(){
			utama.classList.remove('fade');
		},500);
	}
	thumbs.forEach(function(element){
		// if (element.classList.contains('active')) {
		// 	element.classList.remove('active');
		element.className = 'thumb';
	})
		e.target.classList.add('active');
	

})