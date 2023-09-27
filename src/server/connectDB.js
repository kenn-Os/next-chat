"use server"

import { connect } from "mongoose";


const connectionString = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@next-chat.gmacqvi.mongodb.net/?retryWrites=true&w=majority&appName=AtlasApp`;

export async function connectDB(params){
    try {
        await connect(connectionString);
        console.log("connected to database successfully")
    } catch (error) {
        console.log("unable to connect database")
    }
}