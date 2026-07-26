const modal = document.getElementById("modal");

const imagen = document.getElementById("modalImagen");
const nombre = document.getElementById("modalNombre");
const descripcion = document.getElementById("modalDescripcion");
const precio = document.getElementById("modalPrecio");

const slider = document.getElementById("sliderCantidad");
const cantidadActual = document.getElementById("cantidadActual");
const subtotal = document.getElementById("subtotalProducto");

const btnMenos = document.getElementById("menosCantidad");
const btnMas = document.getElementById("masCantidad");

let productoActual = null;
let cantidad = 1;

function abrirModal(id){

    productoActual = productos.find(p => p.id === id);

    if(!productoActual) return;

    cantidad = 1;

    slider.value = 1;

    imagen.src = productoActual.imagen;
    nombre.textContent = productoActual.nombre;
    descripcion.textContent = productoActual.descripcion;

    actualizarCantidad();

    modal.classList.add("activo");

}

function cerrarModal(){

    modal.classList.remove("activo");

}

function actualizarCantidad(){

    cantidadActual.textContent = cantidad;

    precio.textContent = "$" + productoActual.precio.toFixed(2);

    subtotal.textContent =
        "Subtotal: $" +
        (productoActual.precio * cantidad).toFixed(2);

    slider.value = cantidad;

    actualizarSlider();

}

function actualizarSlider(){

    const porcentaje =
        ((cantidad - Number(slider.min)) /
        (Number(slider.max) - Number(slider.min))) * 100;

    slider.style.background =
        `linear-gradient(
            to right,
            #ff9800 0%,
            #ff9800 ${porcentaje}%,
            #dddddd ${porcentaje}%,
            #dddddd 100%
        )`;

}

slider.addEventListener("input",()=>{

    cantidad = Number(slider.value);

    actualizarCantidad();

});

btnMas.addEventListener("click",()=>{

    if(cantidad < Number(slider.max)){

        cantidad++;

        actualizarCantidad();

    }

});

btnMenos.addEventListener("click",()=>{

    if(cantidad > 1){

        cantidad--;

        actualizarCantidad();

    }

});

document.getElementById("cerrarModal").onclick = cerrarModal;

modal.addEventListener("click",(e)=>{

    if(e.target===modal){

        cerrarModal();

    }

});

document.getElementById("btnComprar").addEventListener("click",()=>{

    agregarAlCarrito(productoActual,cantidad);

    cerrarModal();

});