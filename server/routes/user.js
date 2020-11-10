const router = require("express").Router();
const UserController = require("../controllers/UserController");
const { authentication } = require("../middlewares/auth");

router.post("/signup", UserController.signup);
router.post("/login", UserController.login);
router.use(authentication);
router.get("/validate", UserController.validate);

module.exports = router;
