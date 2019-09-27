// // preventDefault() berfungsi untuk mencegah aksi default dari element HTML

// const close = document.querySelectorAll('.close');
// const card = document.querySelectorAll('.card');
// // Menggunakan DOM traversal looping forEach + preventDefault()
// close.forEach(function(element){
// 	element.addEventListener('click',function(e){
// 		//element.parentElement.style.display= 'none';
// 		e.target.parentElement.style.display= 'none';
// 		// karena elemet a pada html berbentuk link, maka harus dicega melakukan reload
// 		e.preventDefault();
// 		e.stopPropagation();
// 	});
// })
// // Ketika kita memberikan event pada parentnya, maka paretnya juga akan diekekusi
// // sebelum event close di jalankan
// // Untuk dari itu gunakan method .stopPopagation()
// // Hal ini terjadi karena adanya konsep EventBubling (event yang mengecek keatas)

// card.forEach(function(element){
// 	element.addEventListener('click',function(){
// 		alert('Ok');
// 	})
// })

// Cara dibawah sangatlah efektif karena manyekeksi element parent utamanya
const container =  document.querySelector('.container');
container.addEventListener('click',function(e){
	console.log(e);
	if (e.target.className == 'close') {
		e.target.parentElement.style.display = 'none';
		e.preventDefault();
	}
})

