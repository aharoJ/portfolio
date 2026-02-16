# ============================================
# Stage 1: Install dependencies
# ============================================
FROM node:21-alpine AS deps
RUN corepack enable && corepack prepare pnpm@10.13.1 --activate
WORKDIR /app

# Copy package files
COPY package.json ./
# Copy lockfile if it exists (|| true so it doesn't fail if missing)
COPY pnpm-lock.yaml* ./

# Install dependencies
RUN pnpm install --frozen-lockfile 2>/dev/null || pnpm install

# ============================================
# Stage 2: Build the application
# ============================================
FROM node:21-alpine AS builder
RUN corepack enable && corepack prepare pnpm@10.13.1 --activate
WORKDIR /app

COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Build Next.js (output: 'standalone' must be set in next.config.mjs)
RUN pnpm build

# ============================================
# Stage 3: Production runner
# ============================================
FROM node:21-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

# Create non-root user
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# Copy standalone build output
COPY --from=builder /app/.next/standalone ./
# Copy static assets (CSS, JS bundles)
COPY --from=builder /app/.next/static ./.next/static
# Copy public assets (images, fonts, etc.)
COPY --from=builder /app/public ./public

USER nextjs

EXPOSE 3000

ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

CMD ["node", "server.js"]
