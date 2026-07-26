const numeroWhatsApp = "593981279614";

const modalCliente = document.getElementById("modalCliente");

const cerrarCliente = document.getElementById("cerrarCliente");

const btnWhatsapp = document.getElementById("btnWhatsapp");

const continuarWhatsapp = document.getElementById("continuarWhatsapp");

const modalConfirmacion =
document.getElementById("modalConfirmacion");


const cerrarConfirmacion =
document.getElementById("cerrarConfirmacion");

btnWhatsapp.onclick = ()=>{


    if(carrito.length===0){

        alert("El carrito está vacío");

        return;

    }


    modalCliente.classList.add("activo");


};



cerrarCliente.onclick = ()=>{


    modalCliente.classList.remove("activo");


};



modalCliente.addEventListener("click",(e)=>{


    if(e.target===modalCliente){


        modalCliente.classList.remove("activo");


    }


});



continuarWhatsapp.onclick = ()=>{


    const nombre =
    document.getElementById("nombreCliente").value.trim();


    const ciudad =
    document.getElementById("ciudadCliente").value.trim();


    const direccion =
    document.getElementById("direccionCliente").value.trim();



    if(
        nombre==="" ||
        ciudad==="" ||
        direccion===""

    ){

        alert("Completa todos los datos");

        return;

    }



    let mensaje = 
`Hola, quiero realizar un pedido:

👤 Cliente:
${nombre}

📍 Ciudad:
${ciudad}

🏠 Dirección:
${direccion}


🛒 Productos:
`;



    let total = 0;



    carrito.forEach(producto=>{


        const subtotal = producto.precio * producto.cantidad;


        total += subtotal;


        mensaje += `

${producto.nombre}

Cantidad: ${producto.cantidad}

Precio: $${producto.precio.toFixed(2)}

Subtotal: $${subtotal.toFixed(2)}

`;

    });



    mensaje += `

💰 Total:
$${total.toFixed(2)}

`;



    const url =
    "https://wa.me/" 
    + numeroWhatsApp 
    + "?text="
    + encodeURIComponent(mensaje);



    window.open(url,"_blank");


// limpiar carrito

carrito = [];

localStorage.removeItem("carrito");

actualizarContador();

actualizarCarrito();


// cerrar formulario

modalCliente.classList.remove("activo");


// mostrar confirmación

modalConfirmacion.classList.add("activo");


};

cerrarConfirmacion.onclick = ()=>{

    modalConfirmacion.classList.remove("activo");

};