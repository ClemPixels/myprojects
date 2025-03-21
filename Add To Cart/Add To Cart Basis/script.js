// script.js
document.addEventListener('DOMContentLoaded', () => {
    const cart = [];
    const cartItemsElement = document.querySelector('.cart-items');
    const totalPriceElement = document.querySelector('.total-price');

    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', () => {
            const productElement = button.closest('.product');
            const productId = productElement.getAttribute('data-id');
            const productName = productElement.getAttribute('data-name');
            const productPrice = parseFloat(productElement.getAttribute('data-price'));

            const existingProduct = cart.find(item => item.id === productId);
            if (existingProduct) {
                existingProduct.quantity++;
            } else {
                cart.push({ id: productId, name: productName, price: productPrice, quantity: 1 });
            }
            renderCartItems();
        });
    });

    function renderCartItems() {
        cartItemsElement.innerHTML = '';
        let totalPrice = 0;
        cart.forEach(item => {
            const cartItemElement = document.createElement('li');
            cartItemElement.innerHTML = `
                ${item.name} - $${item.price} x ${item.quantity}
                <button class="remove-from-cart" data-id="${item.id}">Remove</button>
            `;
            cartItemsElement.appendChild(cartItemElement);
            totalPrice += item.price * item.quantity;
        });
        totalPriceElement.textContent = totalPrice.toFixed(2);
        
        document.querySelectorAll('.remove-from-cart').forEach(button => {
            button.addEventListener('click', () => {
                const productId = button.getAttribute('data-id');
                const productIndex = cart.findIndex(item => item.id === productId);
                if (productIndex !== -1) {
                    cart.splice(productIndex, 1);
                }
                renderCartItems();
            });
        });
    }
});
