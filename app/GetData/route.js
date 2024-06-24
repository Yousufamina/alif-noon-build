// import { NextApiRequest, NextApiResponse } from "next";
import FormDataModel from "@/src/propertySchema";
import { dbConnect } from "@/src/dbConnect";

export async function GET(request) {
    let name = request.nextUrl.searchParams.get("name");
    await dbConnect(); // Connect to the database
    if(name){
        const data = await FormDataModel.find({name: {'$regex' : `${name }`, '$options' : 'i'}}) 
        return Response.json({ data });
    }else{
        const data=await FormDataModel.find();
        return Response.json({ data });
    }
}