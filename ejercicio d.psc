Algoritmo ejercicioD
	Definir p como entero
	imprimir "ingrese numero a verificar en arreglo"
	leer p
	
	encontrarpotencia(p)
	
FinAlgoritmo


SubAlgoritmo encontrarpotencia(p)
	
	
	Definir r, i, j, m Como entero
	i=0
	m=0
	Mientras i=0 Hacer
		i=azar[50]
		
	Fin Mientras
	Imprimir "dimension ", i
	Dimension r[i]
	j=1
	
	Mientras i>0 Hacer
		r[j]=azar[50]
		Si r[j]=p Entonces
			m=m+1
		Fin Si
		
		Imprimir r[j]," "
		i=i-1
		j=j+1
	Fin Mientras
	Si m=0 Entonces
		imprimir "numero ingresado NO se encuentra en el arreglo"
	SiNo
		imprimir "numero ingresado SI se encuentra en el arreglo"
	Fin Si

FinSubAlgoritmo

