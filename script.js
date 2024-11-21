let total = 0;

document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', (e) => {
        const product = e.target.parentElement;
        const name = product.querySelector('p:nth-child(2)').textContent;
        const price = parseFloat(product.querySelector('p:nth-child(3)').textContent.slice(1));
        
        const cartItems = document.querySelector('.cart-items');
        const item = document.createElement('li');
        item.textContent = `${name} - ₹${price}`;
        cartItems.appendChild(item);

        total += price;
        document.querySelector('.total').textContent = total;
    });
});
