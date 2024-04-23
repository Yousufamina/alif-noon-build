import { NextResponse } from "next/server";
import AdminDataModel from "@/src/adminUserSchema";
import { dbConnect } from "@/src/dbConnect";

// export async function GET(req) {
//     // await dbConnect(); // Connect to the database
//     // await dbConneZct(); // Connect to the database
//     console.log(req)
//     console.log(req.query)
//     console.log("req")
//     const data = await AdminDataModel.find();
//     return Response.json({ data });
// }
export async function POST(request) {
    // console.log("request")
    // console.log(request)
    const formData = await request.json();
    console.log("inside post func ")
    console.log(formData)
    try {
        console.log("inside post func try")
        await dbConnect(); // Connect to the database
        const data = await AdminDataModel.findOne({username:formData.username});
        console.log("before data")
        console.log(data)
        // return new NextResponse({data});
        return Response.json({ data });
    } catch (error) {
        console.error('Error saving data:', error);
        console.log(error)
        // return new NextResponse(JSON.stringify({message: 'Error'})) 
    }
    
  }