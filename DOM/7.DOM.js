const span = document.querySelector('span[class=close]');
const card = document.getElementsByClassName('card')[0];

// span.addEventListener('click',  function(){
// 	card.style.display = 'none';
// });

// Menggunakan card lebih dari satu
const close = document.querySelectorAll('.close');
const cardAll = document.querySelectorAll('.card');

// for (let i=0; i < close.length; i++) {
// 	close[i].addEventListener('click', function(){
// 		cardAll[i].style.display ='none';
// 	});
// }

// Menggunakan DOM Traversal (parentElement)

for (let i =0; i < close.length; i++) {
	close[i].addEventListener('click', function(e){
		//close[i].parentElement.style.display ='none';
		//e.target.parentElement.style.display ='none';
	});
}

// Menggunakan DOM traversal looping forEach
close.forEach(function(element){
	element.addEventListener('click',function(e){
		//element.parentElement.style.display= 'none';
		e.target.parentElement.style.display= 'none';
	});
})

const nama = document.querySelector('.nama');
console.log(nama.parentNode.parentNode); // sama dengan parentElement
console.log(nama.nextSibling); // bagian yg ada spasinya
console.log(nama.nextElementSibling); //Elemet selanjutnya (no HP)
console.log(nama.previousElementSibling); //element sebelumnya

