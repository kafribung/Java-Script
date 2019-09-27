// Object Functiion Declaration
function hi() {
	console.log (this);
	console.log ('hi Tayo');
}
window.hi ();
// this berfungsi untuk mengembalikan object global

// Object Literal 
var obj = {};
obj.mhs = function () {
	console.log (this);
	console.log ('Hi Bung');
}
obj.mhs();
// This berfungsi untuk mengembalikan object lama (obj)

// Object Constructor
function Hi () {
	console.log (this);
	console.log ('hi Rahim');
};
new  Hi();
// this mengembalikan object yang baru dibuat Hi() paling bawah
