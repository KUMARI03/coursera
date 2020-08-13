function checkweight()
{
	var w=document.getElementById("weigh").value;
	var h=document.getElementById("heigh").value;
	
	//console.log(h);
	//console.log(age);
	var x=(h*0.3048)
	var bmi=(w/(x*x));
	console.log(bmi);
	if(isNaN(bmi))
	{
		alert("Enter valid height and weight");
		console.log("Enter the correct ");
	}
	if(bmi<15)
	
	alert("Hi "+document.getElementById("nam").value+"\nHealthy weight\nWell Done");
	
	else if(bmi>=15 && bmi<=16)
	{
    alert("Hi "+document.getElementById("nam").value+"\nSeverly underweight\nMaintain a healthy diet");
	}
	else if(bmi>16 && bmi<=18.5)
	{
		alert("Hi "+document.getElementById("nam").value+ "\nUnderweight\n Maintain a healthy diet");
	}
	else if(bmi>18.5 && bmi<=25)
	{
		alert("Hi "+document.getElementById("nam").value+ "\nNormal(Healthy weight)\n Well Done");
	}
	else if(bmi>25 && bmi<=30)
	{
		alert("Hi "+document.getElementById("nam").value+ "\nOverweight\nReduce your weight\nDo workouts");
	}
	else if(bmi>30 && bmi<=35)
	{
		alert("Hi "+document.getElementById("nam").value+ "\nModerately obese\nReduce your weight\nDo workouts and maintain a healthy diet");
	}
	
	else if(bmi>35 && bmi<=40)
	{
		alert("Hi "+document.getElementById("nam").value+"\nSeverely obese\nReduce your weight\nDo workouts and maintain a healthy diet");
	}
	
    else if(bmi>=40)
    {
    	alert("Hi "+document.getElementById("nam").value+"\nVery Severely obese\nReduce your weight\nDo workouts and maintain a healthy diet");
	}
    
}
