function ejercicio8() {
    let n1 = parseFloat(document.getElementById("num_1").value);
    let n2 = parseFloat(document.getElementById("num_2").value);
    let n3 = parseFloat(document.getElementById("num_3").value);

    if(isNaN(n1) || n1 <= 0 || isNaN(n2) || n2 <= 0 || isNaN(n3) || n3 <= 0){
        alert("ingesa un numero en todos los campos");
        return;
    }

    let mayor = n1;

    if (n2 > mayor) mayor = n2;
    if (n3 > mayor) mayor = n3;

    document.getElementById("respuesta8").innerHTML = "El número mayor es: " + mayor;
}

function ejercicio9() {
    let grosor = parseFloat(document.getElementById("grosor").value);
    let diametro = parseFloat(document.getElementById("diametro").value);

    let mensajeA = "";
    let mensajeB = "";

    if (diametro > 1.4) {
        mensajeA = "La rueda es para un vehículo grande.";
    } 
    else if (diametro > 0.8 && diametro <= 1.4) {
        mensajeA = "La rueda es para un vehículo mediano.";
    } 
    else {
        mensajeA = "La rueda es para un vehículo pequeño.";
    }

    if (diametro > 1.4 && grosor < 0.4) {
        mensajeB = "El grosor es inferior al recomendado.";
    } 
    else if (diametro > 0.8 && diametro <= 1.4 && grosor < 0.25) {
        mensajeB = "El grosor es inferior al recomendado.";
    }

    console.log(mensajeA);
    document.getElementById("respuesta9b").innerHTML = mensajeB;
}

function ejercicio10() {
    let numero = document.getElementById("num").value;

    if (numero != parseInt(numero) || numero < 0) {
        alert("Ingrese un número entero válido.");
        return;
    }

    let division = numero % 2;

    if (division == 0) {
        document.getElementById("respuesta10").innerHTML = numero + " es PAR";
    } 
    else if (division != 0) {
        document.getElementById("respuesta10").innerHTML = numero + " es IMPAR";
    }
}

function ejercicio11() {
    let peso = parseFloat(document.getElementById("peso").value);
    let estatura = parseFloat(document.getElementById("estatura").value);

    if (peso <= 0 || isNaN(peso) || estatura  <= 0 || isNaN(estatura)) {
        alert("Ingrese datos validos");
        return;
    }

    let imc = peso / (estatura * estatura);
    let diag = "";

    if (imc < 16) diag = "Criterio de ingreso en hospital";
    else if (imc <= 17) diag = "Infrapeso";
    else if (imc <= 18) diag = "Bajo peso";
    else if (imc <= 25) diag = "Peso normal";
    else if (imc <= 30) diag = "Sobrepeso (Obesidad grado I)";
    else if (imc <= 35) diag = "Sobrepeso crónico (Obesidad grado II)";
    else if (imc <= 40) diag = "Sobrepeso crónico (Obesidad grado III)";
    else if (imc > 40) diag = "Obesidad mórbida (Obesidad grado IV)";

    document.getElementById("respuesta11").innerHTML = "Diagnostico : " + diag;
}

function ejercicio12() {
    let t = parseFloat(document.getElementById("temp").value);
    let mensaje;

    if (t < 0) mensaje = "Clima helado";
    else if (t <= 10) mensaje = "Clima muy frío";
    else if (t <= 20) mensaje = "Clima frío";
    else if (t <= 30) mensaje = "Normal";
    else if (t <= 40) mensaje = "Hace calor";
    else if (t > 40) mensaje = "Hace mucho calor";

    document.getElementById("respuesta12").innerHTML = mensaje;
}

function ejercicio13() {
    let a = parseFloat(document.getElementById("lado_1").value);
    let b = parseFloat(document.getElementById("lado_2").value);
    let c = parseFloat(document.getElementById("lado_3").value);

    if (a <= 0 || isNaN(a) || b <= 0 || isNaN(b) || c <= 0 || isNaN(c)) {
        document.getElementById("respuesta13").innerHTML = "Datos no válidos";
        return;
    }

    if (a === b && b === c) {
        document.getElementById("respuesta13").innerHTML = "Triángulo equilátero";
    } else if (a === b || a === c || b === c) {
        document.getElementById("respuesta13").innerHTML = "Triángulo isósceles";
    } else {
        document.getElementById("respuesta13").innerHTML = "Triángulo escaleno";
    }
}

function ejercicio14() {
    let nivel = parseFloat(document.getElementById("nivel").value);
    let mensaje;

    if (nivel === 1) mensaje = "Riesgo biológico";
    else if (nivel === 2) mensaje = "Riesgo químico";
    else if (nivel === 3) mensaje = "Riesgo físico";
    else if (nivel === 4) mensaje = "Riesgo ergonómico";
    else if (nivel === 5) mensaje = "Riesgo psicosocial";
    else mensaje = "Nivel no válido";

    document.getElementById("respuesta14").innerHTML = mensaje;
}
