import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import jwt from 'jsonwebtoken';
import { cookies } from 'next/headers'; // For Next.js 13+ App Router

const secretKey = "4028390d7f644efc904d598bc8bd9f82e3aeb96bae3eb4f88a926b0ffe4d1b5f";
// const secretKey = process.env.JWT_SECRET || 'your-secret-key';


export function middleware(req: NextRequest) {
    const token = cookies().get('token')?.value; // Ensure it's a string

  if (!token) {
    // If no token, redirect to the login page
    return NextResponse.redirect(new URL('/login', req.url));
  }

  try {
    // Verify the token (Replace 'your-secret-key' with your actual secret)
   jwt.verify(token, secretKey);
    return NextResponse.next(); // Allow access if token is valid
  } catch (err) {
    // If token is invalid or expired, redirect to login
    return NextResponse.redirect(new URL('/login', req.url));
  }
}

export const config = {
  matcher: ['/checkout', '/profile'], // Add paths that require authentication
};
