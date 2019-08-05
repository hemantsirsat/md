window.onload = function(){
{	

	var firebaseConfig = {
	apiKey: "AIzaSyBLlgu7GDsR1OhxiG6YaCZ3Ymtw9z7ikxc",
	authDomain: "firebird-7ae2a.firebaseapp.com",
	databaseURL: "https://firebird-7ae2a.firebaseio.com",
	projectId: "firebird-7ae2a",
	storageBucket: "",
	messagingSenderId: "175233168109",
	appId: "1:175233168109:web:9db472d8347818f7"
	};
	// Initialize Firebase
	firebase.initializeApp(firebaseConfig);
	console.log(firebase);

	var left = 0;
	var right = 0;
	var up = 0;
	var down = 0;

	document.getElementById('moveleft').addEventListener('touchstart',()=>{
		left = 1;
		console.log(left);
	});
	document.getElementById('moveleft').addEventListener('touchend',()=>{
		left = 0;
		console.log(left);
	});
	/////////////////////////////////////////////
	document.getElementById('moveright').addEventListener('touchstart',()=>{
		right = 1;
		console.log(right);
	});
	document.getElementById('moveright').addEventListener('touchend',()=>{
		right = 0;
		console.log(right);
	});
	///////////////////////////////////////////////
	document.getElementById('moveup').addEventListener('touchstart',()=>{
		up = 1;
		console.log(up);
	});
	document.getElementById('moveup').addEventListener('touchend',()=>{
		up = 0;
		console.log(up);
	});
	////////////////////////////////////////////////
	document.getElementById('movedown').addEventListener('touchstart',()=>{
		down = 1;
		console.log(down);
	});
	document.getElementById('movedown').addEventListener('touchend',()=>{
		down = 0;
		console.log(down);
	});

	var totalleft = firebase.database().ref('total');

	totalleft.push({
		'left':left
	});

//////////////////
	var totalright = firebase.database().ref('total');

	totalright.push({
		'right':right
	});

///////////////////
	var totalup = firebase.database().ref('total');

	totalleft.push({
		'up':up
	});
//////////////////////
	var totaldown = firebase.database().ref('total');

	totaldown.push({
		'down':down
	});

};
}