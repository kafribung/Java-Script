// Filter digunakan untuk mencari 1 atau lebih dari satu nilai dan menghasilkan array
// find digunakan untuk mencari HNAYA 1 nilai tidak menghasilkan array

var	angka = [2,4,6,5,7];
angka2 = angka.filter(function (x){
	// return x == 5 ;
	return x > 5;
});
console.log (angka2);

angka3 = angka.find(function (x) {
	// Hanya mencari nilai yang pertama ditemukan
	return x > 5;
});
console.log (angka3);