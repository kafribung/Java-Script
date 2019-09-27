// Function scope adalah varibel yang berada didalam function dapat membaca variabel global
// Sedangkan varibel didalam funntion, TIDAK dapat dipanggil diluar dari function
var a =1;

function tes1() {
	var a =2 ;
	console.log (a);
}
// Yang muncul adalah 2 dan 1, karena dia berada dalam lingkup varibel global
tes1();
console.log (a);

// Percobaan 2
// Jika dihapus, maka b=2 akan dibuatkan varibel global dengan deklarasi var b (otomatis);
var b =1;
function tes2 () {	
	// Selalu INGAT untuk mendeklarasikan varibel function (var) / atau gunakan "use strict"
	// agar js tidak membuat otomatis var b global
	b=2
}
tes2();
// Karena varibel b dalam function tida dideklarasikan, sehingga b mencari dan keluar dari function 
// Sehingga menemukan var b / Makanya ditimpa
// Tetapi ketika var b (global) tidak ada, maka b=2 akan otomatis di buatkan var b dalam lingkup global 
console.log('variabel global b akan ditimpa '+b);


// Pecobaan 3

var c= 1;

function tes(c) {
	console.log(c);
} 
// 1 tidak tampil karena kita mengirimkan 3 menggunakan prameter
// Kecuali nilai yang ada dalam prameter dihapus maka 1 akan tammpil

tes(10);

// Percobaan 4

var d=20;
function tes(d) {
	console.log(d);
}
// Hasilnya 20 dan 20 karena keduanya mengacu pada varibal global,
// Walaupun namanya sama dengan var function, tetapi varibel function tetap berlaku lokal
tes(d);
console.log(d);