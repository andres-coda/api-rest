# Usar la imagen base de Node.js
FROM node:20-alpine

# Establecer el directorio de trabajo en /app
WORKDIR /app

# Copiar el archivo package.json y package-lock.json (si existe)
COPY package.json .

# Instalar las dependencias
RUN npm install

# Copiar el código de la aplicación al contenedor
COPY . .

RUN npm run build

# Exponer el puerto que usa la API
EXPOSE 3001

# Definir el comando para ejecutar la aplicación
CMD ["npm", "run","start"]
