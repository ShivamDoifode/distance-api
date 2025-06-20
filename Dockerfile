# Use official Node.js LTS image
FROM node:18

# Set working directory inside container
WORKDIR /app

# Copy package files separately to leverage Docker layer caching
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy rest of the code
COPY . .

# Copy the env file and rename it (optional)
# You can also mount it from host
# COPY myenv .env

# Expose the port from env or default 4000
EXPOSE 4000

# Start the app
CMD ["node", "server.js"]
