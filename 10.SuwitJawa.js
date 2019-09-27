
var ulang =true;
while (ulang) {

// Menangkap Pilihan Player
var p = prompt ('Masukkan Pilihan :\n gajah, semut, orang');
// Mengangkap Pilihan Computer

// Menangkap Bilangan Random
var  comp = Math.random();

if (comp < 0.34) {
	comp= 'gajah';
} else if (comp >=0.34 && comp < 0.67)  {
	comp= 'orang';
} else {
	comp= 'semut';
}


// Menentukan Rules
var hasil ='';
if (p == comp) {
	hasil ='Seri';
} else if (p == 'orang') {
	if (comp=='gajah') {
		hasil='KALAH';
	} else {
		hasil ='MENANG';
	}
} else if (p == 'gajah') {
	if (comp == 'semut') {
		hasil = 'KALAH';
	} else {
		hasil ='MENANG'
	}
} else if (p == 'semut') {
	// Cara cepatnya menggunakan operator ternary, KHUSUS YG MENGGUNAKAN 2 SELEKSI (IF - ELSE)
	hasil =(comp == 'orang') ? 'KALAH' : 'MENANG';

} else {
	hasil= 'Anda Memamsukkan PILIHAN salah!'
}


// Tampilkan Hasil
alert ('Kamu memilih '+p+ ' Komputer memilih '+comp+'\nMaka hasilnya KAMU '+hasil);

// Looping
ulang = confirm ('Bermain Lagi ?');

alert ('Terima Kasih telah Bermain!');
}