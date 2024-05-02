import { NextApiRequest, NextApiResponse } from "next";
import FormDataModel from "@/src/propertySchema";
import { dbConnect } from "@/src/dbConnect";

export async function POST(request) {
  const formData = await request.json();

  try {
      await dbConnect(); // Connect to the database
      const data = await FormDataModel.findOne(formData);
      return Response.json({ data })
  } catch (error) {
      return null
  }  
}