const API_URL = 'https://kicksapi.com/v1/products';

const fetchBtn = document.getElementById('fetchBtn');
const apiKeyInput = document.getElementById('apiKeyInput');
const loader = document.getElementById('loader');
const errorMessage = document.getElementById('errorMessage');
const sneakersGrid = document.getElementById('sneakersGrid');

fetchBtn.addEventListener('click', () => {
  const apiKey = apiKeyInput.value.trim();
  fetchSneakers(apiKey);
});

async function fetchSneakers(apiKey) {
  errorMessage.classList.add('hidden');
  sneakersGrid.innerHTML = '';
  loader.classList.remove('hidden');

  try {
    const headers = {
      'Content-Type': 'application/json'
    };

    if (apiKey) {
      headers['Authorization'] = `Bearer ${apiKey}`;
    }

    const response = await fetch(API_URL, {
      method: 'GET',
      headers: headers
    });

    if (!response.ok) {
      throw new Error(`Error en la petición: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();
    const items = Array.isArray(data) ? data : (data.results || data.products || []);

    if (items.length === 0) {
      showError('No se encontraron productos en el catálogo.');
      return;
    }

    renderSneakers(items);

  } catch (error) {
    showError(`Atención: (${error.message}). Se mostrarán datos de muestra.`);
    renderSneakers(getMockData());
  } finally {
    loader.classList.add('hidden');
  }
}

function renderSneakers(items) {
  items.forEach(item => {
    const card = document.createElement('div');
    card.className = 'card';

    const imageUrl = item.image_url || item.image || item.thumbnail || 'https://via.placeholder.com/300x200?text=Sin+Imagen';
    const brand = item.brand || 'Sneaker';
    const name = item.name || item.title || 'Modelo Kicks';
    const price = item.price ? `$${item.price}` : 'Consultar';

    card.innerHTML = `
      <div class="card-img-container">
        <img src="${imageUrl}" alt="${name}" loading="lazy" />
      </div>
      <div class="card-body">
        <span class="card-brand">${brand}</span>
        <h3 class="card-title">${name}</h3>
        <div class="card-footer">
          <span class="card-price">${price}</span>
        </div>
      </div>
    `;

    sneakersGrid.appendChild(card);
  });
}

function showError(msg) {
  errorMessage.textContent = msg;
  errorMessage.classList.remove('hidden');
}

function getMockData() {
  return [
    {
      name: 'Air Jordan 1 Retro High OG',
      brand: 'Jordan',
      price: '180',
      image_url: 'https://images.unsplash.com/photo-1552346154-21d32810aba3?auto=format&fit=crop&w=500&q=80'
    },
    {
      name: 'Nike Dunk Low Panda',
      brand: 'Nike',
      price: '115',
      image_url: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=500&q=80'
    },
    {
      name: 'Adidas Yeezy Boost 350 V2',
      brand: 'Adidas',
      price: '230',
      image_url: 'https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?auto=format&fit=crop&w=500&q=80'
    }
  ];
}