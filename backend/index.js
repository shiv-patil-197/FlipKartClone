let express=require("express");
let connectdb=require("./db/connectdb")
let cors=require("cors");
let app=express();
app.use(cors());
app.use(express.json());
require("dotenv").config();
let userRoutes=require("./Routes/users.routes")

app.use(userRoutes)
app.use("*",(req,res)=>{
    res.status(400).json({error:true, message:"Page not found"})
})
app.use((err,req,res,next)=>{
  console.log(err);
  res.status(err.status || 500).json({ error: true, message: err.message || "Internal server error" });
    // res.json({error:true, message:err.message})
    next(err)
})

const connectServer=async ()=>{
  try{
  await connectdb(process.env.PORT)
  console.log("db connected successfully");

  app.listen(5500,()=>{
    console.log("server is running at port:http://localhost:5500")
  })
  }
  catch(error){
    console.log(error);
  }
}
connectServer()
