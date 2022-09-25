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

/**
 * @param {Number} percentage tax percentage
 * @param {Number} amount Total Cart amount value
 * @returns {Number} tax amount.
 */
export function CalculateTax(percentage, amount) {
  return ((amount * percentage) / 100).toFixed(2);
}

/**
 * @param {Array} array
 * @returns Array of unique values.
 */
export const getUniqueArray = (array) => {
  return [...new Set(array)];
};

/**
 * @param {product} Object
 * @returns boolean
 */
export function AddToCartChkr({ attributes, selectedOptions }) {
  // 1- If Product doesn't have attributes to be selected, return true (to be added in Cart)
  if (attributes?.length === 0) return true;
  // 1- selectedOption isn't found to Product Object
  // 2- SelectedOptions is an Empty Array
  // Return False.
  if (selectedOptions === undefined || selectedOptions.length === 0)
    return false;
  // OR
  // - All attributes are selected, return true (to be added in Cart)
  else if (attributes?.length === selectedOptions[0].attributes?.length)
    return true;
  else return false;
}
