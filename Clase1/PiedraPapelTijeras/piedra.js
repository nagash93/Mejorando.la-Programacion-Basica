function aleatorio(minimo, maximo)
{
	var numero = Math.floor( Math.random() * (maximo - minimo + 1) + minimo );
	return numero;
}

var piedra = document.getElementById('piedra');
var papel = document.getElementById('papel');
var tijera = document.getElementById('tijera');
var Maquina = document.getElementById('Maquina');
var resultado = document.getElementById('resultado');
var imagen = document.getElementById('imagen');

var ganador = "img/ganador.png";
var perdedor = "img/perdedor.png";
var empate = "img/empate.jpg";

piedra.onclick = function()
{
	var obtenido = aleatorio(0,2);
	var valor = 0;
	if (valor < obtenido)
	{
		if(obtenido == 2)
		{
			Maquina.innerHTML = "La Máquina escogió Tijeras :D";
			resultado.innerHTML = "Ganaste!!!"
			imagen.src = ganador;
		}
		else
		{
			Maquina.innerHTML = "La Máquina escogió Papel :C";
			resultado.innerHTML = "Perdiste..."
			imagen.src = perdedor;
		}
	}
	else
	{
		Maquina.innerHTML = "La Máquina escogió piedra tembién :|";
		resultado.innerHTML = "Empate"
		imagen.src = empate;
	}
}

papel.onclick = function()
{
	var obtenido = aleatorio(0,2);
	var valor = 0;
	if (valor < obtenido)
	{
		Maquina.innerHTML = "La Máquina escogió Tijeras :C";
		resultado.innerHTML = "Perdiste..."
		imagen.src = perdedor;
	}
	else
	{
		if(obtenido == valor)
		{
			Maquina.innerHTML = "La Máquina escogió Papel tembién :|";
			resultado.innerHTML = "Empate"
			imagen.src = empate;
		}
		else
		{
			Maquina.innerHTML = "La Máquina escogió Piedra :D";
			resultado.innerHTML = "Ganaste!!!"
			imagen.src = ganador;
		}
	}
}

tijera.onclick = function()
{
	var obtenido = aleatorio(0,2);
	var valor = 0;
	if (valor < obtenido)
	{
		if(obtenido == 2)
		{
			Maquina.innerHTML = "La Máquina escogió Papel :D";
			resultado.innerHTML = "Ganaste!!!"
			imagen.src = ganador;
		}
		else
		{
			Maquina.innerHTML = "La Máquina escogió Piedra :C";
			resultado.innerHTML = "Perdiste..."
			imagen.src = perdedor;
		}
	}
	else
	{
		Maquina.innerHTML = "La Máquina escogió Tijeras tembién :|";
		resultado.innerHTML = "Empate"
		imagen.src = empate;
	}
}