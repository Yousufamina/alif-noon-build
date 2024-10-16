import { NextResponse } from "next/server";
import FormDataModel from "@/src/propertySchema";
import { dbConnect } from "@/src/dbConnect";
import multer from 'multer';

const upload = multer({
  limits: {
    fileSize: 50 * 1024 * 1024, // 50mb
  }
});

export const config = {
  api: {
    bodyParser: false, // Disable default body parser
  },
};

const handler = upload.array('image'); // Specify the field name for the image

export async function POST(request,res) {
    const formData = await request.json();
    try {
        console.log("called api")
        handler(request, res, (err) => {
            if (err) {
                console.log(err)
                console.log("error called")
              return res.status(500).json({ message: 'File upload failed' });
            }
        })
        console.log("called handler after")

        await dbConnect(); // Connect to the database
        const newFormData = new FormDataModel(formData);
         console.log("called form data save")
        await newFormData.save(); // Wait for data to be saved
        return new NextResponse() 
       
    } catch (error) {
        console.error('Error saving data:', error);
        return new NextResponse(JSON.stringify({message: 'Error'}))        
    }
  }


