import express from "express";
import axios from "axios";
import bodyParser from "body-parser";

const app=express();
const port=3000;
const APIkey="AIzaSyBo6rEXgVnU771QEmR3uTzTZbdAoKmxWcY";
app.use(bodyParser.urlencoded({extended:true}));
app.get("/",(req,res)=>{
    res.render("index.ejs",{title:"no data",channelTitle:"no data",vidID:""});
});

app.post("/",async(req,res)=>{
    const videoID=req.body.videoID;
 const result=await axios.get(`https://www.googleapis.com/youtube/v3/videos?id=${videoID}&part=snippet&key=${APIkey}`);
 //console.log(result.data);
 res.render("index.ejs",{
    title:result.data.items[0].snippet.title,
    channelTitle:result.data.items[0].snippet.channelTitle,
    vidID:videoID,
    

});
 //console.log(result.data.main.temp);
 //res.render("index.ejs",);
});
app.listen(port,()=>{
    console.log(`server at ${port}`);
});