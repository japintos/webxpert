# webXpert (React + Vite)

Sitio institucional de webXpert desarrollado como SPA con React, Vite y Tailwind CSS.

## Tecnologías

- React 19
- Vite
- Tailwind CSS
- React Router (`HashRouter`)
- Framer Motion
- Formspree (`@formspree/react`)

## Requisitos

- Node.js 18+ (recomendado LTS)
- npm

## Instalación

```bash
npm install
```

## Variables de entorno

Crear archivo `.env` con:

```env
VITE_FORMSPREE_FORM_ID=meenkyyj
```

> También podés usar `.env.example` como base.

## Scripts disponibles

- `npm run dev`: levanta entorno local de desarrollo.
- `npm run build`: genera build de producción en `dist/`.
- `npm run preview`: sirve localmente el build generado.

## Estructura principal

- `index.html`: shell base de Vite.
- `src/main.jsx`: punto de entrada de React.
- `src/App.jsx`: layout, rutas y contenido de páginas.
- `src/styles.css`: estilos globales + directivas Tailwind.
- `assets/images/`: imágenes de marca, equipo, proyectos y soluciones SaaS.
- `robots.txt` y `sitemap.xml`: archivos SEO para publicación.

## Rutas de la SPA

- `#/` Inicio
- `#/servicios` Servicios
- `#/servicios/:slug` Detalle de servicio
- `#/nosotros` Nosotros
- `#/contacto` Contacto
- `#/privacidad` Política de privacidad
- `#/terminos` Términos de servicio

## Formulario de contacto

Integrado con Formspree mediante `@formspree/react`:

- Form ID tomado desde `VITE_FORMSPREE_FORM_ID`.
- Manejo de estado de envío (`submitting`), éxito y errores de validación.

## Estado del proyecto

- Estructura legacy HTML/CSS/JS eliminada para evitar duplicación.
- Proyecto unificado en arquitectura React SPA.
- Build y lint verificados tras cambios recientes.
