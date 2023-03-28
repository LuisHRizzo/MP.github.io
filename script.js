

document.addEventListener("DOMContentLoaded", () => {


// Constantes capturadas y variables

const checkboxSearch = document.getElementById('checkboxSearch');
const card = document.getElementById(`tarjetasMain`)
const input = document.querySelector('input')


// Eventos

input.addEventListener('input',superFiltro)

checkboxSearch.addEventListener('change',superFiltro)

// Llamadas de funciones
pintarCards(products);
crearCheckboxes(products);


// Funciones

function pintarCards(arrayDatos){
    if(arrayDatos.length == 0){
        card.innerHTML = `<h2 class="display-1 fw-bold">No se encontró una tarjeta</h2>`
        return
    }
    let productHtml =''
    arrayDatos.forEach(product => {
        productHtml += `
        <div class="col-md-4">
        <div class="card mb-4 shadow-sm">
          <div id="carousel-${product.id}" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner">
              <div class="carousel-item active ">
              <figure class="rounded mb-6">
                <img src="${product.image}" class="card-img-top d-block w-100" alt="${product.name}">
              </figure>
              </div>
              <div class="carousel-item">
                <img src="${product.image2}" class="card-img-top d-block w-100" alt="${product.name}">
              </div>
              <div class="carousel-item">
                <img src="${product.image3}" class="card-img-top d-block w-100" alt="${product.name}">
              </div>
            </div>

          </div>
          <div class="card-body">
            <h5 class="card-title">${product.name}</h5>
            <p class="card-text">Categoría: ${product.category}</p>
            <p class="card-text">Descripción: ${product.description}</p>
            <div class="d-flex align-items-center">
              <div class="btn-group">
                <button type="button" href="./details.html?id${product.id} " class="btn btn-sm btn-outline-secondary">Ver Mas</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    `
                      
    })
    card.innerHTML = productHtml
}

function crearCheckboxes(arrayInfo){
    let checks =''
    let categoriaRepetida = arrayInfo.map(elemento => elemento.category)
    let categorias = new Set(categoriaRepetida.sort((a,b)=>{
        if(a>b){return 1}
        if(a<b){return -1}
        return 0
    }))
    categorias.forEach(elemento =>{
        checks += `<div class="form-check form-switch">
        <input class="form-check-input" type="checkbox" role="switch" id="${elemento}" value="${elemento}">
        <label class="form-check-label" for="${elemento}">${elemento}</label>
      </div>`
    })
    checkboxSearch.innerHTML = checks
}


function superFiltro(){
    let arrayFiltrado1 = filtrarPorTexto(products, input.value)
    let arrayFiltrado2 = filtrarPorCategoria(arrayFiltrado1)
    pintarCards(arrayFiltrado2)
}


function filtrarPorTexto(arrayDatos, texto){
    let arrayFiltrado = arrayDatos.filter(elemento => elemento.name.toLowerCase().includes(texto.toLowerCase()))
/*     console.log(arrayFiltrado) */
    return arrayFiltrado
}

function filtrarPorCategoria(arrayInfo){
    let checkboxes = document.querySelectorAll("input[type='checkbox']")
    /* console.log(checkboxes); */
    let arrayChecks = Array.from(checkboxes)
/*     console.log(arrayChecks); */
    let checksChecked = arrayChecks.filter(check => check.checked)
/*     console.log(checksChecked); */
    if(checksChecked.length == 0){
        return arrayInfo
    }
    let checkValues = checksChecked.map(check => check.value)
/*     console.log(checkValues); */
    let arrayFiltrado = arrayInfo.filter(elemento => checkValues.includes(elemento.category))
/*     console.log(arrayFiltrado); */
    return arrayFiltrado
}


})

