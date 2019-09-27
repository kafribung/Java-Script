// Menggunakan event Inline HTML Atribute dan Element Method
const p1 = document.getElementsByClassName('p1')[0];

function ubahWarnahP1(){
	p1.style.backgroundColor ='yellow';
}
function ubahWarnahp2() {
	p2.style.backgroundColor ='red';
}

const p2 = document.getElementsByClassName('p2')[0];
p2.onclick = ubahWarnahp2;

// Menggunakan addEventListener
const p4 = document.querySelector('section#b p');
p4.addEventListener('click', function() {
	const ul = document.querySelector('section#b ul');
	const li = document.createElement ('li');
	const liIsi= document.createTextNode ('Item Baru');
	li.appendChild(liIsi);

	ul.appendChild(li);
})

// Menggunkan onclick akan menimpah yang lainnya

p4.onclick =  function () {
	p4.style.color = 'red';
}
p4.onclick = function () {
	p4.style.color= 'blue';
}

// Menggunakan event addEventListener akan melakukan 2 fungsi

// p4.addEventListener('mouseenter', function() {
// 	p4.style.backgroundColor ='lime';
// })
// p4.addEventListener('mouseleave', function() {
// 	p4.style.fontWeight = 'bold';
// })


