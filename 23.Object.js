// Object Literal
var mahasiswa = {
	nama : 'bung',
	lulus: false,
	ips :[3.8, 3.9, 4.0, 4.0],
	alamat : {
		jalan : 'Jl. Pahlawan Tasiu',
		kota : 'Mamuju',
		provinsi : 'Sulawesi Barat',
	},
};
console.log (mahasiswa.ips[3]);
console.log (mahasiswa.alamat['kota']);

var mahasiswa2 = {
	nama : 'fuad',
	kelas: 'A',
	nim: 60900117001,
};

// Object Function Declaration

function buatObjectMahasiswa (nama,kelas,nim) {
	var mhs3 = {};
	mhs3.nama = nama;
	mhs3.kelas= kelas;
	mhs3.nim = nim;
	return mhs3;
}
var mahasiswa3 = buatObjectMahasiswa ('Rahim', 'A', '60900117001');
console.log (mahasiswa3);

// Object Construktor

function Mahsiswa (nama,kelas,nim) {
 	this.nama = nama;
 	this.kelas = kelas;
 	this.nim =  nim;
};

var mahasiswa4 = new Mahsiswa ('Fahri', 'C', 60900117001);
console.log (mahasiswa4);