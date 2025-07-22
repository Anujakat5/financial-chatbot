# Step 1: Build
FROM node:18 AS builder
WORKDIR /FinancialBot
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Step 2: Run using nginx
FROM nginx:alpine
COPY --from=builder /FinancialBot/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
