const express = require ("express");
const path = require ("path");

let app = express();

const publicPath = path.resolve (__dirname, '../public');
app.use (express.static (publicPath));

const PORT = process.env.PORT || 3005;

app.listen(PORT, () =>{
    console.log(`Se prendió en el puerto ${PORT}`);
});

app.get ('/', (req,res)=>{
    res.sendFile(path.join(__dirname,'views/home.html'));
});

app.get ('/register', (req,res)=>{
    res.sendFile(path.join(__dirname,'views/register.html'));
});

app.get ('/login', (req,res)=>{
    res.sendFile(path.join(__dirname,'views/login.html'));
});

