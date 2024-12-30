import {Router} from 'express';
const router = Router();
router.get("/login", (req, res) => {
    //res.sendFile(path.join(__dirname, "views", "about.html"));
    res.render("login" ,{
        title: `Login | Turob`
    })
});
router.get("/register", (req, res) => {
    //res.sendFile(path.join(__dirname, "views", "about.html"));
    res.render("register",{
        title: `Register | Turob`
    })
});
router.post("/login", (req, res) => {

   // console.log(req.body)
    res.redirect("/" )
});

router.post("/register", (req, res) => {
    //res.sendFile(path.join(__dirname, "views", "about.html"));
    console.log(req.body)
    res.redirect("/" )
});

export default router;
