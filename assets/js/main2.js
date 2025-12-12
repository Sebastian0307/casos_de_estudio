function ejercicio1() {
    let num_personas = parseInt(document.getElementById("nump").value);

    if (isNaN(num_personas) || num_personas <= 0) {
        alert("Ingrese un número válido.");
        return;
    }

    let costo_plato;

    if (num_personas < 200) {
        costo_plato = 25000;
    }
    else if (num_personas <= 300) {
        costo_plato = 18500;
    }
    else {
        costo_plato = 16000;
    }

    let total = num_personas * costo_plato;

    document.getElementById("respuesta").innerHTML = "El costo total es: $" + total;
}

function ejercicio2() {
    let precio = parseFloat(document.getElementById("pre_traje").value);

    if (isNaN(precio) || precio <= 0) {
        alert("Ingrese un precio válido.");
        return;
    }

    let descuento;
    let diez = 0.10;
    let treinta_y_cinco = 0.35; 

    if (precio <= 125000) {
        descuento = precio * diez;
        document.getElementById("respuesta2_por").innerHTML = "El porcentaje es: $" + diez * 100 + "%";
    }
    else {
        descuento = precio * treinta_y_cinco;
        document.getElementById("respuesta2_por").innerHTML = "El porcentaje es: $" + treinta_y_cinco * 100 + "%";
    }

    let total = precio - descuento;

    document.getElementById("respuesta2").innerHTML = "El precio final es: $" + total;
    document.getElementById("respuesta2_des").innerHTML = "El descuento es de: $" + descuento;
}

function ejercicio3() {
    let cantidad = parseInt(document.getElementById("num_hamburguesas").value);
    let tipo = document.getElementById("lista_tipo").value;
    let pago = document.getElementById("lista_pago").value;

    if (isNaN(cantidad) || cantidad <= 0) {
        alert("Ingrese una cantidad válida.");
        return;
    }

    let precio = 0;

    if (tipo === "sencilla") {
        precio = 20000;
    } 
    else if (tipo === "dobles") {
        precio = 25000;
    } 
    else if (tipo === "triples") {
        precio = 28000;
    }

    let subtotal = cantidad * precio;

    if (pago === "Tarjeta") {
        subtotal = subtotal + (subtotal * 0.07);
    }

    document.getElementById("respuesta3_uni").innerHTML = "Valor Unidad: $ " + precio;
    document.getElementById("respuesta3_uni").innerHTML = "Cantidad: $ " + cantidad;
    document.getElementById("respuesta3_pago").innerHTML = "Tipo de pago: " + pago;
    document.getElementById("respuesta3_sub_cargo").innerHTML = "Total sin cargo: $ " + (cantidad * precio);
    document.getElementById("respuesta3_cargo").innerHTML = "cargo: $ " + (subtotal - (cantidad * precio));
    document.getElementById("respuesta3_total").innerHTML = "Total a pagar: $ " + subtotal;
}

function ejercicio4() {
    let peso = parseFloat(document.getElementById("peso_paquete").value);
    let zona = document.getElementById("lista_zonas").value;

    if (isNaN(peso) || peso <= 0) {
        alert("Ingrese un peso valido.");
        return;
    }

    if (peso > 85) {
        alert("No se puede enviar, excede los 85 kg.");
        return;
    }

    let tarifa = 0;

    if (zona === "1") {
        tarifa = 210;
    }
    else if (zona === "2") { 
        tarifa = 180 
    }
    else if (zona === "3") {
         tarifa = 220 
    }
    else if (zona === "4") {
         tarifa = 340 
    }
    else if (zona === "5") {
         tarifa = 370 
    }

    let total = peso * tarifa;

    document.getElementById("respuesta4").innerHTML = "Costo del envío: $" + total;
}

function ejercicio5() {
    let kilos = parseFloat(document.getElementById("kg_panela").value);
    let tipo = document.getElementById("lista_tipo2").value;
    let tam = document.getElementById("lista_tamaños").value;
    let precio = parseFloat(document.getElementById("pre_panela").value);

    if (isNaN(kilos) || kilos <= 0 || isNaN(precio) || precio <= 0) {
        alert("Ingrese datos válidos.");
        return;
    }

    let ajuste = 0;

    if (tipo === "tipo1" && tam === "tamaño1") {
         ajuste = 1200 
    }
    else if (tipo === "tipo1" && tam === "tamaño2") {
         ajuste = 830 
    }
    else if (tipo === "tipo2" && tam === "tamaño1") {
         ajuste = -540 
    }
    else if (tipo === "tipo2" && tam === "tamaño2") {
         ajuste = -350 
    }

    let total = (precio + ajuste) * kilos;

    document.getElementById("respuesta5").innerHTML = "Ganancia: $" + total;
}

function ejercicio6() {
    let cantidad = parseInt(document.getElementById("audifonos").value);

    if (isNaN(cantidad) || cantidad <= 0) {
        alert("Ingrese un número válido.");
        return;
    }

    let precio;

    if (cantidad >= 1000) {
        precio = 49850;
    }
    else {
        precio = 71290;
    }

    let total = cantidad * precio;

    document.getElementById("respuesta6").innerHTML = "Total a pagar: $" + total;
}

function ejercicio7() {
    let horas = parseFloat(document.getElementById("horas").value);
    let tarifa = 22000;

    if (isNaN(horas) || horas <= 0) {
        alert("Ingrese un numero de horas validas.");
        return;
    }

    let salario;

    if (horas <= 40) {
        salario = horas * tarifa;
    } 
    else {
        let extras = horas - 40;
        salario = (40 * tarifa) + (extras * (tarifa * 1.5));
    }

    document.getElementById("respuesta7").innerHTML = "Salario del trabajador: $" + salario;
}