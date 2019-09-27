// forEach (Untuk tiap-tiap) adalah method yang dapat dipanggil didalam objek untuk melakukan pengulangan
// map sama seperti dengan forEach tetapi dapat mengembalikan array
// sort (meyortir)  adalah  method dalam objek yang dapat digunakan untuk mengurutkan bilangan

//1.forEach
var angka =[1,2,3,4,5,6,7,8]
var namMhs =['Bung', 'Ainur','Dandi'];

// for (var i=0; i < angka.length; i++) {
// 	console.log (angka[i]);
// }

function cetak (e) {
	console.log(e);
}
angka.forEach(cetak);

// Bisa juga
namMhs.forEach(function(e){
	console.log(e);
})

namMhs.forEach(function (e, i) {
	console.log('Mahasiswa ke '+(i+1)+' adalah '+e);
});

// 2.map
var angka2 = ['2', '4', '6'];

var tampilkan=angka2.map(function(e){
	return (e * 2);
});
console.log(tampilkan.join(' - ') );


// 3.Short

var angka3 =[1,3,5,7,2];
angka3.sort();
console.log (angka3.join(' '));
// Tetapi hati2 ketika angkanya puluhan (karena js membaca angka depannya) MAKA gunakan fungsi return a>b;
var angka4 =[2,23,4,30,3];
angka4.sort(function(a,b){
	return a > b;
});
console.log(angka4.join(' - '));