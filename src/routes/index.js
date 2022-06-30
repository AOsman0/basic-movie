const router = require("express").Router();

const apiRoutes = require("./api/index");

router.use("/", apiRoutes);
router.get("/", renderHomePage);

module.exports = router;
