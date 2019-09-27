// Mengganti warna body
const tombol = document.getElementById('tomUbh');
tombol.onclick= function(){
	// document.body.style.backgroundColor ='lightgreen';
	// document.body.setAttribute('class', 'warna');
	document.body.classList.toggle('warna');
};

// Membuat tombol ubaah warnah secara acak
const tombolBaru = document.createElement('button');
const isiTombol =document.createTextNode('Ubah Warna2');
tombolBaru.appendChild(isiTombol);

tombolBaru.setAttribute('type','button');

tombol.after(tombolBaru);

tombolBaru.addEventListener('click', function(){
	const r = Math.round((Math.random() * 255));
	const g = Math.round((Math.random() * 255)); 
	const b = Math.round((Math.random() * 255));
	document.body.style.backgroundColor ='rgb('+r+','+g+','+b+')';
});

// Membuat Slider Warna
const sMerah = document.querySelector('input[name=slideMerah]');
const sHijau = document.querySelector('input[name=slideHijau]');
const sBiru = document.querySelector('input[name=slideBiru]')
sMerah.addEventListener('change', function(){
	const r =  sMerah.value;
	document.body.style.backgroundColor = 'rgb('+r+',0,0)';
});
sHijau.addEventListener('change', function(){
	const g = sHijau.value;
	const r = sMerah.value;
	const b = sBiru.value;
	document.body.style.backgroundColor ='rgb('+r+','+g+','+b+')';
});
sBiru.addEventListener('change',  function(){
	const g = sHijau.value;
	const r = sMerah.value;
	const b = sBiru.value;
	document.body.style.backgroundColor ='rgb('+r+','+g+','+b+')';
});
sMerah.addEventListener('change', function(){
	const g = sHijau.value;
	const r = sMerah.value;
	const b = sBiru.value;
	document.body.style.backgroundColor ='rgb('+r+', '+g+', '+b+')';
});
sHijau.addEventListener('change', function(){

});

// // Membuat efek warna dari pergerakan kursor
// document.body.addEventListener('mousemove', function(event){
// 	// event.clientX (posisi sumbu x) //clientY
// 	// window.innerWidth (mengetahui lebar window) //.innerHeight
// 	const posisiX =  Math.round((event.clientX / window.innerWidth) * 255);
// 	const posisiY = Math.round((event.clientY / window.innerHeight) * 255);
// 	document.body.style.backgroundColor= 'rgb('+posisiX+',20 , '+posisiY+' )'
// })


