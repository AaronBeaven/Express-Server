const express = require('express')
const app = express();
app.get('/',(req, res) =>{
    console.log(__dirname);
    
    res.sendFile(__dirname + '/index.html')
} )
app.get('/about',(req, res) =>{
    res.sendFile(__dirname + '/about.html')
} )
app.get('/contact',(req, res) =>{
    res.sendFile(__dirname + '/contact.html')
} )

app.listen(3004, ()=>{
    console.log('server is running on port 3004')

    
})