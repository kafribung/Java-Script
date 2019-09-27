// Node Manipulation

// DOM Manipulation menambahkan Element Baru
const pBaru = document.createElement('p'); //Buat Element
const teksBaru = document.createTextNode('Isi Element Baru'); // Buat Isinya
pBaru.appendChild(teksBaru); //Masukkan isi kedalam element

// Menempatka posisinya dimana
const sectionA = document.getElementById('a');
sectionA.appendChild(pBaru);




// Menggunakan insretBefore
const liBaru = document.createElement('li');
const teksLiBaru = document.createTextNode('Li Baru');
liBaru.appendChild(teksLiBaru);

//Menempatkan posisinya dimana
const ul = document.querySelector('section#b ul');
const li = ul.querySelector('li:nth-child(2)');

ul.insertBefore(liBaru,li); 

// Menghapus Element
const link = document.getElementsByTagName('a')[0];
sectionA.removeChild(link);

// Mengganti Element
const sectionB = document.getElementById('b');
const pGanti = sectionB.querySelector('p');

// Tangkap, element yang mau dibuat dan isinya
const h1 =document.createElement('h1');
const isiH1 = document.createTextNode('Mengganti');
h1.appendChild(isiH1);
// menggantikan
sectionB.replaceChild(h1, pGanti);

pBaru.style.backgroundColor= 'lightgreen';
liBaru.style.backgroundColor= 'lightgreen';
h1.style.backgroundColor= 'lightgreen';



