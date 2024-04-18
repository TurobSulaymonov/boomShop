import {Router} from 'express';
const router = Router();
router.get("/", (req, res) => {
    res.render("index");
  });
  
  router.get("/products", (req, res) => {
      //res.sendFile(path.join(__dirname, "views", "about.html"));
      res.render("products")
  });
  router.get("/add", (req, res) => {
      //res.sendFile(path.join(__dirname, "views", "about.html"));
      res.render("add")
  });
  export default router;