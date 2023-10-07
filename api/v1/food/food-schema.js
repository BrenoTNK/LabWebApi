const Joi = require("joi");


const postFood = {
  payload: Joi.object({
    description: Joi.string().min(3).max(50).required(),
    value: Joi.number().precision(2).required(),
    category: Joi.string().required(),
    quantity: Joi.number().required(),
  }).required()
};


module.exports = { postFood };
