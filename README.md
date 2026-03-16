# 🚀 webXpert - Sitio Web Profesional

**Sitio web corporativo para servicios de diseño web, SEO, marketing digital, administración de bases de datos, soporte técnico IT y soluciones SaaS.**

## 📋 Descripción

webXpert es una agencia digital que ofrece servicios profesionales de:
- 🎨 **Diseño Web** - Sitios web modernos y responsivos
- 🔍 **SEO** - Optimización para motores de búsqueda
- 📱 **Redes Sociales** - Gestión de presencia en redes sociales
- 🗄️ **Administración de Bases de Datos** - Auditoría, mantenimiento y backup
- 🔧 **Auditoría Web** - Análisis y optimización de sitios web
- 💻 **Soporte IT** - Soporte técnico completo para desktop, notebooks, impresoras, redes LAN y WiFi
- ☁️ **Soluciones SaaS** - Productos en la nube: Nutrigestión (nutrición), Gestión Inmobiliaria, Gestión para Estudios Jurídicos

## 🏗️ Estructura del Proyecto

```
webXpert/
├── 📄 index.html                    # Página principal
├── 📄 privacidad.html               # Política de privacidad
├── 📄 terminos.html                 # Términos de servicio
├── 📁 pages/                        # Todas las páginas HTML
│   ├── 📄 contacto.html             # Página de contacto
│   ├── 📄 nosotros.html             # Página "Quiénes Somos"
│   └── 📁 servicios/                # Páginas de servicios
│       ├── 📄 diseno-web.html       # Servicio de diseño web
│       ├── 📄 seo.html              # Servicio de SEO
│       ├── 📄 social-media.html     # Servicio de redes sociales
│       ├── 📄 database-admin.html   # Servicio de BD
│       ├── 📄 auditoria-web.html    # Servicio de auditoría web
│       ├── 📄 soporte-it.html       # Servicio de soporte IT
│       └── 📄 saas.html             # Soluciones SaaS (Nutrigestión, Inmobiliaria, Jurídicos)
├── 📁 components/                   # Componentes reutilizables
│   ├── 📄 projects-section.html     # Sección de proyectos
│   ├── 📄 projects-section.css      # Estilos de proyectos
│   ├── 📄 projects-section.js       # JavaScript de proyectos
│   └── 📄 fontawesome-setup.html    # Configuración de iconos
├── 📁 assets/                       # Recursos estáticos
│   ├── 📁 css/                      # Hojas de estilo
│   │   ├── 📁 base/                 # Estilos base
│   │   │   └── 📄 variables.css     # Variables CSS del sistema de diseño
│   │   ├── 📁 components/           # Componentes reutilizables
│   │   ├── 📁 layouts/              # Layouts y estructura
│   │   └── 📁 pages/                # Estilos específicos por página
│   │       ├── 📄 home.css          # Estilos página principal
│   │       ├── 📄 contact.css       # Estilos página contacto
│   │       ├── 📄 about.css         # Estilos página nosotros
│   │       ├── 📄 legal.css         # Estilos páginas legales
│   │       ├── 📄 services.css      # Estilos páginas servicios
│   │       ├── 📄 seo.css           # Estilos página SEO
│   │       └── 📄 social.css        # Estilos página redes sociales
│   ├── 📁 js/                       # Scripts JavaScript
│   │   ├── 📁 utils/                # Utilidades y helpers
│   │   │   └── 📄 animations.js     # Animaciones y efectos
│   │   ├── 📁 components/           # Componentes JS
│   │   │   └── 📄 modal.js          # Componente modal
│   │   └── 📁 pages/                # Scripts específicos por página
│   │       └── 📄 contact.js        # Validación formulario contacto
│   └── 📁 images/                   # Imágenes y recursos gráficos
│       ├── 📁 logos/                # Logos de la empresa
│       │   └── 📁 saas/             # Logos de productos SaaS (nutrigestion, gestioninmobiliaria, gestionjuridica)
│       ├── 📁 icons/                # Iconos y elementos gráficos (incl. SaaS.jpeg para hero)
│       ├── 📁 backgrounds/          # Imágenes de fondo
│       ├── 📁 services/             # Imágenes relacionadas con servicios
│       │   ├── 📁 smm/              # Imágenes de redes sociales
│       │   └── 📄 it-support.svg    # Icono de soporte IT
│       ├── 📁 proyectos/            # Imágenes de proyectos
│       └── 📁 team/                 # Fotos del equipo
│           └── 📄 julio-pintos.jpg  # Foto de Julio Pintos
├── 📄 manifest.json                 # Manifest para PWA
├── 📄 robots.txt                    # Configuración para crawlers
├── 📄 sitemap.xml                   # Sitemap para SEO
├── 📄 sw.js                         # Service Worker
├── 📄 package.json                  # Configuración del proyecto
└── 📄 README.md                     # Documentación del proyecto
```

## 🚀 Características

### ✅ **SEO Optimizado**
- Meta tags completos para todas las páginas
- Open Graph y Twitter Cards
- Sitemap.xml y robots.txt optimizados
- Estructura semántica HTML
- URLs amigables
- Schema.org implementado
- Preconnect para recursos externos

### ✅ **PWA (Progressive Web App)**
- Service Worker para cache inteligente
- Manifest.json configurado
- Funcionalidad offline básica
- Instalable como app nativa
- Shortcuts para acceso rápido

### ✅ **Sistema de Diseño Profesional**
- Variables CSS centralizadas
- Paleta de colores coherente
- Tipografía jerárquica
- Espaciado consistente
- Sombras y efectos visuales
- Modo oscuro automático

### ✅ **Formulario de Contacto Profesional**
- Validación en tiempo real
- Feedback visual y mensajes de error/éxito
- Integración con Google Analytics
- Campos para presupuesto y tipo de servicio
- Accesibilidad completa (ARIA, focus states)
- Incluye el nuevo servicio de Soporte IT

### ✅ **Diseño Responsive Avanzado**
- Adaptable a todos los dispositivos
- Breakpoints optimizados (320px, 360px, 480px, 768px, 1200px)
- Experiencia consistente
- Grid layouts flexibles
- Imágenes responsivas

### ✅ **Performance Optimizado**
- Preload de recursos críticos
- Service Worker para cache
- Optimización de imágenes
- Carga rápida
- Lazy loading implementado

### ✅ **Accesibilidad WCAG 2.1**
- Navegación por teclado
- Focus styles mejorados
- Estructura semántica
- Screen reader friendly
- Skip links implementados
- ARIA labels y roles
- Contraste optimizado

### ✅ **Portfolio de Proyectos**
- Grid responsive optimizado
- Proyectos destacados
- Tecnologías utilizadas
- Enlaces a demos en vivo
- Imágenes optimizadas
- Efectos hover elegantes

## 🛠️ Tecnologías Utilizadas

- **HTML5** - Estructura semántica
- **CSS3** - Estilos, animaciones y Grid/Flexbox
- **JavaScript (ES6+)** - Interactividad y validaciones
- **Service Worker** - Funcionalidad offline
- **PWA** - Progressive Web App
- **Google Analytics** - Tracking y analytics
- **FontAwesome** - Iconografía
- **CSS Variables** - Sistema de diseño

## 📱 Servicios Ofrecidos

### 🎨 **Diseño Web**
- Landing Pages optimizadas para conversión
- Sitios corporativos profesionales
- Tiendas online (e-commerce)
- Aplicaciones web personalizadas
- Diseño responsive y moderno

### 🔍 **SEO (Search Engine Optimization)**
- Auditoría SEO completa
- Optimización on-page y off-page
- Investigación de palabras clave
- Monitoreo de rankings
- Mejora de visibilidad orgánica

### 📱 **Gestión de Redes Sociales**
- Estrategias de contenido
- Gestión de comunidades
- Publicidad en redes sociales
- Análisis de métricas
- Creación de contenido visual

### 🗄️ **Administración de Bases de Datos**
- Auditoría de rendimiento
- Mantenimiento preventivo
- Backup y recuperación
- Migración y actualización
- Optimización de consultas

### 🔧 **Auditoría Web**
- Análisis de rendimiento
- Optimización de velocidad
- Revisión de seguridad
- Mejoras de UX/UI
- Reportes detallados

### 💻 **Soporte IT**
- Soporte técnico para desktop y notebooks
- Configuración y mantenimiento de impresoras
- Instalación y configuración de redes LAN
- Configuración de WiFi empresarial
- Resolución de problemas técnicos

### ☁️ **Soluciones SaaS**
- **Nutrigestión** - Sistema integral de gestión de turnos y atención para Lic. en Nutrición (historial clínico, dashboard, reportes).
- **Gestión Inmobiliaria** - Administración y cobranzas para agentes e inmobiliarias (contratos, vencimientos, cartera).
- **Gestión para Estudios Jurídicos** - Control de expedientes, agenda de audiencias, alertas de vencimientos y reportes.

## 🚀 Instalación y Uso

### **Requisitos**
- Navegador web moderno
- Servidor web (para desarrollo local)

### **Instalación Local**
1. Clona el repositorio:
```bash
git clone https://github.com/japintos/webxpert.git
cd webxpert
```

2. Abre el archivo `index.html` en tu navegador o usa un servidor local:
```bash
# Con Python
python -m http.server 8000

# Con Node.js
npx serve .

# Con PHP
php -S localhost:8000
```

3. Visita `http://localhost:8000` en tu navegador

## 📊 Analytics y Tracking

El sitio incluye Google Analytics para:
- Tracking de visitantes
- Análisis de comportamiento
- Medición de conversiones
- Eventos personalizados
- Análisis de formularios

**ID de Google Analytics:** G-2YLNSWEFHC

## 🔧 Configuración

### **Google Analytics**
- ✅ Configurado con ID: G-2YLNSWEFHC
- ✅ Eventos de formulario implementados
- ✅ Tracking de páginas configurado

### **Formulario de Contacto**
- ✅ Configurado con validación en tiempo real
- ✅ Incluye todos los servicios (incluyendo Soporte IT y SaaS)
- ✅ Mensajes de error/éxito implementados
- ✅ Accesibilidad completa
- ✅ Hero de contacto con contraste y UX optimizados

### **Service Worker**
- ✅ Configurado para cachear recursos estáticos
- ✅ Se actualiza automáticamente
- ✅ Funcionalidad offline básica

## 📈 SEO y Marketing

### **Meta Tags Optimizados**
- ✅ Títulos únicos y descriptivos
- ✅ Descripciones atractivas
- ✅ Palabras clave relevantes
- ✅ Open Graph para redes sociales
- ✅ Twitter Cards implementadas

### **Sitemap y Robots**
- ✅ Sitemap.xml actualizado con todas las páginas
- ✅ Robots.txt optimizado para SEO
- ✅ URLs amigables y estructuradas
- ✅ Incluye páginas de servicios y legales

### **Schema.org**
- ✅ Datos estructurados implementados
- ✅ Información de organización
- ✅ Datos de contacto
- ✅ Información de servicios

## 🔒 Seguridad y Privacidad

- ✅ Política de privacidad completa
- ✅ Términos de servicio detallados
- ✅ Cumplimiento GDPR básico
- ✅ Validación de formularios robusta
- ✅ Aviso de cookies implementado

## 📞 Contacto

- **Email:** julioapintos1@gmail.com
- **Teléfono:** +54 9 3764724207
- **Ubicación:** Posadas, Misiones, Argentina
- **Redes Sociales:**
  - Facebook: [julioapintos](https://www.facebook.com/julioapintos)
  - Instagram: [julioapintos](https://www.instagram.com/julioapintos/)
  - LinkedIn: [julio-pintos](https://www.linkedin.com/in/julio-pintos-0638a8200/)

## 📄 Licencia

Este proyecto es propiedad de webXpert. Todos los derechos reservados.

## 🤝 Contribuciones

Para contribuir al proyecto:
1. Fork el repositorio
2. Crea una rama para tu feature
3. Commit tus cambios
4. Push a la rama
5. Abre un Pull Request

## 📝 Changelog

### v1.3.0 (2025-03) - **ESTADO ACTUAL**
- ✅ **Soluciones SaaS** - Nueva sección en home y página dedicada `saas.html`
- ✅ **Tres productos SaaS** - Nutrigestión, Gestión Inmobiliaria, Gestión para Estudios Jurídicos (con logos y descripciones)
- ✅ **Hero de contacto** - Contraste y UX corregidos (texto claro sobre fondo violeta)
- ✅ **Imágenes SaaS** - Hero `SaaS.jpeg` y logos en `assets/images/logos/saas/`
- ✅ **Nosotros** - Actualización de rol en equipo (Full Stack Developer)

### v1.2.0 (2025-01-27)
- ✅ **Nuevo servicio de Soporte IT** agregado
- ✅ **Responsive design mejorado** para proyectos
- ✅ **Estilos de páginas legales** completados
- ✅ **Accesibilidad mejorada** con skip links
- ✅ **SEO optimizado** con preconnect y schema.org
- ✅ **Sistema de diseño** completamente implementado
- ✅ **PWA mejorada** con shortcuts
- ✅ **Formulario de contacto** actualizado con nuevo servicio

### v1.1.0 (2025-01-27)
- ✅ Auditoría SEO completa implementada
- ✅ Accesibilidad WCAG 2.1 mejorada
- ✅ Performance optimizada
- ✅ Rich snippets implementados
- ✅ Focus states mejorados

### v1.0.0 (2025-01-27)
- ✅ Reorganización completa del proyecto
- ✅ Implementación de PWA
- ✅ Formulario de contacto profesional
- ✅ SEO optimizado
- ✅ Páginas legales completas
- ✅ Nuevo servicio de administración de BD
- ✅ Estructura de carpetas profesional

---

## 🎯 **Estado Actual del Proyecto**

### ✅ **COMPLETADO Y FUNCIONANDO:**
- **Sitio web profesional** con diseño moderno y responsive
- **SEO completo** con meta tags, sitemap, robots.txt y schema.org
- **PWA configurada** con manifest, service worker y shortcuts
- **Accesibilidad WCAG 2.1** con ARIA, focus states, skip links
- **7 servicios/soluciones** con páginas dedicadas (incl. Soluciones SaaS con 3 productos)
- **Portfolio de proyectos** con responsive optimizado
- **Formulario de contacto** con validación, accesibilidad y hero con buen contraste
- **Sistema de diseño CSS** completo y coherente
- **Páginas legales** con estilos profesionales
- **Responsive design** optimizado para todos los dispositivos

### 🚀 **LISTO PARA PRODUCCIÓN:**
- ✅ Funciona correctamente en todos los navegadores
- ✅ SEO optimizado y indexable
- ✅ Responsive completo para móviles
- ✅ Accesibilidad cumpliendo estándares
- ✅ PWA instalable como app
- ✅ Performance optimizada
- ✅ Seguridad básica implementada

**Desarrollado con ❤️ por webXpert**

---

## 📋 **Notas Técnicas**

### **Archivos de configuración**
Asegúrate de que los siguientes archivos estén en la raíz del proyecto:
- `sitemap.xml` - Sitemap actualizado
- `robots.txt` - Configuración SEO
- `sw.js` - Service Worker
- `manifest.json` - Configuración PWA

### **Accesibilidad**
- ✅ Todas las imágenes tienen atributos `alt` descriptivos
- ✅ Los colores cumplen con los estándares de contraste WCAG
- ✅ Navegación por teclado implementada
- ✅ Skip links para accesibilidad

### **SEO**
- ✅ Cada página tiene etiquetas `<title>` y `<meta name="description">` únicas
- ✅ Open Graph y Twitter Cards implementadas
- ✅ Schema.org para datos estructurados
- ✅ URLs amigables y estructura semántica

### **Cookies y RGPD**
- ✅ Aviso de cookies implementado
- ✅ Política de privacidad completa
- ✅ Términos de servicio detallados
- ✅ Cumplimiento básico de RGPD 