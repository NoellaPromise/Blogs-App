const express = require('express')
const app = express();
app.listen(3000);
app.get('/',(req,res)=>{
    res.send('<p>Home page</>');

});
app.get('/about',(req,res)=>{
    res.send('<p>Welcome to the About page</>');

});