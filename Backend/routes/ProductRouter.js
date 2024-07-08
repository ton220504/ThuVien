const express = require("express");
const router = express.Router();
const Product_Controller = require("../controllers/Product_Controller");


router.get("/index", Product_Controller.index);
router.post("/store", Product_Controller.store);
router.get("/show/:id", Product_Controller.show);
router.put("/edit/:id", Product_Controller.edit);
router.delete("/delete/:id", Product_Controller.delete);
router.get("/productdetail/:slug/:limit", Product_Controller.productdetail);


module.exports = router;