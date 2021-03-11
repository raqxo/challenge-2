const deg = 6;

setInterval(() => {
	let day = new Date();
	let hh = day.getHours() * 30;
	let mm = day.getMinutes() * deg;
	let ss = day.getSeconds() * deg;

	hr.style.transform = `rotateZ(${hh+(mm/24)}deg)`;
	mn.style.transform = `rotateZ(${mm}deg)`;
	sc.style.transform = `rotateZ(${ss}deg)`;
})