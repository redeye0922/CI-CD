FROM node:14-alpine

# Set working directory
WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy project files
COPY . .

RUN npm run build

# Expose the port the app runs on
EXPOSE 3030

# Start the app
CMD ["npm", "run", "serve"]

