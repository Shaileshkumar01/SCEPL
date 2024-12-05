// Simple search functionality (filter products based on search input)
document.getElementById('searchBar').addEventListener('input', function() {
    const searchValue = this.value.toLowerCase();
    const products = document.querySelectorAll('.product');

    products.forEach(product => {
        const productName = product.querySelector('h3').textContent.toLowerCase();
        if (productName.includes(searchValue)) {
            product.style.display = 'block';
        } else {
            product.style.display = 'none';
        }
    });
});

// Contact form submission (Simple placeholder function)
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Thank you for your message. We will get back to you soon!');
});
