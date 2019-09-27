var  item= prompt ('Masukkan Makanan : \n cnt: (nasi, ayam, mie, humburger)');
switch (item) {
	// Karena aksi kodisi 1 dan 2 sama, begitupun dengan kondisi 3 dan 4,
	// Maka dari itu hapus saja break dan salah satu aksi yang sama, AGAR sintaksnya pendek
	case 'nasi' : 
	case 'ayam' :
		alert ('Makanan sehat');
		break;
	case 'mie' :
	case 'humburger' :
		alert ('Makanan TIDAK sehat');
		break;
	default :
	 	alert ('Obsi yang anda masukkan SALAH!');
	 	break;
}
