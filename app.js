window.addEventListener("load", function() {
	var boton = document.getElementById("calcular");
	boton.addEventListener("click", function() {
		var nombre = document.getElementById("nombre").value;
		var edad = parseInt(document.getElementById("edad").value);
		var sexo = document.getElementById("sexo").value;
		var resultado = document.getElementById("resultado");
		var persoma1=new person(nombre,edad,sexo);
		resultado.innerHTML=persoma1.hablar();
	});
		function person(nombre, edad,sexo) {
	   		this.nombre = nombre;
		    this.edad= edad;
		    this.sexo = sexo;
		    this.mayorEdad = (this.edad >= 18);
		    this.hablar=function(){
		    	if (this.mayorEdad) {
		    		return "Hola, mi nombre es " + this.nombre + " , tengo "+this.edad+" años y soy mayor  de edad"
		    	}
		    	else {
		    		return "Hola, mi nombre es " + this.nombre + " , tengo "+this.edad+"años y soy menor de edad"
		    	}
		    }
	}
});


