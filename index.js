console.log("Hello World");

import express from "express";
import { create } from "express-handlebars"
import authRouter from "./routers/auth.js";
import productsRouter from "./routers/products.js";





const app = express ();
const hbs = create({defaultLayout: "main", extname:"hbs"})

 app.engine("hbs", hbs.engine);
app.set("view engine", "hbs");
app.set("views", "./views");
 


app.use("/", authRouter);
app.use("/", productsRouter);




const PORT = process.env.PORT || 4200 ;
app.listen(PORT, () => console.log("server is running"))