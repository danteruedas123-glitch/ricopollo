# Rico Pollo Gourmet

Sitio web estático para **Rico Pollo Gourmet**, asadero, pizzería y heladería en La Loma, El Paso, Cesar (Colombia). Incluye una página de presentación y un menú interactivo con carrito de compras que envía el pedido por WhatsApp.

## Características

- **Página principal** (`index.html`): hero, sección "Nosotros", experiencia, contacto y botón flotante de WhatsApp. Incluye metadatos SEO y Open Graph.
- **Menú completo** (`menu.html`): catálogo de productos con carrito persistente en `localStorage` (clave `ricopollo_cart`).
- **Pedidos por WhatsApp**: el carrito genera un mensaje con el pedido y abre `wa.me` con el número del negocio.
- Diseño responsive con menú hamburguesa en móvil.
- Sin dependencias ni paso de compilación: HTML, CSS y JavaScript puros.

## Estructura

```
ricopollo/
├── index.html    # Página principal
├── styles.css    # Estilos de la página principal
├── config.js     # Datos del negocio (WhatsApp, correo, Facebook) — editar aquí
├── script.js     # Navegación e interacciones
├── menu.html     # Menú completo y carrito
├── menu.css      # Estilos del menú
├── menu.js       # Catálogo, carrito y envío del pedido
├── robots.txt
└── images/       # Logo, hero y fotos (WebP; los .jpg originales se conservan)
```

## Cómo ejecutarlo

No requiere instalación. Elige una opción:

1. Abre `index.html` directamente en el navegador.
2. O sirve la carpeta con un servidor local:

   ```bash
   # Python
   python -m http.server 8000
   # o Node
   npx serve .
   ```

   Luego visita <http://localhost:8000>.

## Personalización

- **Datos de contacto**: WhatsApp, teléfono, correo y Facebook se cambian solo en `config.js`.
- **Productos y precios**: se definen en `menu.js`, que también controla el carrito y el mensaje del pedido.
- **Imágenes**: colócalas en `images/` y referéncialas desde el HTML o el catálogo.

## Despliegue

Al ser un sitio estático, puede publicarse tal cual en GitHub Pages, Netlify, Vercel o cualquier hosting estático. El punto de entrada es `index.html` en la raíz del repositorio.

## Contacto

Pedidos a domicilio por WhatsApp: +57 310 410 2189.
