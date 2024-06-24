import { NextResponse } from "next/server";
import AdminDataModel from "@/src/adminUserSchema";
import { dbConnect } from "@/src/dbConnect";
import corsMiddleware from "@/cors";
// import Cors from 'cors';

// const cors = Cors({
//     methods: ['GET', 'HEAD', 'POST', 'OPTIONS', 'PUT' , 'DELETE'],
//     // Replace with your domain
//     origin: '*',
//     credentials: true
// })

// // Helper method to wait for middleware to execute before continuing
// function runMiddleware(req, res, fn) {
//     return new Promise((resolve, reject) => {
//         fn(req, res, (result) => {
//             if (result instanceof Error) {
//                 return reject(result)
//             }
//             return resolve(result)
//         })
//     })
// }

export async function POST(request) {

    const formData = await request.json();
    try {
        const origin  = request.headers.get('origin')
        await dbConnect(); // Connect to the database
        const data = await AdminDataModel.findOne({username:formData.username});

        return NextResponse.json(data, {
            headers : {
                 'Access-Control-Allow-Origin' : origin || "*" , 
                 'Content-Type' : 'application/json' , 
            }
        });
    
    } catch (error) {
        console.error('Error saving data:', error);
        return new NextResponse(JSON.stringify({message: 'Error'})) 
    }

  }