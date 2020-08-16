const faker = require('faker');
const constants = require('./apiConstants');

const getRandomArrayElements = (arr, count) => {
  return arr.sort(() => Math.random() - Math.random()).slice(0, count);
};

const generateCategoryPath = (categoryName = null) => {
  const category_type = constants.CATEGORY_TYPE_OPTIONS[0],
    name = categoryName || faker.random.arrayElement(constants.CATEGORY_NAMES),
    slug = faker.helpers.slugify(name).toLowerCase();

  return `/${category_type}/${slug}`;
};

module.exports = { getRandomArrayElements, generateCategoryPath };
