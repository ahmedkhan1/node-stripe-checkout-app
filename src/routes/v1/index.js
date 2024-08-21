const express = require('express');
const StripeRoute = require('./stripe.routes');
const router = express.Router();

const defaultRoutes = [
  {
    path: 'payment',
    route: StripeRoute,
    public: false,
  },
];

defaultRoutes.forEach((route) => {
  router.use(`/v1/api/${route.path}`, route.route);
});


module.exports = router;