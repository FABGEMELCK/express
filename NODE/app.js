const express = require('express');
const app = express();
const path = require('path');

const port = 8080;
      form = require('fs').readFileSync('./public/htmlcheckOut.html');
      querystring = require ('querystring');
      util = require ('util');
      dataString = '';
app.post('/htmlcheckOut.html',function ServerExpress (req,res)
{
  if(req.method == 'GET')
  {
    res.writeHead(200,{'Content-Type': 'text/html'})
    res.end(form)
  }
  if (req.method == 'POST')
  {
    req
       .on('data', function (data){
         dataString += data
       })
       .on('end', function (){
         var dataObject = querystring.parse(dataString),
             dataJSON = util.inspect(dataObject)
             templeteString = `
Los datos enviados por post son : ${dataString}  
Los datos envidos por post son : ${dataObject}
Los datos enviados por post son : ${dataJSON}`
          console.log(templeteString)
          res.end(templeteString)
      })
      
  }

});  

ServerExpress();

//Motor de plantillas
app.set('view', 'ejs');

//Routes

app.post('/htmlcheckOut.html',(req,res) => {
  res.sendFile('../public/htmlcheckOut.html')
});

app.use(express.static(__dirname + "/public"));
/*app.get('/', (req,res) => {
  res.render(__dirname + "/panbastardo.ejs");
});*/

app.use((req,res,next) => {
    res.status(404).sendFile(__dirname + "/public/404.html");
});


//Listen Server
app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
});