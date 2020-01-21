var name = ['R','O','D','R','1','G','O'];
var vowel = /[AEIOUaeiou]/g;
var number = /\d/g;


for(i = 0; i < name.length; i++){
	  
	if (name[i].match(vowel)) {
		console.log("Esta es una vocal " + name[i]);

	}else if(name[i].match(number)){
  	console.log("Los nombres de las personas no contienen numeros: " + name[i])
		

	}else{
  	console.log("Esta es una consonante " + name[i]);
  }
 }
