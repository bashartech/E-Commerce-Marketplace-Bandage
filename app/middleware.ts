// import { NextResponse } from 'next/server';
// import type { NextRequest } from 'next/server';
// import jwt from 'jsonwebtoken';
// import { cookies } from 'next/headers'; // For Next.js 13+ App Router

// // const secretKey = "4028390d7f644efc904d598bc8bd9f82e3aeb96bae3eb4f88a926b0ffe4d1b5f";
// // const secretKey = process.env.JWT_SECRET || "4028390d7f644efc904d598bc8bd9f82e3aeb96bae3eb4f88a926b0ffe4d1b5f" ;

// if (!process.env.JWT_SECRET) {
//   throw new Error("JWT_SECRET is not set in environment variables");
// }
// const secretKey = process.env.JWT_SECRET;

// export function middleware(req: NextRequest) {
//     const token = cookies().get('token')?.value // Ensure it's a string

//     // const isAuthenticated = token?.value === "true"
//     const {pathname} = req.nextUrl

//     if(!token && pathname !== "/register"){
//       return NextResponse.redirect(new URL("/register", req.url))
//     }
//     // if(token && pathname !== "/register"){
//     //   return NextResponse.redirect(new URL("/", req.url))
//     // }


//   // if (!token) {
//   //   // If no token, redirect to the login page
//   //   return NextResponse.redirect(new URL('/login', req.url));
//   // }

//   try {
//     if (!token) {
//       throw new Error("No token provided");
//     }
//    jwt.verify(token as string, secretKey);
//     return NextResponse.next(); // Allow access if token is valid
//   } catch (err) {
//     // If token is invalid or expired, redirect to login
//     return NextResponse.redirect(new URL('/register', req.url));
//   }
// }

// export const config = {
//   matcher: ['/register', '/'], // Add paths that require authentication
// };

import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import jwt from 'jsonwebtoken';
// import { cookies } from 'next/headers'; // For Next.js 13+ App Router

if (!process.env.JWT_SECRET) {
  throw new Error("JWT_SECRET is not set in environment variables");
}
const secretKey = process.env.JWT_SECRET;

export function middleware(req: NextRequest) {
  const token = req.cookies.get('authToken')?.value; // Changed from 'token' to 'authToken'
  const { pathname } = req.nextUrl;

  if (!token && pathname !== "/register") {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  if (token) {
    try {
      jwt.verify(token, secretKey);
      if (pathname === "/register") {
        return NextResponse.redirect(new URL("/", req.url));
      }
    } catch (err) {
      // If token is invalid, clear it and redirect to login
      const response = NextResponse.redirect(new URL('/register', req.url));
      response.cookies.delete('authToken');
      return response;
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/register', '/'], // Add paths that require authentication
};