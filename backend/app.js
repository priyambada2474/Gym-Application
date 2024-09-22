import express from "express";
import {config} from "dotenv";
import cors from "cors";
import {sendEmail} from "./utils/sendEmail.js";
const app= express();
const router=express.Router();
config({path:"./config.env"});

app.use(cors({
    origin:[process.env.FRONTEND_URL],
    methods:["POST"],
    credentials:true
}))
app.use(express.json());
app.use(express.urlencoded({extended:true}));
router.get("/",(req,res,next)=>{
    res.json({success:true,
        message:"HABIBI COME TO DUBAI"
    })
})

app.use(router);
router.post("/send/mail",async (req,res,next)=>{
    const {name, email, message }= req.body;
    if(!name || !email ||!message){
        return next(
            res.status(400).json({
                success:false,
                message:"please provide all details",
            })
        );
    }
    try{
        await sendEmail({
            email:"priyambadaonkar@gmail.com",
            subject:" GYM WEBSITE CONTACT",
            message,
            userEmail:email
        });
        res.status(200).json({
            success:true,
            message:"Message sent successfully"
        });
    }
    catch(error){
        res.status(500).json({
            success:false,
            message:"Internal Server Error"
        })
    }
})

app.listen(process.env.PORT,()=>{
    console.log(`Server Listening At PORT ${process.env.PORT}`);
})