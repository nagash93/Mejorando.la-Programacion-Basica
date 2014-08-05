// Creamos variables
var piedra = 0;
var papel = 1;
var tijera = 2;

var opcionUsuario;
var opcionMaquina = papel;
// Creamos variables

//Pedimos datos con prompt
opcionUsuario = prompt("¿Qué elijes?\nPiedra: 0\nPapel: 1\nTijera: 2", 0);
//Pedimos datos con prompt

//Mostramos elección con un alert
// alert("Elegiste: " + opcionUsuario);
//Mostramos elección con un alert

//Usamos condicionales para ver que pasa y validar que hará en caso de que algo pase

	//Checamos si la opción es igual al valor de la variable piedra
	if(opcionUsuario == piedra)
	{
		// Mostramos una ventana con el mensaje:
		alert("Elegiste Piedra!");
		// Mostramos una ventana con el mensaje:

		//Checamos la opcion de la máquina con la del usuario

			//Cheamos si con iguales para declarar empate
			if(opcionMaquina == piedra)
			{
				alert("Empate");
			}
			//Cheamos si con iguales para declarar empate

			//Checamos los otros casos para declarar a un ganador
			else if(opcionMaquina = papel)
			{
				alert("Perdiste");
			}

			else if(opcionMaquina == tijera)
			{
				alert("Ganaste");
			}
			//Checamos los otros casos para declarar a un ganador

		//Checamos la opcion de la máquina con la del usuario

	}
	//Checamos si la opción es igual al valor de la variable piedra

	//Checamos si la opción es igual al valor de la variable papel
	else if(opcionUsuario == papel)
	{
		// Mostramos una ventana con el mensaje:
		alert("Elegiste Papel!");
		// Mostramos una ventana con el mensaje:

		//Checamos la opcion de la máquina con la del usuario

			//Cheamos si con iguales para declarar empate
			if(opcionMaquina == papel)
			{
				alert("Empate");
			}
			//Cheamos si con iguales para declarar empate

			//Checamos los otros casos para declarar a un ganador
			else if(opcionMaquina = tijera)
			{
				alert("Perdiste");
			}

			else if(opcionMaquina == piedra)
			{
				alert("Ganaste");
			}
			//Checamos los otros casos para declarar a un ganador

		//Checamos la opcion de la máquina con la del usuario

	}
	//Checamos si la opción es igual al valor de la variable papel

	//Checamos si la opción es igual al valor de la variable tijera
	else if(opcionUsuario == tijera)
	{
		// Mostramos una ventana con el mensaje:
		alert("Elegiste Tijera!");
		// Mostramos una ventana con el mensaje:

		//Checamos la opcion de la máquina con la del usuario

			//Cheamos si con iguales para declarar empate
			if(opcionMaquina == tijera)
			{
				alert("Empate");
			}
			//Cheamos si con iguales para declarar empate

			//Checamos los otros casos para declarar a un ganador
			else if(opcionMaquina == piedra)
			{
				alert("Perdiste");
			}

			else if(opcionMaquina == papel)
			{
				alert("Ganaste");
			}
			//Checamos los otros casos para declarar a un ganador

		//Checamos la opcion de la máquina con la del usuario

	}
	//Checamos si la opción es igual al valor de la variable tijera

	//La armamos de pedo si no metió una opción válida ya que ninguna validación anterior se cumplió
	else
	{
		alert("¿Pos que carajo?");
	}
	//La armamos de pedo si no metió una opción válida ya que ninguna validación anterior se cumplió

//Usamos condicionales para ver que pasa y validar que hará en caso de que algo pase


