alert ("Selamat Datang");
var ulang= true;

// Walaupun ulang tidak dibandingkan, programnya tetap jalan karena ulang sudah 
// dideklarasikan tru3 dan disimpan kedalam nilai truthy
while (ulang== true) {
	var data1 = prompt ("Masukkan Nama:");
	alert ("Hi "+ data1);

	ulang==confirm ("Ulang Lagi ?");
}

alert ("Sampai Jumpa!")