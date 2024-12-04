# 빌드 스테이지
FROM node:14-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# 실행 스테이지
FROM node:14-alpine
WORKDIR /app
COPY --from=build /app/dist /app
RUN npm install -g http-server
EXPOSE 9091
CMD ["http-server", "/app", "-p", "9091", "-a", "0.0.0.0"]
