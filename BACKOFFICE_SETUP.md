# REEM Consulting - Backoffice Setup Guide

## Overview
The backoffice system is a secure admin dashboard for managing reservations and tracking website visitors. It uses lightweight JSON-based storage for both data persistence and includes built-in authentication.

## Features

### 1. Authentication System
- **Login Page**: `/backoffice/login`
- **Credentials** (default):
  - Email: `admin@reemconsulting.com`
  - Password: `ReemConsulting2024!`

### 2. Reservations Management
- View all booking submissions
- Track booking status (pending, confirmed, completed, cancelled)
- See customer contact information
- Filter by service type (Conseil, Audit, Certification, Formation)

### 3. Visitor Analytics
- Real-time visitor tracking
- Daily, weekly, and total visit counts
- Page-by-page traffic analysis
- User agent and referrer information

## Architecture

### Database Structure
The system uses JSON files stored in `.data/` directory (automatically created):

```
.data/
├── bookings.json          # All reservation data
└── visitors.json          # Visitor tracking data
```

### API Endpoints

#### Authentication
- `POST /api/auth/login` - User login
- `POST /api/auth/logout` - User logout

#### Bookings
- `GET /api/bookings` - Fetch all bookings (requires auth)
- `POST /api/bookings` - Create new booking (public endpoint)

#### Visitors
- `GET /api/visitors` - Fetch visitor stats (requires auth)
- `POST /api/visitors` - Track visitor (public endpoint)

## Configuration

### Environment Variables
Set these in your `.env.local` file:

```env
ADMIN_EMAIL=admin@reemconsulting.com
ADMIN_PASSWORD=ReemConsulting2024!
BACKOFFICE_SECRET=reem-consulting-secret-key-2024
```

### Change Admin Credentials
Edit `/app/api/auth/login/route.ts` and update:
```typescript
const ADMIN_EMAIL = process.env.ADMIN_EMAIL || 'admin@reemconsulting.com'
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'ReemConsulting2024!'
```

## Security Features

- **HTTP-only Cookies**: Authentication tokens stored securely
- **JWT Tokens**: Signed tokens with 30-day expiration
- **Protected Endpoints**: Backoffice API routes verify authentication
- **Visitor Tracking**: Anonymous, non-intrusive tracking

## Database Files Location

The data is automatically stored in:
- Local development: `./.data/bookings.json` and `./.data/visitors.json`
- Production: Same location within your Vercel deployment

## Accessing the Backoffice

1. Navigate to `/backoffice/login`
2. Enter admin credentials
3. Access dashboard at `/backoffice`
4. View and manage reservations and visitor analytics

## Data Backup

Since JSON files are used, you can:
- Download `.data/bookings.json` for reservation backups
- Download `.data/visitors.json` for analytics backups
- Import data into your preferred database system

## Future Enhancements

- Email notifications for new bookings
- Booking status update workflow
- Advanced analytics with date ranges
- Export data as CSV/PDF
- User role management
- Database migration to PostgreSQL/MongoDB

## Troubleshooting

### Login fails
- Verify credentials in environment variables
- Check that `.data/` directory exists
- Clear browser cookies and try again

### No visitor data showing
- Verify VisitorTracker component is loaded on homepage
- Check browser console for errors
- Ensure `/api/visitors` POST endpoint is accessible

### Bookings not saving
- Verify `/api/bookings` endpoint is working
- Check that `.data/` directory has write permissions
- Review server logs for errors
