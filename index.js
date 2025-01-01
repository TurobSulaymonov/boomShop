console.log("Hello World");

import express from "express";
import { create } from "express-handlebars"
import mongoose from "mongoose";
import * as dotenv from "dotenv";
import flash from 'connect-flash';
import session from 'express-session';
import authRouter from "./routers/auth.js";
import productsRouter from "./routers/products.js";

dotenv.config();



const app = express ();
const hbs = create({defaultLayout: "main", extname:"hbs"})

 app.engine("hbs", hbs.engine);
app.set("view engine", "hbs");
app.set("views", "./views");
app.use(express.static("public"));
app.use(express.urlencoded({extended: true}));
app.use(express.json());
//app.use(express.cookieParser("keyboard cat"));
//app.use(express.session({cookie: {maxAge: 60000}}));
app.use(session({secret: "Sammi", resave: false, saveUninitialized: false,}))
app.use(flash());
 


app.use("/", authRouter);
app.use("/", productsRouter);
const startApp = async () => {
    try {
        const PORT = process.env.PORT || 4200 ;
app.listen(PORT, () => console.log("server is running"))
        await mongoose.connect(process.env.MONGODB_URL);
        console.log('MongoDB ga ulanish muvaffaqiyatli!');
    } catch (error) {
        console.error('MongoDBga ulanishda xatolik:', error);
    }
};

startApp();

