$(document).ready(function(){
	$('.slider').slick({
		arrows:false,
		dots:true,
		appendDots:'.sliderdots',
		dotsClass:'dots'
		

	});

let hemberger=document.querySelector('.hamberger');
let times=document.querySelector('.times');

let mobilenav=document.querySelector('.mobnav');

let home=document.querySelector('.mobnavhome');
let abt=document.querySelector('.mobnavabt');
let ser=document.querySelector('.mobnavser');
let work=document.querySelector('.mobnavwrk');
let blog=document.querySelector('.mobnavblog');
let contact=document.querySelector('.mobnavcontact');
hemberger.addEventListener('click',function(){
	mobilenav.classList.add('open');




});
times.addEventListener('click',function(){
	mobilenav.classList.remove('open');



});
home.addEventListener('click',function(){
mobilenav.classList.remove('open');

});
abt.addEventListener('click',function(){
mobilenav.classList.remove('open');

});
ser.addEventListener('click',function(){
mobilenav.classList.remove('open');

});
work.addEventListener('click',function(){
mobilenav.classList.remove('open');

});
blog.addEventListener('click',function(){
mobilenav.classList.remove('open');

});
contact.addEventListener('click',function(){
mobilenav.classList.remove('open');

});
});