document.addEventListener("DOMContentLoaded", () => {

// Array de objetos con los productos
const products = [
    {
    id: 1,
    name: "Remera",
    category: "Ropa",
    description: "lorem   Ipsum",       
    image: "./assets/images/remeraBlanca.jpeg",
    image2: "./assets/images/remeraBlanca.jpeg",
    image3: "./assets/images/remeraBlanca.jpeg"
    },
    {
    id: 2,
    name: "Cartera con Flecos",
    category: "Carteras",
    description: "lorem   Ipsum",       
    image: "./assets/images/carteraFlecos.jpeg",
    image2: "./assets/images/carteraFlecos2.jpeg",
    image3: "./assets/images/carteraFlecos2.jpeg"
    },
    {
    id: 3,
    name: "Cartera Marron",
    category: "Carteras",
    description: "lorem   Ipsum",       
    image: "./assets/images/carteraMarron.jpeg",
    image2: "./assets/images/carteraMarron.jpeg",
    image3: "./assets/images/carteraMarron.jpeg"
    },
    {
    id: 4,
    name: "Carterita Marron con flecos",
    category: "Carteras",
    description: "lorem   Ipsum",       
    image: "./assets/images/carteraMarronFlecos.jpeg",
    image2: "./assets/images/carteraMarronFlecos.jpeg",
    image3: "./assets/images/carteraMarronFlecos.jpeg"
    },
    {
    id: 5,
    name: "Cartera Negra",
    category: "Carteras",
    description: "lorem   Ipsum",       
    image: "./assets/images/carteraNegra.jpeg",
    image2: "./assets/images/carteritaNegra1.jpeg",
    image3: "./assets/images/carteritaNegra2.jpeg"
    },
    {
    id: 6,
    name: "Mochila de Cuero",
    category: "Ropa",
    description: "lorem   Ipsum",       
    image: "./assets/images/mochilitaFemGris.jpeg",
    image2: "./assets/images/mochilitaFemGris.jpeg",
    image3: "./assets/images/mochilitaFemGris.jpeg"
    },
    {
    id: 7,
    name: "Campera de Cuero",
    category: "Ropa",
    description: "lorem   Ipsum",       
    image: "./assets/images/camperaDeCuero.jpeg",
    image2: "./assets/images/camperaDeCuero.jpeg",
    image3: "./assets/images/camperaDeCuero.jpeg"
    },
    {
    id: 8,
    name: "Cartera Verde",
    category: "Carteras",
    description: "lorem   Ipsum",       
    image: "./assets/images/carteraVerde.jpeg",
    image2: "./assets/images/carteraVerde.jpeg",
    image3: "./assets/images/carteraVerde.jpeg"
    }
  ];
  
  // Función para mostrar los productos en la página
  function showProducts(products) {
    const productList = document.getElementById("product-list");
  
    // Limpiar la lista de productos antes de mostrar los nuevos
    productList.innerHTML = "";
  
    products.forEach((product) => {
      // Crear el HTML para cada producto
      const productHtml = `
        <div class="col-md-4">
          <div class="card mb-4 shadow-sm">
            <div id="carousel-${product.id}" class="carousel slide" data-ride="carousel">
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <img src="${product.image}" class="d-block w-100" alt="${product.name}">
                </div>
                <div class="carousel-item">
                  <img src="${product.image2}" class="d-block w-100" alt="${product.name}">
                </div>
                <div class="carousel-item">
                  <img src="${product.image3}" class="d-block w-100" alt="${product.name}">
                </div>
              </div>
              <a class="carousel-control-prev" href="#carousel-${product.id}" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only"> </span>
              </a>
              <a class="carousel-control-next" href="#carousel-${product.id}" role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only"> </span>
              </a>
            </div>
            <div class="card-body">
              <h5 class="card-title">${product.name}</h5>
              <p class="card-text">Categoría: ${product.category}</p>
              <p class="card-text">Descripción: ${product.description}</p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                  <button type="button" class="btn btn-sm btn-outline-secondary">Ver</button>
                  <button type="button" class="btn btn-sm btn-outline-secondary">Añadir al carrito</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      `;
  
      // Agregar el HTML del producto a la lista de productos
      productList.innerHTML += productHtml;
    });
  
    // Inicializar los carruseles
    const carousels = Array.from(document.querySelectorAll('.carousel'));
    carousels.forEach((carousel) => {
      new bootstrap.Carousel(carousel);
    });
  }


   
  // Mostrar todos los productos por defecto al cargar la página
  showProducts(products);

  // Función para filtrar los productos por categoría
function filterProductsByCategory(products, category) {
    return products.filter((product) => product.category === category);
  }
  
  // Función para filtrar los productos por nombre
  function filterProductsByName(products, name) {
    return products.filter(
      (product) =>
        product.name.toLowerCase().includes(name.toLowerCase()) ||
        product.category.toLowerCase().includes(name.toLowerCase())
    );
  }
  
  // Escuchar el evento "submit" del formulario de búsqueda
  const searchForm = document.querySelector("form");
  searchForm.addEventListener("submit", (event) => {
    event.preventDefault();
  
    // Obtener el valor del campo de búsqueda
    const searchInput = document.querySelector("input");
    const searchTerm = searchInput.value.trim();
  
    // Filtrar los productos por

    // Si el término de búsqueda está vacío, mostrar todos los productos
if (searchTerm === "") {
    showProducts(products);
    return;
    }
    
    // Filtrar los productos por categoría o nombre
    let filteredProducts = filterProductsByName(products, searchTerm);
    
    if (filteredProducts.length === 0) {
    filteredProducts = filterProductsByCategory(products, searchTerm);
    } else{
        filteredProducts = filterProductsByName(products, searchTerm);
    }
    
    // Mostrar los productos filtrados en la página
    showProducts(filteredProducts);
    });

})