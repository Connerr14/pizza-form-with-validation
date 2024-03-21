<?php
    session_start(); // Start the session at the beginning

    // Assign form data to session variables
    $_SESSION['firstName'] = $_POST['firstName'] ?? 'Not provided';
    $_SESSION['lastName'] = $_POST['lastName'] ?? 'Not provided';
    $_SESSION['address'] = $_POST['address1'] ?? 'Not provided';
    $_SESSION['quantity'] = $_POST['amountOfPizzas'] ?? 0;
    $_SESSION['pizzaSize'] = $_POST['sizeOfPizza'] ?? 'Not specified';
    $_SESSION['pizzaShape'] = $_POST['pizzaShape'] ?? 'Not specified';
    $_SESSION['crustType'] = $_POST['crustType'] ?? 'Not specified';
    $_SESSION['dineOption'] = $_POST['dineOption'] ?? 'Not specified';

    // Handling toppings as an array
    if (isset($_POST['toppings']) && is_array($_POST['toppings'])) {
        // Apply htmlspecialchars to each topping for security
        $_SESSION['toppings'] = array_map('htmlspecialchars', $_POST['toppings']);
        $_SESSION['toppingsString'] = implode(', ', $_SESSION['toppings']);
    } else {
        $_SESSION['toppingsString'] = 'None';
    }

    // Redirect to the form page if the request method is not POST
    if ($_SERVER['REQUEST_METHOD'] != 'POST') {
        header('Location: formPage.html');
        exit;
    }
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Order Confirmation</title>
    <!-- Link to external files -->
    <link href="../styles/confirmation.css" rel="stylesheet">
    <script src="../scripts/summary.js" defer></script>
</head>
<body>
<h1>Order Confirmation</h1>

<section>
    <!-- Displaying an order summery -->
    <div id="orderSummary">
        <h2>Summary of Your Selection:</h2>
        <p>First Name: <span><?php echo $_SESSION['firstName']; ?></span></p>
        <p>Last Name: <span><?php echo $_SESSION['lastName']; ?></span></p>
        <p>Address: <span><?php echo $_SESSION['address']; ?></span></p>
        <p>Quantity: <span><?php echo $_SESSION['quantity']; ?></span></p>
        <p>Pizza Size: <span><?php echo $_SESSION['pizzaSize']; ?></span></p>
        <p>Toppings: <span><?php echo $_SESSION['toppingsString']; ?></span></p>
        <p>Crust Type: <span><?php echo $_SESSION['crustType']; ?></span></p>
        <p>Dine Option: <span><?php echo $_SESSION['dineOption']; ?></span></p>
    </div>
</section>

<!-- Edit order and place order buttons -->
<div id="confirmationButtons">
    <button type="button" id="editOrder">Edit Order</button>
    <button type="button" id="placeOrder">Place Order</button>
</div>
</body>
</html>
