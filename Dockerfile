# Gunakan Node.js sebagai base image
FROM node:16-alpine

# Set work directory
WORKDIR /app

# Copy package.json dan install dependencies
COPY package.json .
RUN npm install

# Copy semua file ke dalam container
COPY . .

# Expose port 3030
EXPOSE 3030

# Jalankan aplikasi
CMD ["npm", "start"]
