const controller = require("./food-controller");
const Joi = require("joi");


const routes = [
  {
    method: "GET",
    path: "/foods",
    handler: controller.getFoods,
  },
  {
    method: "POST",
    path: "/foods",
    options: {
      handler: controller.create,
      validate: {
        payload: Joi.object({
          description: Joi.string().min(3).max(50).required(),
          value: Joi.number().precision(2).required(),
          category: Joi.string().required(),
          quantity: Joi.number().required(),
        })
      }
    }
  },
];


module.exports = routes;
