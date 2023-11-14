function myFunction(id) {
	console.log('id::::::::::::::', id)
	var x = document.getElementById(id);

	if (x.style.display === "" || x.style.display === "none") {
		x.style.display = "block";
	} else {
		x.style.display = "none";
	}
	AOS.refresh();
}
function companydropdown(testing) {
	console.log('id::::::::::::::', 'testing')
	var m = document.getElementById(testing);

	if (m.style.display === "" || m.style.display === "block") {
		m.style.display = "none";
	} else {
		m.style.display = "block";
	}
	AOS.refresh();
}

function hello(hello){
	console.log('id:::::::::::::::::','hello')
}
function showPanel(id) {
	var elements = document.getElementsByClassName("content");
	for (let i = 0; i < elements.length; i++) {
		elements[i].style.display = "none";
	}
	document.getElementById(id).style.display = "block";
}


function graphcl(id) {
	let col = document.getElementById(id);
	col.style.width = "100%";
}



function card1() {
	var dest = document.getElementById("card1PopUp");
	dest.style.width = "300%";
	var element = document.getElementById("chart1");
	element.style.display = "block";

}

function card2() {
	var dest = document.getElementById("card2PopUp");
	dest.style.width = "300%";
	var element = document.getElementById("chart2");
	element.style.display = "block";
}
function card3() {
	var dest = document.getElementById("card3PopUp");
	dest.style.width = "300%";
	var element = document.getElementById("chart3");
	element.style.display = "block";
}
function card4() {
	var dest = document.getElementById("card4PopUp");
	dest.style.width = "300%";
	var element = document.getElementById("chart4");
	element.style.display = "block";
}
function card5() {
	var dest = document.getElementById("card5PopUp");
	dest.style.width = "300%";
	var element = document.getElementById("chart5");
	element.style.display = "block";
}

function set1() {
	let a = document.getElementById("chart1");
	let b = document.getElementById("startCalender1");
	let c = document.getElementById("endCalender1");
	let v = document.getElementById("insidetopperformer1");
	let g = document.getElementById("card1PopUp");
	a.style.display = "none";
	b.style.display = "none";
	c.style.display = "none";
	v.style.display = "none";
	g.style.width = "100%";


}
function mobileset1() {
	let a = document.getElementById("chartopen");
	let b = document.getElementById("mobilestartCalender1");
	let c = document.getElementById("mobileendCalender1");
	let v = document.getElementById("insidetopperformer1");
	let g = document.getElementById("mobilecard1PopUp");
	a.style.display = "none";
	b.style.display = "none";
	c.style.display = "none";
	v.style.display = "none";
	g.style.width = "100%";


}
function set2() {
	let a = document.getElementById("chart2");
	let b = document.getElementById("calenderPopUp3");
	let c = document.getElementById("calenderPopUp4");
	let v = document.getElementById("card2TopPerformer1");
	let g = document.getElementById("card2PopUp");
	a.style.display = "none";
	b.style.display = "none";
	c.style.display = "none";
	v.style.display = "none";
	g.style.width = "100%";
}
function mobileset2() {
	let a = document.getElementById("chartopen2");
	let b = document.getElementById("mobilecalenderPopUp3");
	let c = document.getElementById("mobilecalenderPopUp4");
	let v = document.getElementById("card2TopPerformer1");
	let g = document.getElementById("mobilecard2PopUp");
	a.style.display = "none";
	b.style.display = "none";
	c.style.display = "none";
	v.style.display = "none";
	g.style.width = "100%";
}

function set3() {
	let a = document.getElementById("chart3");
	let b = document.getElementById("startCalender3");
	let c = document.getElementById("endCalender3");
	let v = document.getElementById("card3TopPerformer1");
	let g = document.getElementById("card3PopUp");
	a.style.display = "none";
	b.style.display = "none";
	c.style.display = "none";
	v.style.display = "none";
	g.style.width = "100%";
}
function mobileset3() {
	let a = document.getElementById("chartopen3");
	let b = document.getElementById("mobilestartCalender3");
	let c = document.getElementById("mobileendCalender3");
	let v = document.getElementById("card3TopPerformer1");
	let g = document.getElementById("mobilecard3PopUp");
	a.style.display = "none";
	b.style.display = "none";
	c.style.display = "none";
	v.style.display = "none";
	g.style.width = "100%";
}
function set4() {
	let a = document.getElementById("chart4");
	let b = document.getElementById("startCalender4");
	let c = document.getElementById("endCalender4");
	let v = document.getElementById("card4TopPerformer1");
	let g = document.getElementById("card4PopUp");
	a.style.display = "none";
	b.style.display = "none";
	c.style.display = "none";
	v.style.display = "none";
	g.style.width = "100%";
}
function mobileset4() {
	let a = document.getElementById("chartopen4");
	let b = document.getElementById("mobilestartCalender4");
	let c = document.getElementById("mobileendCalender4");
	let v = document.getElementById("card4TopPerformer1");
	let g = document.getElementById("mobilecard4PopUp");
	a.style.display = "none";
	b.style.display = "none";
	c.style.display = "none";
	v.style.display = "none";
	g.style.width = "100%";
}
function set5() {
	let a = document.getElementById("chart5");
	let b = document.getElementById("startCalender5");
	let c = document.getElementById("endCalender5");
	let v = document.getElementById("card5TopPerformer1");
	let g = document.getElementById("card5PopUp");
	a.style.display = "none";
	b.style.display = "none";
	c.style.display = "none";
	v.style.display = "none";
	g.style.width = "100%";
}
function mobileset5() {
	let a = document.getElementById("chartopen5");
	let b = document.getElementById("mobilestartCalender5");
	let c = document.getElementById("mobileendCalender5");
	let v = document.getElementById("card5TopPerformer1");
	let g = document.getElementById("mobilecard5PopUp");
	a.style.display = "none";
	b.style.display = "none";
	c.style.display = "none";
	v.style.display = "none";
	g.style.width = "100%";
}

function rotate(id) {
	let element = document.getElementById(id).classList.toggle("mystyle1");

}
function rotate1(id) {
	let element = document.getElementById(id).classList.toggle("mystyle2");

}
function color1() {
	let element = document.getElementById('colo').classList.toggle("headingcolor");

}

function scrolltop() {
	let x = document.documentElement.scrollTop;
	window.scrollTo({
		top: x !== 0 ? x - 600 : 0,
		behavior: "smooth",
	});
}

function scrollbottom(id) {
	let _currentHeight = document.documentElement.scrollTop;
	window.scrollTo({
		top: _currentHeight + 700,
		behavior: "smooth",
	});
}

function mycard(id, id2) {

	document.getElementById(id).style.display = "none";
	document.getElementById(id2).style.display = "block";
}



