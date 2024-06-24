import { NextResponse } from "next/server"

export function middleware(request){
    const allowedOrigins = ['https://alifnoon.ae','https://www.alifnoon.ae','https://www.google.com','http://localhost:3000']
  
    console.log("middleware")
    // console.log(request.method)  
    // console.log(request.url)
    const origin = request.headers.get('origin')
    console.log("origin")
    console.log(origin)
    if(origin && !allowedOrigins.includes(origin) ){
        console.log("Called")
        return new NextResponse(null , {
            status : 400 , 
            statusText: "Bad Request",
            headers :{
                'Content-Type' : 'text/plain'
            }
        } )
    }
    return NextResponse.next()
  
   
 
}


export const config = {
    matcher : '/:path*'
}