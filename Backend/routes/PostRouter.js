const express = require("express");
const router = express.Router();
const Post_Controller = require("../controllers/Post_Controller");


router.get("/index", Post_Controller.index);
router.post("/store", Post_Controller.store);
router.get("/show/:id", Post_Controller.show);
router.put("/edit/:id", Post_Controller.edit);
router.delete("/delete/:id", Post_Controller.delete);

module.exports = router;