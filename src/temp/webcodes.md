# CODES++ - Centro de Estudiantes de Sistemas UNLu
## Documentación Técnica del Sitio Web

### 📋 Información General
- **Nombre**: CODES++ - Centro Organizado de Estudiantes de Sistemas
- **Universidad**: Universidad Nacional de Luján (UNLu)
- **Tipo**: Sitio web institucional one-page
- **Versión**: 1.0
- **Última actualización**: 2025

---

## 🎯 Propósito del Sitio

El sitio web de CODES++ es la plataforma digital oficial del centro de estudiantes que representa a la comunidad estudiantil de la carrera de Sistemas de la UNLu. Su objetivo es:

- **Informar** sobre la organización y sus integrantes
- **Comunicar** actividades y eventos próximos
- **Proporcionar recursos** útiles para estudiantes
- **Facilitar el contacto** con la organización
- **Resolver dudas frecuentes** sobre la carrera

---

## 🏗️ Arquitectura del Sitio

### Estructura de Archivos
```
Web-Codes/
├── index.html              # Página principal (1,168 líneas)
├── assets/
│   ├── css/
│   │   └── styles.css      # Estilos principales (1,391 líneas)
│   ├── js/
│   │   └── main.js         # Funcionalidades JavaScript (523 líneas)
│   └── images/             # Recursos gráficos
│       ├── LogoCodes.png   # Logo principal
│       ├── ISOLOGO SIN FONDO.png # Favicon
│       ├── fede.jpg        # Foto Federico Rizzo
│       ├── juan.jpg        # Foto Juan Cruz Rodríguez
│       ├── romi.jpeg       # Foto Romina Ortiz
│       └── bau.jpeg        # Foto Bautista Pereyra Buch
├── Calendario.pdf          # Cronograma académico
└── README.md               # Esta documentación
```

### Tecnologías Utilizadas
- **Frontend**: HTML5, CSS3, JavaScript ES6+
- **Framework CSS**: Bootstrap 5.3.3
- **Iconografía**: Bootstrap Icons 1.11.3
- **Tipografía**: Google Fonts (Inter)
- **Responsive**: Mobile-first design
- **Compatibilidad**: Navegadores modernos (Chrome, Firefox, Safari, Edge)

---

## 🎨 Sistema de Diseño

### Paleta de Colores
```css
:root {
  --primary: #39c0c3;        /* Turquesa principal */
  --primary-dark: #2a8a8d;   /* Turquesa oscuro */
  --secondary: #1a1a1a;      /* Negro */
  --background: #ffffff;     /* Blanco */
  --background-alt: #f8f9fa; /* Gris claro */
  --text: #2c3e50;          /* Gris oscuro */
  --text-light: #6c757d;    /* Gris medio */
  --border: #e9ecef;        /* Gris claro */
}
```

### Tipografía
- **Familia**: Inter (Google Fonts)
- **Pesos**: 300, 400, 500, 600, 700
- **Jerarquía**:
  - Títulos principales: 700 (Bold)
  - Subtítulos: 600 (Semi-bold)
  - Texto regular: 400 (Regular)
  - Texto secundario: 300 (Light)

### Efectos Visuales
- **Sombras**: `0 10px 30px rgba(0, 0, 0, 0.1)`
- **Sombras hover**: `0 20px 40px rgba(0, 0, 0, 0.15)`
- **Gradientes**: `linear-gradient(135deg, #39c0c3 0%, #2a8a8d 100%)`
- **Transiciones**: `0.3s ease` (estándar)

---

## 📱 Responsive Design

### Breakpoints
```css
/* Mobile First */
@media (max-width: 576px)   /* Móviles pequeños */
@media (max-width: 768px)   /* Móviles y tablets */
@media (max-width: 991.98px) /* Tablets */
@media (min-width: 992px)   /* Desktop */
```

### Adaptaciones por Dispositivo

#### Móviles (≤576px)
- Hero: `padding: 60px 0 40px`
- Títulos: `font-size: 2.5rem`
- Cards: `margin-bottom: 1rem`
- Navegación: Menú hamburguesa

#### Tablets (768px - 991px)
- Hero: `padding: 80px 0 50px`
- Grid: 2 columnas máximo
- Navegación: Menú colapsable

#### Desktop (≥992px)
- Hero: `padding: 100px 0 60px`
- Grid: 4 columnas máximo
- Navegación: Horizontal completa

---

## 🧩 Componentes del Sitio

### 1. Header & Navegación
**Archivo**: `index.html` (líneas 95-175)

#### Características:
- **Posición**: Fixed (fijo en la parte superior)
- **Fondo**: Semi-transparente con blur
- **Logo**: Animación hover con scale
- **Menú**: Responsive con hamburguesa
- **Acciones**: Botones de búsqueda y modo oscuro

#### Funcionalidades JavaScript:
```javascript
// Efectos de scroll
function initScrollEffects()
// Navegación suave
function initSmoothScrolling()
// Menú móvil
function initMobileMenu()
```

### 2. Hero Section
**Archivo**: `index.html` (líneas 177-195)

#### Características:
- **Altura**: 70vh mínimo
- **Fondo**: Gradiente animado
- **Partículas**: Animación CSS
- **Texto**: Animaciones de entrada escalonadas
- **Responsive**: Adaptación de tamaños

#### Animaciones CSS:
```css
@keyframes fadeInUp { /* Entrada de elementos */ }
@keyframes expandWidth { /* Expansión de línea */ }
@keyframes float { /* Flotación de elementos */ }
@keyframes pulse { /* Pulsación de fondo */ }
```

### 3. Sección Nosotros
**Archivo**: `index.html` (líneas 197-350)

#### Contenido:
- **Historia**: Fundación y misión
- **Logros**: Reconocimientos obtenidos
- **Valores**: Principios organizacionales

#### Estructura:
- Cards con información detallada
- Iconos de Bootstrap
- Layout responsive con grid

### 4. Sección Integrantes
**Archivo**: `index.html` (líneas 352-450)

#### Comisión Directiva:
- **Presidente**: Federico Rizzo
- **Vice Presidente**: Juan Cruz Rodríguez
- **Secretaria**: Romina Ortiz
- **Tesorero**: Bautista Pereyra Buch

#### Vocales:
- Franco Marón
- Jeronimo Cardu Goldsworthy
- Blas Martín Andrade
- Marcelo Argañaraz
- Octavio Giaccaglia

#### Características:
- Cards con fotos y enlaces LinkedIn
- Grid responsive
- Efectos hover

### 5. Sección Actividades
**Archivo**: `index.html` (líneas 452-520)

#### Eventos Actuales:
1. **Taller de Resolución de Problemas**
   - Formulario de preinscripción
   - Técnicas de resolución de problemas

2. **CACIC 2025**
   - Competencia de programación
   - Formulario de preinscripción

3. **Expo UNLu 2025**
   - Estado: Próximamente
   - Evento anual de la universidad

### 6. Sección Recursos
**Archivo**: `index.html` (líneas 522-600)

#### Recursos Disponibles:
- **Bibliografía**: Repositorio GitHub
- **Guías y apuntes**: Organizados por materia
- **Discord**: Grupos de estudio
- **Cronograma**: PDF descargable
- **Mentorías**: Servidor específico

### 7. Sección FAQ
**Archivo**: `index.html` (líneas 602-850)

#### Preguntas Frecuentes:
1. Cambio de plan de estudios
2. Pérdida de regularidad
3. Significado de aprobar materias
4. Superposición de horarios
5. Cupos de materias
6. Contra-cursadas
7. Horarios de materias

#### Características:
- Accordion de Bootstrap
- Animaciones suaves
- Contenido detallado

### 8. Footer
**Archivo**: `index.html` (líneas 852-900)

#### Información de Contacto:
- **Email**: codes.unlu@gmail.com
- **Instagram**: @codes_unlu
- **Discord**: Servidor de estudio
- **GitHub**: Repositorio de recursos
- **WhatsApp**: Grupo de contacto

---

## ⚡ Funcionalidades JavaScript

### 1. Efectos de Scroll
```javascript
function initScrollEffects() {
    // Header scroll effect
    // Progress indicator
    // Back to top button
}
```

### 2. Navegación Suave
```javascript
function initSmoothScrolling() {
    // Smooth scroll to sections
    // Navbar offset calculation
}
```

### 3. Animaciones de Entrada
```javascript
function initAnimations() {
    // Intersection Observer
    // Fade-in effects
}
```

### 4. Búsqueda en el Sitio
```javascript
function initSearchFunctionality() {
    // Modal de búsqueda
    // Filtrado de contenido
    // Resultados dinámicos
}
```

### 5. Modo Oscuro
```javascript
function initDarkMode() {
    // Toggle de tema
    // Persistencia en localStorage
    // Cambio de iconos
}
```

### 6. Estados de Carga
```javascript
function initLoadingStates() {
    // Spinners en botones
    // Estados de formularios
}
```

---

## 🎭 Animaciones y Efectos

### Animaciones CSS
1. **fadeInUp**: Entrada de elementos desde abajo
2. **expandWidth**: Expansión de líneas decorativas
3. **float**: Flotación de elementos del hero
4. **pulse**: Pulsación del fondo del hero
5. **spin**: Rotación de spinners de carga

### Efectos de Hover
- **Cards**: Elevación con sombra
- **Botones**: Transformación y cambio de color
- **Enlaces**: Subrayado animado
- **Imágenes**: Escala suave

### Transiciones
- **Duración**: 0.3s (estándar)
- **Easing**: ease (suave)
- **Propiedades**: all (todas las propiedades)

---

## 🔧 Configuración y Personalización

### Variables CSS Modificables
```css
:root {
    --primary: #39c0c3;        /* Color principal */
    --primary-dark: #2a8a8d;   /* Color principal oscuro */
    --secondary: #1a1a1a;      /* Color secundario */
    --background: #ffffff;     /* Color de fondo */
    --text: #2c3e50;          /* Color de texto */
    --shadow: 0 10px 30px rgba(0, 0, 0, 0.1); /* Sombra */
}
```

### Personalización de Contenido
1. **Integrantes**: Modificar sección en `index.html`
2. **Eventos**: Actualizar cards de actividades
3. **Recursos**: Agregar nuevos enlaces
4. **FAQ**: Expandir preguntas frecuentes

### Optimizaciones Recomendadas
1. **Imágenes**: Comprimir para web
2. **CSS**: Minificar en producción
3. **JavaScript**: Minificar en producción
4. **SEO**: Meta tags optimizados

---

## 📊 SEO y Metadatos

### Meta Tags Implementados
```html
<!-- Descripción -->
<meta name="description" content="Centro Organizado de Estudiantes de Sistemas (CODES++) de la Universidad Nacional de Luján. Representamos y potenciamos a la comunidad estudiantil con recursos, actividades y apoyo académico.">

<!-- Keywords -->
<meta name="keywords" content="CODES++, centro de estudiantes, sistemas, UNLu, universidad, estudiantes, programación, informática">

<!-- Open Graph -->
<meta property="og:title" content="CODES++ | Centro de Estudiantes de Sistemas">
<meta property="og:description" content="Centro Organizado de Estudiantes de Sistemas de la UNLu. Recursos, actividades y apoyo para estudiantes.">
<meta property="og:image" content="assets/images/LogoCodes.png">

<!-- Twitter Card -->
<meta property="twitter:card" content="summary_large_image">
<meta property="twitter:title" content="CODES++ | Centro de Estudiantes de Sistemas">
```

### Schema.org Markup
```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "CODES++",
  "alternateName": "Centro Organizado de Estudiantes de Sistemas",
  "url": "https://codes-unlu.github.io/",
  "logo": "assets/images/LogoCodes.png",
  "description": "Centro Organizado de Estudiantes de Sistemas de la Universidad Nacional de Luján"
}
```

---

## 🚀 Rendimiento y Optimización

### Métricas de Rendimiento
- **Tiempo de carga**: < 3 segundos
- **First Contentful Paint**: < 1.5 segundos
- **Largest Contentful Paint**: < 2.5 segundos
- **Cumulative Layout Shift**: < 0.1

### Optimizaciones Implementadas
1. **Lazy Loading**: Imágenes con Intersection Observer
2. **CSS Variables**: Reutilización de estilos
3. **Minificación**: Archivos optimizados
4. **CDN**: Bootstrap y Google Fonts desde CDN
5. **Compresión**: Imágenes optimizadas

### Mejoras Sugeridas
1. **Service Worker**: Para cache offline
2. **PWA**: Manifest y iconos
3. **Analytics**: Google Analytics 4
4. **Compresión**: Gzip/Brotli
5. **Cache**: Headers de cache

---

## 🔒 Seguridad

### Medidas Implementadas
- **HTTPS**: Conexión segura
- **CSP**: Content Security Policy
- **XSS Protection**: Headers de seguridad
- **Referrer Policy**: Control de referrers

### Enlaces Externos
- **target="_blank"**: Para enlaces externos
- **rel="noopener"**: Prevención de ataques
- **rel="noreferrer"**: Control de referrers

---

## 📱 Compatibilidad

### Navegadores Soportados
- **Chrome**: 90+
- **Firefox**: 88+
- **Safari**: 14+
- **Edge**: 90+

### Dispositivos Testeados
- **Desktop**: Windows, macOS, Linux
- **Tablet**: iPad, Android tablets
- **Mobile**: iPhone, Android phones

---

## 🛠️ Mantenimiento

### Tareas Regulares
1. **Actualizar eventos**: Modificar sección de actividades
2. **Renovar integrantes**: Actualizar comisión directiva
3. **Revisar enlaces**: Verificar que funcionen
4. **Optimizar imágenes**: Comprimir nuevas imágenes
5. **Actualizar FAQ**: Agregar nuevas preguntas

### Proceso de Actualización
1. **Desarrollo**: Modificar archivos locales
2. **Testing**: Probar en diferentes dispositivos
3. **Deploy**: Subir cambios al servidor
4. **Verificación**: Confirmar funcionamiento

---

## 📞 Soporte y Contacto

### Información de Contacto
- **Email**: codes.unlu@gmail.com
- **Instagram**: [@codes_unlu](https://www.instagram.com/codes_unlu/)
- **Discord**: [Servidor de estudio](https://discord.gg/rDtEx4dMvD)
- **GitHub**: [Repositorio](https://github.com/CODES-UNLU)

### Reporte de Problemas
Para reportar problemas técnicos:
1. Describir el problema detalladamente
2. Incluir información del navegador
3. Adjuntar capturas de pantalla si es necesario
4. Contactar por email o Discord

---

## 📄 Licencia

© 2025 CODES++. Todos los derechos reservados.

Este sitio web fue desarrollado para el Centro Organizado de Estudiantes de Sistemas de la Universidad Nacional de Luján.

---

*Documentación generada automáticamente basada en el análisis del código fuente del sitio web de CODES++.*
