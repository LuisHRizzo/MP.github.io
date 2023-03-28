// declaracion de variables y constantes capturadas

const queryString = location.search

const params = new URLSearchParams(queryString)

const idParams = params.get("id")

let evento = data.events.find(info => info._id == idParams)

// eventos 

// llamadas a funciones 

// funciones 

const cardDetail = document.querySelector(".card-detail")
cardDetail.innerHTML += `
<div class="row">
<div class="col-md-6 col-12 img-container">
    <div class="card-img">
        <img src="${product.image}" class="card-img-detail" alt="">
    </div>

</div>
<div class="col-md-6 col-12 ">
    <div class="card-detail-content">
        <h2>${product.name}  </h2>
        <span>Date: </span><p>${product.date}</p>
        <span>Description: </span><p>${product.description}</p>
        <span>Category: </span><p>${product.category}</p>
        <span>Place: </span><p>${product.place}</p>
        <span>Price: </span><p>U$D  ${product.price}</p>
        <a href="./index.html" class="btn btn-outline-secondary">Exit</a>
    </div>

</div>
</div>
`
