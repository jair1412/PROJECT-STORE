const contenedor = document.getElementById("productos");

function mostrarProductos(lista){

    contenedor.innerHTML="";

    lista.forEach(producto=>{

        contenedor.innerHTML+=`

        <div class="producto">

            <img
                src="${producto.imagen}"
                class="imagenProducto"
                data-id="${producto.id}">

            <h3>${producto.nombre}</h3>

            <p>$${producto.precio.toFixed(2)}</p>

            <button
                class="btnComprar"
                data-id="${producto.id}">

                Comprar

            </button>

        </div>

        `;

    });

    activarEventosProductos();

}

function activarEventosProductos(){

    document.querySelectorAll(".imagenProducto").forEach(imagen=>{

        imagen.onclick=()=>{

            abrirModal(Number(imagen.dataset.id));

        };

    });

    document.querySelectorAll(".btnComprar").forEach(boton=>{

        boton.onclick=()=>{

            abrirModal(Number(boton.dataset.id));

        };

    });

}

const buscador=document.getElementById("buscar");

buscador.addEventListener("input",()=>{

    const texto=buscador.value.toLowerCase();

    const resultado=productos.filter(producto=>

        producto.nombre.toLowerCase().includes(texto) ||

        producto.descripcion.toLowerCase().includes(texto)

    );

    mostrarProductos(resultado);

});