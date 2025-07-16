# Sistema de Punto de Venta (PDV)

Sistema integral para la gestión comercial de pequeños y medianos negocios. Permite administrar ventas, productos, clientes, proveedores, compras, stock, medios de pago y reportes, con una interfaz moderna y responsiva.

---

## Tabla de Contenidos
- [Características Principales](#características-principales)
- [Instalación y Configuración](#instalación-y-configuración)
- [Estructura del Sistema](#estructura-del-sistema)
- [Módulos y Funcionalidades](#módulos-y-funcionalidades)
- [Modelo de Datos](#modelo-de-datos)
- [API REST](#api-rest)
- [Recomendaciones y Mejoras](#recomendaciones-y-mejoras)
- [Contacto y Soporte](#contacto-y-soporte)

---

## Características Principales
- Gestión de ventas con cálculo automático de totales, descuentos e impuestos.
- Administración de productos, stock, categorías y proveedores.
- Módulo de clientes con historial de compras y estadísticas.
- Registro y control de compras a proveedores.
- Configuración de medios de pago y comisiones.
- Dashboard con estadísticas en tiempo real.
- Reportes y exportación de datos.
- Interfaz moderna, responsiva y fácil de usar.
- Atajos de teclado y modales para operaciones rápidas.

---

## Instalación y Configuración

### 1. Requisitos Previos
- Node.js 16+
- npm (incluido con Node.js)

### 2. Instalación de dependencias
```bash
npm install
```

### 3. Ejecución del servidor
```bash
node index.js
```
El servidor se inicia en [http://localhost:3020](http://localhost:3020)

### 4. Compilación de estilos (Sass)
```bash
sass --watch sass/styles.scss:public/css/styles.css
```

---

## Estructura del Sistema

```
SistemaGeneral/
├── index.js                # Servidor principal (Express)
├── config/db.js            # Configuración de base de datos
├── punto_de_venta.db       # Base de datos SQLite
├── routes/                 # Rutas de la API REST
├── public/                 # Frontend (HTML, JS, CSS)
├── sass/                   # Estilos fuente (Sass)
├── documentacion/          # Documentos y manuales
└── package.json            # Dependencias y scripts
```

---

## Módulos y Funcionalidades

### Ventas
- Registro rápido de ventas, búsqueda de productos, selección de cliente y método de pago.
- Cálculo automático de totales, descuentos e impuestos.
- Atajos de teclado para agilizar la operación.

### Productos
- Alta, baja y modificación de productos.
- Gestión de stock, categorías, historial de precios y alertas de stock bajo.
- Importación y exportación de inventario.

### Compras
- Registro de compras a proveedores.
- Actualización automática de stock y costos.
- Selección de proveedor y productos comprados.

### Proveedores
- ABM de proveedores con datos de contacto y ubicación.
- Relación con productos y compras.

### Clientes
- ABM de clientes con historial de compras y estadísticas.
- Búsqueda, filtrado y exportación de datos.

### Medios de Pago
- Configuración de métodos de pago y comisiones.
- Estadísticas de uso y exportación.

### Stock
- Panel de control de inventario.
- Ajustes masivos, filtros y exportación.

### Dashboard
- Estadísticas en tiempo real: ventas, ingresos, productos, stock bajo.
- Acciones rápidas y últimas ventas.

### Reportes
- (En desarrollo) Panel para análisis y exportación de reportes.

### Gastos
- (En desarrollo) Registro y control de gastos.

### Instrucciones
- Guía de uso y ayuda rápida.

---

## Modelo de Datos (SQLite)

- **productos**: id, codigo_de_barras, nombre, descripcion, unidad_de_medida, precio_costo, margen_ganancia, stock, proveedor_id, rubro, fecha_ingreso, precio_venta, stock_minimo
- **proveedores**: id, empresa, nombre, telefono, email, direccion, ciudad, fecha_creacion
- **clientes**: id, nombre, telefono, email, direccion, ciudad, fecha_registro
- **ventas**: id, cliente_id, importe_total, descuento_total, impuestos_total, fecha_venta
- **compras**: id, proveedor_id, fecha_compra, importe_total
- **medios_pago**: id, nombre, porcentaje_incremento
- **pagos**: id, venta_id, metodo_pago, monto, fecha
- **movimientos_stock**: id, producto_id, tipo_movimiento, cantidad, fecha, comentario
- **historial_precios**: id, producto_id, precio, fecha
- **usuarios**: id, nombre, username, password, rol

> Ver `documentacion/DDL.md` para el detalle completo de la estructura SQL.

---

## API REST (Backend Express)

- `/api/productos` - CRUD de productos, stock, historial de precios, import/export.
- `/api/proveedores` - CRUD de proveedores, relación con productos y compras.
- `/api/clientes` - CRUD de clientes, historial de ventas, estadísticas.
- `/api/ventas` - Registro y consulta de ventas, estadísticas diarias.
- `/api/compras` - Registro y consulta de compras.
- `/api/medios-pago` - CRUD de medios de pago.

> Consultar los archivos en `routes/` para ver los endpoints y parámetros disponibles.

---

## Recomendaciones y Mejoras
- Implementar módulo de cuentas corrientes para clientes y proveedores.
- Agregar fecha de vencimiento y alertas para productos perecederos.
- Mejorar el módulo de reportes y gastos.
- Unificar estilos y experiencia de usuario en todos los módulos.
- Agregar autenticación y gestión de usuarios/roles.
- Integrar notificaciones y alertas en tiempo real.

---

## Contacto y Soporte
- Desarrollado por WS-Tech
- Email: rizzofs@gmail.com
- WhatsApp: [2346-529130](https://wa.me/2346529130)

---

© 2025 Sistema de Gestión. Todos los derechos reservados. 