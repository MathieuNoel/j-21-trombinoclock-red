// on récupére express 
const express = require("express");

// on récupére les controllers
const mainController = require("./controllers/mainController");
const promoController = require("./controllers/promoController");
const studentController = require("./controllers/studentController");

// on crée un nouveau router
const router = express.Router();

// on définis les différentes routes
router.get("/", mainController.getHomePage);
router.get("/promos", promoController.getPromosList);
router.get("/promo/:id", promoController.getPromoDetails);
router.get("/promo/:id/students", studentController.getStudentsByPromo)

// on exporte le routeur
module.exports = router;
