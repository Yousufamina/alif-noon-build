import { NextResponse } from "next/server"

export function middleware(request){
    const allowedOrigins = ['https://alifnoon.ae','https://www.alifnoon.ae','https://www.google.com','http://localhost:3000']
    const origin = request.headers.get('origin')
    if (allowedOrigins.includes(origin)) {
        return NextResponse.next();
      } else {
        console.log("called 403")
        // return new NextResponse('Forbidden', 403);
      }
  
}

export const config = {
    matcher : '/:path*'
}