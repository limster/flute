var flute= {};
flute.notes = [
	['C','h0','L1,T2,L2,L3,R1,R2,R3,R4a'],
	['Cs','h0','L1,T2,L3,L4,R1,R2,R4b'],
	['Df','h1','L1,T2,L3,L4,R1,R2,R4b'],
	['D','h1','L1,T2,L2,L3,R1,R2,R3'],
	['Ds','h1','L1,T2,L2,L3,R1,R2,R3,R4'],
	['Ef','h2','L1,T2,L2,L3,R1,R2,R3,R4'],
	['E','h2','L1,L2,L3,T2,R1,R2,R4'],
	['Es','h2','L1,T2,L2,L3,R1,R4'],
	['F','h3','L1,T2,L2,L3,R1,R4'],
	['Fs','h3','L1,L2,L3,T2,R3,R4'],
	['Gf','h4','L1,L2,L3,T2,R3,R4'],
	['G','h4','L1,L2,L3,T2,R4'],
	['Gs','h4','L1,T2,L2,L3,L4,R4'],
	['Af','h5','L1,T2,L2,L3,L4,R4'],
	['A','h5','L1,T2,L2,R4'],
	['As','h5','L1,T2,R1,R4'],
	['As','h5','L1,T2,R1a,R4'],
	['As','h5','L1,T1,R4'],
	['Bf','h6','L1,T2,R1,R4'],
	['Bf','h6','L1,T2,R1a,R4'],
	['Bf','h6','L1,T1,R4'],
	['B','h6','L1,T2,R4'],
	['Bs','h6','L1,R4'],
	['C','h7','L1,R4'],
	['Cs','h7','R4'],
	['Df','h8','R4'],
	['D','h8','T2,L2,L3,R1,R2,R3'],
	['Ds','h8','T2,L2,L3,R1,R2,R3,R4'],
	['Ef','h9','T2,L2,L3,R1,R2,R3,R4'],
	['E','h9','L1,L2,L3,T2,R1,R2,R4'],
	['Es','h9','L1,T2,L2,L3,R1,R4'],
	['F','h10','L1,T2,L2,L3,R1,R4'],
	['Fs','h10','L1,L2,L3,T2,R3,R4'],
	['Gf','h11','L1,L2,L3,T2,R3,R4'],
	['G','h11','L1,L2,L3,T2,R4'],
	['Gs','h11','L1,T2,L2,L3,L4,R4'],
	['Af','h12','L1,T2,L2,L3,L4,R4'],
	['A','h12','L1,T2,L2,R4'],
	['As','h12','L1,T2,R1,R4'],
	['As','h12','L1,T2,R1a,R4'],
	['As','h12','L1,T1,R4'],
	['Bf','h13','L1,T2,R1,R4'],
	['Bf','h13','L1,T2,R1a,R4'],
	['Bf','h13','L1,T1,R4'],
	['B','h13','L1,T2,R4'],
	['Bs','h13','L1,R4'],
	['C','h14','L1,R4'],
	['Cs','h14','R4'],
	['Df','h15','R4'],
	['D','h15','T2,L2,L3,R4'],
	['Ds','h15','L1,T2,L2,L3,L4,R1,R2,R3,R4'],
	['Ef','h16','L1,T2,L2,L3,L4,R1,R2,R3,R4'],
	['E','h16','L1,T2,L2,R1,R2,R4'],
	['Es','h16','L1,T2,L3,R1,R4'],
	['F','h17','L1,T2,L3,R1,R4'],
	['Fs','h17','L1,T2,L3,R3,R4'],
	['Gf','h18','L1,T2,L3,R3,R4'],
	['G','h18','L1,L2,L3,R4'],
	['Gs','h18','L2,L3,L4,R4'],
	['Af','h19','L2,L3,L4,R4'],
	['A','h19','T2,L2,R1,R4'],
	['As','h19','T2,R1,R2a'],
	['Bf','h20','T2,R1,R2a'],
	['As','h20','L1,T1,L3,R2a,R3'], 
	['Bf','h21','L1,T1,L3,R2a,R3'],
	['B','h21','L1,L3,T2,R3a'],
	['C','h22','L1,L2,L3,L4,R1'],
	['Cs','h22','L2,L4,R1'],
	['D','h23','L3,T2,R1,R2,R4,R4a']
];

flute.count = 0;

flute.sharpNote = new Image(36,40);// width, height
flute.sharpNote.src = './_img/note_sharp.png';
flute.naturalNote = new Image(24,40);
flute.naturalNote.src = './_img/note.png';
flute.flatNote = new Image(36,40);
flute.flatNote.src = './_img/note_flat.png';

flute.hide = function(){// hides all the keys
	var allFingers = ['L1','L2','L3','L4','T1','T2','R1a','R1','R2a','R2','R3','R3a','R4','R4a','R4b'];
	var i;
	for(i = 0; i<allFingers.length; i++){
		document.getElementById(allFingers[i]).style.display = 'none';
	}

	document.getElementById('bars').className = '';

	var theNote = document.getElementById('note');
	while(theNote.firstChild){
		theNote.removeChild(theNote.firstChild);
	}

	if(document.getElementById('wholenote')){
		var wNote = document.getElementById('wholenote');
		wNote.parentNode.removeChild(wNote);
	}
};// end method: hide

// this is the stuff that happens on note iteration
flute.showNote = function(index){
	flute.hide();

//	$('.counter').empty();
	var allElements = document.getElementsByTagName('*');
	var i;
//	var index;
	for(i=0; i<allElements.length; i++){
		if(allElements[i].className === 'counter'){
			var counterItem = allElements[i];
			while(counterItem.firstChild){
				counterItem.removeChild(counterItem.firstChild);
			}
		}
	}

	// set up the variables that come from the array
	var theNote = this.notes[index][0];
	theNote = document.createTextNode(theNote);
	var thePitch = this.notes[index][0].charAt(1);
	var theStaff = this.notes[index][1];
	var theFingers = this.notes[index][2];
	var countDisplay = (index+1)+' / '+this.notes.length;
	countDisplay = document.createTextNode(countDisplay);

	//	show the right note on the staffs
	var wholeNote;
	switch(thePitch){
		case "s":
			wholeNote = flute.sharpNote;
			theNote.nodeValue = theNote.nodeValue.replace('s','\u266F');
			document.getElementById('note').className = 'sharp';
			break;

		case "f":
			wholeNote = flute.flatNote;
			theNote.nodeValue = theNote.nodeValue.replace('f','\u266D');
			document.getElementById('note').className = 'flat';
			break;
		default:
			wholeNote = flute.naturalNote;
			document.getElementById('note').className = '';
	}
	wholeNote.setAttribute('id','wholenote');

	// reveal the specified keys
	theFingers = theFingers.split(',');
	for(i = 0; i<theFingers.length; i++){
		document.getElementById(theFingers[i]).style.display='block';
	}

	// insert the note text onto the page
	document.getElementById('note').appendChild(theNote);

	// add the note and show the additional number of staffs if needed.
	var theBars = document.getElementById('bars');
	theBars.appendChild(wholeNote);
	theBars.className = theStaff;

	for(i=0; i<allElements.length; i++){
		if(allElements[i].className === 'counter'){
			allElements[i].appendChild(countDisplay);
		}
	}
};// end method: showNote

flute.activate = function(){
	var i;
	var allElements = document.getElementsByTagName('*');
	var slowClick = function(e){ e.preventDefault(); flute.playScales(5000); };
	var fastClick = function(e){ e.preventDefault(); flute.playScales(2500); };
	var fastestClick = function(e){ e.preventDefault(); flute.playScales(300); };

	for(i=0; i<allElements.length; i++){
		if(allElements[i].className === 'fastest'){
			allElements[i].onclick = fastestClick;
		}
		if(allElements[i].className === 'fast'){
			allElements[i].onclick = fastClick;
		}
		if(allElements[i].className === 'slow'){
			allElements[i].onclick = slowClick;
		}
	}

	document.getElementById('hud').style.display='none';

	document.getElementById('time-entry').onsubmit = function(){
		flute.validate();
		return false;
	};
	flute.hide();
};// end method

flute.notesOn = function(){
	var index;
	document.getElementById('input').className = '';
	document.getElementById('input').value = '';
	var feedback = document.getElementsByTagName('*');
	for(index = 0; index<feedback.length; index++){
		var fbElements= [];
		if(feedback[index].className === 'feedback'){
			feedback[index].style.visibility = 'hidden';
		}
		feedback = fbElements;
	}

	document.getElementById('dashboard').style.display='none';
	document.getElementById('hud').style.display = 'block';

	document.getElementById('hud').getElementsByTagName('a').onclick = function(){
		flute.notesOff;
	};

	var theHud = document.getElementById('hud');
	var findAnchorTags;
	findAnchorTags = function(domElement){
		var theKids = domElement.childNodes;
		var anchorTags = [];
		var clickOff = function(){flute.notesOff();};
		for(i in theKids){
			if(theKids[i].nodeType === 1){
				if(theKids[i].nodeName === 'a'|| theKids[i].nodeName ==='A'){
					theKids[i].onclick = clickOff;
				}else{findAnchorTags(theKids[i]);}// recursion for non 'a' tags
			}// end node type query
		}//end iteration
	};//end variable
	findAnchorTags(theHud);

};// end method


flute.notesOff = function(){
	event.preventDefault();
	clearTimeout(flute.playScales.timer);
	document.getElementById('dashboard').style.display = 'block';
	document.getElementById('hud').style.display = 'none';
	flute.activate();
	this.count=0;
};// end method

flute.playScales = function(time){
// if first pass: extra action
	if(this.count===0){ this.notesOn(); }
// the main action:
	flute.showNote(this.count);
// if last pass: cutoff action
	if((this.count+1) === this.notes.length){
		this.timer=setTimeout(function(){
			flute.notesOff();
		},time);
	}
	this.count++;

// go through the notes…
	if(this.count<this.notes.length){
		flute.playScales.timer=setTimeout(function(){
			flute.playScales(time);
		},time);

	}// end if
};// end method

flute.validate = function(){
	var value = document.getElementsByName('time')[0].value;
// use regex to confirm a digit
	if(value.match('^[1-9]+[0-9]*$')){
		flute.playScales(value*1000);
	}else{
//		$("#input").addClass('error');
		document.getElementById('input').className = 'error';
		var feedback = document.getElementsByClassName('feedback')[0];
		feedback.style.visibility = "visible";
	}
};// end method

window.onload = function(){
	flute.activate();
};