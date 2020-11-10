const router = require("express").Router();
const UserController = require("../controllers/UserController");

router.post("/signup", UserController.signup);
router.post("/login", UserController.login);

module.exports = router;
