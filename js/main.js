// DOM JS

const btnCheckout = document.querySelector('div.logo-carrito')
const container = document.querySelector('div.container')
const inputBuscar = document.querySelector('input#inputBuscar')
const titulo = document.querySelector('h1#titulo')
const carrito = []

function retornarCard(producto) {
    return `<div class="div-card">
                <div class="imagen"><h1>${producto.imagen}</h1></div>
                <div class="prenda"><p>${producto.nombre}</p></div>
                <div class="importe"><p>$ ${producto.importe}</p></div>
                <div class="comprar"><button id="${producto.codigo}" class="button button-outline">AGREGAR</button></div>
            </div>`
}

function retornarCardError() {
    return `<div class="card-error">
                <h2 id="errorTitle">Se ha producido un error</h2>
                <h3 id="errorDescription">Intenta nuevamente en unos instantes...</h3>
                <p id="errorIcon">🔌</p>
            </div>`
}

function cargarProductos() {
    let cardsProductos = ''
    if (productos.length > 0) {
        productos.forEach((producto)=> {
            cardsProductos += retornarCard(producto)
        })
        container.innerHTML = cardsProductos
        agregarEventosClick()
    } else {
        container.innerHTML = retornarCardError()
    }
}

// FUNCION PRINCIPAL: 
cargarProductos()


// EVENTOS
function agregarEventosClick() {
    const botonesAgregar = document.querySelectorAll('button.button.button-outline')
    if (botonesAgregar.length > 0) {
        botonesAgregar.forEach((boton)=> {
            boton.addEventListener('click', ()=> {
                let productoSeleccionado = productos.find((producto)=> producto.codigo === boton.id)
                carrito.push(productoSeleccionado)
                console.table(carrito)
            })
        })
    }
}

btnCheckout.addEventListener('click', ()=> {
    // ir a la página de checkout.
})