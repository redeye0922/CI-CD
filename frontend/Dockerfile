FROM node:14-alpine

# Set working directory
WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy project files
COPY . .

# env setting
ENV PORT=${VUE_APP_FRONTEND_PORT}

RUN npm run build

# Expose the port the app runs on
EXPOSE ${VUE_APP_FRONTEND_PORT}

# Start the app
CMD ["npm", "run", "serve"]

