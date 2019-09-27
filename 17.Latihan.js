// Function declarration
// Menggunakan konsep hoisting (Dapat dipanggil dulu baru dideklarasikan)
tampilNama ('Kafri Bung');
function tampilNama (nama) {
	console.log ('Halo ' +nama);
}

//Function Expression 
// Dideklarasikan dulu baru dipanggil

var tampilNama2 = function (nama) {
	console.log ('Hi '+ nama );
}

tampilNama2 ('Fuad Adnansyah');