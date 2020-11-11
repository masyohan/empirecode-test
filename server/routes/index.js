const router = require("express").Router();
const userRoutes = require("./user");

router.use("/", userRoutes);
router.get("/", (req, res) => {
  res.status(200).json({
    message: "API EmpireCode test yohan ",
  });
});

module.exports = router;
