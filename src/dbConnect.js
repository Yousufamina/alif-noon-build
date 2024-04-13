import mongoose from "mongoose";

global.mongoose={
  conn: null,
  promise: null
}

export async function dbConnect(){
  if(global.mongoose && global.mongoose.conn){
    console.log('Connected from previous');
    return global.mongoose.conn;
  }
  else{
    // const conString=process.env.MONGO_URL;
    const conString ="mongodb+srv://alifnoon:b4X5mKL8aHCSPamT@aleef-noon-db.tuk3t0l.mongodb.net/"
    const promise = mongoose.connect(conString, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        autoIndex: true,
    });

    global.mongoose={
        conn: await promise,
        promise
    };
    console.log("New connection successfull");
    return await promise;
}
}