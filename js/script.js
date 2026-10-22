const productos = [

    {
        nombre: "Audífonos Gamer",
        descripcion:"Audífonos con sonido envolvente RGB.",
        precio: 45.99,
        imagen: "img/producto1.WEBP"
    },

    {
        nombre: "Mouse RGB",
        descripcion:"mouse de alta precisión con RGB.",
        precio: 18.50,
        imagen: "img/producto2.WEBP"
    },

    {
        nombre: "Teclado Mecánico",
        descripcion:"teclado mecánico incluye piezas de repuesto sin RGB.",
        precio: 59.99,
        imagen: "img/producto3.png"
    },

    {
        nombre: "Monitor 24 Pulgadas",
        descripcion:"Monitor de 24 pulgadas a 120hz marca env.",
        precio: 179.99,
        imagen: "img/producto4.webp"
    },

    {
        nombre: "Monitor 21 Pulgadas",
        descripcion:"monitor de 21 pulgadas a 60hz marca hp.",
        precio: 119.99,
        imagen: "img/producto5.png"
    },

    {
        nombre: "Teclado Mecánico RGB",
        descripcion:"Teclado mecánico con luces RGB.",
        precio: 79.99,
        imagen: "img/producto6.png"
    }
];

const contenedor = document.getElementById("productos");

function mostrarProductos(lista){

    contenedor.innerHTML="";

    lista.forEach((producto,indice)=>{

        contenedor.innerHTML+=`

        <div class="producto">

            <img src="${producto.imagen}" class="imagenProducto" data-id="${indice}">

            <h3>${producto.nombre}</h3>

            <p>$${producto.precio}</p>

            <button>Comprar</button>

        </div>

        `;

    });

    activarEventosImagenes();

}

mostrarProductos(productos);

const modal=document.getElementById("modal");

const imagen=document.getElementById("modalImagen");

const nombre=document.getElementById("modalNombre");

const descripcion=document.getElementById("modalDescripcion");

const precio=document.getElementById("modalPrecio");

document.querySelectorAll(".imagenProducto").forEach(imagenProducto=>{

imagenProducto.addEventListener("click",()=>{

const producto=productos[imagenProducto.dataset.id];

imagen.src=producto.imagen;

nombre.textContent=producto.nombre;

descripcion.textContent=producto.descripcion;

precio.textContent="$"+producto.precio;

modal.classList.add("activo");

});

});

document.getElementById("cerrarModal").onclick=()=>{

modal.classList.remove("activo");

};

modal.addEventListener("click",(e)=>{

if(e.target===modal){

modal.classList.remove("activo");

}

});

function activarEventosImagenes(){

    document.querySelectorAll(".imagenProducto").forEach(imagenProducto=>{

        imagenProducto.onclick=()=>{

            const producto=productos.find(p=>p.nombre===imagenProducto.parentElement.querySelector("h3").textContent);

            imagen.src=producto.imagen;

            nombre.textContent=producto.nombre;

            descripcion.textContent=producto.descripcion;

            precio.textContent="$"+producto.precio;

            modal.classList.add("activo");

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