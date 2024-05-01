// import { NextApiRequest, NextApiResponse } from "next";
import FormDataModel from "@/src/propertySchema";
import { dbConnect } from "@/src/dbConnect";

export async function GET() {
    await dbConnect(); // Connect to the database
    const data=await FormDataModel.find();
    return Response.json({ data });
}