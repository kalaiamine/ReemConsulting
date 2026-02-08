'use client'

import { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { Badge } from '@/components/ui/badge'
import { Users, Calendar, TrendingUp, ArrowLeft } from 'lucide-react'
import Link from 'next/link'

interface Booking {
  id: string
  name: string
  email: string
  phone: string
  date: string
  time: string
  serviceType: string
  status: 'pending' | 'confirmed' | 'completed' | 'cancelled'
  createdAt: string
}

interface VisitorStats {
  total: number
  today: number
  thisWeek: number
  byPath: Array<{ path: string; count: number }>
}

export default function AdminPage() {
  const [bookings, setBookings] = useState<Booking[]>([])
  const [stats, setStats] = useState<VisitorStats | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log('[v0] Fetching dashboard data')
        const [bookingsRes, statsRes] = await Promise.all([
          fetch('/api/bookings'),
          fetch('/api/visitors'),
        ])

        if (bookingsRes.ok) {
          const bookingsData = await bookingsRes.json()
          setBookings(bookingsData)
          console.log('[v0] Bookings loaded:', bookingsData.length)
        }

        if (statsRes.ok) {
          const statsData = await statsRes.json()
          setStats(statsData)
          console.log('[v0] Visitor stats loaded')
        }
      } catch (error) {
        console.error('[v0] Error fetching data:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
    // Refresh data every 30 seconds
    const interval = setInterval(fetchData, 30000)
    return () => clearInterval(interval)
  }, [])

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pending':
        return 'bg-yellow-100 text-yellow-800'
      case 'confirmed':
        return 'bg-blue-100 text-blue-800'
      case 'completed':
        return 'bg-green-100 text-green-800'
      case 'cancelled':
        return 'bg-red-100 text-red-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  const getStatusLabel = (status: string) => {
    switch (status) {
      case 'pending':
        return 'En attente'
      case 'confirmed':
        return 'Confirmé'
      case 'completed':
        return 'Complété'
      case 'cancelled':
        return 'Annulé'
      default:
        return status
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <p className="text-muted-foreground">Chargement des données...</p>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      <header className="bg-primary text-primary-foreground border-b">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">REEM Consulting - Tableau de bord</h1>
          <Link href="/">
            <Button variant="outline" className="gap-2 bg-transparent border-primary-foreground/30 hover:bg-primary-foreground/10">
              <ArrowLeft size={18} />
              Retour au site
            </Button>
          </Link>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Réservations Totales</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-accent">{bookings.length}</div>
              <p className="text-xs text-muted-foreground mt-1">Toutes les réservations</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                <Calendar size={16} />
                En attente
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-accent">{bookings.filter(b => b.status === 'pending').length}</div>
              <p className="text-xs text-muted-foreground mt-1">À confirmer</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                <Users size={16} />
                Visiteurs
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-accent">{stats?.total || 0}</div>
              <p className="text-xs text-muted-foreground mt-1">Total tous les temps</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                <TrendingUp size={16} />
                Aujourd'hui
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-accent">{stats?.today || 0}</div>
              <p className="text-xs text-muted-foreground mt-1">Visiteurs aujourd'hui</p>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="bookings" className="space-y-4">
          <TabsList>
            <TabsTrigger value="bookings">Réservations</TabsTrigger>
            <TabsTrigger value="visitors">Visiteurs</TabsTrigger>
          </TabsList>

          <TabsContent value="bookings" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Gestion des Réservations</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Date</TableHead>
                        <TableHead>Nom</TableHead>
                        <TableHead>Email</TableHead>
                        <TableHead>Téléphone</TableHead>
                        <TableHead>Service</TableHead>
                        <TableHead>Heure</TableHead>
                        <TableHead>Statut</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {bookings.length === 0 ? (
                        <TableRow>
                          <TableCell colSpan={7} className="text-center text-muted-foreground py-8">
                            Aucune réservation pour le moment
                          </TableCell>
                        </TableRow>
                      ) : (
                        bookings
                          .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
                          .map((booking) => (
                            <TableRow key={booking.id}>
                              <TableCell className="text-sm font-medium">{new Date(booking.date).toLocaleDateString('fr-FR')}</TableCell>
                              <TableCell className="font-medium">{booking.name}</TableCell>
                              <TableCell className="text-sm">{booking.email}</TableCell>
                              <TableCell className="text-sm">{booking.phone}</TableCell>
                              <TableCell className="text-sm">{booking.serviceType}</TableCell>
                              <TableCell className="text-sm">{booking.time}</TableCell>
                              <TableCell>
                                <Badge className={getStatusColor(booking.status)}>
                                  {getStatusLabel(booking.status)}
                                </Badge>
                              </TableCell>
                            </TableRow>
                          ))
                      )}
                    </TableBody>
                  </Table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="visitors" className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Card>
                <CardHeader>
                  <CardTitle className="text-sm">Cette semaine</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-accent">{stats?.thisWeek || 0}</div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-sm">Aujourd'hui</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-accent">{stats?.today || 0}</div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-sm">Total</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-accent">{stats?.total || 0}</div>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Pages les plus visitées</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {stats?.byPath && stats.byPath.length > 0 ? (
                    stats.byPath
                      .sort((a, b) => b.count - a.count)
                      .map((item) => (
                        <div key={item.path} className="flex justify-between items-center py-3 border-b last:border-b-0">
                          <span className="text-sm font-medium text-foreground">{item.path || '/'}</span>
                          <div className="flex items-center gap-4">
                            <div className="w-32 bg-secondary rounded-full h-2">
                              <div
                                className="bg-accent h-2 rounded-full transition-all"
                                style={{
                                  width: `${(item.count / Math.max(...stats.byPath.map(p => p.count))) * 100}%`,
                                }}
                              />
                            </div>
                            <span className="text-lg font-bold text-accent w-12 text-right">{item.count}</span>
                          </div>
                        </div>
                      ))
                  ) : (
                    <p className="text-muted-foreground text-center py-4">Pas de données disponibles</p>
                  )}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}
