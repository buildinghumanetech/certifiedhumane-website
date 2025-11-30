# Quick Start - Preview Your Website

## Step 1: Get a Free Database (2 minutes)

1. **Go to https://neon.tech** and click "Sign Up" (you can use GitHub to sign in quickly)

2. **Create a new project:**
   - Click "Create a project"
   - Give it a name (e.g., "humane-cert")
   - Select a region close to you
   - Click "Create project"

3. **Copy your connection string:**
   - After the project is created, you'll see a connection string that looks like:
     ```
     postgresql://username:password@ep-xxx.region.aws.neon.tech/dbname?sslmode=require
     ```
   - Click "Copy" to copy it

## Step 2: Set Up Environment Variable

**Option A: Create a .env file (Recommended)**
```bash
echo 'DATABASE_URL="your-connection-string-here"' > .env
```
(Replace `your-connection-string-here` with the string you copied from Neon)

**Option B: Export in terminal**
```bash
export DATABASE_URL="your-connection-string-here"
```

## Step 3: Set Up the Database Schema

```bash
npm run db:push
```

## Step 4: (Optional) Add Sample Data

```bash
tsx scripts/seed-products.ts
```

## Step 5: Start the Server

```bash
npm run dev
```

## Step 6: Open in Browser

Open **http://localhost:5000** in your browser!

---

**That's it!** Your website should now be running locally. 🎉

