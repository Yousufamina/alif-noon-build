import { NextResponse } from "next/server";
import FormDataModel from "@/src/propertySchema";
import { dbConnect } from "@/src/dbConnect";

export async function POST(request) {
    const formData = await request.json();
    try {
        await dbConnect(); // Connect to the database
        const newFormData = new FormDataModel(formData);
        await newFormData.save(); // Wait for data to be saved
        return new NextResponse() 
    } catch (error) {
        console.error('Error saving data:', error);
        return new NextResponse(JSON.stringify({message: 'Error'}))        
    }
  }


