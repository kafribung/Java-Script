var noAngkot=1,
    angkotBeroprasi=6;
    jumAngkot=10
for (noAngkot; noAngkot <= jumAngkot; noAngkot++) {
	// Operator DAN satu saja salah maka  tidak dikerjakan, 
	if ((noAngkot  <= angkotBeroprasi ) && (noAngkot !==5)) {
		console.log ("Angkot No. "+noAngkot+" beroperasi dengan baik.");
		// Menggunkan operator logika OR = satu saja benilai true tetap dikerjakan
	} else if ((noAngkot==8) || (noAngkot==10) || (noAngkot==5)){
		console.log ("Angkot No. "+noAngkot+" sedang lembur.");
	} else {
		console.log ('Angkot No. '+noAngkot+' sedang tidak beroperasi.');
	}
	
}
