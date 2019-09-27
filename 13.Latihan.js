// a dan b adalah prameter (Varibel yang menampung nilai)
function penjumlahanBil (a,b) {
	return a + b;
}

function perkalianBil (angka1, angka2) {
	return angka1 * angka2;
}

// 20 dan 5 adalah argument (Adalah sebuah value atau nilai)
// Cara penulisan 1
var hasil = penjumlahanBil(20,5);
console.log (hasil);

// Cara penulisan argument 2 (Menggunakan variabel dan Inputan dari user)
// var a dan b yang ada dibawah hanyalah sebagai wadah untuk menampung sebuah nilai
var a = parseInt(prompt ('Masukkan angka1 ') ); 
var b = parseInt(prompt('Masukkan angka2 = ') );
var hasil = penjumlahanBil(a,b);
console.log ('Hasil Penjulahan =  '+hasil);

// Cara penulisan argument 3 (Menambahkan operator matematik)
// Argumentnya ditambah dengan masing masing ditamabah2
 var hasil = penjumlahanBil(a+2,b+2);
 console.log ('Hasil Penjulahan3 = '+hasil);

 // Cara penulisan argument 4 (Menambahkan argument kedalam argument)

 var hasil = perkalianBil(penjumlahanBil(5,5), penjumlahanBil(5,5));
 console.log ('\nNilai argument4= '+hasil);


// Memahami variabel arguments

function tambah() {
	var rumus = 0;
	for (var i =0; i < arguments.length; i++) {
		rumus = rumus + arguments[i];	
	}
	console.log (i);
	return rumus;
}

var hasil = tambah(3,2,3);

console.log ('\n Nilai arguments '+ hasil);