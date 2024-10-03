import { NextResponse } from "next/server";
import EmployeeDataModel from "@/src/agentEmployeeSchema";
import { dbConnect } from "@/src/dbConnect";

export async function POST(request) {
    const formData = await request.json();
    try {
        await dbConnect(); // Connect to the database
        const newFormData = new EmployeeDataModel(formData);
        await newFormData.save(); // Wait for data to be saved
        return new NextResponse() 
    } catch (error) {
        console.error('Error saving data:', error);
        return new NextResponse(JSON.stringify({message: 'Error'}))        
    }
  }


