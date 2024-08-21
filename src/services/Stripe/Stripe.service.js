// services/Stripe.service.js

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY); 

const StripeService = {
  createCheckoutSession: async function(product) {
    try {
      return await stripe.checkout.sessions.create({
        mode: "payment",
        line_items: [
          {
            price_data: {
              currency: "usd",
              product_data: {
                name: product.name, 
              },
              unit_amount: product.price* 100,
            },
            quantity: product.quantity,
          },
        ],
        success_url: "http://localhost:3000/success",
        cancel_url: "http://localhost:3000/cancel",
      })

    } catch (error) {
      console.log(error);
      throw new Error(`${error.message}`);
    }
  },
  constructEvent: async function(body, sig) {
    return await stripe.webhooks.constructEvent(body, sig, process.env.WEBHOOK_ENDPOINT_SECRET);
  }
};

module.exports = StripeService;