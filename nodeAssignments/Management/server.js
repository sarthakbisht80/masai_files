const express = require("express");
const router = express.Router();
const controller = require("./controllers/recipecontroller");

router.get("/", controller.getAll);
router.get("/cuisine/:cuisine", controller.getByCuisine);
router.post("/", controller.createRecipe);
router.put("/price/:id", controller.updatePrice);
router.delete("/:id", controller.deleteRecipe);

module.exports = router;
