const { commonMethods } = require('../../utils/common');
const StripeService = require('../../services/Stripe/Stripe.service');
const MESSAGES = require('../../utils/messages');
const ProductService = require('../../services/Product/Product.service');

/* -------- STRIPE CONTROLLER -------- */

const initCheckout = async (req, res, next) => {
   try {
      const { product } = req.body;

      // Get Product price from Db by product Id
      const selectedProduct = ProductService.getProductById(product.id);

      if(!selectedProduct){
        commonMethods.handleApiResponse(res, true, {}, MESSAGES.error.checkoutError);
        return;
      }

      // Init checkout session with product details
      const session = await StripeService.createCheckoutSession(selectedProduct);

      if(session?.id) {
        commonMethods.handleApiResponse(res, false, { sessionId: session.id }, "Success");
      } else {
        commonMethods.handleApiResponse(res, true, {}, MESSAGES.error.checkoutError);
      }
   } catch (err) {
      commonMethods.handleApiResponse(res, true, {}, err.message);
   }
};


const getWebhook= async (req, res, next) => {
  const sig = req.headers['stripe-signature'];
  let event;

  try {
    event = await StripeService.constructEvent(req.rawBody, sig);
  } catch (err) {
    commonMethods.handleApiResponse(res, true, {}, `Webhook Error: ${err.message}`);
    return;
  }
 
   // Handle the event
   console.log(`Unhandled event type ${event.type}`);
 
 
  // Handle the event
  switch (event.type) {
    case 'checkout.session.async_payment_failed':
      const checkoutSessionAsyncPaymentFailed = event.data.object;
      // Then define and call a function to handle the event checkout.session.async_payment_failed
      break;
    case 'checkout.session.async_payment_succeeded':
      const checkoutSessionAsyncPaymentSucceeded = event.data.object;
      // Then define and call a function to handle the event checkout.session.async_payment_succeeded
      break;
    case 'checkout.session.completed':
      const checkoutSessionCompleted = event.data.object;
      // Then define and call a function to handle the event checkout.session.completed
      break;
    case 'payment_intent.payment_failed':
      const paymentIntentPaymentFailed = event.data.object;
      // Then define and call a function to handle the event payment_intent.payment_failed
      break;
    case 'payment_intent.succeeded':
      const paymentIntentSucceeded = event.data.object;
      // Then define and call a function to handle the event payment_intent.succeeded
      break;
    // ... handle other event types
    default:
      console.log(`Unhandled event type ${event.type}`);
  }
 
  // Return a 200 res to acknowledge receipt of the event
  res.send();
}

module.exports = {
   initCheckout,
   getWebhook
};
