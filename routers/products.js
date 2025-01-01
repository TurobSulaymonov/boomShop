import {Router} from 'express';
import Product from '../models/Products.js';
const router = Router();
router.get("/", (req, res) => {
    res.render("index",{
        title: `BoomShop | Turob`,
        token: true,
    });
  });
  
  router.get("/products", (req, res) => {
      //res.sendFile(path.join(__dirname, "views", "about.html"));
      res.render("products",{
        title: `Products | Turob`,
        isProducts: true,
    })
  });
  router.get("/add", (req, res) => {
      //res.sendFile(path.join(__dirname, "views", "about.html"));
      res.render("add", {
        title: `Add | Turob`
    })
  });

  router.post("/add-products", async (req, res) => {
    const {title, description, image, price} = req.body;
    const products = await Product.create(req.body);
    console.log("products", products);
    res.redirect("/")
  
  })

  
  export default router;