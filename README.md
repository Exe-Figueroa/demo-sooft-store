# Demo de Tienda de Productos  

## Descripción  
Esta demo es una tienda en línea desarrollada con React, Supabase y Azure Blob Storage. Permite a los administradores gestionar productos y a los usuarios realizar pedidos. Los pedidos se envían al vendedor por correo electrónico, incluyendo un número de WhatsApp proporcionado previamente por el usuario para facilitar la comunicación.  

## Tecnologías Utilizadas  
- **Frontend**: React.  
- **Backend**: Supabase (gestión de datos y lógica de negocio).  
- **Almacenamiento de Imágenes**: Azure Blob Storage.  

## Características  

### Vista de Administrador  
- **Gestión de Productos (CRUD)**:  
  - Crear, leer, actualizar y eliminar productos.  
  - Las imágenes de los productos se almacenan en Azure Blob Storage.  

### Vista de Usuario  
- **Catálogo de Productos**:  
  - Exploración de productos disponibles.  
- **Carrito de Compras**:  
  - Añadir y gestionar productos en el carrito.  
- **Pedido y Contacto**:  
  - Envío de un correo electrónico al vendedor con los detalles del pedido.  
  - Antes de completar el pedido, el usuario proporciona un número de WhatsApp para facilitar el cierre de la venta.  

## Configuración  

### Requisitos  
- Node.js instalado (versión recomendada: 16 o superior).  
- Cuenta de Azure con acceso a Blob Storage.  
- Proyecto configurado en Supabase.  

### Variables de Entorno  
Configura las siguientes variables en un archivo `.env`:  
```env  
VITE_AZURE_CONTAINER_TOKEN_SAS=<tu_token_sas_azure>  
VITE_AZURE_CONTAINER_URL_SAS=<tu_url_sas_azure>  
VITE_AZURE_CONTAINER_NAME=<nombre_del_contenedor_azure>  
VITE_ACCOUNT_STORAGE_NAME=<nombre_de_tu_cuenta_de_storage_azure>  
VITE_SUPABASE_URL=<tu_supabase_url>  
VITE_SUPABASE_ANON_KEY=<tu_supabase_anon_key> 
```
### Instalación y Ejecución
1. Clona el repositorio:
  ```bash
  git clone https://github.com/Exe-Figueroa/demo-sooft-store.git 
  cd demo-sooft-store 
  ```
2. Instala las dependencias:
```bash
npm install
```
3. Inicia el Proyecto:
```bash
npm start
```