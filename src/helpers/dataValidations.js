/**
 * Validates that a given index is within range of a product list.
 *
 * @param {number} index - The index to check (0-based).
 * @param {() => Promise<Locator>} getItemsFn - Async function that returns product locators.
 * @param {string} context - Optional context name for clearer error messages.
 */
export async function validateProductIndex(index, getItemsFn, context = "items") {
  const items = await getItemsFn();
  const count = await items.count();
  
  if (index < 0 || index >= count) {
    throw new Error(
      `Invalid index ${index}. There are only ${count} ${context} available.`
    );
  }
}
