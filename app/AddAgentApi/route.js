import { NextResponse } from "next/server";
import EmployeeDataModel from "@/src/agentEmployeeSchema";
import { dbConnect } from "@/src/dbConnect";

export async function POST(request) {
    const formData = await request.json();
    console.log("inside post api")
    try {
        console.log("inside post api try")
        await dbConnect(); // Connect to the database
        const newFormData = new EmployeeDataModel(formData);
        await newFormData.save(); // Wait for data to be saved
        console.log("inside post func after")
        console.log('Data saved successfully');
        return new NextResponse() 
    } catch (error) {
        console.error('Error saving data:', error);
        console.log(error)
        return new NextResponse(JSON.stringify({message: 'Error'}))        
    }
  }


