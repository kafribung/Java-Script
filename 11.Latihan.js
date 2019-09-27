// Function Deklaration
function luasSegitiga(alas,tinggi) {
	var rumus;
	rumus = 0.5 * (alas*tinggi);
	return rumus;
}
// Dengan menggunakan function kita dapat memanggil program secara berulang-ulang
// Tidak lagi membuat variabel baru
alert ('Luas Segitiga1 = '+ luasSegitiga(20,30) );
alert ('Luas Segitiga2 = '+ luasSegitiga(5,10));

// Function Ekspession 
var luasSegitiga = function (a,t) {
	var rumus;
	rumus  = 0.5 * (a * t);
	return rumus;
}
console.log (luasSegitiga(5,10));