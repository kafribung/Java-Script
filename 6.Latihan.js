// Percabangan IF-Else, hanya mengerjakan aksi satu, jika kondisinya bernilai TRUE
// Jika kondisi bernilai FALSE, maka program akan mengeksekusi ELSE (Selain dari itu)

// Tetapi logika program ini masih keliru, dikarenakan jika nilai disisi dengan string (angka),
// nilanya akan false, sehingga prgoramnya langsung lompat ke else (aksi 2)

// Untuk mengatasinya kita tambahkan percabagan  : ELSE-IF
var nilai= prompt ('Masukkan nilai:');
// Kondisi
if (nilai % 2 ==0) {
	// Aksi1
	alert (nilai+ ' adalah bilangan POSITIF');
} else {
	// Aksi2
	alert (nilai+ ' adalah bilangan NEGATF');
}