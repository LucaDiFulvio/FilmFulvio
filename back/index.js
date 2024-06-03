const app = require ("./src/server");
const dbCon= require("./src/config/dbCon");

dbCon().then((res)=>{
    app.listen(3000, ()=>{
        console.log("estamos escuchando en el puerto 3000");
    });
})
.catch(err=>{
    console.log("error con la conexion con BDD")
})
