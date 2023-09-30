const foodsInMemory = [];


const getFoods = async (req, h) => {
  return h.response(foodsInMemory).code(200);
};

const create = async (req, h) => {
  foodsInMemory.push(req.payload);
  console.log(req.payload);
  return h.response(req.payload).code(201);
};


module.exports = { getFoods, create };
