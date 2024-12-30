import {Router} from 'express';
import User from '../models/Users.js';
import bcrypt from 'bcrypt'


const router = Router();
router.get("/login", (req, res) => {
    res.render("login" ,{
        title: `Login | Turob`
    })
});
router.get("/register", (req, res) => {
  res.render("register",{
        title: `Register | Turob`
    })
});


router.post("/login", async (req, res) => {
    const {email, password} = req.body

	if (!email || !password) {
		req.flash('loginError', 'All fields is required')
		res.redirect('/login')
		return
	}

	const existUser = await User.findOne({email})
	if (!existUser) {
		req.flash('loginError', 'User not found')
		res.redirect('/login')
		return
	}

	const isPassEqual = await bcrypt.compare(password, existUser.password)
	if (!isPassEqual) {
		req.flash('loginError', 'Password wrong')
		res.redirect('/login')
		return
	}

	
	res.redirect('/')
});

router.post("/register", async (req, res) => {
    const hashedPassword = await bcrypt.hash(req.body.password, 10)
    const userData = {
        firstName: req.body.firstname,
        lastName: req.body.lastname,
        email: req.body.email,
        password: hashedPassword,
    }
   const user = await User.create(userData);
    console.log(req.body)
    res.redirect("/" )
});

export default router;
