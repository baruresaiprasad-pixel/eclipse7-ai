const express = require("express");
const fetch = require("node-fetch");

const app = express();

app.use(express.json());

app.post("/ai", async (req,res)=>{

const message=req.body.message;

const response=await fetch(
"https://api.openai.com/v1/chat/completions",
{
method:"POST",

headers:{
"Content-Type":"application/json",
"Authorization":"Bearer YOUR_API_KEY"
},

body:JSON.stringify({

model:"gpt-4o-mini",

messages:[
{
role:"system",
content:"You are Eclipse7 AI study assistant."
},
{
role:"user",
content:message
}
]

})

});

const data=await response.json();

res.json(data);

});

app.listen(10000,()=>{
console.log("AI Running");
});
