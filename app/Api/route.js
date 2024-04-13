import { NextResponse } from "next/server";
import FormDataModel from "@/src/propertySchema";
import { dbConnect } from "@/src/dbConnect";

// export default async function POST(req,res) {

    // const con = await dbConnect().then(async() => {
    //     try {
    //         const formData= req.body;
    //         console.log("Hasantest", req);
    //         const newFormData = new FormDataModel(formData);
    //         await newFormData.save(); // Wait for data to be saved
    //         console.log('Data saved successfully');
    //         // Send a response indicating success
    //     } catch (error) {
    //         // Handle any errors
    //         console.error('Error saving data:', error);
    //         // Send an error response
    //     }
    // })


// }
export async function POST(request) {
    const formData = await request.json();

    try {
        await dbConnect(); // Connect to the database
        const newFormData = new FormDataModel(formData);
        await newFormData.save(); // Wait for data to be saved

        console.log('Data saved successfully');
        return "null";
    } catch (error) {
        console.error('Error saving data:', error);
        return "null";
    }
    
  }


