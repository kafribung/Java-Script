var penumpang = [];
var tambahPenumpang = function (namaPenumpang, penumpang) {
	// Jika angkotnya kosong
	if (penumpang.length==0) {
		// Tambah penumpang di awal array
		penumpang.unshift(namaPenumpang);
		// Kembalikan isi array keluar dari function
		return penumpang;
	} 
	// Jika angkotnya terisi
	else {
		// Telusuri semua array
		for (var i = 0; i < penumpang.length; i++) {
			//Jika ada kursi kosong
			if (penumpang[i] == undefined) {
				// Tambah penumpang di array kosong
				penumpang[i] = namaPenumpang;
				// Kembailikan isi array dan keluar dari function
				return penumpang;
			} 
			// Jika seluruh kursi terisih
			else if (i == penumpang.length-1) {
				// Tambah penumpang dari belakang
				penumpang.push(namaPenumpang);
				// Kembalkan isi array
				return penumpang;
			}
			// jika ada nama yang sama
			else if (penumpang[i] == namaPenumpang) {
				// Menampilkan pesan sudah ada
				console.log (namaPenumpang+' sudah ada didalam angkot');
				// Kembalikan isi array
				return penumpang;
			}
		}
	}
}
var hapusPenumpang = function (namaPenumpang, penumpang) {
	//Jika angkot kosong tampilkan angkot kosong
	if (penumpang.length == 0) {
		console.log ('Angkot kosong');
		return penumpang;
	} 
	// Jika angkot ada isisnya
	else {
		// Telusuri semua angkot
		for (var i =0; i < penumpang.length; i++) {
			// Jika nama penumpang sama
			if (penumpang[i] == namaPenumpang) {
				// Hapus penumpang dengan undefined
				penumpang[i] = undefined;
				return  penumpang;
			}
			 //Jika tidak ada nama yang sesuai 
			else if (i == penumpang.length -1) {
				console.log (namaPenumpang+ ' Tidak ada didalam angkot');
				return penumpang;
			}
		}
	}

};