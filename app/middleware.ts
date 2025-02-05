


// import { NextResponse } from 'next/server';
// import type { NextRequest } from 'next/server';
// import jwt from 'jsonwebtoken';
// // import { cookies } from 'next/headers'; // For Next.js 13+ App Router

// if (!process.env.JWT_SECRET) {
//   throw new Error("JWT_SECRET is not set in environment variables");
// }
// const secretKey = process.env.JWT_SECRET;

// export function middleware(req: NextRequest) {
//   const token = req.cookies.get('authToken')?.value; // Changed from 'token' to 'authToken'
//   const { pathname } = req.nextUrl;

//   if (!token && pathname !== "/register") {
//     return NextResponse.redirect(new URL("/login", req.url));
//   }

//   if (token) {
//     try {
//       jwt.verify(token, secretKey);
//       if (pathname === "/register") {
//         return NextResponse.redirect(new URL("/", req.url));
//       }
//     } catch (err) {
//       // If token is invalid, clear it and redirect to login
//       const response = NextResponse.redirect(new URL('/register', req.url));
//       response.cookies.delete('authToken');
//       return response;
//     }
//   }

//   return NextResponse.next();
// }

// export const config = {
//   matcher: ['/register', '/'], // Add paths that require authentication
// };



import { clerkMiddleware } from "@clerk/nextjs/server";

export default clerkMiddleware();

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
};