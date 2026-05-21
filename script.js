function afiliar() {
    var ema = document.getElementById("email").value;

    document.getElementById("nombre").value = "";
    document.getElementById("apellido").value = "";
    document.getElementById("email").value = "";
    document.getElementById("edad").value = "";
    if (ema == "2627312@ucc.edu.ar") { document.getElementById("resultadoafiliado").textContent = "Usuario Ya existe"; }
    else {
        document.getElementById("resultadoafiliado").textContent = "Usuario Afiliado";
    }}

    function cotizar() {

    var equipo = document.getElementById("equipo").value;

    var condicion = document.getElementById("condicion").value;

    var cantidad = document.getElementById("Cantidad").value;

    var precio = 0;

    
    if(condicion == "local"){

        precio = 10000;

        if(equipo == "Tala"){

            precio = 15000;
        }
    }


    else if(condicion == "visitante"){

        precio = 20000;

        if(equipo == "Tala"){

            precio = 25000;
        }
    }

    
    var total = precio * cantidad;

    
    document.getElementById("precioentrada").textContent =
    "Total: $" + total;
}



function comprar(){

    document.getElementById("resultadoentrada").textContent =
    "Entradas compradas correctamente, te llegaran a tu mail";
}