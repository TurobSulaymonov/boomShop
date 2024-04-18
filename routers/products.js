import {Router} from 'express';
const router = Router();
router.get("/", (req, res) => {
    res.render("index",{
        title: `BoomShop | Turob`
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
  export default router;