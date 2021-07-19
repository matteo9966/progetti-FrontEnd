


function stampa(){
	
	let date = new Date();
	let seconds = date.getSeconds();
	let minutes = date.getMinutes();
	let hours = date.getHours();
	let lancettaSecondi="";
	let lancettaMinuti ="";
	let lancettaOre ="";
	let lancetta =""
	
	console.log(seconds, minutes, hours);
	
		let degr = ((6)*seconds)%360;
		let degrM = ((6)*minutes)%360;
		let degrH =((30)*hours)%360;
		
		lancettaSecondi=document.getElementById('secondi');
		lancettaMinuti =document.getElementById('minuti');
		lancettaOre =document.getElementById('ore');
		let suono = document.querySelector('audio');
		suono.currentTime=0;
		suono.play();
		console.log(suono);
		
		
		
	if(seconds==0){
		lancettaSecondi.style.transform= `rotate(360deg)`;
		lancettaSecondi.style.removeProperty('transform');
        		
	}
	else
 	{
		lancettaSecondi.style.transform= `rotate(${degr}deg)`;
		
	}
	
    if(minutes==0){
		lancettaMinuti.style.transform= `rotate(360deg)`;
		lancettaMinuti.style.removeProperty('transform');
        		
	}
	else
 	{
		lancettaMinuti.style.transform= `rotate(${degrM}deg)`;
		
	}
	
	if(hours==0){
		lancettaOre.style.transform= `rotate(360deg)`;
		lancettaOre.style.removeProperty('transform');
        		
	}
	else
 	{
		lancettaOre.style.transform= `rotate(${degrH}deg)`;
		
	}
	
	
	
		
		//lancetta=lancettaSecondi;
		
	
	/*
	
	
	else if (tipo =="minuti") {
		let degr =((6)*minutes)%360;
		lancetta=document.getElementById('minuti');
		
		if(minutes==0){
		lancetta.style.transform= `rotate(360deg)`;
		lancetta.style.removeProperty('transform');	
	}
	else
 	{
		lancetta.style.transform= `rotate(${degr}deg)`;
		
	}
		
		
		
		
	}
	
	*/
	
	//let lancettaSecondi=document.getElementById('secondi');
	

	
	
	
	
	
}

window.setInterval(stampa,1000);




