const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

app.listen(3000, ()=>{
    console.log('Server is ready and running on port 3000');
});

app.get('/',(req,res)=>{
    res.render('vista.html');
});