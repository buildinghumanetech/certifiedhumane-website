# Quick Setup Guide

## To Preview the Website Locally

### 1. Set up a Free Neon Database

1. Go to https://neon.tech and sign up for a free account
2. Create a new project
3. Copy the connection string (it will look like: `postgresql://user:password@host/database?sslmode=require`)
4. Set it as an environment variable:

```bash
export DATABASE_URL="your-neon-connection-string-here"
```

### 2. Run the Development Server

```bash
npm run dev
```

The website will be available at http://localhost:5000

### 3. (Optional) Seed the Database with Sample Products

```bash
npm run db:push  # Push the database schema
tsx scripts/seed-products.ts  # Add sample products
```

## Alternative: Use a .env file

Create a `.env` file in the root directory:

```
DATABASE_URL=your-neon-connection-string-here
```

Then run `npm run dev`

