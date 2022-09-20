/**
 * @param {Number} percentage tax percentage
 * @param {Number} amount Total Cart amount value
 * @returns {Number} tax amount.
 */
export function CalculateTax(percentage, amount) {
  return ((amount * percentage) / 100).toFixed(2);
}
