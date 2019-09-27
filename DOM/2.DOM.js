// DOM Selection
// getElementById();
//Element
const judul = document.getElementById('judul');
judul.style.color ='red';
judul.style.backgroundColor ='#ddd';
judul.innerHTML ='Bung';

// getElementsByTagName() // HTMLCollection (Memiliki Index karena lebih dari satu)
// HTMLCollection harus ditambahkan index
const p =document.getElementsByTagName('p');
for (let i =0; i <  p.length; i++) {
	p[i].style.fontWeight = 'bold';
	p[i].style.backgroundColor = 'skyblue';

}

// getElementsByClassName 
const p1 = document.getElementsByClassName('p1')[0];
p1.innerHTML = 'Ini diubah dari JS';

// querySelector() // Untuk memilih selector 
//Element
const p4 = document.querySelector('#b p');
p4.style.fontStyle = 'italic';
const li2 = document.querySelector ('#b ul li:nth-child(2)');
li2.innerHTML ='querySelector';

// query.SelectorAll();
// nodeList
const p2 = document.querySelectorAll('p');
p2[1].style.fontSize ='30px';

