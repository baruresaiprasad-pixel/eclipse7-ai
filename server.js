const express = require("express");
const cors = require("cors");
const fetch = require("node-fetch");

const app = express();

app.use(cors());
app.use(express.json());

app.post("/", async (req, res) => {

    const message = req.body.message;

    try {

        const response = await fetch("https://api.openai.com/v1/chat/completions", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer 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"
            },
            body: JSON.stringify({
                model: "gpt-4o-mini",
                messages: [
                    {
                        role: "system",
                        content: "You are Eclipse7 AI, a smart study assistant."
                    },
                    {
                        role: "user",
                        content: message
                    }
                ]
            })
        });

        const data = await response.json();

        res.json({
            reply: data.choices[0].message.content
        });

    } catch (error) {

        res.json({
            reply: "Server Error"
        });

    }

});

app.listen(3000, () => {
    console.log("Server running");
});
