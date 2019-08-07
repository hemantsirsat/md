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

	var lefttouch;
	document.getElementById('moveleft').addEventListener('touchstart',()=>{
		var left1 = left + 1;
		//console.log(left1);

			var totalleft = firebase.database().ref('total left');

			lefttouch = totalleft.push({
				'left':left1
			});
			var rootRef = firebase.database().ref(); 
			var rootreq = rootRef.child("total left"); 
			rootreq.on('value',getReq); 
			function getReq(snap){ 
			    var t1 = 0;
			    snap.forEach(keyReq => { 
			        var total = keyReq.val().left; 
			        var t = parseInt(total); 
			        t1 += t; 
			        console.log("left = "+t1);
			    });
			}
		document.getElementById('moveleft').addEventListener('touchend',()=>{
			lefttouch.remove();	
		});
	});

	
	document.getElementById('moveright').addEventListener('touchstart',()=>{
		var right1 =right + 1;
		//console.log(right1);

			var totalright = firebase.database().ref('total right');

			totalright.push({
				'right':right1
			});
			var rootRef1 = firebase.database().ref(); 
			var rootreq1 = rootRef1.child("total right"); 
			rootreq1.on('value',getReq1); 
			function getReq1(snap){ 
			    var t11 = 0;
			    snap.forEach(keyReq => { 
			        var total1 = keyReq.val().right; 
			        var t0 = parseInt(total1); 
			        t11 += t0; 
			        console.log("right = "+t11);
			    });
			}
			document.getElementById('moveright').addEventListener('touchend',()=>{
				totalright.remove();
			});
	});



	document.getElementById('moveup').addEventListener('touchstart',()=>{
		var up1 = up + 1;
		//console.log(up1);

			var totalup = firebase.database().ref('total up');

			totalup.push({
				'up':up1
			});
			var rootRef2 = firebase.database().ref();
			var rootreq2 = rootRef2.child("total up"); 
			rootreq2.on('value',getReq2); 
			function getReq2(snap){ 
			    var t2 = 0;
			    snap.forEach(keyReq => { 
			        var total2 = keyReq.val().up; 
			        var t12 = parseInt(total2); 
			        t2 += t12; 
			        console.log("up =" +t2);
			    });
			}
		document.getElementById('moveup').addEventListener('touchend',()=>{ 
			totalup.remove();
		});
	});
	////////////////////////////////////////////////
	document.getElementById('movedown').addEventListener('touchstart',()=>{
		var down1 = down + 1;
		//console.log(down1);

			var totaldown = firebase.database().ref('total down');

			totaldown.push({
				'down':down1
			});
			var rootRef3 = firebase.database().ref(); 
			var rootreq3 = rootRef3.child("total down"); 
			rootreq3.on('value',getReq3); 
			function getReq3(snap){ 
			    var t3 = 0;
			    snap.forEach(keyReq => { 
			        var total3 = keyReq.val().down; 
			        var t13 = parseInt(total3); 
			        t3 += t13; 
			        console.log("down = "+t3);
			    });
			}
		document.getElementById('movedown').addEventListener('touchend',()=>{
			totaldown.remove();
		});
	});






 

   