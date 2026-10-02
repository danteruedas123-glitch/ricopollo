/* ===================================================
   Rico Pollo Gourmet — Datos del negocio (editar aquí)
   Todo el sitio (enlaces, textos y pedidos) lee este archivo.
   =================================================== */
window.RICOPOLLO = {
  whatsapp: '573104102189',          // solo dígitos, con indicativo de país
  phoneDisplay: '310 410 2189',      // cómo se muestra el teléfono
  email: 'jrc881922@hotmail.com',
  facebook: 'https://www.facebook.com/asaderoRicopollo8822',
  defaultMessage: 'Hola Rico Pollo Gourmet, quiero hacer un pedido a domicilio 🍗'
};

/* Rellena enlaces y textos marcados con data-* en el HTML */
document.addEventListener('DOMContentLoaded', () => {
  const c = window.RICOPOLLO;
  const wa = (text) => `https://wa.me/${c.whatsapp}?text=${encodeURIComponent(text || c.defaultMessage)}`;

  document.querySelectorAll('[data-wa]').forEach(el => { el.href = wa(el.dataset.wa); });
  document.querySelectorAll('[data-tel]').forEach(el => { el.href = `tel:+${c.whatsapp}`; });
  document.querySelectorAll('[data-mail]').forEach(el => { el.href = `mailto:${c.email}`; });
  document.querySelectorAll('[data-facebook]').forEach(el => { el.href = c.facebook; });
  document.querySelectorAll('[data-fill="phone"]').forEach(el => { el.textContent = c.phoneDisplay; });
  document.querySelectorAll('[data-fill="email"]').forEach(el => { el.textContent = c.email; });
});
