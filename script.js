function calculateInsurance() {
country = document.getElementById("country").value;
ageold = document.getElementById("age").value;
age = parseInt(ageold);
nameint = document.getElementById("name").value;
name = nameint.toString();
horsepowerold = document.getElementById("horsepower").value;
horsepower = parseInt(horsepowerold);
insurance = 0;
	switch (country) {

	case 'Austria':
		insurance = horsepower * 100/age + 50;
		console.log(insurance);
		document.getElementById("output").innerHTML= name +", your insurance costs " +insurance+" €"
		break;
	case 'Hungary':
		insurance = horsepower * 120/age + 100;
		console.log(insurance);
		document.getElementById("output").innerHTML= name +", your insurance costs " +insurance+" €"
		break;
	
	case 'Greece':
		insurance = horsepower * 150/(age + 3) +50;
		console.log(insurance);
		document.getElementById("output").innerHTML= name +", your insurance costs " +insurance+" €"
		break;
	
	default:
		insurance = "error"
		console.log(insurance);
		break;
	} 
}
