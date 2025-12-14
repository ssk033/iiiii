const express = require("express");
const app = express();

app.use(express.urlencoded({extended: true}));

app.get("/",(req,res)=>{
    res.sendFile(__dirname +"/index.html");
});

app.post("/count",(req,res)=>{
    const text = req.body.text.toLowerCase();
    let count = {a:0,i:0,e:0,o:0,u:0};

    for(let ch of text){
        if(count.hasOwnProperty(ch)){
            count[ch]++;
        }
    }

    res.send(`
        <h2>Vowel Count</h2>
        a:${count.a}<br>
        e:${count.e}<br>
        i:${count.i}<br>
        o:${count.o}<br>
        u:${count.u}<br>    
        <br> <a href='/'>Go Back</a>
        `);
});

app.listen(3000, () => {
  console.log("Server running on 3000");
});

