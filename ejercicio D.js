var enviar = document.getElementById("env");					//boton enviar
var input_1 = document.getElementById("num");					//numero que se comparara
var input_2 = document.getElementById("array");				//que tan grande sera el array
var input_3 = document.getElementById("minimo");			//valor minimo que contendra el array
var input_4 = document.getElementById("maximo");			//valor minimo que contendra el array

enviar.addEventListener("click",abrir);

function abrir() {

var array = parseInt(input_2.value)
var texto = parseInt(input_1.value)
document.write("el numero a buscar en el array es: " + texto + "<br/><br/>")
if (array>0)
	{
		//llenado de matriz

		for (var i = 1; i <= array; i++)
		{
		var arreglo;
		arreglo = Math.random();

		function aleatorio(minimo, maximo)
		{
			// do{
				var minimo =parseInt(input_3.value)							//valor minimo en el arreglo
				var maximo =parseInt(input_4.value)
				//alert("valor minimo es mayor que el maximo");
			//}while(minimo > maximo)
										//valor maximo en el arreglo
		  var resultado = Math.floor(Math.random() * (maximo - minimo + 1)) + minimo;


			if (resultado == texto)
			{
				document.write("se encuentra ");
			}
			return resultado;
		}

		document.write(Math.floor (aleatorio()) + "<br/>") ;

		}

}
}
