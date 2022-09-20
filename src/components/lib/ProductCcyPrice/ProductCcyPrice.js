/**
 *
 * @param {Array} pricesArr Array of products' prices
 * @param {String} selectedCcy current active currency
 * @returns Number price of the product with the active currency
 */
export function ProductCcyPrice(pricesArr, selectedCcy) {
  return pricesArr.find((p) => p.currency.label === selectedCcy).amount;
}
