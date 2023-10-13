
const cart = document.getElementById('cart');
        const productList = document.querySelectorAll('.product');
        let cartTotal = document.getElementById('cart-total');
        
        let cartItems = [];

        function updateCart() {
            cart.innerHTML = ''; // Limpiar el carrito
        
            if (cartItems.length === 0) {
                cart.innerHTML = '<p>There are no products in the car</p>';
            } else {
                let total = 0;
                cartItems.forEach((item, index) => {
                    const productElement = document.createElement('div');
                    productElement.classList.add('product');
                    productElement.textContent = `${item.name} - $${item.price.toFixed(2)}`;
        
                    const removeButton = document.createElement('button');
                    removeButton.classList.add('remove-button');
                    removeButton.textContent = ' Delete';
                    removeButton.addEventListener('click', () => {
                        removeFromCart(index);
                    });

                    total += item.price;
                    
                    productElement.appendChild(removeButton);
                    cart.appendChild(productElement);
                    
                });
                // Crear un elemento para mostrar el total y agregarlo al documento
                const totalElement = document.createElement('div');
                totalElement.classList.add('cart-total');
                totalElement.textContent = `Total amount - $${total.toFixed(2)}`;
                cart.appendChild(totalElement);
                
                //alert(total.toFixed(2));
                
            }
        }

        function addToCart(name, price) {
            cartItems.push({ name, price });

            updateCart();
        }

        function removeFromCart(index) {
            cartItems.splice(index, 1);
            updateCart();
        }

        productList.forEach(product => {
            const name = product.getAttribute('data-name');
            const price = parseFloat(product.getAttribute('data-price'));

            const addToCartButton = product.querySelector('.add-to-cart');
            addToCartButton.addEventListener('click', () => {
                addToCart(name, price);
            });
        });