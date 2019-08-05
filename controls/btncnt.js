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
		var left1 = left + 1;
		console.log(left1);

			var totalleft = firebase.database().ref('total');

			totalleft.push({
				'left':left1
			});
	});
	document.getElementById('moveleft').addEventListener('touchend',()=>{
		left1 = 0;
		console.log(left1);

			var totalleft = firebase.database().ref('total');

			totalleft.push({
				'left':left1
			});
	});
	/////////////////////////////////////////////
	document.getElementById('moveright').addEventListener('touchstart',()=>{
		var right1 =right + 1;
		console.log(right1);

			var totalright = firebase.database().ref('total');

			totalright.push({
				'right':right1
			});
	});
	document.getElementById('moveright').addEventListener('touchend',()=>{
		right1 = 0;
		console.log(right1);

			var totalright = firebase.database().ref('total');

			totalright.push({
				'right':right1
			});
	});
	///////////////////////////////////////////////
	document.getElementById('moveup').addEventListener('touchstart',()=>{
		var up1 = up + 1;
		console.log(up1);

			var totalup = firebase.database().ref('total');

			totalup.push({
				'up':up1
			});
	});
	document.getElementById('moveup').addEventListener('touchend',()=>{
		up1 = 0;
		console.log(up1);

			var totalup = firebase.database().ref('total');

			totalup.push({
				'up':up1
			});
	});
	////////////////////////////////////////////////
	document.getElementById('movedown').addEventListener('touchstart',()=>{
		var down1 = down + 1;
		console.log(down1);

			var totaldown = firebase.database().ref('total');

			totaldown.push({
				'down':down1
			});
	});
	document.getElementById('movedown').addEventListener('touchend',()=>{
		down1 = 0;
		console.log(down1);
			var totaldown = firebase.database().ref('total');

			totaldown.push({
				'down':down1
			});
	});

//////////////////


///////////////////

//////////////////////
