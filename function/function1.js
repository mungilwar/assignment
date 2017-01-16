function getfullName(){

	
	document.write(array[0]+', '+array[1]+', '+array[2]+', '+arguments[3]+', '+arguments[4]);
    return 
	//document.write("result");
	//document.write(getfullName("firstName","middleName","lastName",argument[3],argument[4]));
}

    /*var firstName="nitin";
	var middleName="ram";
	var lastName="mungilwar";
	var a="inportia";
	var b="nit";*/

//document.write(getfullName());
//document.write(getfullName(firstName,middleName,lastName,a,b));

debugger;
var array=["nitin","ram","mungilwar","inportia","nit"];


document.write(getfullName(array[0],array[3],array[4]))