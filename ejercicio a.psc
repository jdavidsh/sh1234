Algoritmo ejercicioA
	Definir n, m, i Como Entero;
	definir r como real
	Imprimir "ingrese primer numero"
	Leer n
	Imprimir "ingrese segundo numero"
	leer m
	r=0
	Si n>m Entonces
		Mientras n>m Hacer
			r= n mod 3
			//imprimir r
			n=n-1
			Si r=0 Entonces
				i=i+1
			Fin Si
			
		Fin Mientras
		
	SiNo
		Mientras m>n Hacer
			r= m mod 3
			//imprimir r
			m=m-1
			Si r=0 Entonces
				i=i+1
			Fin Si
			
		Fin Mientras
	Fin Si
	Imprimir "submultiplos de 2 que se contienen son: ", i
FinAlgoritmo
