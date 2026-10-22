# AutoFix Santiago — landing page

Prototipo ficticio de una web para un taller mecánico en Santiago de Chile. Está hecho con HTML semántico, CSS y JavaScript nativo; no usa frameworks ni dependencias.

## Cómo abrirlo en VS Code

1. Descomprime `autofix-santiago.zip`.
2. Abre VS Code y selecciona **File → Open Folder** (Archivo → Abrir carpeta).
3. Elige la carpeta `autofix-santiago`.
4. Abre `index.html` en el navegador. También puedes usar la extensión Live Server si ya la tienes instalada; no es necesaria para el proyecto.

## Archivos

- `index.html`: contenido y estructura de todas las secciones.
- `styles.css`: colores, tipografía, tarjetas, layout y reglas responsive.
- `script.js`: menú móvil, fecha mínima del formulario y generación del mensaje para WhatsApp.
- `assets/logo-autofix.jpg`: logo proporcionado, incorporado al proyecto.

## Personalizaciones importantes antes de publicar

1. **WhatsApp:** abre `script.js` y cambia `WHATSAPP_NUMBER = "56900000000"` por el número real en formato internacional, solo dígitos (Chile: `56` + número, sin `+`, espacios ni guiones).
2. **Datos del taller:** cambia dirección, teléfono y horarios ficticios en `index.html`.
3. **Servicios:** edita los títulos y descripciones dentro de `#servicios`.
4. **Fotos:** las fotos de ambientación se cargan desde Unsplash, así que requieren conexión a internet. Puedes reemplazar sus URLs en `styles.css` y en `index.html` por fotos propias.
5. **Logo:** reemplaza `assets/logo-autofix.jpg` por tu archivo final y actualiza la ruta/extensión en el HTML si hace falta.

## Comportamiento del formulario

El formulario valida los campos obligatorios y abre WhatsApp con un mensaje prellenado. No envía mensajes automáticamente y no almacena los datos. El número actual es ficticio: hay que reemplazarlo para usarlo de verdad. La página no confirma ni reserva una hora; solo permite solicitarla.

## Accesibilidad y responsive

- Navegación por anclas y etiquetas semánticas.
- Etiquetas explícitas para los campos, foco visible y mensajes de estado.
- Menú móvil con `aria-expanded`.
- Diseño adaptable en escritorio, tablet y móvil.
- Respeta `prefers-reduced-motion`.
