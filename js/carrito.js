let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

const contadorCarrito = document.getElementById("contadorCarrito");

const panelCarrito = document.getElementById("carrito");
const overlayCarrito = document.getElementById("carritoOverlay");

const listaCarrito = document.getElementById("listaCarrito");
const totalCarrito = document.getElementById("totalCarrito");

// GUARDAR CARRITO EN MEM LOC NAVEGADOR
function guardarCarrito(){

    localStorage.setItem(
        "carrito",
        JSON.stringify(carrito)
    );

}

function agregarAlCarrito(producto,cantidad){

    const existente = carrito.find(item=>item.id===producto.id);

    if(existente){

        existente.cantidad += cantidad;

    }else{

        carrito.push({

            id:producto.id,
            nombre:producto.nombre,
            precio:producto.precio,
            imagen:producto.imagen,
            cantidad:cantidad

        });

    }

    actualizarContador();

    actualizarCarrito();

    guardarCarrito();

}

function actualizarContador(){

    const total = carrito.reduce((suma,item)=>suma+item.cantidad,0);

    contadorCarrito.textContent = total;

}

function actualizarCarrito(){

    listaCarrito.innerHTML="";

    let total=0;


    carrito.forEach(item=>{


        const subtotal = item.precio * item.cantidad;


        total += subtotal;


        listaCarrito.innerHTML+=`

        <div class="itemCarrito">

            <img src="${item.imagen}">


            <div class="infoCarrito">


                <h4>${item.nombre}</h4>


                <p>$${item.precio.toFixed(2)} c/u</p>


                <div class="controlesCantidad">


                    <button 
                        class="menosCarrito"
                        data-id="${item.id}">
                        −
                    </button>


                    <span>
                        ${item.cantidad}
                    </span>


                    <button 
                        class="masCarrito"
                        data-id="${item.id}">
                        +
                    </button>


                </div>


                <strong>
                    $${subtotal.toFixed(2)}
                </strong>


                <button
                    class="eliminarProducto"
                    data-id="${item.id}">

                    🗑️ Eliminar

                </button>


            </div>


        </div>

        `;


    });


    if(carrito.length===0){


        listaCarrito.innerHTML=`

            <p class="carritoVacio">

                Tu carrito está vacío.

            </p>

        `;


    }


    totalCarrito.textContent="$"+total.toFixed(2);


}

    function cambiarCantidad(id,cambio){

    const producto = carrito.find(item=>item.id===id);


    if(!producto) return;


    producto.cantidad += cambio;


    if(producto.cantidad <=0){

        carrito = carrito.filter(item=>item.id!==id);

    }


    actualizarContador();

    actualizarCarrito();
    
    guardarCarrito();
}

function abrirCarrito(){

    panelCarrito.classList.add("abierto");

    overlayCarrito.classList.add("abierto");

}


function cerrarCarrito(){

    panelCarrito.classList.remove("abierto");

    overlayCarrito.classList.remove("abierto");

}


const botonCarrito = document.getElementById("iconoCarrito");

const botonCerrar = document.getElementById("cerrarCarrito");


if(botonCarrito){

    botonCarrito.onclick = abrirCarrito;

}


if(botonCerrar){

    botonCerrar.onclick = cerrarCarrito;

}


if(overlayCarrito){

    overlayCarrito.onclick = cerrarCarrito;

}


document.addEventListener("click",(e)=>{


    if(e.target.classList.contains("masCarrito")){


        const id = Number(e.target.dataset.id);

        cambiarCantidad(id,1);


    }


    if(e.target.classList.contains("menosCarrito")){


        const id = Number(e.target.dataset.id);

        cambiarCantidad(id,-1);


    }


    if(e.target.classList.contains("eliminarProducto")){


    const id = Number(e.target.dataset.id);


    carrito = carrito.filter(item=>item.id!==id);


    actualizarContador();

    actualizarCarrito();

    guardarCarrito();

}


});

actualizarContador();

actualizarCarrito();