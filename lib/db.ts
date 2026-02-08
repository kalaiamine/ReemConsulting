import { connectDB } from './mongodb'

const BOOKINGS_COLLECTION = 'bookings'
const VISITORS_COLLECTION = 'visitors'

export interface Booking {
  id: string
  name: string
  email: string
  phone: string
  date: string
  time: string
  serviceType: string
  message: string
  status: 'pending' | 'confirmed' | 'completed' | 'cancelled'
  createdAt: string
  updatedAt: string
}

export interface Visitor {
  id: string
  timestamp: string
  path: string
  userAgent: string
  referrer?: string
}

export async function getBookings(): Promise<Booking[]> {
  const db = await connectDB()
  const col = db.collection<Booking>(BOOKINGS_COLLECTION)
  const docs = await col.find({}).sort({ createdAt: -1 }).toArray()
  return docs.map((d) => ({
    id: d.id ?? (d as unknown as { _id?: { toString: () => string } })._id?.toString?.() ?? '',
    name: d.name,
    email: d.email,
    phone: d.phone,
    date: d.date,
    time: d.time,
    serviceType: d.serviceType,
    message: d.message ?? '',
    status: d.status,
    createdAt: d.createdAt,
    updatedAt: d.updatedAt,
  }))
}

export async function addBooking(
  booking: Omit<Booking, 'id' | 'createdAt' | 'updatedAt'>
): Promise<Booking> {
  const db = await connectDB()
  const col = db.collection<Booking>(BOOKINGS_COLLECTION)
  const now = new Date().toISOString()
  const id = Date.now().toString()
  const doc: Booking = {
    ...booking,
    id,
    createdAt: now,
    updatedAt: now,
  }
  await col.insertOne(doc as unknown as import('mongodb').Document)
  return doc
}

export async function updateBooking(
  id: string,
  updates: Partial<Booking>
): Promise<Booking | null> {
  const db = await connectDB()
  const col = db.collection<Booking>(BOOKINGS_COLLECTION)
  const updated = {
    ...updates,
    updatedAt: new Date().toISOString(),
  }
  const result = await col.findOneAndUpdate(
    { id },
    { $set: updated },
    { returnDocument: 'after' }
  )
  if (!result) return null
  return result as unknown as Booking
}

export async function getVisitors(): Promise<Visitor[]> {
  const db = await connectDB()
  const col = db.collection<Visitor>(VISITORS_COLLECTION)
  const docs = await col.find({}).sort({ timestamp: -1 }).toArray()
  return docs.map((d) => ({
    id: d.id ?? (d as unknown as { _id?: { toString: () => string } })._id?.toString?.() ?? '',
    timestamp: d.timestamp,
    path: d.path,
    userAgent: d.userAgent,
    referrer: d.referrer,
  }))
}

export async function addVisitor(visitor: Omit<Visitor, 'id'>): Promise<Visitor> {
  const db = await connectDB()
  const col = db.collection<Visitor>(VISITORS_COLLECTION)
  const id = Date.now().toString()
  const doc: Visitor = { ...visitor, id }
  await col.insertOne(doc as unknown as import('mongodb').Document)
  return doc
}

export async function getVisitorStats(): Promise<{
  total: number
  today: number
  thisWeek: number
  byPath: Array<{ path: string; count: number }>
}> {
  const visitors = await getVisitors()
  const today = new Date().toDateString()
  const todayVisitors = visitors.filter((v) => new Date(v.timestamp).toDateString() === today)
  const weekAgo = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000)
  const thisWeekVisitors = visitors.filter((v) => new Date(v.timestamp) >= weekAgo)
  const byPathMap = visitors.reduce(
    (acc, v) => {
      acc[v.path] = (acc[v.path] || 0) + 1
      return acc
    },
    {} as Record<string, number>
  )
  const byPath = Object.entries(byPathMap).map(([path, count]) => ({ path, count }))
  return {
    total: visitors.length,
    today: todayVisitors.length,
    thisWeek: thisWeekVisitors.length,
    byPath,
  }
}
