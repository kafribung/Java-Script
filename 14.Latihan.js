function jumVolomeKubus (sisiA, sisiB) {
	var volumeA, volumeB, hasil;
		volumeA = sisiA * sisiA * sisiA;
		volumeB = sisiB * sisiB * sisiB;
		hasil = volumeA + volumeB;
	return hasil;
}
// Kita dapat memanggilnya berulang-ulang kali, tanpa menambah variabel
console.log (jumVolomeKubus(8,3));

// Program setelah di refactoring
// Dengan menggunakan teknik refactorig kita akan membuat sintaks yang sederhana
// Tetapi tidak menghilangkan funsionalitas dari sebuah program
// Sehingga kita dapat menghemat variabel dan alokasi memori

function jumVolumeKubus (sisiA, sisiB) {
	return (sisiA * sisiA * sisiA) + (sisiB * sisiB * sisiB);
}
// Hasilnya akan tetap sama
console.log ('Hasil Refactoring = ' +  jumVolumeKubus(8,3));
