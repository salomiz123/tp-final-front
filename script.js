var zapatillas = [
  {
    nombre: "Air Jordan 1 Retro High",
    marca: "Jordan",
    precio: "$180",
    imagen: "https://images.unsplash.com/photo-1552346154-21d32810aba3?w=400"
  },
  {
    nombre: "Nike Dunk Low Panda",
    marca: "Nike",
    precio: "$115",
    imagen: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=400"
  },
  {
    nombre: "Adidas Yeezy Boost 350",
    marca: "Adidas",
    precio: "$230",
    imagen: "https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?w=400"
  },
  {
    nombre: "Nike Air Max 90",
    marca: "Nike",
    precio: "$130",
    imagen: "https://images.unsplash.com/photo-1514989940723-e8e51635b782?w=400"
  },
  {
    nombre: "Puma RS-X Tech",
    marca: "Puma",
    precio: "$110",
    imagen: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=400"
  },
  {
    nombre: "New Balance 550 White Green",
    marca: "New Balance",
    precio: "$120",
    imagen: "https://images.unsplash.com/photo-1539185441755-769473a23570?w=400"
  },
  {
    nombre: "Air Jordan 4 Retro Red",
    marca: "Jordan",
    precio: "$210",
    imagen: "https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?w=400"
  },
  {
    nombre: "Nike Air Force 1 '07",
    marca: "Nike",
    precio: "$115",
    imagen: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?w=400"
  },
  {
    nombre: "Adidas Forum Low",
    marca: "Adidas",
    precio: "$100",
    imagen: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=400"
  },
  {
    nombre: "Converse Chuck 70 Classic",
    marca: "Converse",
    precio: "$85",
    imagen: "https://images.unsplash.com/photo-1607522370275-f14206abe5d3?w=400"
  },
  {
    nombre: "Vans Old Skool Black",
    marca: "Vans",
    precio: "$70",
    imagen: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=400"
  },
  {
    nombre: "Asics GEL-Kayano 14",
    marca: "Asics",
    precio: "$150",
    imagen: "https://images.unsplash.com/photo-1582588678413-dbf45f4823e9?w=400"
  }
];

function obtenerZapatillas() {
  var contenedor = document.getElementById("catalogo");
  var textoBusqueda = document.getElementById("buscador").value.toLowerCase();
  
  contenedor.innerHTML = "";
  var encontrados = 0;

  for (var i = 0; i < zapatillas.length; i++) {
    var item = zapatillas[i];
    var nombreEnMinusculas = item.nombre.toLowerCase();
    var marcaEnMinusculas = item.marca.toLowerCase();

    if (nombreEnMinusculas.indexOf(textoBusqueda) !== -1 || marcaEnMinusculas.indexOf(textoBusqueda) !== -1) {
      contenedor.innerHTML += 
        '<div class="tarjeta">' +
          '<img src="' + item.imagen + '" alt="' + item.nombre + '">' +
          '<span class="marca">' + item.marca + '</span>' +
          '<h3>' + item.nombre + '</h3>' +
          '<div class="precio">' + item.precio + '</div>' +
        '</div>';
      encontrados++;
    }
  }

  if (encontrados === 0) {
    contenedor.innerHTML = '<p class="sin-resultados">No se encontraron productos que coincidan con la búsqueda.</p>';
  }
}