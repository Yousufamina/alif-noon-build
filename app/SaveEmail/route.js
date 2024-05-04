import { NextResponse } from "next/server";
import SubscribeDataModel from "@/src/subscribeUserSchema";
import { dbConnect } from "@/src/dbConnect";

export async function POST(request) {
    const formData = await request.json();
    console.log("inside post func ")
    try {
        console.log("inside post func try")
        await dbConnect(); // Connect to the database
        const newFormData = new SubscribeDataModel(formData);
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


