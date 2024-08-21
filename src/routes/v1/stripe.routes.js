const express = require("express");
const controller = require("../../controllers/Stripe/Stripe.controller");
const validate = require("../../middleware/validate");
const { stripe } = require("../../validations");

const router = express.Router();

router.post("/create-checkout-session", validate(stripe.checkout), controller.initCheckout);
router.post("/webhook", express.raw({type: 'application/json'}), controller.getWebhook);

module.exports = router;