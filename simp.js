const fetchBtn = document.getElementById('fetchBtn');
const loader = document.getElementById('loader');
const errorMessage = document.getElementById('errorMessage');
const sneakersGrid = document.getElementById('sneakersGrid');

fetchBtn.addEventListener('click', fetchSneakers);

async function fetchSneakers() {
  errorMessage.classList.add('hidden');
  sneakersGrid.innerHTML = '';
  loader.classList.remove('hidden');

  try {
    const data = await getSneakerData();
    renderSneakers(data);
  } catch (error) {
    showError('Error al cargar los productos.');
  } finally {
    loader.classList.add('hidden');
  }
}

function getSneakerData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
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
        },
        {
          name: 'New Balance 550 White Green',
          brand: 'New Balance',
          price: '120',
          image_url: 'https://images.unsplash.com/photo-1539185441755-769473a23570?auto=format&fit=crop&w=500&q=80'
        },
        {
          name: 'Nike Air Max 90',
          brand: 'Nike',
          price: '130',
          image_url: 'https://images.unsplash.com/photo-1514989940723-e8e51635b782?auto=format&fit=crop&w=500&q=80'
        },
        {
          name: 'Puma RS-X3',
          brand: 'Puma',
          price: '110',
          image_url: 'https://images.unsplash.com/photo-1608231387042-66d1773070a5?auto=format&fit=crop&w=500&q=80'
        }
      ]);
    }, 500);
  });
}

function renderSneakers(items) {
  items.forEach(item => {
    const card = document.createElement('div');
    card.className = 'card';

    card.innerHTML = `
      <div class="card-img-container">
        <img src="${item.image_url}" alt="${item.name}" loading="lazy" />
      </div>
      <div class="card-body">
        <span class="card-brand">${item.brand}</span>
        <h3 class="card-title">${item.name}</h3>
        <div class="card-footer">
          <span class="card-price">$${item.price}</span>
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