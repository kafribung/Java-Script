function angkotBung (supir, trayek, penumpang, kas) {
	this.supir = supir;
	this.trayek =trayek;
	this.penumpang =penumpang;

	this.penumpangNaik = function (namaPenumpang) {	
		this.penumpang.push(namaPenumpang);
		return penumpang;
	}
	this.penumpangTurun = function (namaPenumpang, bayar) {
		if (this.penumpang.length == 0) {
			console.log ('penumpang Masih Kosong');
			return false;
		}
		for (var i=0; i < penumpang.length; i++) {
			if (this.penumpang[i]== namaPenumpang) {
				this.penumpang[i]= undefined;
				this.kas = bayar + kas;
				return this.penumpang;

			}
		}
	}
}

angkot1 = new angkotBung ('bung', [], [  ], 0);
angkot2 = new angkotBung  ('Ceng', ['mamuju', 'tasiu'], [], 0);