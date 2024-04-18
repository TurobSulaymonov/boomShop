import {Router} from 'express';
const router = Router();
router.get("/login", (req, res) => {
    //res.sendFile(path.join(__dirname, "views", "about.html"));
    res.render("login")
});
router.get("/register", (req, res) => {
    //res.sendFile(path.join(__dirname, "views", "about.html"));
    res.render("register")
});

export default router;
