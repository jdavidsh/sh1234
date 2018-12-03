var enviar = document.getElementById("env");					//boton enviar
var input_1 = document.getElementById("num1");					//primer numero

enviar.addEventListener("click",abrir);
function abrir()
{
	var val1 =parseInt(input_1.value)							//primer limite a verificar
var pot=0;
var j= 0
for (var i = 0; i < val1; i++)
{
if (j<val1){
j =Math.pow(2,i);
	if(j<val1)
	{
		document.write("2^"+i+": "+ j+"</br>");
		pot++;
	}
	else {
		if (j>val1) {
			pot--;
			document.write("2^"+i+": "+ j+"</br>");
		}
	}
}
}
			document.write("la potencia de 2 mas cercana y menor a "+val1+" es: </br>"+pot);
}
