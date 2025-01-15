const mongoose=require("mongoose")

const dbConnect=async ()=>
    {
try
{
    await mongoose.connect("mongodb+srv://anishmavs311:AnishmaVs2002@cluster0.jdk6p.mongodb.net/")
    }
catch(error)
{
console.log("An error occured",error.message);
}
}

dbConnect()