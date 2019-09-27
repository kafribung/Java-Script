function tampilAngka (n) {
	// Menambahkan base case agar tidak terjadi infinite Rekursif
	if (n==0) {
		return (1);
	}
	// Menampilkan argument
	console.log(n);
	// Fungsi dipanggil kembali dan DIKURANGI dengan 1 (Tidak ada hentinya)
	return tampilAngka(n-1);
}
// 10 adalah argument yang akan dikirim
tampilAngka(10);

// Membuat program menghitung bilagan faktorial

// function faktorial(n) {
// 	if (n==0) return 1;
// 	console.log (faktorial  (n-1));
// 	return  n * faktorial (n-1);
// }

// faktorial(3);

// Looping rekursif
// function faktoPerkalian (a) {
//   var hasil;
//   for (var i=a; i < 0 ; i++) {
//   	hasil = i * (i-1);
//   	console.log (hasil); 
//   }
  
//  return hasil;
// }
// faktoPerkalian(10);