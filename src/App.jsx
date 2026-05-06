import { motion } from "framer-motion";
import { ArrowRight, Database, Globe, LineChart, ShieldCheck, Smartphone, Wrench } from "lucide-react";
import { HashRouter, Link, NavLink, Route, Routes, useParams } from "react-router-dom";
import { useEffect } from "react";
import { useForm, ValidationError } from "@formspree/react";

const fadeUp = { hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { duration: 0.45 } } };
const FORMSPREE_FORM_ID = import.meta.env.VITE_FORMSPREE_FORM_ID || "meenkyyj";

function useSeo({ title, description }) {
  useEffect(() => {
    document.title = title;
    const setMeta = (name, content, isProperty = false) => {
      const selector = isProperty ? `meta[property="${name}"]` : `meta[name="${name}"]`;
      let el = document.querySelector(selector);
      if (!el) {
        el = document.createElement("meta");
        if (isProperty) el.setAttribute("property", name);
        else el.setAttribute("name", name);
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
    };
    setMeta("description", description);
    setMeta("og:title", title, true);
    setMeta("og:description", description, true);
  }, [title, description]);
}

const servicesOverview = [
  { slug: "diseno-web", icon: Globe, title: "Diseño Web", text: "Sitios modernos, responsivos y orientados a conversión." },
  { slug: "seo", icon: LineChart, title: "Optimización SEO", text: "Posicionamiento orgánico con estrategia técnica y contenido." },
  { slug: "social-media", icon: Smartphone, title: "Redes Sociales", text: "Gestión profesional de contenido, comunidad y campañas." },
  { slug: "auditoria-web", icon: ShieldCheck, title: "Auditoría Web", text: "Diagnóstico integral de SEO, rendimiento, seguridad y UX." },
  { slug: "database-admin", icon: Database, title: "Administración BD", text: "Auditoría, mantenimiento y backup para máxima disponibilidad." },
  { slug: "soporte-it", icon: Wrench, title: "Soporte IT", text: "Soporte técnico para desktop, notebooks, impresoras y redes." },
  { slug: "saas", icon: Globe, title: "Soluciones SaaS", text: "Plataformas listas para digitalizar procesos de negocio." },
];

const featuredProjects = [
  {
    title: "Carrito de Compras WebXpert",
    image: "/assets/images/proyectos/carrito de compras.jpg",
    alt: "Captura del Carrito de Compras WebXpert",
    desc: "E-commerce SPA responsiva con catálogo, filtros, búsqueda, carrito y checkout.",
    stack: ["React + Vite", "JavaScript ES6+", "CSS3", "API REST"],
    url: "https://carritocompraswebxpert.vercel.app/catalogo",
  },
  {
    title: "Landing para WebXpert",
    image: "/assets/images/proyectos/proyecto2.jpg",
    alt: "Captura de la landing de WebXpert",
    desc: "Sitio institucional moderno con foco en conversión y experiencia de usuario.",
    stack: ["HTML5", "CSS3", "JavaScript", "SEO"],
    url: "https://www.webxpert.com.ar",
  },
  {
    title: "Concesionario Web",
    image: "/assets/images/proyectos/web-consecionario.jpg",
    alt: "Captura del proyecto Concesionario Web",
    desc: "Sitio para concesionaria con catálogo de vehículos, filtros y contacto directo.",
    stack: ["HTML5", "CSS3", "JavaScript", "Responsive"],
    url: "https://concesionarioweb.vercel.app/",
  },
  {
    title: "Oudin, Duarte & Asociados",
    image: "/assets/images/proyectos/oudin.jpg",
    alt: "Captura del sitio Oudin, Duarte & Asociados",
    desc: "Web institucional para estudio jurídico con enfoque en UX, accesibilidad y SEO.",
    stack: ["HTML5", "CSS3", "JavaScript", "Accesibilidad"],
    url: "https://japintos.github.io/estudioOudin/",
  },
];

const serviceDetails = {
  "diseno-web": {
    title: "Diseño Web Profesional",
    subtitle: "Creamos sitios web modernos, responsivos y optimizados para convertir visitantes en clientes.",
    benefitsTitle: "¿Por qué elegir nuestro diseño web?",
    benefits: [
      "Tu web lista para posicionar en Google desde el primer día.",
      "Diseño 100% responsive para móviles, tablets y computadoras.",
      "Diseño personalizado, alineado a tu marca y objetivos.",
      "Soporte y mantenimiento con mejora continua.",
    ],
    cardsTitle: "Nuestros Servicios de Diseño Web",
    cards: [
      { title: "Landing Pages", text: "Páginas de aterrizaje optimizadas para conversión.", points: ["Ideal para campañas y lanzamientos", "Copy persuasivo + CTA", "Desarrollo 100% a medida"] },
      { title: "Sitios Institucionales", text: "Websites profesionales para construir confianza.", points: ["Múltiples secciones", "Blog y formularios", "Diseño exclusivo de marca"] },
      { title: "E-commerce", text: "Tiendas online completas para vender 24/7.", points: ["Pasarelas de pago", "Carrito y checkout", "Panel de administración"] },
    ],
    cta: "Solicitar Consulta",
  },
  seo: {
    title: "Optimización SEO Profesional",
    subtitle: "Potencia tu presencia en línea con estrategias avanzadas de posicionamiento web.",
    benefitsTitle: "Beneficios del SEO",
    benefits: [
      "Mayor visibilidad: más tráfico orgánico calificado.",
      "Credibilidad: mejora percepción de marca en buscadores.",
      "Mejor experiencia: estructura y velocidad optimizadas.",
      "Más conversiones: posicionamiento orientado a negocio.",
    ],
    cardsTitle: "Tipos de SEO que Ofrecemos",
    cards: [
      { title: "SEO On-Page", text: "Optimización interna de contenidos y estructura.", points: ["Meta tags", "Headings", "Contenidos", "Enlaces internos"] },
      { title: "SEO Off-Page", text: "Estrategias externas para autoridad y relevancia.", points: ["Link building", "Menciones", "Reputación", "Señales externas"] },
      { title: "SEO Técnico", text: "Optimización de base técnica y rastreo.", points: ["Core Web Vitals", "Indexación", "Sitemap/robots", "Arquitectura"] },
    ],
    processTitle: "Nuestro Proceso de SEO",
    process: ["Análisis inicial", "Investigación de keywords", "Optimización técnica", "Creación de contenido", "Monitoreo y ajustes"],
    cta: "Solicitar Auditoría Gratuita",
  },
  "social-media": {
    title: "Gestión Profesional de Redes Sociales",
    subtitle: "Transformamos tu presencia digital con estrategias avanzadas de social media management.",
    benefitsTitle: "¿Por qué elegirnos?",
    benefits: [
      "Posicionamiento de marca en múltiples plataformas.",
      "Mayor interacción y engagement con tu audiencia.",
      "Estrategias optimizadas que convierten.",
      "Métricas y análisis para maximizar ROI.",
    ],
    cardsTitle: "Servicios de Social Media",
    cards: [
      { title: "Community Management", text: "Gestión completa de comunidad y contenidos.", points: ["Calendario de contenidos", "Gestión diaria", "Respuesta a mensajes"] },
      { title: "Diseño Gráfico", text: "Creatividades alineadas a tu identidad visual.", points: ["Piezas para feed/stories", "Brand consistency", "Formatos de campaña"] },
      { title: "Publicidad Digital", text: "Campañas para alcance y conversiones.", points: ["Segmentación", "Optimización", "Escalado"] },
    ],
    plansTitle: "Servicios Disponibles",
    plans: [
      { name: "Starter", items: ["3 publicaciones por semana", "Respuesta a mensajes", "Reporte mensual", "2 redes sociales"] },
      { name: "Advanced", items: ["Todo lo de Starter", "Diseño gráfico personalizado", "Campañas básicas", "Estrategia de crecimiento", "3 redes sociales"] },
      { name: "Xpert Pro", items: ["Todo lo de Advanced", "Contenido multimedia", "Análisis avanzado", "Optimización de campañas", "5 redes sociales"] },
    ],
    cta: "Solicitar Consulta Gratuita",
  },
  "auditoria-web": {
    title: "Auditoría Web Profesional",
    subtitle: "Descubre el potencial oculto de tu sitio web con un análisis integral.",
    introTitle: "¿Qué es una Auditoría Web?",
    intro: "Es un análisis completo de SEO, rendimiento, seguridad y experiencia de usuario para detectar oportunidades de mejora y definir un plan de optimización realista.",
    benefitsTitle: "Beneficios de Nuestra Auditoría",
    benefits: [
      "SEO optimizado con correcciones técnicas y estratégicas.",
      "Rendimiento mejorado para una carga más rápida.",
      "Seguridad reforzada frente a vulnerabilidades.",
      "Experiencia de usuario más clara y efectiva.",
    ],
    cardsTitle: "¿Qué Incluye Nuestra Auditoría?",
    cards: [
      { title: "Análisis SEO Técnico", text: "Meta tags, estructura HTML, sitemap, robots y mobile.", points: ["Palabras clave", "Meta tags", "Estructura", "Velocidad"] },
      { title: "Análisis de Contenido", text: "Calidad, relevancia y optimización para intención de búsqueda.", points: ["Calidad", "Optimización de textos", "Headings", "Imágenes"] },
      { title: "Análisis de Rendimiento", text: "Recursos, caché y eficiencia de carga.", points: ["Velocidad", "Optimización de imágenes", "Minificación", "Caché"] },
      { title: "Análisis de Seguridad", text: "Evaluación de riesgos y recomendaciones accionables.", points: ["Vulnerabilidades", "SSL", "Permisos", "Hardening"] },
    ],
    processTitle: "Nuestro Proceso de Auditoría",
    process: ["Análisis inicial", "Revisión detallada", "Reporte completo", "Implementación"],
    plansTitle: "Tipos de Auditoría",
    plans: [
      { name: "Básica", items: ["Análisis SEO básico", "Revisión de velocidad", "Reporte ejecutivo", "5 recomendaciones"] },
      { name: "Profesional", items: ["SEO completo", "Rendimiento", "Seguridad", "UX/UI", "15+ recomendaciones"] },
      { name: "Premium", items: ["Todo profesional", "Competencia", "Conversión", "25+ recomendaciones", "Seguimiento 30 días"] },
    ],
    cta: "Solicitar Auditoría Gratuita",
  },
  "database-admin": {
    title: "Administración Profesional de Bases de Datos",
    subtitle: "Optimizamos, auditamos y mantenemos tus bases de datos para máximo rendimiento y seguridad.",
    cardsTitle: "Nuestros Servicios de Base de Datos",
    cards: [
      { title: "Auditoría de BD", text: "Evaluación completa de rendimiento, seguridad y estructura.", points: ["Cuellos de botella", "Vulnerabilidades", "Normalización", "Plan de acción"] },
      { title: "Mantenimiento Preventivo", text: "Monitoreo continuo y mantenimiento proactivo.", points: ["Monitoreo 24/7", "Optimización de queries", "Limpieza de datos", "Alertas"] },
      { title: "Backup y Recuperación", text: "Protección de datos críticos con recuperación ágil.", points: ["Backups automáticos", "Nube + local", "Pruebas de restore", "Plan de contingencia"] },
      { title: "Migración y Actualización", text: "Migraciones seguras con mínima interrupción.", points: ["Migración entre motores", "Actualización de versión", "Consolidación", "Cloud migration"] },
    ],
    benefitsTitle: "¿Por qué elegir nuestros servicios?",
    benefits: [
      "Rendimiento optimizado en consultas y tiempos de respuesta.",
      "Seguridad avanzada para datos sensibles.",
      "Monitoreo continuo con prevención proactiva.",
      "Ahorro de costos por eficiencia de infraestructura.",
    ],
    processTitle: "¿Cómo trabajamos?",
    process: ["Diagnóstico", "Optimización", "Mantenimiento", "Soporte y Backup"],
    cta: "Solicitar Consulta Gratuita",
  },
  "soporte-it": {
    title: "Soporte IT Profesional",
    subtitle: "Soluciones técnicas completas para mantener tu infraestructura tecnológica al 100%.",
    benefitsTitle: "¿Por qué elegir nuestro soporte IT?",
    benefits: [
      "Respuesta rápida para minimizar tiempos de inactividad.",
      "Equipo técnico con experiencia certificada.",
      "Mantenimiento preventivo para evitar fallas.",
      "Garantía y seguimiento post-servicio.",
    ],
    cardsTitle: "Nuestros Servicios IT",
    cards: [
      { title: "Computadoras Desktop", text: "Mantenimiento, reparación y optimización.", points: ["Hardware", "Software", "Limpieza", "Rendimiento"] },
      { title: "Notebooks y Laptops", text: "Servicio especializado para portátiles.", points: ["Pantallas", "Baterías", "Teclados", "Mantenimiento"] },
      { title: "Impresoras y Escáneres", text: "Mantenimiento y reparación de impresión.", points: ["Reparación", "Consumibles", "Configuración", "Mantenimiento"] },
      { title: "Redes LAN y WiFi", text: "Instalación y mejora de redes empresariales.", points: ["LAN", "WiFi", "Seguridad", "Velocidad"] },
    ],
    plansTitle: "Planes de Soporte IT",
    plans: [
      { name: "Básico", items: ["Mantenimiento mensual", "Soporte telefónico", "Reparaciones básicas", "Respuesta 24h"] },
      { name: "Profesional", items: ["Todo lo básico", "Soporte remoto", "Backup", "Monitoreo de red", "Respuesta 4h"] },
      { name: "Premium", items: ["Todo profesional", "Soporte 24/7", "Técnico dedicado", "Plan contingencia", "Respuesta 2h"] },
    ],
    processTitle: "Nuestro Proceso de Soporte",
    process: ["Diagnóstico", "Presupuesto", "Reparación", "Verificación", "Seguimiento"],
    cta: "Solicitar Soporte Inmediato",
  },
  saas: {
    title: "Soluciones SaaS para tu Negocio",
    subtitle: "Productos en la nube listos para digitalizar, automatizar y conectar procesos críticos.",
    benefitsTitle: "¿Por qué elegir nuestras soluciones SaaS?",
    benefits: [
      "Listas para usar, sin instalaciones complejas.",
      "Acceso en la nube 24/7 desde cualquier dispositivo.",
      "Escalables según el crecimiento de tu negocio.",
      "Seguridad, soporte y actualizaciones continuas.",
    ],
    cardsTitle: "Nuestras Soluciones SaaS",
    cards: [
      {
        title: "Nutrigestión",
        logoSrc: "/assets/images/logos/saas/nutrigestion.png",
        logoAlt: "Logo de Nutrigestión",
        text: "Gestión de turnos e historial clínico para nutricionistas.",
        points: ["Agenda online", "Historial centralizado", "Dashboard y reportes"],
      },
      {
        title: "Gestión Inmobiliaria",
        logoSrc: "/assets/images/logos/saas/gestioninmobiliaria.png",
        logoAlt: "Logo de Gestión Inmobiliaria",
        text: "Administración y cobranzas para inmobiliarias.",
        points: ["Propiedades y contratos", "Vencimientos y pagos", "KPIs de cartera"],
      },
      {
        title: "Gestión Jurídica",
        logoSrc: "/assets/images/logos/saas/gestionjuridica.png",
        logoAlt: "Logo de Gestión Jurídica",
        text: "Control de expedientes y audiencias para estudios.",
        points: ["Expedientes y estados", "Alertas de vencimiento", "Reportes por cliente/área"],
      },
    ],
    cta: "Hablar con un experto",
  },
};

const privacidadSections = [
  { title: "1. Información que Recopilamos", text: "Recopilamos información que usted nos proporciona directamente, como cuando:", items: ["Completa formularios en nuestro sitio web", "Se comunica con nosotros por email o teléfono", "Se suscribe a nuestro newsletter", "Utiliza nuestros servicios"] },
  { title: "2. Tipos de Información", text: "La información que recopilamos puede incluir:", items: ["Información de contacto (nombre, email, teléfono)", "Información del proyecto y requerimientos", "Información de navegación y uso del sitio web", "Cookies y tecnologías similares"] },
  { title: "3. Uso de la Información", text: "Utilizamos su información para:", items: ["Proporcionar y mejorar nuestros servicios", "Comunicarnos con usted sobre proyectos", "Enviar información relevante", "Mejorar la experiencia del usuario", "Cumplir con obligaciones legales"] },
  { title: "4. Cookies y Tecnologías Similares", text: "Utilizamos cookies para:", items: ["Mejorar funcionalidad", "Analizar tráfico", "Personalizar contenido", "Recordar preferencias"] },
  { title: "5. Compartir Información", text: "No vendemos, alquilamos ni compartimos su información personal con terceros, excepto:", items: ["Con su consentimiento explícito", "Para cumplir obligaciones legales", "Con proveedores de servicios operativos"] },
  { title: "6. Seguridad de Datos", text: "Implementamos medidas de seguridad para proteger su información contra:", items: ["Acceso no autorizado", "Alteración o destrucción", "Divulgación no autorizada"] },
  { title: "7. Sus Derechos", text: "Usted tiene derecho a:", items: ["Acceder a su información personal", "Corregir información inexacta", "Solicitar eliminación de datos", "Oponerse al procesamiento", "Retirar consentimiento"] },
  { title: "8. Retención de Datos", text: "Conservamos su información solo durante el tiempo necesario para cumplir los fines del servicio y obligaciones legales." },
  { title: "9. Transferencias Internacionales", text: "Su información puede ser transferida y procesada fuera de su país, cumpliendo leyes aplicables." },
  { title: "10. Menores de Edad", text: "Nuestros servicios no están dirigidos a menores de 18 años." },
  { title: "11. Cambios a esta Política", text: "Podemos actualizar esta política ocasionalmente y notificaremos cambios significativos." },
  { title: "12. Contacto", text: "Email: julioapintos1@gmail.com · Teléfono: +54 9 3764724207 · Posadas, Misiones, Argentina" },
];

const terminosSections = [
  { title: "1. Aceptación de los Términos", text: "Al acceder y utilizar los servicios de webXpert, usted acepta estos términos." },
  { title: "2. Descripción de Servicios", text: "Ofrecemos diseño web, SEO, redes sociales, consultoría digital, auditorías web y administración de bases de datos." },
  { title: "3. Propiedad Intelectual", text: "El contenido y materiales creados por webXpert son propiedad intelectual de la empresa hasta el pago total del proyecto." },
  { title: "4. Responsabilidades del Cliente", items: ["Proporcionar información precisa", "Aprobar entregables en tiempo", "Proveer accesos necesarios", "Respetar términos de pago", "No usar servicios para actividades ilegales"] },
  { title: "5. Plazos y Entregables", text: "Los plazos son estimados y pueden variar según complejidad; comunicaremos retrasos relevantes." },
  { title: "6. Pagos y Facturación", text: "Los pagos se realizan según cronograma acordado; atrasos pueden suspender servicios." },
  { title: "7. Revisiones y Cambios", text: "Incluimos revisiones limitadas; cambios adicionales pueden implicar costos extra." },
  { title: "8. Confidencialidad", text: "Mantenemos confidencialidad de la información del cliente." },
  { title: "9. Limitación de Responsabilidad", text: "No somos responsables por daños indirectos; responsabilidad máxima limitada al monto pagado." },
  { title: "10. Garantías", text: "Garantizamos profesionalismo y buenas prácticas, sin asegurar resultados específicos de SEO/marketing." },
  { title: "11. Terminación", text: "Cualquiera de las partes puede terminar con 30 días de aviso escrito." },
  { title: "12. Ley Aplicable", text: "Estos términos se rigen por las leyes de Argentina." },
  { title: "13. Modificaciones", text: "Podemos modificar estos términos; los cambios se publicarán en el sitio." },
  { title: "14. Contacto", text: "Email: julioapintos1@gmail.com · Teléfono: +54 9 3764724207 · Posadas, Misiones, Argentina" },
];

function SectionTitle({ eyebrow, title, subtitle }) {
  return (
    <div className="mx-auto mb-10 max-w-3xl text-center">
      {eyebrow && <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-brand-500">{eyebrow}</p>}
      <h2 className="text-3xl font-bold text-slate-100 md:text-4xl">{title}</h2>
      {subtitle && <p className="mt-3 text-slate-300">{subtitle}</p>}
    </div>
  );
}

function SiteShell({ children }) {
  return (
    <div className="min-h-screen bg-ink text-slate-100">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-ink/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <Link to="/" className="flex items-center gap-3">
            <img src="/assets/images/logos/logo_solito.jpg" alt="webXpert" className="h-10 w-10 rounded-md object-cover" />
            <span className="text-lg font-semibold">webXpert</span>
          </Link>
          <nav className="hidden items-center gap-8 text-sm md:flex">
            <NavLink to="/servicios" className="hover:text-brand-100">Servicios</NavLink>
            <NavLink to="/nosotros" className="hover:text-brand-100">Nosotros</NavLink>
            <NavLink to="/contacto" className="hover:text-brand-100">Contacto</NavLink>
          </nav>
          <Link to="/contacto" className="rounded-lg bg-brand-600 px-4 py-2 text-sm font-semibold hover:bg-brand-500">Agendar llamada</Link>
        </div>
      </header>
      {children}
      <footer className="border-t border-white/10 px-6 py-8 text-sm text-slate-400">
        <div className="mx-auto flex max-w-6xl flex-col justify-between gap-3 md:flex-row">
          <p>© {new Date().getFullYear()} webXpert. Todos los derechos reservados.</p>
          <div className="flex flex-wrap items-center gap-5">
            <a href="https://www.instagram.com/webxpert.soluciones/" target="_blank" rel="noreferrer">Instagram</a>
            <a href="https://www.linkedin.com/in/julio-pintos-0638a8200/" target="_blank" rel="noreferrer">LinkedIn</a>
            <a href="https://www.facebook.com/julioapintos" target="_blank" rel="noreferrer">Facebook</a>
            <Link to="/privacidad">Privacidad</Link>
            <Link to="/terminos">Términos</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}

function HomePage() {
  useSeo({
    title: "webXpert | Software Studio",
    description: "Diseño, desarrollo y optimización de productos digitales orientados a resultados.",
  });
  return (
    <main>
      <section className="relative overflow-hidden px-6 pb-20 pt-20 md:pt-28">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(99,102,241,.22),transparent_40%),radial-gradient(circle_at_70%_70%,rgba(34,211,238,.16),transparent_40%)]" />
        <motion.div variants={fadeUp} initial="hidden" animate="show" className="relative mx-auto grid max-w-6xl gap-12 md:grid-cols-2 md:items-center">
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-brand-500">Software Studio</p>
            <h1 className="text-4xl font-bold leading-tight md:text-6xl">Construimos productos digitales que hacen crecer negocios</h1>
            <p className="mt-5 max-w-xl text-slate-300">Diseño, desarrollo y optimización de experiencias web modernas con foco en performance, conversión y escalabilidad.</p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link to="/contacto" className="inline-flex items-center gap-2 rounded-lg bg-brand-600 px-5 py-3 font-semibold shadow-glow">Empezar proyecto <ArrowRight size={16} /></Link>
              <Link to="/servicios" className="inline-flex items-center gap-2 rounded-lg border border-white/20 px-5 py-3 font-semibold">Ver servicios</Link>
            </div>
          </div>
          <div className="rounded-2xl border border-white/10 bg-slate-900/70 shadow-2xl">
            <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
              <span className="h-2.5 w-2.5 rounded-full bg-rose-400" />
              <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
            </div>
            <pre className="overflow-auto p-6 text-xs text-slate-300">{`const outcome = {
  ux: "conversion-first",
  speed: "core web vitals",
  quality: "production ready"
};`}</pre>
          </div>
        </motion.div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-20">
        <SectionTitle eyebrow="Portfolio" title="Proyectos Destacados" subtitle="Casos reales desarrollados por webXpert para diferentes industrias." />
        <div className="grid gap-6 md:grid-cols-2">
          {featuredProjects.map((project) => (
            <article key={project.title} className="overflow-hidden rounded-2xl border border-white/10 bg-slate-900/70">
              <img src={project.image} alt={project.alt} className="h-56 w-full object-cover" loading="lazy" />
              <div className="p-6">
                <h3 className="text-xl font-semibold">{project.title}</h3>
                <p className="mt-2 text-sm text-slate-300">{project.desc}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.stack.map((item) => (
                    <span key={item} className="rounded-full border border-white/20 px-2.5 py-1 text-xs text-slate-200">
                      {item}
                    </span>
                  ))}
                </div>
                <a href={project.url} target="_blank" rel="noreferrer" className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-brand-300">
                  Ver proyecto <ArrowRight size={14} />
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

function NosotrosPage() {
  useSeo({
    title: "Nosotros | webXpert",
    description: "Conocé al equipo de webXpert y nuestra visión para transformar negocios con tecnología.",
  });
  const members = [
    {
      name: "Julio A. Pintos",
      role: "Socio Fundador",
      techRole: "Tech Lead - Full Stack Developer",
      specialties: "Análisis, diseño, codificación y ventas",
      image: "/assets/images/team/julio-pintos.jpg",
      socials: [
        { label: "Facebook", url: "https://www.facebook.com/julioapintos" },
        { label: "Instagram", url: "https://www.instagram.com/julioapintos" },
        { label: "LinkedIn", url: "https://www.linkedin.com/in/julio-pintos-0638a8200/" },
        { label: "WhatsApp", url: "https://wa.me/543764724207" },
      ],
    },
    {
      name: "Agustín Burgos",
      role: "Socio Fundador",
      techRole: "Full Stack Developer",
      specialties: "Análisis, diseño, codificación, maquetado",
      image: "/assets/images/team/agustin-burgos.jpg",
      socials: [
        { label: "Facebook", url: "https://www.facebook.com/profile.php?id=61564704710500" },
        { label: "Instagram", url: "https://www.instagram.com/gree.dev/" },
        { label: "LinkedIn", url: "https://www.linkedin.com/in/agust%C3%ADn-burgos-987b6130b/" },
        { label: "WhatsApp", url: "https://wa.me/543764724207" },
      ],
    },
  ];
  return (
    <main>
      <section className="relative overflow-hidden px-6 py-20">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(99,102,241,.2),transparent_40%),radial-gradient(circle_at_80%_80%,rgba(34,211,238,.12),transparent_40%)]" />
        <div className="relative mx-auto max-w-6xl">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-brand-500">La historia de webXpert</p>
          <h1 className="max-w-4xl text-4xl font-bold leading-tight md:text-5xl">Transformando el mundo digital</h1>
          <p className="mt-6 max-w-4xl text-slate-300">En webXpert ayudamos a empresas y emprendedores a destacar y crecer en el mundo digital. Creamos sitios web atractivos, optimizados y a medida, y gestionamos tus redes sociales para que tu marca conecte, crezca y venda más.</p>
          <p className="mt-3 max-w-4xl text-slate-300">Nos adaptamos a tus objetivos y necesidades, combinando tecnología, creatividad y estrategias personalizadas que convierten visitantes en clientes.</p>
        </div>
      </section>
      <section className="mx-auto max-w-6xl px-6 pb-20">
        <h2 className="text-3xl font-bold">Equipo de webXpert</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {members.map((member) => (
            <article key={member.name} className="rounded-2xl border border-white/10 bg-slate-900/70 p-6">
              <div className="flex items-start gap-4">
                <img src={member.image} alt={member.name} className="h-20 w-20 rounded-xl object-cover ring-1 ring-white/20" />
                <div>
                  <h3 className="text-xl font-semibold">{member.name}</h3>
                  <p className="text-sm font-semibold text-brand-300">{member.role}</p>
                  <p className="mt-1 text-sm text-slate-300">{member.techRole}</p>
                </div>
              </div>
              <p className="mt-4 text-sm text-slate-300">{member.specialties}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {member.socials.map((s) => (
                  <a key={s.label} href={s.url} target="_blank" rel="noreferrer" className="rounded-lg border border-white/20 px-3 py-1.5 text-xs font-semibold hover:border-brand-300">
                    {s.label}
                  </a>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

function ContactoPage() {
  useSeo({
    title: "Contacto | webXpert",
    description: "Contactá a webXpert para recibir una propuesta en diseño web, SEO, social media, soporte IT o SaaS.",
  });
  const [state, handleSubmit] = useForm(FORMSPREE_FORM_ID);

  return (
    <main className="mx-auto max-w-5xl px-6 py-20">
      <SectionTitle eyebrow="Contacto" title="¿Listo para transformar tu presencia digital?" subtitle="Contanos sobre tu proyecto y te ayudamos a llevarlo al siguiente nivel." />
      <div className="grid gap-6 md:grid-cols-2">
        <section className="rounded-2xl border border-white/10 bg-slate-900/70 p-6">
          <h3 className="text-xl font-semibold">Información de contacto</h3>
          <div className="mt-4 space-y-3 text-slate-300">
            <p><strong>Teléfono:</strong> <a href="tel:+543764724207" className="text-brand-300">+54 9 3764724207</a></p>
            <p><strong>Email:</strong> <a href="mailto:julioapintos1@gmail.com" className="text-brand-300">julioapintos1@gmail.com</a></p>
            <p><strong>Ubicación:</strong> Posadas, Misiones</p>
          </div>
        </section>
        <section className="rounded-2xl border border-white/10 bg-slate-900/70 p-6">
          <h3 className="text-xl font-semibold">Envíanos un mensaje</h3>
          <form className="mt-4 space-y-3" onSubmit={handleSubmit}>
            <input type="hidden" name="_subject" value="Nuevo lead desde webXpert" />
            <input name="nombre" required placeholder="Nombre completo" className="w-full rounded-lg border border-white/20 bg-slate-950 px-3 py-2 text-sm" />
            <input type="email" name="email" required placeholder="Email" className="w-full rounded-lg border border-white/20 bg-slate-950 px-3 py-2 text-sm" />
            <ValidationError prefix="Email" field="email" errors={state.errors} className="text-xs text-rose-400" />
            <input name="telefono" placeholder="Teléfono" className="w-full rounded-lg border border-white/20 bg-slate-950 px-3 py-2 text-sm" />
            <select name="servicio" required className="w-full rounded-lg border border-white/20 bg-slate-950 px-3 py-2 text-sm">
              <option value="">Selecciona un servicio</option>
              {servicesOverview.map((s) => <option key={s.slug} value={s.slug}>{s.title}</option>)}
            </select>
            <select name="presupuesto" className="w-full rounded-lg border border-white/20 bg-slate-950 px-3 py-2 text-sm">
              <option value="">Presupuesto estimado</option>
              <option value="1000-3000">$1,000 - $3,000</option>
              <option value="3000-5000">$3,000 - $5,000</option>
              <option value="5000-10000">$5,000 - $10,000</option>
              <option value="10000+">Más de $10,000</option>
            </select>
            <textarea name="mensaje" required rows={5} placeholder="Descripción del proyecto..." className="w-full rounded-lg border border-white/20 bg-slate-950 px-3 py-2 text-sm" />
            <ValidationError prefix="Mensaje" field="mensaje" errors={state.errors} className="text-xs text-rose-400" />
            <label className="flex items-center gap-2 text-xs text-slate-300">
              <input type="checkbox" required name="aceptar-privacidad" />
              Acepto la política de privacidad
            </label>
            <button disabled={state.submitting} type="submit" className="rounded-lg bg-brand-600 px-4 py-2 text-sm font-semibold disabled:opacity-60">
              {state.submitting ? "Enviando..." : "Enviar mensaje"}
            </button>
          </form>
          {state.succeeded && <p className="mt-4 text-sm text-emerald-400">Mensaje enviado con éxito. Te responderemos pronto.</p>}
          <ValidationError errors={state.errors} className="mt-4 text-sm text-rose-400" />
        </section>
      </div>
    </main>
  );
}

function ServiciosPage() {
  useSeo({
    title: "Servicios | webXpert",
    description: "Explorá todos los servicios de webXpert: diseño web, SEO, social media, auditoría web, soporte IT, SaaS y bases de datos.",
  });
  return (
    <main className="mx-auto max-w-6xl px-6 py-20">
      <SectionTitle eyebrow="Servicios" title="Todas nuestras áreas de trabajo" subtitle="Explorá cada servicio con su detalle, alcance y metodología." />
      <div className="grid gap-5 md:grid-cols-2">
        {servicesOverview.map((service) => (
          <article key={service.slug} className="rounded-2xl border border-white/10 bg-slate-900/70 p-6">
            <service.icon className="mb-3 text-brand-400" />
            <h3 className="text-xl font-semibold">{service.title}</h3>
            <p className="mt-2 text-slate-300">{service.text}</p>
            <Link to={`/servicios/${service.slug}`} className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-brand-300">Ver detalle <ArrowRight size={14} /></Link>
          </article>
        ))}
      </div>
    </main>
  );
}

function ServiceDetailPage() {
  const { slug = "diseno-web" } = useParams();
  const service = serviceDetails[slug] ?? serviceDetails["diseno-web"];
  useSeo({
    title: `${service.title} | webXpert`,
    description: service.subtitle,
  });
  return (
    <main>
      <section className="mx-auto max-w-6xl px-6 py-20">
        <SectionTitle eyebrow="Servicio" title={service.title} subtitle={service.subtitle} />
        {service.introTitle && (
          <section className="mb-12 rounded-2xl border border-white/10 bg-slate-900/70 p-6">
            <h3 className="text-2xl font-semibold">{service.introTitle}</h3>
            <p className="mt-3 text-slate-300">{service.intro}</p>
          </section>
        )}
        {service.benefitsTitle && (
          <section className="mb-12">
            <h3 className="mb-5 text-2xl font-semibold">{service.benefitsTitle}</h3>
            <div className="grid gap-4 md:grid-cols-2">
              {service.benefits.map((b) => <article key={b} className="rounded-xl border border-white/10 bg-slate-900/70 p-5 text-slate-300">• {b}</article>)}
            </div>
          </section>
        )}
        {service.cardsTitle && (
          <section className="mb-12">
            <h3 className="mb-5 text-2xl font-semibold">{service.cardsTitle}</h3>
            <div className={`grid gap-5 ${slug === "saas" ? "md:grid-cols-3" : "md:grid-cols-2"}`}>
              {service.cards.map((card) => (
                <article key={card.title} className="flex h-full flex-col rounded-2xl border border-white/10 bg-slate-900/70 p-6">
                  {card.logoSrc && (
                    <div className="mb-4 overflow-hidden rounded-xl border border-white/10 bg-slate-950/70 p-2">
                      <img
                        src={card.logoSrc}
                        alt={card.logoAlt || `Logo de ${card.title}`}
                        className="h-28 w-full rounded-lg object-contain bg-white/90"
                        loading="lazy"
                      />
                    </div>
                  )}
                  <h4 className="text-xl font-semibold">{card.title}</h4>
                  <p className="mt-2 text-slate-300">{card.text}</p>
                  <ul className="mt-4 space-y-1 text-sm text-slate-300">{card.points.map((p) => <li key={p}>• {p}</li>)}</ul>
                </article>
              ))}
            </div>
          </section>
        )}
        {service.processTitle && (
          <section className="mb-12">
            <h3 className="mb-5 text-2xl font-semibold">{service.processTitle}</h3>
            <div className="grid gap-4 md:grid-cols-3">
              {service.process.map((p, i) => (
                <article key={p} className="rounded-xl border border-white/10 bg-slate-900/70 p-5">
                  <p className="text-xs font-semibold text-brand-400">0{i + 1}</p>
                  <p className="mt-1">{p}</p>
                </article>
              ))}
            </div>
          </section>
        )}
        {service.plansTitle && (
          <section className="mb-12">
            <h3 className="mb-5 text-2xl font-semibold">{service.plansTitle}</h3>
            <div className="grid gap-5 md:grid-cols-3">
              {service.plans.map((plan) => (
                <article key={plan.name} className="rounded-2xl border border-white/10 bg-slate-900/70 p-6">
                  <h4 className="text-xl font-semibold">{plan.name}</h4>
                  <ul className="mt-3 space-y-1 text-sm text-slate-300">{plan.items.map((item) => <li key={item}>• {item}</li>)}</ul>
                </article>
              ))}
            </div>
          </section>
        )}
        <section className="rounded-2xl border border-brand-400/40 bg-gradient-to-br from-brand-700 to-brand-500 p-8 text-white">
          <h3 className="text-2xl font-bold">{service.cta ?? "Solicitar propuesta"}</h3>
          <p className="mt-2 text-white/90">Hablemos sobre tu caso y armamos una propuesta técnica y visual alineada a tus objetivos.</p>
          <Link to="/contacto" className="mt-5 inline-flex items-center gap-2 rounded-lg bg-ink px-5 py-3 font-semibold">Ir a contacto <ArrowRight size={15} /></Link>
        </section>
      </section>
    </main>
  );
}

function LegalPage({ title, subtitle, sections }) {
  useSeo({
    title: `${title} | webXpert`,
    description: subtitle,
  });
  return (
    <main className="mx-auto max-w-5xl px-6 py-20">
      <SectionTitle eyebrow="Legal" title={title} subtitle={subtitle} />
      <div className="space-y-4">
        {sections.map((s) => (
          <section key={s.title} className="rounded-xl border border-white/10 bg-slate-900/70 p-5">
            <h3 className="text-lg font-semibold">{s.title}</h3>
            {s.text && <p className="mt-2 text-sm text-slate-300">{s.text}</p>}
            {s.items && <ul className="mt-2 space-y-1 text-sm text-slate-300">{s.items.map((it) => <li key={it}>• {it}</li>)}</ul>}
          </section>
        ))}
      </div>
    </main>
  );
}

export default function App() {
  return (
    <HashRouter>
      <SiteShell>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/nosotros" element={<NosotrosPage />} />
          <Route path="/contacto" element={<ContactoPage />} />
          <Route path="/servicios" element={<ServiciosPage />} />
          <Route path="/servicios/:slug" element={<ServiceDetailPage />} />
          <Route path="/privacidad" element={<LegalPage title="Política de Privacidad" subtitle="Última actualización: 27 de Enero de 2025" sections={privacidadSections} />} />
          <Route path="/terminos" element={<LegalPage title="Términos de Servicio" subtitle="Última actualización: 27 de Enero de 2025" sections={terminosSections} />} />
        </Routes>
      </SiteShell>
    </HashRouter>
  );
}
