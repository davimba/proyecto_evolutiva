 var tablero = document.getElementById("tablero");
 var boton = document.getElementById("pintar");
 
 var ctx=tablero.getContext("2d");


 boton.addEventListener('click', dibujar_tablero);



 function dibujar_tablero()
 {
 	
 	ctx.clearRect(0, 0, tablero.width, tablero.height);
 	cromosoma = document.getElementById("cromosoma").value;
 	alert(cromosoma)
 	n = cromosoma.length;
 	tamanio_rectangulo = Math.round(400 / n) ;
 	fila = 0;
 	columna = 1;
 	ctx.lineWidth = 1;
	ctx.strokeStyle = "#000";

	x = 0;
 	y = 0;
 	/*
 	ctx.strokeStyle = "#f00";
	ctx.strokeRect(x,y,tamanio_rectangulo,tamanio_rectangulo);
	*/
	
 	for(i = 0 ; i <= n*n-1; i++)
 	{	
	 	if(x == tamanio_rectangulo*n)
	 	{
	 		fila++;
	 		x = 0;
	 	 	y = y+tamanio_rectangulo;
	 		columna = 1;
	 		

	 	}

	 	console.log( cromosoma.charAt(fila) +" = "+ columna);
	 	if( cromosoma.charAt(fila) == ""+columna )
	 	{
		 	ctx.fillRect(x , y,tamanio_rectangulo,tamanio_rectangulo);
			//console.log(fila+", "+columna)

	 	}else
	 	{
		 	
			//console.log(fila+", "+columna);
			ctx.strokeRect(x , y,tamanio_rectangulo,tamanio_rectangulo);

	 	}



	 	//console.log( string.charAt(i) );
 		
		
      	
      	columna++;
 		x = x + tamanio_rectangulo;
 		
 		



 	} 

 }


