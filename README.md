# Portfolio Federico Rizzo - React

Portfolio profesional desarrollado con React, Tailwind CSS y React Router.

## 🚀 Características

- **React 18** con hooks modernos
- **Tailwind CSS** para estilos
- **React Router** para navegación
- **Responsive Design** para todos los dispositivos
- **Animaciones** y transiciones suaves
- **SEO optimizado**

## 📁 Estructura del Proyecto

```
src/
├── components/
│   ├── sections/
│   │   ├── Hero.js
│   │   ├── About.js
│   │   ├── Projects.js
│   │   └── Contact.js
│   ├── Navbar.js
│   ├── Footer.js
│   ├── Home.js
│   ├── AllProjects.js
│   └── ProjectDetail.js
├── App.js
├── index.js
└── index.css
```

## 🛠️ Instalación

1. **Instalar dependencias:**
   ```bash
   npm install
   ```

2. **Ejecutar en desarrollo:**
   ```bash
   npm start
   ```

3. **Construir para producción:**
   ```bash
   npm run build
   ```

## 📱 Rutas

- `/` - Página principal (Home)
- `/proyectos` - Todos los proyectos
- `/proyectos/:projectId` - Detalle de proyecto específico

## 🎨 Personalización

### Colores
Los colores principales están definidos en `tailwind.config.js`:
- Primary: `#3b82f6` (Azul)
- Secondary: `#f59e0b` (Naranja)
- Dark: `#1e293b`
- Light: `#f8fafc`

### Proyectos
Los proyectos se configuran en:
- `src/components/sections/Projects.js` - Para el carrusel principal
- `src/components/AllProjects.js` - Para la página de todos los proyectos
- `src/components/ProjectDetail.js` - Para los detalles individuales

## 📸 Imágenes

Las imágenes deben colocarse en la carpeta `public/img/`:
- `foto1.jpeg` - Foto de perfil
- `PDV-Pc.png` - Captura del proyecto PDV
- `CapturaCodes.png` - Captura del proyecto Codes
- `CapturaExpo.png` - Captura del proyecto Expo

## 🔧 Tecnologías Utilizadas

- **Frontend:** React 18, Tailwind CSS
- **Routing:** React Router v6
- **Iconos:** Font Awesome
- **Build Tool:** Create React App

## 📄 Licencia

© 2023 Federico Rizzo. Todos los derechos reservados. 