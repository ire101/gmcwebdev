/* ============================================================
   SHOPPING CART - DOM EVENTS
   ============================================================
   Handles:
   1. Increasing / decreasing item quantity (+ / - icons)
   2. Deleting an item from the cart (trash icon)
   3. Liking an item, with the heart icon changing color (heart icon)
   4. Recalculating the total price whenever quantity or items change
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {

  // The container that holds every product card
  const listProducts = document.querySelector('.list-products');

  // The <span> where the total price is displayed
  const totalDisplay = document.querySelector('.total');


  /**
   * Recalculates and displays the total price of the cart.
   * Total = sum of (unit price * quantity) for every product still in the cart.
   */
  function updateTotal() {
    // Only the direct product wrappers (avoids the nested Bootstrap .card-body)
    const productWrappers = listProducts.querySelectorAll(':scope > .card-body');

    let total = 0;

    productWrappers.forEach((wrapper) => {
      const unitPriceText = wrapper.querySelector('.unit-price').textContent;
      const unitPrice = parseFloat(unitPriceText); // "100 $" -> 100

      const quantity = parseInt(wrapper.querySelector('.quantity').textContent, 10);

      total += unitPrice * quantity;
    });

    totalDisplay.textContent = `${total} $`;
  }


  /**
   * Handles a click anywhere inside the product list (event delegation).
   * This way, deleting a card doesn't break event listeners for the
   * remaining cards - there's only ever ONE listener on the parent.
   */
  listProducts.addEventListener('click', (event) => {
    const target = event.target;

    // The Bootstrap ".card" that wraps a single product's content
    const card = target.closest('.card');
    if (!card) return; // click happened outside any product card

    // --- 1. Increase quantity ---
    if (target.classList.contains('fa-plus-circle')) {
      const quantitySpan = card.querySelector('.quantity');
      quantitySpan.textContent = parseInt(quantitySpan.textContent, 10) + 1;
      updateTotal();
    }

    // --- 2. Decrease quantity (never below 0) ---
    if (target.classList.contains('fa-minus-circle')) {
      const quantitySpan = card.querySelector('.quantity');
      const currentQuantity = parseInt(quantitySpan.textContent, 10);
      if (currentQuantity > 0) {
        quantitySpan.textContent = currentQuantity - 1;
        updateTotal();
      }
    }

    // --- 3. Delete the item from the cart ---
    if (target.classList.contains('fa-trash-alt')) {
      // The outer wrapper (direct child of .list-products) is what we remove
      const productWrapper = card.closest('.list-products > .card-body') || card.parentElement;
      productWrapper.remove();
      updateTotal();
    }

    // --- 4. Like / unlike the item (heart changes color) ---
    if (target.classList.contains('fa-heart')) {
      target.classList.toggle('liked');
    }
  });


  // Calculate the initial total on page load (all quantities start at 0)
  updateTotal();

});
