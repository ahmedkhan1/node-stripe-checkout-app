const Joi = require('joi');

const checkout = {
  body: Joi.object().keys({
    product: Joi.object().keys({
      id: Joi.string().required().min(3),
      quantity: Joi.number().required().greater(0),
    }).required(),
  }),
};


module.exports = {
  checkout
};