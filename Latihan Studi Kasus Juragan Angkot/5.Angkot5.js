var noAngkot=1,
    angkotBeroprasi=6;
    jumAngkot=10
for (noAngkot; noAngkot <= jumAngkot; noAngkot++) {
	if (noAngkot  <= angkotBeroprasi) {
		console.log ("Angkot No. "+noAngkot+" beroperasi dengan baik.")
		// Menggunkan operator logika
	} else if ((noAngkot==8) || (noAngkot==10)){
		console.log ("Angkot No. "+noAngkot+" sedang lembur.")
	} else {
		console.log ('Angkot No. '+noAngkot+' sedang tidak beroperasi.');
	}
	
}
