var string ='';
for (var i = 0; i <= 2; i++){
	// Untuk menapilkan bintang yang sejajar
	string  += '*';
	// Untuk menampilkan bintang secara vertikal,
	// Tambahkan escape char
	string += '\n';
}
console.log (string);

for (var i = 10 ; i > 0; i--) {
	for (var x = 0; x < i; x++) {
		string += 'x';
	}
	 	string += '\n';
}
console.log (string);

var string2 ='';
for (var k =0; k < 10; k++) {
	for (var f= 0; f <= k; f++) {
		string2+= '*';
	}
	string2 += '\n';
}
console.log (string2);