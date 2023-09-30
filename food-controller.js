const business = require("./food-business");


const getFoods = async (req, h) => {
  const result = await business.find();

  return h.response(result).code(200);
};

const create = async (req, h) => {
  const result = await business.create(req.payload);

  return h.response(result).code(201);
};


module.exports = { getFoods, create };
