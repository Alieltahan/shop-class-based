/**
 * @param {Array} products array
 * @param {Object} inputs Object of selected attributes
 * @returns Array of matching products with All filtered options
 */
export const getFilteredProducts = (products, inputs) => {
  const selectedAttributes = {};
  Object.keys(inputs).forEach((k) => {
    if (
      Array.isArray(inputs[k]) &&
      inputs[k].length > 0 &&
      k.toLocaleLowerCase() === 'color'
    ) {
      if (selectedAttributes[k]) {
        selectedAttributes[k].push(inputs[k]);
      } else selectedAttributes[k] = [inputs[k]];
    } else if (
      !Array.isArray(inputs[k]) &&
      inputs[k] !== '' &&
      inputs[k].toLowerCase() !== 'no'
    ) {
      selectedAttributes[k] = inputs[k];
    }
  });
  let filteredProducts = [];
  const selectedAttributesKeys = Object.keys(selectedAttributes);
  products.forEach((p) => {
    let matchCount = 0;
    p.attributes.forEach((at, i) => {
      const AttributeNameWithoutSpace = removeSpaces(at.name);
      if (
        Array.isArray(selectedAttributes[AttributeNameWithoutSpace]) &&
        AttributeNameWithoutSpace.toLowerCase() === 'color' &&
        selectedAttributes[AttributeNameWithoutSpace]?.length
      ) {
        const matchingColor = at.items.some((c) =>
          selectedAttributes[AttributeNameWithoutSpace][0].includes(c.value)
        );
        if (matchingColor) {
          matchCount += 1;
        }
      } else {
        selectedAttributesKeys.includes(AttributeNameWithoutSpace) &&
          at.items.forEach((item) => {
            if (
              item.value.toLowerCase() ===
              selectedAttributes[AttributeNameWithoutSpace].toLowerCase()
            )
              matchCount += 1;
          });
      }
      if (matchCount === selectedAttributesKeys.length)
        filteredProducts.push(p);
    });
  });
  return getUniqueArray(filteredProducts);
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
