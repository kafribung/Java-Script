// 4. Splice (Menyambung) = Untk menyisipkan elemen array ditengah-tengah
var namaMahasiswa = ['baco', 'becce', 'joni', 'rani'];
// splice (indexAwal, mauDiHapusOpt, diTambahApaOpt, diTambahApa2Opt....);
// namaMahasiswa.splice(2,0,'Bung'); //menyisipkan bung di index 2
// namaMahasiswa.splice(1,3); //Menghapus 3 elemen dari index 1
// console.log(namaMahasiswa.join(' ~ '));


// 5. Slice (Mengiris) =  Untuk Memotong array yang diinginkan
// slice(indexAwal, indexAkhir)
// harus ditampung dalam sebuah variabel
var namaMahasiswa2= namaMahasiswa.slice(2,4); //Jadi yang dipotong yakni 2 dan dan 4
console.log(namaMahasiswa2 .join( ' - '));