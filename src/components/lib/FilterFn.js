import { getUniqueArray } from './ArrayUniqueValues';

/**
 * @param {Array} products array
 * @param {Object} inputs Object of selected attributes
 * @returns Array of matching products with All filtered options
 */
export const getFilteredProducts = (products, inputs) => {
  const selectedAttributes = {};
  Object.keys(inputs).filter((k) =>
    inputs[k] !== '' ? (selectedAttributes[k] = inputs[k]) : null
  );

  let filteredProducts = [];
  let result = [];
  products.map((p) => {
    p.attributes.map((at, i) => {
      const AttributeNameWithoutSpace = removeSpaces(at.name);
      Object.keys(selectedAttributes).includes(AttributeNameWithoutSpace) &&
        at.items.filter((item) => {
          if (
            item.value === selectedAttributes[AttributeNameWithoutSpace] ||
            item.value.toLowerCase() === 'yes'
          )
            filteredProducts.push(p);
        });
    });
  });
  filteredProducts.map((f) => {
    const allAttributesNames = [];
    f.attributes.map((at) => allAttributesNames.push(removeSpaces(at.name)));
    const check = Object.keys(selectedAttributes).every((e) =>
      allAttributesNames.includes(e)
    );
    if (check) result.push(f);
  });
  return getUniqueArray(result);
};

function removeSpaces(input) {
  return input.split(' ').join('_');
}

function addSpaces(input) {
  return input.split('_').join(' ');
}
