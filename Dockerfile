# Use a base image with Node.js
FROM node:18

# Set the working directory
WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Install global dependencies (if needed)
RUN npm install -g @nestjs/cli

# Copy the application source code
COPY . .

# Expose the application port
EXPOSE 8000

# Command to run the application in development mode with hot reload
CMD ["npm", "run", "start:dev"]
