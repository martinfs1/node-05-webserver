const http = require("http");

http.createServer((req, res) => {  
  //    res.writeHead(200, {'Content-Type': 'application/json'});
  //    const user = {
    //        id: 123,
    //        name: 'fernando'
    //    }
    //    res.write(JSON.stringify(user));
    
    res.setHeader( "Content-Disposition", "attachment; filename=usuarios.csv");
    res.writeHead(200, { "Content-Type": "application/csv" });
    res.write("id,name\n123,Fernando\n456,Laureano");
    console.log(req)

    res.end();
  })
  .listen(4500);
