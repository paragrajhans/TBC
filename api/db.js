const faker = require('faker');
const constants = require('./apiConstants');
const utils = require('./utils');

let generateProductImages = num => {
  let images = [];

  for (let i = 0; i < num; i++) {
    let url = 'http://lorempixel.com/440/440/nature/',
      option = faker.random.arrayElement(constants.SIZE_OPTIONS);

    images.push({
      url: url,
      option: option,
    });
  }

  return images;
};

let generateManufacturers = () => {
  let manufacturers = [];

  for (let i = 0; i < 10; i++) {
    let name = faker.name.firstName(),
      location = faker.address.country(),
      type = faker.random.arrayElement(constants.MANUFACTURER_TYPE_OPTIONS),
      id = faker.random.alphaNumeric(10);

    manufacturers.push({
      name: name,
      location: location,
      type: type,
      id: id,
    });
  }

  return manufacturers;
};

let generateVariants = () => {
  const count = faker.random.number({ min: 1, max: 3 });
  let variants = [];

  for (let i = 0; i < count; i++) {
    let id = faker.random.alphaNumeric(10),
      discountable = faker.random.boolean(),
      name = constants.SIZE_OPTIONS[i],
      size_description = faker.lorem.lines(1),
      sku = faker.random.number(),
      regular_price = faker.commerce.price(),
      sale_price = faker.random.boolean()
        ? regular_price - regular_price * 0.15
        : null,
      prices = {
        regular: regular_price,
        sale: sale_price,
      };

    variants.push({
      id: id,
      name: name,
      size_description: size_description,
      sku: sku,
      prices: prices,
    });
  }

  return variants;
};

let generateProducts = (
  category = null,
  category_type = null,
  category_path = null
) => {
  const count = faker.random.number({ min: 1, max: 20 });
  let manufacturers = generateManufacturers(),
    products = [];

  for (let i = 0; i < count; i++) {
    let id = faker.random.alphaNumeric(10),
      active = faker.random.boolean(),
      description = faker.lorem.paragraph(),
      florist_product = faker.random.boolean(),
      image_alt_tags = faker.lorem.sentence(),
      images = generateProductImages(faker.random.number({ min: 1, max: 6 })),
      manufacturer = faker.random.arrayElement(manufacturers),
      name = faker.commerce.productName(),
      purchasable = faker.random.boolean(),
      short_description = faker.lorem.sentences(2),
      slug = faker.helpers.slugify(name).toLowerCase(),
      variants = generateVariants(),
      path = `${category_path}/${slug}`;

    products.push({
      id: id,
      active: active,
      category_type: category_type,
      category: category,
      description: description,
      image_alt_tags: image_alt_tags,
      images: images,
      manufacturer: manufacturer,
      name: name,
      path: path,
      purchasable: purchasable,
      short_description: short_description,
      slug: slug,
      variants: variants,
    });
  }

  return products;
};

let generateCategories = () => {
  let categories = [];

  for (let i = 0; i < constants.CATEGORY_NAMES.length; i++) {
    let id = faker.random.alphaNumeric(24),
      category_type = constants.CATEGORY_TYPE_OPTIONS[0],
      name = constants.CATEGORY_NAMES[i],
      slug = faker.helpers.slugify(name).toLowerCase(),
      path = utils.generateCategoryPath(name),
      products = generateProducts(name, category_type, path);

    categories.push({
      id: id,
      category_type: category_type,
      name: name,
      slug: slug,
      path: path,
      products: products,
    });
  }

  return { categories };
};

module.exports = generateCategories;
