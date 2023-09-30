const foodInMemory = [];


const create = async (food) => {
  const id = Math.floor(Math.random() * 9999);
  food.id = id;
  foodInMemory.push(food);
};

const find = async (filter) => {
  foodInMemory;
};


module.exports = { create, find };
