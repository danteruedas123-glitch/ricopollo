/**
 * ===================================================
 * RICO POLLO GOURMET - MENÚ DIGITAL & CARRITO
 * La Loma, El Paso, Cesar - WhatsApp: 310 4102189
 * ===================================================
 */

// Catálogo completo de productos
const PRODUCTS = [
  // --- POLLOS & COMBOS ---
  {
    id: 'promo-pollo-asado-completo',
    name: 'Pollo Asado Completo al Carbón (Promoción)',
    category: 'pollos',
    price: 27000,
    image: 'images/promo-pollos-real.webp',
    tag: '⚡ Gran Promoción Relámpago',
    desc: '¡Aprovecha en familia! Pollo asado al carbón completo, jugoso, sabroso y lleno de sabor. Acompañado de papas cocidas al vapor y salsa casera especial.'
  },
  {
    id: 'promo-pollo-broaster-completo',
    name: 'Pollo Broaster Familiar Crujiente (Promoción)',
    category: 'pollos',
    price: 28000,
    image: 'images/pollo-broaster-papas-real.webp',
    tag: '🍗 Foto Real • Crocante & Delicioso',
    desc: 'Pollo broaster completo con apanado súper crocante y tierno por dentro, servido con canastilla de papas a la francesa doradas y salsa.'
  },
  {
    id: 'arroz-con-pollo-especial',
    name: 'Arroz con Pollo Especial + Papas a la Francesa',
    category: 'pollos',
    price: 20000,
    image: 'images/arroz-con-pollo-real.webp',
    tag: '🍚 Foto Real • Receta Tradicional',
    desc: 'Generosa porción de arroz con pollo desmechado, verduras frescas seleccionadas y sazón típica casera, acompañado de crocantes papas a la francesa.'
  },
  {
    id: 'pechuga-plancha-patacones',
    name: 'Pechuga a la Plancha con Patacones & Ensalada',
    category: 'pollos',
    price: 24000,
    image: 'images/pechuga-plancha-real.webp',
    tag: '⭐ Foto Real • Especialidad',
    desc: 'Filetes de pechuga marinados y asados a la plancha con el toque de la casa, acompañados de crocantes patacones de plátano verde y ensalada fresca con maíz dulce.'
  },
  {
    id: 'alitas-bbq-o-picantes',
    name: 'Bandeja de Alitas BBQ con Ajonjolí & Papas',
    category: 'pollos',
    price: 28000,
    image: 'images/alitas-bbq-real.webp',
    tag: '🔥 Foto Real • Éxito Total',
    desc: 'Generosa bandeja de alitas doradas bañadas en salsa BBQ de la casa con semillas de ajonjolí tostadas, porción grande de papas a la francesa y 2 recipientes de salsa BBQ artesanal.'
  },
  {
    id: 'medio-pollo-asado',
    name: 'Medio Pollo Asado al Carbón',
    category: 'pollos',
    price: 15000,
    image: 'images/hero.webp',
    tag: '⭐ Favorito',
    desc: 'Media porción de nuestro clásico pollo al carbón con papas, arepas frescas y salsa tártara de la casa.'
  },
  {
    id: 'cuarto-pollo-asado',
    name: 'Cuarto de Pollo Personal',
    category: 'pollos',
    price: 10000,
    image: 'images/hero.webp',
    tag: '👌 Almuerzo Rápido',
    desc: 'Presa a elección (pechuga/ala o muslo/contramuslo) con papas doradas, arepa y salsas.'
  },

  // --- PIZZERÍA ARTESANAL ---
  {
    id: 'pizza-especial-ricopollo',
    name: 'Pizza Especial Rico Pollo (Familiar)',
    category: 'pizzas',
    price: 36000,
    image: 'images/pizza.webp',
    tag: '👑 Especial de la Casa',
    desc: 'Masa artesanal a la piedra, pollo al carbón desmechado, champiñones frescos, tocineta crocante y doble queso mozzarella.'
  },
  {
    id: 'pizza-hawaiana',
    name: 'Pizza Hawaiana Tradicional (Familiar)',
    category: 'pizzas',
    price: 32000,
    image: 'images/pizza.webp',
    tag: '🍍 La Más Pedida',
    desc: 'Clásica combinación de jamón seleccionado, piña dulce caramelizada y una generosa capa de queso mozzarella derretido.'
  },
  {
    id: 'pizza-carnes-mixtas',
    name: 'Pizza Súper Carnes Mixtas (Familiar)',
    category: 'pizzas',
    price: 38000,
    image: 'images/pizza.webp',
    tag: '🥩 Para Carnívoros',
    desc: 'Carne desmechada sazonada, pepperoni americano, tocineta ahumada, jamón y queso mozzarella.'
  },
  {
    id: 'pizza-pepperoni',
    name: 'Pizza Pepperoni Clásica (Familiar)',
    category: 'pizzas',
    price: 34000,
    image: 'images/pizza.webp',
    tag: '🍕 Tradicional',
    desc: 'Salsa pomodoro natural, abundante queso mozzarella y finas rodajas de pepperoni crocante con orégano.'
  },
  {
    id: 'pizza-pollo-champinon',
    name: 'Pizza Pollo & Champiñones (Familiar)',
    category: 'pizzas',
    price: 35000,
    image: 'images/pizza.webp',
    tag: '🧀 Cremosa',
    desc: 'Suaves tiras de pechuga de pollo asado, champiñones salteados al ajillo y queso mozzarella gratinado.'
  },

  // --- COMIDAS RÁPIDAS ---
  {
    id: 'hamburguesa-gourmet',
    name: 'Hamburguesa Artesanal Rico Pollo con Queso Fundido',
    category: 'comidas-rapidas',
    price: 22000,
    image: 'images/hamburguesa-gourmet-real.webp',
    tag: '🍔 Foto Real • Súper Queso',
    desc: 'Pan brioche artesanal con ajonjolí negro tostado, carne seleccionada, pechuga, bloque de queso costeño y mozzarella fundido, tocineta, vegetales frescos, papas a la francesa y salsa tártara.'
  },
  {
    id: 'salchipapa-salvaje',
    name: 'Salchipapa Desgranada Especial con Queso Frito',
    category: 'comidas-rapidas',
    price: 24000,
    image: 'images/salchipapa-desgranado-real.webp',
    tag: '💥 Foto Real • La Favorita',
    desc: 'Base de papas a la francesa, salchicha en rodajas, pollo desmechado, maíz tierno dulce, abundante lluvia de queso costeño rallado, dados de queso frito dorado y salsa tártara.'
  },
  {
    id: 'perro-caliente-especial',
    name: 'Perro Caliente Especial Gratinado',
    category: 'comidas-rapidas',
    price: 14000,
    image: 'images/hamburguesa.webp',
    tag: '🌭 Callejero Gourmet',
    desc: 'Pan artesanal, salchicha americana premium, tocineta ahumada, queso mozzarella gratinado, salsa de piña y ripio crocante.'
  },
  {
    id: 'picada-mixta-la-loma',
    name: 'Súper Picada Mixta Familiar (Bandeja Grande)',
    category: 'comidas-rapidas',
    price: 42000,
    image: 'images/picada-mixta-real.webp',
    tag: '👑 Foto Real • La Más Pedida',
    desc: 'Bandeja completa con tiras de carne asada de res, pechuga de pollo asada, rodajas de salchicha/chorizo dorado, trozos de pollo crujiente, patacones dorados, papas a la francesa y dos recipientes de salsa tártara y queso cheddar fundido.'
  },
  {
    id: 'patacon-con-todo',
    name: 'Patacón con Todo Gratinado',
    category: 'comidas-rapidas',
    price: 20000,
    image: 'images/hamburguesa.webp',
    tag: '🌴 Sabor Costeño',
    desc: 'Plátano verde gigante crujiente cubierto con carne y pollo desmechados, maíz, queso costeño y suero.'
  },

  // --- HELADERÍA & POSTRES ---
  {
    id: 'ensalada-de-frutas-especial',
    name: 'Ensalada de Frutas Especial con Doble Helado',
    category: 'heladeria',
    price: 18000,
    image: 'images/ensalada-frutas-real.webp',
    tag: '🍓 Foto Real • 100% Fresca',
    desc: 'Fresca, cremosa y llena de sabor. Frutas frescas seleccionadas (fresas, banano, papaya, melón), bañada en crema especial de la casa, abundante queso costeño rallado y dos bolas de helado artesanal (vainilla y oreo).'
  },
  {
    id: 'copa-helado-gourmet',
    name: 'Copa Sundae Gourmet Especial',
    category: 'heladeria',
    price: 14000,
    image: 'images/helados.webp',
    tag: '🍦 Delicioso',
    desc: '3 bolas de helado a elección, trozos de brownie de chocolate, fresas frescas, crema chantilly y barquillos.'
  },
  {
    id: 'banana-split',
    name: 'Banana Split Clásica',
    category: 'heladeria',
    price: 15000,
    image: 'images/helados.webp',
    tag: '🍌 Clásico',
    desc: 'Banano fresco con tres bolas de helado (vainilla, fresa, chocolate), salsa de chocolate caliente, maní y cerezas.'
  },
  {
    id: 'malteada-cremosa',
    name: 'Malteada Espesa & Cremosa (16 oz)',
    category: 'heladeria',
    price: 10000,
    image: 'images/helados.webp',
    tag: '🥤 Refrescante',
    desc: 'Preparada con helado artesanal. Sabores a elección: Oreo, Vainilla, Chocolate o Fresa silvestre.'
  },
  {
    id: 'cono-doble',
    name: 'Cono Doble Sabor Artesanal',
    category: 'heladeria',
    price: 6000,
    image: 'images/helados.webp',
    tag: '🍨 Tradicional',
    desc: 'Cono crocante con dos bolas de helado cremoso de nuestros sabores disponibles del día.'
  },
  {
    id: 'postre-tres-leches',
    name: 'Porción de Postre Tres Leches',
    category: 'heladeria',
    price: 8000,
    image: 'images/helados.webp',
    tag: '🍰 Casero',
    desc: 'Bizcocho húmedo bañado en la tradicional mezcla de tres leches con un toque de canela y merengue.'
  },

  // --- BEBIDAS ---
  {
    id: 'jugo-natural-leche-agua',
    name: 'Jugos Naturales & Limonadas Especiales',
    category: 'bebidas',
    price: 8000,
    image: 'images/jugos-naturales-real.webp',
    tag: '🍹 Foto Real • Fruta 100% Fresca',
    desc: 'Elige tu favorito en agua o leche: Limonada de Coco, Limonada Frappé, Guanábana, Milo frío, Mora, Fresa o Lulo fresco.'
  },
  {
    id: 'gaseosa-familiar-1-5l',
    name: 'Gaseosa Familiar 1.5L',
    category: 'bebidas',
    price: 8000,
    image: 'images/broaster.webp',
    tag: '🥤 Fría',
    desc: 'Coca-Cola, Postobón Manzana, Colombiana o Pepsi bien fría.'
  },
  {
    id: 'limonada-de-coco',
    name: 'Limonada de Coco Especial Frappé',
    category: 'bebidas',
    price: 10000,
    image: 'images/jugos-naturales-real.webp',
    tag: '🥥 Exquisita',
    desc: 'Cremosa limonada con crema de coco natural y hielo frappé, refrescante y perfecta para el clima de La Loma.'
  },
  {
    id: 'cerveza-nacional',
    name: 'Cerveza Nacional Bien Fría',
    category: 'bebidas',
    price: 6000,
    image: 'images/hero.webp',
    tag: '🍻 Helada',
    desc: 'Águila Original, Águila Light, Club Colombia Dorada o Corona.'
  },
  {
    id: 'gaseosa-personal-400ml',
    name: 'Gaseosa Personal 400ml',
    category: 'bebidas',
    price: 4000,
    image: 'images/broaster.webp',
    tag: '🥤 Personal',
    desc: 'Botella personal bien fría de Coca-Cola, Manzana o Colombiana.'
  }
];

// Estado del Carrito en memoria (y persistente en localStorage)
let cart = JSON.parse(localStorage.getItem('ricopollo_cart') || '[]');
let currentCategory = 'todos';
let searchQuery = '';

// Formateador de moneda en pesos colombianos
const formatCOP = (num) => {
  return '$ ' + num.toLocaleString('es-CO');
};

// ===================================================
// INICIALIZACIÓN
// ===================================================
document.addEventListener('DOMContentLoaded', () => {
  updateCategoryCounts();
  applyCategoryFromHash();
  renderProducts();
  updateCartUI();
  loadCustomer();
  setupEventListeners();
});

// Permite enlazar a una categoría desde la página principal (menu.html#pizzas)
function applyCategoryFromHash() {
  const cat = decodeURIComponent(location.hash.slice(1));
  const pill = document.querySelector(`.cat-pill[data-category="${cat}"]`);
  if (!pill) return;
  document.querySelectorAll('.cat-pill').forEach(p => p.classList.toggle('active', p === pill));
  currentCategory = cat;
}

// ===================================================
// RENDERIZADO DEL CATÁLOGO
// ===================================================
function renderProducts() {
  const grid = document.getElementById('productsGrid');
  const emptyState = document.getElementById('emptyState');
  const currentTitle = document.getElementById('currentCategoryTitle');

  // Filtrado
  const filtered = PRODUCTS.filter(prod => {
    const matchCategory = (currentCategory === 'todos') || (prod.category === currentCategory);
    const query = searchQuery.trim().toLowerCase();
    const matchSearch = !query ||
      prod.name.toLowerCase().includes(query) ||
      prod.desc.toLowerCase().includes(query) ||
      prod.tag.toLowerCase().includes(query);
    return matchCategory && matchSearch;
  });

  // Título de la categoría
  const categoryNames = {
    'todos': 'Todos los Productos',
    'pollos': 'Pollos Asados, Broaster & Alitas',
    'pizzas': 'Pizzas Artesanales Gourmet',
    'comidas-rapidas': 'Comidas Rápidas & Asados',
    'heladeria': 'Helados & Postres',
    'bebidas': 'Bebidas & Jugos Fríos'
  };
  currentTitle.textContent = searchQuery ? `Resultados para "${searchQuery}" (${filtered.length})` : categoryNames[currentCategory];

  if (filtered.length === 0) {
    grid.innerHTML = '';
    emptyState.style.display = 'block';
    return;
  }

  emptyState.style.display = 'none';

  grid.innerHTML = filtered.map(prod => {
    return `
      <article class="product-card">
        <div class="product-card__image">
          <img src="${prod.image}" alt="${prod.name}" loading="lazy" />
          <span class="product-card__tag">${prod.tag}</span>
        </div>
        <div class="product-card__body">
          <span class="product-card__category">${getCategoryLabel(prod.category)}</span>
          <h3 class="product-card__title">${prod.name}</h3>
          <p class="product-card__desc">${prod.desc}</p>
          <div class="product-card__footer">
            <span class="product-card__price">${formatCOP(prod.price)}</span>
            <button class="btn-add-cart" onclick="addToCart('${prod.id}')">
              <span>+ Agregar</span>
            </button>
          </div>
        </div>
      </article>
    `;
  }).join('');
}

function getCategoryLabel(cat) {
  const map = {
    'pollos': '🍗 Asadero',
    'pizzas': '🍕 Pizzería',
    'comidas-rapidas': '🍔 Comidas Rápidas',
    'heladeria': '🍦 Heladería',
    'bebidas': '🥤 Bebidas'
  };
  return map[cat] || cat;
}

function updateCategoryCounts() {
  const countAll = document.getElementById('countAll');
  if (countAll) countAll.textContent = PRODUCTS.length;
}

// ===================================================
// LÓGICA DEL CARRITO DE COMPRAS
// ===================================================
window.addToCart = function(productId) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;

  const existingItem = cart.find(item => item.id === productId);
  if (existingItem) {
    existingItem.qty += 1;
  } else {
    cart.push({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      qty: 1
    });
  }

  saveCart();
  updateCartUI();
  
  // Breve animación en el botón del carrito
  const badge = document.getElementById('cartBadge');
  if (badge) {
    badge.style.transform = 'scale(1.4)';
    setTimeout(() => { badge.style.transform = 'scale(1)'; }, 200);
  }

  // Notificación amigable
  showToast(`¡${product.name} agregado al pedido!`);
};

window.changeQty = function(productId, delta) {
  const item = cart.find(i => i.id === productId);
  if (!item) return;

  item.qty += delta;
  if (item.qty <= 0) {
    cart = cart.filter(i => i.id !== productId);
  }

  saveCart();
  updateCartUI();
};

window.removeFromCart = function(productId) {
  cart = cart.filter(i => i.id !== productId);
  saveCart();
  updateCartUI();
};

function saveCart() {
  localStorage.setItem('ricopollo_cart', JSON.stringify(cart));
}

function updateCartUI() {
  const totalCount = cart.reduce((sum, item) => sum + item.qty, 0);
  const totalAmount = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);

  // Badges y contadores
  const badge = document.getElementById('cartBadge');
  if (badge) badge.textContent = totalCount;

  // Floating mobile bar
  const floatingBar = document.getElementById('floatingCartBar');
  const floatingCount = document.getElementById('floatingCartCount');
  const floatingTotal = document.getElementById('floatingCartTotal');
  if (floatingBar) {
    if (totalCount > 0) {
      floatingBar.style.display = 'flex';
      floatingCount.textContent = `${totalCount} ${totalCount === 1 ? 'artículo' : 'artículos'}`;
      floatingTotal.textContent = formatCOP(totalAmount);
    } else {
      floatingBar.style.display = 'none';
    }
  }

  // Drawer items
  const itemsContainer = document.getElementById('cartItemsList');
  const subtotalElem = document.getElementById('cartSubtotal');
  const totalElem = document.getElementById('cartTotal');
  const checkoutSection = document.getElementById('cartCheckoutSection');

  if (cart.length === 0) {
    itemsContainer.innerHTML = `
      <div class="cart-empty-message">
        <span>🍗</span>
        <h4>Tu carrito está vacío</h4>
        <p>Selecciona los platos que más te gusten y aparecerán aquí para armar tu pedido.</p>
      </div>
    `;
    if (checkoutSection) checkoutSection.style.display = 'none';
  } else {
    if (checkoutSection) checkoutSection.style.display = 'block';

    itemsContainer.innerHTML = cart.map(item => {
      const itemSubtotal = item.price * item.qty;
      return `
        <div class="cart-item">
          <img src="${item.image}" alt="${item.name}" class="cart-item__image" />
          <div class="cart-item__info">
            <h4 class="cart-item__name">${item.name}</h4>
            <span class="cart-item__price">${formatCOP(item.price)} c/u</span>
          </div>
          <div class="cart-item__controls">
            <button class="qty-btn" onclick="changeQty('${item.id}', -1)" aria-label="Disminuir">-</button>
            <span class="cart-item__qty">${item.qty}</span>
            <button class="qty-btn" onclick="changeQty('${item.id}', 1)" aria-label="Aumentar">+</button>
          </div>
          <button class="cart-item__remove" onclick="removeFromCart('${item.id}')" title="Eliminar">&times;</button>
        </div>
      `;
    }).join('');

    subtotalElem.textContent = formatCOP(totalAmount);
    totalElem.textContent = formatCOP(totalAmount);
  }
}

// ===================================================
// MODAL / DRAWER DEL CARRITO
// ===================================================
function openCart() {
  document.getElementById('cartDrawer').classList.add('active');
  document.getElementById('cartBackdrop').classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeCart() {
  document.getElementById('cartDrawer').classList.remove('active');
  document.getElementById('cartBackdrop').classList.remove('active');
  document.body.style.overflow = '';
}

// ===================================================
// VALIDACIÓN DEL FORMULARIO Y DATOS DEL CLIENTE
// ===================================================
function showFieldError(inputId, message) {
  const input = document.getElementById(inputId);
  input.classList.add('is-invalid');
  input.setAttribute('aria-invalid', 'true');
  const err = document.createElement('p');
  err.className = 'field-error';
  err.setAttribute('role', 'alert');
  err.textContent = message;
  input.insertAdjacentElement('afterend', err);
  input.focus();
}

function clearFieldErrors() {
  document.querySelectorAll('.field-error').forEach(e => e.remove());
  document.querySelectorAll('.is-invalid').forEach(i => {
    i.classList.remove('is-invalid');
    i.removeAttribute('aria-invalid');
  });
}

// Recordar nombre, dirección, teléfono y pago para el próximo pedido
function saveCustomer(data) {
  try { localStorage.setItem('ricopollo_customer', JSON.stringify(data)); } catch (e) { /* modo privado */ }
}

function loadCustomer() {
  try {
    const data = JSON.parse(localStorage.getItem('ricopollo_customer') || 'null');
    if (!data) return;
    ['custName:name', 'custAddress:address', 'custPhone:phone', 'custPayment:payment'].forEach(pair => {
      const [id, key] = pair.split(':');
      const el = document.getElementById(id);
      if (el && data[key]) el.value = data[key];
    });
  } catch (e) { /* datos corruptos: se ignoran */ }
}

// ===================================================
// ENVÍO DE PEDIDO POR WHATSAPP
// ===================================================
function sendWhatsAppOrder() {
  if (cart.length === 0) {
    alert('Tu carrito está vacío. Agrega al menos un plato para realizar el pedido.');
    return;
  }

  const name = document.getElementById('custName').value.trim();
  const address = document.getElementById('custAddress').value.trim();
  const phone = document.getElementById('custPhone').value.trim();
  const payment = document.getElementById('custPayment').value;
  const notes = document.getElementById('custNotes').value.trim();

  clearFieldErrors();
  if (!name) return showFieldError('custName', 'Escribe tu nombre para saber a quién entregarle.');
  if (!address) return showFieldError('custAddress', 'Escribe tu dirección exacta en La Loma para el domicilio.');
  if (phone && !/^(\+?57)?\s?3\d{2}[\s-]?\d{3}[\s-]?\d{4}$|^\d{7}$/.test(phone)) {
    return showFieldError('custPhone', 'Revisa el teléfono: usa un celular de 10 dígitos (ej. 310 123 4567).');
  }

  saveCustomer({ name, address, phone, payment });

  const totalAmount = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);

  // Construcción del mensaje de WhatsApp estructurado y profesional
  let msg = `🍗 *NUEVO PEDIDO - RICO POLLO GOURMET* 🍗\n`;
  msg += `_Tradición y Calidad - La Loma, Cesar_\n`;
  msg += `----------------------------------------\n`;
  msg += `👤 *Cliente:* ${name}\n`;
  msg += `📍 *Dirección:* ${address}\n`;
  if (phone) msg += `📞 *Teléfono:* ${phone}\n`;
  msg += `💵 *Forma de Pago:* ${payment}\n`;
  if (notes) msg += `📝 *Notas:* ${notes}\n`;
  msg += `----------------------------------------\n`;
  msg += `🛒 *DETALLE DEL PEDIDO:*\n`;

  cart.forEach((item, index) => {
    const itemTotal = item.price * item.qty;
    msg += `${index + 1}. *${item.qty}x* ${item.name}\n`;
    msg += `   └ ${formatCOP(itemTotal)}\n`;
  });

  msg += `----------------------------------------\n`;
  msg += `💰 *TOTAL A PAGAR: ${formatCOP(totalAmount)} COP*\n`;
  msg += `----------------------------------------\n`;
  msg += `¡Hola! Acabo de armar mi pedido en la página web. ¿Me confirman tiempo estimado de entrega, por favor? 🙏`;

  const encodedMsg = encodeURIComponent(msg);
  const whatsappUrl = `https://wa.me/${window.RICOPOLLO.whatsapp}?text=${encodedMsg}`;

  // Abre WhatsApp en nueva pestaña
  window.open(whatsappUrl, '_blank');
}

// ===================================================
// EVENT LISTENERS
// ===================================================
function setupEventListeners() {
  // Triggers del Carrito
  document.getElementById('cartTriggerBtn').addEventListener('click', openCart);
  document.getElementById('cartCloseBtn').addEventListener('click', closeCart);
  document.getElementById('cartBackdrop').addEventListener('click', closeCart);
  
  const floatingBtn = document.getElementById('floatingCartBtn');
  if (floatingBtn) floatingBtn.addEventListener('click', openCart);

  // Botón de WhatsApp en el checkout
  document.getElementById('sendWhatsAppOrderBtn').addEventListener('click', sendWhatsAppOrder);

  // Filtros de categoría
  const categoryPills = document.querySelectorAll('.cat-pill');
  categoryPills.forEach(pill => {
    pill.addEventListener('click', () => {
      categoryPills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      currentCategory = pill.dataset.category;
      renderProducts();
    });
  });

  // Búsqueda en tiempo real
  const searchInput = document.getElementById('menuSearchInput');
  const clearBtn = document.getElementById('clearSearchBtn');

  searchInput.addEventListener('input', (e) => {
    searchQuery = e.target.value;
    clearBtn.style.display = searchQuery ? 'flex' : 'none';
    renderProducts();
  });

  clearBtn.addEventListener('click', () => {
    searchInput.value = '';
    searchQuery = '';
    clearBtn.style.display = 'none';
    renderProducts();
    searchInput.focus();
  });

  // Reset filter en estado vacío
  const resetBtn = document.getElementById('resetFiltersBtn');
  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      searchInput.value = '';
      searchQuery = '';
      clearBtn.style.display = 'none';
      currentCategory = 'todos';
      categoryPills.forEach(p => {
        p.classList.toggle('active', p.dataset.category === 'todos');
      });
      renderProducts();
    });
  }
}

// Notificación flotante temporal
function showToast(message) {
  const existing = document.querySelector('.menu-toast');
  if (existing) existing.remove();

  const toast = document.createElement('div');
  toast.className = 'menu-toast';
  toast.textContent = message;
  toast.style.cssText = `
    position: fixed;
    bottom: 2rem;
    left: 50%;
    transform: translateX(-50%);
    background: rgba(13, 13, 13, 0.95);
    color: #d4a24e;
    border: 1px solid rgba(212, 162, 78, 0.4);
    padding: 0.75rem 1.6rem;
    border-radius: 50px;
    font-size: 0.9rem;
    font-weight: 600;
    z-index: 2000;
    box-shadow: 0 8px 30px rgba(0,0,0,0.8);
    animation: fadeIn 0.3s ease;
  `;

  document.body.appendChild(toast);
  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transition = 'opacity 0.4s';
    setTimeout(() => toast.remove(), 400);
  }, 2200);
}
