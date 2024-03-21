
// Define the PizzaOrder class
class PizzaOrder {
    // Constructor to create a new PizzaOrder instance
    constructor(firstName, lastName, address, quantity, size, shape, toppings, crustType, dineOption) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.address = address;
        this.quantity = quantity;
        this.size = size;
        this.shape = shape;
        this.toppings = toppings;
        this.crustType = crustType;
        this.dineOption = dineOption;
    }

    // Method to display the pizza size message
    pizzaSizeMessage() {
        if (this.size === 'small') {
            return "You have selected a small pizza.";
        } else if (this.size === 'medium') {
            return "You have selected a medium pizza.";
        } else if (this.size === 'large') {
            return "You have selected a large pizza.";
        }
    }
}

    // Get dom elements needed for form validation and submission
    const form = document.getElementById('buildPizza');
    const submitButton = document.getElementById('submitButton');
    const formStatus = document.getElementById('formStatus');

    // Get the form elements
    const firstNameField = document.getElementById('firstName');
    const lastNameField = document.getElementById('lastName');
    const addressField = document.getElementById('address1');
    const quantityInput = document.getElementById('amountOfPizzas');
    const pizzaSizes = document.getElementById('pizzaSizes');
    const crustType = document.getElementById('crustType');



    // Event listener for the submit button
    submitButton.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default form submission

        // Collect form data
        const formData = {
            firstName: firstNameField.value.trim(),
            lastName: lastNameField.value.trim(),
            address: addressField.value.trim(),
            quantity: parseInt(quantityInput.value, 10) || 1,
            size: pizzaSizes.value,
            shape: document.querySelector('input[name="pizzaShape"]:checked')?.value,
            crustType: crustType.value,
            dineOption: document.querySelector('input[name="dineOption"]:checked')?.value,
            toppings: Array.from(document.querySelectorAll('input[name="toppings[]"]:checked')).map(el => el.value)
        };

        // Validate form data
        if (isFormDetailsValid() && isPizzaShapeSelected() && isDineOptionSelected()) {
            // Validation passed, create PizzaOrder instance
            const myPizzaOrder = new PizzaOrder(
                formData.firstName,
                formData.lastName,
                formData.address,
                formData.quantity,
                formData.size,
                formData.shape,
                formData.toppings,
                formData.crustType,
                formData.dineOption
            );
            // Using the pizza class method to display the pizza size message
            alert("Are you sure you want to continue? Here is what your order looks like: " + myPizzaOrder.pizzaSizeMessage() + " You have selected " + formData.quantity + " pizza(s).");
            // Submit the form
            form.action = "confirmation.php";
            form.submit();
        } else {
            formStatus.textContent = 'Please fill out all fields correctly.';
            studentInfo.textContent = 'Owner - Conner, 1220699';
        }
    });
    

    // Validation function to check if input matches regex pattern
    function validateInput(inputElement, regexPattern) {
        return regexPattern.test(inputElement.value);
    }

    // Check if form details are valid
    function isFormDetailsValid() {
        // Validate fields with regex and check if empty, return false if invalid, otherwise return true
        if (firstNameField.value === '' || !validateInput(firstNameField, /^[a-zA-Z' -]+$/)) {
            alert('Please enter a valid first name.');
            firstNameField.focus();
            return false;
        }

        if (lastNameField.value === '' || !validateInput(lastNameField, /^[a-zA-Z' -]+$/)) {
            alert('Please enter a valid last name.');
            lastNameField.focus();
            return false;
        }

        if (addressField.value === '' || !validateInput(addressField, /^[a-zA-Z0-9\s,'-]+$/)) {
            alert('Please enter a valid address.');
            addressField.focus();
            return false;
        }

        if (!validateInput(quantityInput, /^(?:[1-9]|1[0-5])$/)) {
            alert('Please enter a valid quantity (1-15).');
            quantityInput.focus();
            return false;
        }
        return true;
    }

    // Check if a pizza shape is selected
    function isPizzaShapeSelected() {
        const pizzaShapeRadios = document.querySelectorAll('input[name="pizzaShape"]');
        const isSelected = Array.from(pizzaShapeRadios).some(radio => radio.checked);
        if (!isSelected) alert('Please select a pizza shape.');
        return isSelected;
    }

    // Check if a dine option is selected
    function isDineOptionSelected() {
        const dineOptionRadios = document.querySelectorAll('input[name="dineOption"]');
        const isSelected = Array.from(dineOptionRadios).some(radio => radio.checked);
        if (!isSelected) alert('Please select a dine option.');
        return isSelected;
    }

