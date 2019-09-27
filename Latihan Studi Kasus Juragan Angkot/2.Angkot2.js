var noAngkot=1, 
	jumAngkot=10, 
	angkotBeroprasi=9;
while (noAngkot <= angkotBeroprasi) {
	console.log ('Angkot No. '+noAngkot+ ' beroprasi dengan baik.');
	noAngkot++;
}
// angangkotBeroprasi=7 (Sudah benar) tetapi jika nilai variabel diubah maka loop for akan rancau
// Untuk mengatasinya gunakan rumus: angkotBeroprasi+1,
for (angkotBeroprasi=angkotBeroprasi+1; angkotBeroprasi <= jumAngkot; angkotBeroprasi++) {
	console.log ('Angkot No. '+angkotBeroprasi+ ' sedang tidak beroprasi');
}