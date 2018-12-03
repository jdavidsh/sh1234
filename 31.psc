Algoritmo juego_31
	definir cartas, user, pc como real
	definir i, j, sumuser, sumpc como entero
	Dimension cartas[13], user[4], pc[4]
	i=0
	r=0
	//llenando la baraja
	Para i<-1 Hasta 12 Con Paso 1 Hacer
		cartas[i]=4
		//imprimir i,"  ", cartas[i]
	Fin Para
	i=0
	j=0
	sumpc=0
	sumuser=0
	//cartas usuario
	imprimir "cartas usuario"
		Para i<-1 Hasta 3 Hacer 
			j <- azar(12)+1;
			user[i]=j
			imprimir "carta ", i , ": ", user[i]
		FinPara 
		i=0
		j=0
		//cartas Computadora
	//imprimir "cartas PC"
		Para i<-1 Hasta 3 Hacer 
			j <- azar(12)+1;
			pc[i]=j
			//imprimir "carta ", i , ": ", pc[i]
		FinPara 
		i=0
		j=0
		Si sumuser>31 Entonces
			Imprimir "Perdiste"
		SiNo
			Mientras sumuser<31 Hacer
				imprimir "¿desea otra carta?"
				sumuser=sumuser+azar(12)+1
			Fin Mientras
		Fin Si
FinAlgoritmo
