# Stage 1: Build Stage
FROM node:18 AS build

# Set the working directory
WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Install global dependencies (if needed)
RUN npm install -g @nestjs/cli

# Copy the application source code
COPY . .

# Build the application (if applicable)
RUN npm run build

# Stage 2: Production Stage
FROM node:18-slim

# Set the working directory
WORKDIR /app

# Copy only the necessary files from the build stage
COPY --from=build /app/package*.json ./
COPY --from=build /app/node_modules ./node_modules
COPY --from=build /app/dist ./dist

# Expose the application port
EXPOSE 8000

# Command to run the application in production mode
CMD ["npm", "run", "start:prod"]
