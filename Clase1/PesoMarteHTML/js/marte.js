input = document.getElementById('Peso')
input.onkeyup=function calcularPeso()
{
	var peso = parseInt(document.getElementById('Peso').value);
	if(document.getElementById('Peso').value == "")
	{
		document.getElementById('pesoEnMarte').innerHTML = '0';
	}
	else
	{
		document.getElementById('pesoEnMarte').innerHTML = (peso/9.81) * 3.771;
	}
}