import { Router } from "express";
const router = Router();

router.post("/registration", async (req, res) => {
	const { full_name, email, password, phone, driver_license } = req.body;

	if (!full_name || !email || !password || !phone || !driver_license) {
		return res.status(400).send("Invalid data");
	}

	await User.createInstance({
		id_role: 1,
		full_name,
		email,
		password,
		phone,
		driver_license,
	});

	res.redirect("/");
});
router.post("/login", async (req, res) => {
    	const { email, password } = req.body;
	const data = await User.checkUser(email, password);
	console.log(data);

	if (data.user_exists) {
		return res.redirect("/admin");
	}

	if (!data.user_exists) {
		res.status(401).send("Неправильный email или пароль");
	}
});

export default router;