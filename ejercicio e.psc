Algoritmo ejercicioE
	Definir p como entero
	imprimir "ingrese numero a verificar en arreglo"
	leer p
	encontrarpotencia(p)	
FinAlgoritmo


SubAlgoritmo encontrarpotencia(p)
	Definir r, i, j, m, a Como entero
	i=0
	a=0
	Mientras i=0 Hacer
		i=10
		
	Fin Mientras
	Dimension r[i], m[i]
	j=1
	Mientras i>0 Hacer
		r[j]=azar[10]
		Si r[j]=p Entonces
			m[j]=1
		Fin Si
		Imprimir r[j]," "
		i=i-1
		j=j+1
	Fin Mientras
	i=1
	Mientras i<10 Hacer
		a=a+1
		Si m[i]=1 Entonces
			imprimir "numero ingresado se encuentra en la posicion ", i
		Fin Si
		i=i+1
	Fin Mientras
	
FinSubAlgoritmo