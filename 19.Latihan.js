// Manipulasi Array

// 1. Menambah isi array 

// Mendaklarasikan array cara lawas
var arry = [];
// Jangan sampai indexya terlewatkan
arry[0] = 'Bung';
arry[1] = 'Dandi';
arry[2] = 'Fuad';

console.log ('Menambah isi array manual '+arry);

// 2. Menghapus isi array manual
var hewan = ['Sapi', 'Kuda' ,'Ayam', 'Bebek'];

hewan[2] = undefined;
console.log (hewan);

// 3. Menampilkan Seluruh Isi Array

var namaMahasiswa = ['kafri', 'siqa', 'atika', 'takim'];

for (var i =0; i < namaMahasiswa.length; i++) {
	console.log ('Mahasiswa ke '+(i+1)+' '+namaMahasiswa[i]);
};

// Array method
// 1.Join (menggabungkan array menjadi string, lengkap dengan tanda komanya, dan dapat ditambahkan separator)

var benda =['kursi', 'meja', 'lemari'];
console.log (benda.join(' ~ '));

// 2.Push (Mmasukkan arry dari belakang (LIFO)) & Pop (Meletuskan array dari belakang)
// benda.push('lap','kipas angin'); 
benda.pop();
benda.pop();
console.log (benda.join(' ~ '));

// 3. unshift(Bergeser ke dalam/ Memasukkan array dari depan (FIFO)) dan shift (Menghaspus array dari depan / Menggeser keluar)
var benda2 = ['kabel', 'laptop', 'charger'];
console.log(benda2.join(' * '));
// benda2.unshift('teflon');
benda2.shift();
console.log (benda2.join(' * ') );






