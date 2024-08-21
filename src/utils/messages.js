// message.js

const MESSAGES = {
    success:{
        payment: "",
    },
    error: {
        payment: "",
        productNotFound: "Not product found against the Id provided.",
        checkoutError: "Error creating Stripe Checkout Session.",
    },
    validation: {},
};

module.exports = MESSAGES;
  