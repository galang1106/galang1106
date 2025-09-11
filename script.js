// JavaScript for future functionalities (e.g., adding products to cart)

document.querySelectorAll('.product button').forEach(button => {
  button.addEventListener('click', () => {
    alert('Item added to cart!');
  });
});
