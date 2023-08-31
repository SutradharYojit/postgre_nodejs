const http = require('http')
const port=3000;
const app=require('./server')
const server=http.createServer(app);


  
server.listen(port,()=>{
    console.log('Server is running')
});



