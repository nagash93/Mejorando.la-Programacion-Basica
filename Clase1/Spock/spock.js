function aleatorio(minimo, maximo)
{
	var numero = Math.floor( Math.random() * (maximo - minimo + 1) + minimo );
	return numero;
}

var piedra = document.getElementById('piedra');
var papel = document.getElementById('papel');
var tijera = document.getElementById('tijera');
var lagarto = document.getElementById('lagarto');
var spock = document.getElementById('spock');
var Maquina = document.getElementById('Maquina');
var resultado = document.getElementById('resultado');

piedra.onclick = function()
{
	var obtenido = aleatorio(0,4);
	var valor = 0;
	if (valor == obtenido)
	{
		Maquina.innerHTML = "La Máquina escogió Piedra tembién :|";
		resultado.innerHTML = "Empate";
	}
	else if(obtenido == 1)
	{
		Maquina.innerHTML = "La Máquina escogió Papel";
		resultado.innerHTML = "Perdiste... / Papel envuelve Piedra :C";
	}
	else if(obtenido == 2)
	{
		Maquina.innerHTML = "La Máquina escogió Tijeras";
		resultado.innerHTML = "Ganaste!!! / Piedra dobla Tijeras :D";
	}
	else if(obtenido == 3)
	{
		Maquina.innerHTML = "La Máquina escogió Lagarto";
		resultado.innerHTML = "Ganaste!!! / Piedra aplasta Lagarto :D";
	}
	else
	{
		Maquina.innerHTML = "La Máquina escogió a Spock";
		resultado.innerHTML = "Perdiste... / Spock vaporiza Piedra :C";
	}
}
papel.onclick = function()
{
	var obtenido = aleatorio(0,4);
	var valor = 1;
	if (valor == obtenido)
	{
		Maquina.innerHTML = "La Máquina escogió Papel tembién :|";
		resultado.innerHTML = "Empate";
	}
	else if(obtenido == 0)
	{
		Maquina.innerHTML = "La Máquina escogió Piedra";
		resultado.innerHTML = "Ganaste!!! / Papel envuelve Piedra :D";
	}
	else if(obtenido == 2)
	{
		Maquina.innerHTML = "La Máquina escogió Tijeras";
		resultado.innerHTML = "Perdiste... / Tijeras cortarn Papel :C"
	}
	else if(obtenido == 3)
	{
		Maquina.innerHTML = "La Máquina escogió Lagarto";
		resultado.innerHTML = "Perdiste... / Lagarto come Papel :C"
	}
	else
	{
		Maquina.innerHTML = "La Máquina escogió a Spock";
		resultado.innerHTML = "Ganaste!!! / Papel desaprueba Spock :D";
	}
}
tijera.onclick = function()
{
	var obtenido = aleatorio(0,4);
	var valor = 2;
	if (valor == obtenido)
	{
		Maquina.innerHTML = "La Máquina escogió Tijeras tembién :|";
		resultado.innerHTML = "Empate";
	}
	else if(obtenido == 0)
	{
		Maquina.innerHTML = "La Máquina escogió Piedra";
		resultado.innerHTML = "Perdiste... / Piedra dobla Tijeras :C";
	}
	else if(obtenido == 1)
	{
		Maquina.innerHTML = "La Máquina escogió Papel";
		resultado.innerHTML = "Ganaste... / Tijeras cortan Papel :D";
	}
	else if(obtenido == 3)
	{
		Maquina.innerHTML = "La Máquina escogió Lagarto";
		resultado.innerHTML = "Ganaste... / Tijeras decapitan Lagarto :D";
	}
	else
	{
		Maquina.innerHTML = "La Máquina escogió a Spock";
		resultado.innerHTML = "Perdiste... / Spock quiebra Tijeras :C";
	}
}
lagarto.onclick = function()
{
	var obtenido = aleatorio(0,4);
	var valor = 3;
	if (valor == obtenido)
	{
		Maquina.innerHTML = "La Máquina escogió Lagarto tembién :|";
		resultado.innerHTML = "Empate";
	}
	else if(obtenido == 0)
	{
		Maquina.innerHTML = "La Máquina escogió Piedra";
		resultado.innerHTML = "Ganaste!!! / Piedra aplasta Lagarto :D"
	}
	else if(obtenido == 1)
	{
		Maquina.innerHTML = "La Máquina escogió Papel";
		resultado.innerHTML = "Ganaste!!! / Lagarto come Papel :D";
	}
	else if(obtenido == 2)
	{
		Maquina.innerHTML = "La Máquina escogió Tijeras";
		resultado.innerHTML = "Perdiste... / Tijeras decapitan Lagarto :D";
	}
	else
	{
		Maquina.innerHTML = "La Máquina escogió a Spock";
		resultado.innerHTML = "Ganaste!!! / Lagarto envenena a Spock :D";
	}
}
spock.onclick = function()
{
	var obtenido = aleatorio(0,4);
	var valor = 4;
	if (valor == obtenido)
	{
		Maquina.innerHTML = "La Máquina escogió a Spock tembién :|";
		resultado.innerHTML = "Empate";
	}
	else if(obtenido == 0)
	{
		Maquina.innerHTML = "La Máquina escogió Piedra";
		resultado.innerHTML = "Ganaste!!! / Spock vaporiza Piedra :C";
	}
	else if(obtenido == 1)
	{
		Maquina.innerHTML = "La Máquina escogió Papel";
		resultado.innerHTML = "Perdiste... / Papel desaprueba Spock :C";
	}
	else if(obtenido == 2)
	{
		Maquina.innerHTML = "La Máquina escogió Tijeras";
		resultado.innerHTML = "Ganaste!!! / Spock quiebra Tijeras :D";
	}
	else
	{
		Maquina.innerHTML = "La Máquina escogió Lagarto";
		resultado.innerHTML = "Perdiste... / Lagarto envenena a Spock :C";
	}
}