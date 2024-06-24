import { NextResponse } from "next/server";
import AdminDataModel from "@/src/adminUserSchema";
import { dbConnect } from "@/src/dbConnect";

export async function POST(request, res) {

    const formData = await request.json();
    try {
        await dbConnect(); // Connect to the database
        const data = await AdminDataModel.findOne({username:formData.username});
        return NextResponse.json(data);
    
    } catch (error) {
        console.error('Error Getting data:', error);
        return new NextResponse(JSON.stringify({message: 'Error'})) 
    }
  }