import Express  from "express";
import dotenv from "dotenv";
import cors from "cors";
import conectarDB from "./config/db.js"

dotenv.config();  //Para trabajar con las variables de entorno

const PORT = process.env.PORT || 3000; 

const app = Express();
//Para trabajar con documento json 
app.use(Express.json());

conectarDB();

//Middleware
app.use('/', (req, res)=> {
    res.send("Hola Mundo ExpressJS")
});

app.listen (PORT, () => {
    console.log(`Servidor encendido en el puerto numero ${PORT}`);

});