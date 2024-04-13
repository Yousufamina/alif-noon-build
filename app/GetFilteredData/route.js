import { NextApiRequest, NextApiResponse } from "next";
import FormDataModel from "@/src/propertySchema";
import { dbConnect } from "@/src/dbConnect";



export async function POST(request) {
  const formData = await request.json();
  const filter={
    category: formData.propType,
    cities: formData.community,
    propertyType:formData.categories,
    bedrooms: formData.bedrooms
  }
  try {
      await dbConnect(); // Connect to the database
      const data = await FormDataModel.find({"name": "Duplex Heaven"});
      console.log(data);
      return "null";
  } catch (error) {
      return "null";
  }
  
}