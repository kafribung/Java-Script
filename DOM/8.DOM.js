// preventDefault() berfungsi untuk mencegah aksi default dari element HTML

const close = document.querySelectorAll('.close');
// Menggunakan DOM traversal looping forEach + preventDefault()
close.forEach(function(element){
	element.addEventListener('click',function(e){
		//element.parentElement.style.display= 'none';
		e.target.parentElement.style.display= 'none';
		// karena elemet a pada html berbentuk link, maka harus dicega melakukan reload
		e.preventDefault();
	});
})

