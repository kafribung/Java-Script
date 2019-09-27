// Manipulation Element
// innerHTML
const judul = document.getElementById('judul');
judul.innerHTML = '<em>innerHTML</em>';

// style.<property>
const p1 = document.querySelector('#a p');
p1.style.color ='red';
p1.style.backgroundColor = 'lime';


// setAttribute() /Menambahkan atribut
// getAttribute() /Mengambil nilai atrinbut
// removeAttribute() /Menhapus
const atb = document.querySelector('.p2');
atb.setAttribute('nama', 'bung');
atb.getAttribute('href'); //mengambil nilai dalam atribut href
atb.setAttribute('class','parag'); // Ketika kita menambahkan atribut yang sama maka 
// atribut yang lama di timpah

// Menggunakan classList(), tidak menimpah class lain
const p3 = document.querySelector('.p3');
p3.classList.add('ayam'); //Menambahkan class
// p3.classList.remove ('');
// p3.classList.toggle('ayam'); //Kalau ada ditambahkan kalau tidak dihapus
// p3.classList.item(1); //untuk mengecek index ke-1 ada class apa
// p3.classList.contains('ayam'); //untuk mengecek apakah class ayam ada?
p3.classList.replace('ayam', 'sapi'); //Mengganti nama class




