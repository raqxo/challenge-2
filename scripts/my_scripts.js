const deg = 6;

setInterval(() => {
	let day = new Date();
	let hh = day.getHours() * 30;
	let mm = day.getMinutes() * deg;
	let ss = day.getSeconds() * deg;

	let y = day.getFullYear();
	let m = day.getMonth();
	let d = day.getDate();

	document.getElementById('dateDisplay').innerHTML = d + '-' + m + '-' + y;


	hr.style.transform = `rotateZ(${hh+(mm/24)}deg)`;
	mn.style.transform = `rotateZ(${mm}deg)`;
	sc.style.transform = `rotateZ(${ss}deg)`;
})



function updateBackground() { 
 	var dayz = new Date();
  	var hh = dayz.getHours();
  	var sss = dayz.getSeconds();

	if (hh >= 6 && hh <= 10) {
    document.body.style.backgroundColor='#EF810E';
	} else if (hh >= 11 && hh <= 20) {
    document.body.style.backgroundColor='#053752';
	} else {
    document.body.style.backgroundColor='#001A26';
	}	
}

//update in seconden:
// function updateBackground() { 
//  	var dayz = new Date();
//   	var hh = dayz.getHours();
//   	var sss = dayz.getSeconds();

// 	if (sss >= 6 && sss <= 10) {
//     document.body.style.backgroundColor='#EF810E';
// 	} else if (sss >= 11 && sss <= 20) {
//     document.body.style.backgroundColor='#053752';
// 	} else {
//     document.body.style.backgroundColor='#001A26';
// 	}	
// }

setInterval(updateBackground, 500);
updateBackground();