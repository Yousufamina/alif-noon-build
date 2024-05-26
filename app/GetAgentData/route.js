// import { NextApiRequest, NextApiResponse } from "next";
import EmployeeDataModel from "@/src/agentEmployeeSchema";
import { dbConnect } from "@/src/dbConnect";

export async function GET() {
    await dbConnect(); // Connect to the database
    const data=await EmployeeDataModel.find();
    return Response.json({ data });
}