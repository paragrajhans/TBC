const CATEGORY_NAMES_CUSTOM = [
  'All',
  'Bouquet Bundles',
  'Popular',
  'Summer',
];
const CATEGORY_NAMES_FLOWER_TYPES = [
  'Callas',
  'Daisies',
  'Lilies',
  'Ranunculus',
  'Roses',
  'Succulents',
  'Sunflowers',
  'Tulips',
];
const CATEGORY_NAMES_OCCASIONS = [
  'Anniversary',
  'Birthday',
  'Congratulations',
  'Sympathy',
  'Thank You',
];
const CATEGORY_NAMES = CATEGORY_NAMES_CUSTOM.concat(
  CATEGORY_NAMES_FLOWER_TYPES,
  CATEGORY_NAMES_OCCASIONS
);
const CATEGORY_TYPE_OPTIONS = ['flowers', 'plants'];
const FLOWER_TYPE_OPTIONS = CATEGORY_NAMES_FLOWER_TYPES.map(v =>
  v.toLowerCase()
);
const COLOR_OPTIONS = [
  'red',
  'orange',
  'yellow',
  'green',
  'pink',
  'white',
  'purple',
  'assorted',
];
const FILTER_OPTIONS = ['occasion', 'color', 'flower type', 'delivery date'];
const OCCASION_OPTIONS = CATEGORY_NAMES_OCCASIONS.map(v => v.toLowerCase());
const SIZE_OPTIONS = ['Original', 'Deluxe', 'Grand'];
const MANUFACTURER_TYPE_OPTIONS = ['Farmer', 'Florist'];

module.exports = {
  CATEGORY_NAMES_CUSTOM,
  CATEGORY_NAMES_FLOWER_TYPES,
  CATEGORY_NAMES_OCCASIONS,
  CATEGORY_NAMES,
  CATEGORY_TYPE_OPTIONS,
  FLOWER_TYPE_OPTIONS,
  COLOR_OPTIONS,
  FILTER_OPTIONS,
  OCCASION_OPTIONS,
  SIZE_OPTIONS,
  MANUFACTURER_TYPE_OPTIONS,
};
