const http = require("http");

http
  .createServer((req, res) => {
    console.log(req);

    // res.writeHead(200, { "Content-Type": "application/json" });
    // res.setHeader("Content-Disposition", "attachment; filename=lista.csv");
    // res.writeHead(200, { "Content-Type": "application/csv" });

    // const persona = {
    //   id: 1,
    //   nombre: "Terry",
    // };

    res.write("Hola Mundo");

    res.end();
  })
  .listen(8085);

console.log("Escuchando el puerto", 8085);
