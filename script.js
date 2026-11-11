function obtenerZapatillas() {
  let contenedor = document.getElementById("catalogo");
  let textoBusqueda = document.getElementById("buscador").value;

  contenedor.innerHTML = '<p class="sin-resultados">Cargando datos de la API...</p>';

  fetch("https://dummyjson.com/products/search?q=" + textoBusqueda)
    .then(function(respuesta) {
      return respuesta.json();
    })
    .then(function(datos) {
      contenedor.innerHTML = "";
      let productos = datos.products;

      if (productos.length === 0) {
        contenedor.innerHTML = '<p class="sin-resultados">No se encontraron productos en la API.</p>';
        return;
      }

      for (let i = 0; i < productos.length; i++) {
        let item = productos[i];

        contenedor.innerHTML += 
          '<div class="tarjeta">' +
            '<img src="' + item.thumbnail + '" alt="' + item.title + '">' +
            '<span class="marca">' + (item.brand || 'Zapato') + '</span>' +
            '<h3>' + item.title + '</h3>' +
            '<div class="precio">$' + item.price + '</div>' +
          '</div>';
      }
    })
    .catch((error) => {
      console.error('Error al leer archivo:', error);
    });
}