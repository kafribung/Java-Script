// Program untuk menghitung volume 2 kubus
// jika kita ingin menambah jumlah kubus, maka kita harus memmua lagi variabel sisaC dan volumeC
// dan kita perlu menambah lagi valeunya dari setiap variabelnya.
// Untik mempermudah kita mengatasi hal tersebut, kita dapat gunakan FUNCTION
var sisiA = 8;
	sisiB = 3;
var volumeA, volumeB;
var hasil;

volumeA = sisiA * sisiA * sisiA;
volumeB = sisiB * sisiB * sisiB;

hasil = volumeA + volumeB;

alert (hasil);

// Perbedaannya
function jumVolomeKubus (sisiA, sisiB) {
	var volumeA, volumeB, hasil;
		volumeA = sisiA * sisiA * sisiA;
		volumeB = sisiB * sisiB * sisiB;
		hasil = volumeA + volumeB;
	return hasil;
}
// Kita dapat memanggilnya berulang-ulang kali, tanpa menambah variabel
console.log (jumVolomeKubus(8,3));
console.log (jumVolomeKubus (10,4));


