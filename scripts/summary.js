// Adding an event listener to the editOrder button, if the user clicks the button, the page will redirect to the form page.
document.getElementById('editOrder').addEventListener('click', function() {
    // Redirect to the form page
    window.location.href = '../structure/form.html'; 
});

// Adding an event listener to the placeOrder button, if the user clicks the button, the page will redirect to the order complete page.
document.getElementById('placeOrder').addEventListener('click', function() {
    // Redirect to the order complete page
    window.location.href = '../structure/order-complete.php';
});