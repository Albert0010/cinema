import { NextRequest, NextResponse } from 'next/server'
import { cookies } from 'next/headers'

const protectedRoutes = ['/admin/rooms']

export default async function middleware(req: NextRequest) {
  const path = req.nextUrl.pathname
  const isProtectedRoute = protectedRoutes.includes(path)

  const cookie = cookies().get('auth')?.value

  if (cookie && path === '/admin') {
    return NextResponse.redirect(new URL('/admin/rooms', req.nextUrl))
  }

  if (isProtectedRoute && !cookie) {
    return NextResponse.redirect(new URL('/admin', req.nextUrl))
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
}
