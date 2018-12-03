var enviar = document.getElementById("env");					//boton enviar
var input_1 = document.getElementById("num1");					//primer numero
var input_2 = document.getElementById("num2");				//segundo numero



enviar.addEventListener("click",abrir);
function abrir()
{
	var val1 =parseInt(input_1.value)							//primer limite a verificar
	var val2 =parseInt(input_2.value)							//segundo limite a verificar
console.log(val1);
	var contador =0;
		for (var i = val1 ; i<=val2 ; i++)
		{
			var prueba = i%3;
				if(prueba ==0)
				{
					contador++;
				}

		}
			document.write("la cantidad de numeros multiplos de 3 existentes entre "+val1+" y "+val2+" son: </br>"+ contador)
}
