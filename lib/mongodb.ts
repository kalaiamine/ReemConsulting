import { MongoClient, Db } from 'mongodb'

let cachedClient: MongoClient | null = null
let cachedDb: Db | null = null

/** Options suitable for serverless (Vercel, etc.): reuse one client, limit pool size */
const clientOptions = {
  maxPoolSize: 10,
  serverSelectionTimeoutMS: 10000,
  connectTimeoutMS: 10000,
}

export async function connectDB(): Promise<Db> {
  if (cachedDb) return cachedDb

  const uri = process.env.MONGODB_URI
  if (!uri) {
    throw new Error(
      'MONGODB_URI is not set. Set it in your environment (e.g. .env.local or your hosting provider: Vercel, Netlify, etc.). Example: mongodb+srv://user:pass@cluster.mongodb.net/reem_db'
    )
  }

  if (cachedClient) {
    cachedDb = cachedClient.db()
    return cachedDb
  }

  const client = new MongoClient(uri, clientOptions)
  await client.connect()
  cachedClient = client
  cachedDb = client.db()
  return cachedDb
}

export function getDb(): Promise<Db> {
  return connectDB()
}
