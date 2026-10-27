// AutoFix Santiago: navegación móvil y formulario de solicitud.
// IMPORTANTE: reemplaza el número de prueba por el WhatsApp real antes de publicar.
const WHATSAPP_NUMBER = "56990418209"; // Cambia esto por el número real de WhatsApp (sin espacios ni signos).

const menuButton = document.querySelector(".menu-toggle");
const mainNav = document.querySelector("#main-nav");

menuButton.addEventListener("click", () => {
  const isOpen = menuButton.getAttribute("aria-expanded") === "true";
  menuButton.setAttribute("aria-expanded", String(!isOpen));
  mainNav.classList.toggle("is-open", !isOpen);
  menuButton.setAttribute("aria-label", isOpen ? "Abrir menú" : "Cerrar menú");
});

mainNav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    mainNav.classList.remove("is-open");
    menuButton.setAttribute("aria-expanded", "false");
    menuButton.setAttribute("aria-label", "Abrir menú");
  });
});

// Evita que se pueda elegir una fecha anterior a hoy.
const preferredDate = document.querySelector("#preferred-date");
const today = new Date();
const localToday = new Date(today.getTime() - today.getTimezoneOffset() * 60000)
  .toISOString()
  .slice(0, 10);
preferredDate.min = localToday;

// Las tarjetas de servicios pueden preseleccionar el servicio en el formulario.
document.querySelectorAll("[data-service]").forEach((link) => {
  link.addEventListener("click", () => {
    const serviceSelect = document.querySelector('select[name="servicio"]');
    const serviceName = link.dataset.service;
    const message = document.querySelector("#service-message");
    message.textContent = `Has seleccionado: ${serviceName}`;
    if ([...serviceSelect.options].some((option) => option.value === serviceName || option.text === serviceName)) {
      serviceSelect.value = serviceName;
    }
  });
});

document.querySelector("#booking-form").addEventListener("submit", (event) => {
  event.preventDefault();
  const form = event.currentTarget;
  if (!form.reportValidity()) return;

  const data = new FormData(form);
  const fields = [
    ["Nombre", data.get("nombre")],
    ["Teléfono", data.get("telefono")],
    ["Vehículo", `${data.get("marca")} ${data.get("modelo")}`],
    ["Servicio", data.get("servicio")],
    ["Fecha preferida", data.get("fecha") || "Por coordinar"],
    ["Horario", data.get("horario")],
    ["Detalle", data.get("detalle") || "Sin detalle adicional"],
  ];

  const message = [
    "Hola, AutoFix Santiago. Quisiera consultar por una hora/cotización.",
    "",
    ...fields.map(([label, value]) => `${label}: ${value}`),
    "",
    "Entiendo que la fecha y la atención deben ser confirmadas por el taller.",
  ].join("\n");

  const status = document.querySelector("#form-status");
  if (WHATSAPP_NUMBER === "56900000000") {
    status.textContent = "Modo demostración: cambia WHATSAPP_NUMBER en script.js por el número real para activar el envío.";
    // Abre WhatsApp con el número de prueba para mostrar el flujo; no se envía nada automáticamente.
  }
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  window.open(whatsappUrl, "_blank", "noopener,noreferrer");
});

document.querySelector("#year").textContent = new Date().getFullYear();

const mensaje = document.querySelector("#mensaje");
mensaje.textContent = "¡Gracias por visitar AutoFix!";