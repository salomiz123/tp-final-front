// Datos básicos en un arreglo simple
var zapatillas = [
    {
      nombre: "Air Jordan 1 Retro",
      marca: "Jordan",
      precio: "$180",
      imagen: "https://images.unsplash.com/photo-1552346154-21d32810aba3?w=400"
    },
    {
      nombre: "Nike Dunk Low",
      marca: "Nike",
      precio: "$115",
      imagen: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=400"
    },
    {
      nombre: "Adidas Yeezy Boost",
      marca: "Adidas",
      precio: "$230",
      imagen: "https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?w=400"
    },
    {
      nombre: "Nike Air Max 90",
      marca: "Nike",
      precio: "$130",
      imagen: "https://images.unsplash.com/photo-1514989940723-e8e51635b782?w=400"
    }
  ];
  
  // Función básica que ejecuta el botón "Obtener"
  function obtenerZapatillas() {
    var contenedor = document.getElementById("catalogo");
    contenedor.innerHTML = ""; // Vacía el catálogo previo
  
    // Bucle for tradicional
    for (var i = 0; i < zapatillas.length; i++) {
      var item = zapatillas[i];
  
      contenedor.innerHTML += 
        '<div class="tarjeta">' +
          '<img src="' + item.imagen + '" alt="' + item.nombre + '">' +
          '<span class="marca">' + item.marca + '</span>' +
          '<h3>' + item.nombre + '</h3>' +
          '<div class="precio">' + item.precio + '</div>' +
        '</div>';
    }
  }