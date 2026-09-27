# Deployment & Operations Guide

## 1. Local Development Setup

```bash
# 1. Clone repository
git clone <repo-url>
cd scsco-digital-campus

# 2. Install dependencies
npm install

# 3. Configure environment variables
cp .env.example .env

# 4. Run Prisma generation and database seed
npm run db:generate
npm run db:seed

# 5. Start development server (Port 3000)
npm run dev
```

Visit `http://localhost:3000` to view the application.

---

## 2. Production Build & Docker

```bash
# Run production build
npm run build

# Preview production build locally
npm run preview
```

### Docker Deployment
```dockerfile
FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

---

## 3. Environment Variables Reference
Refer to `.env.example` for required configuration parameters (Database URL, Storage keys, AI Assistant keys).
