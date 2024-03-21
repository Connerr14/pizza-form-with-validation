<?php
// Start the session
session_start();

// Retrieve session variables
$firstName = $_SESSION['firstName'] ?? 'Not provided';
$lastName = $_SESSION['lastName'] ?? 'Not provided';
$address = $_SESSION['address'] ?? 'Not provided';
$quantity = $_SESSION['quantity'] ?? 0;
$pizzaSize = $_SESSION['pizzaSize'] ?? 'Not specified';
$pizzaShape = $_SESSION['pizzaShape'] ?? 'Not specified';
$toppingsString = $_SESSION['toppingsString'] ?? 'Not specified';
$crustType = $_SESSION['crustType'] ?? 'Not specified';
$dineOption = $_SESSION['dineOption'] ?? 'Not specified';
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Order Complete</title>
    <link rel="stylesheet" href="../styles/order-complete.css">
</head>
<body>

    <h1>Thank you for your order!</h1>

    <!-- Order details section -->
    <div id="orderDetails">
        <p><strong>Order Summary:</strong></p>
        <p>First Name: <?php echo htmlspecialchars($firstName); ?></p>
        <p>Last Name: <?php echo htmlspecialchars($lastName); ?></p>
        <p>Address: <?php echo htmlspecialchars($address); ?></p>
        <p>Quantity: <?php echo htmlspecialchars($quantity); ?></p>
        <p>Pizza Size: <?php echo htmlspecialchars($pizzaSize); ?></p>
        <p>Pizza Shape: <?php echo htmlspecialchars($pizzaShape); ?></p>
        <p>Toppings: <?php echo htmlspecialchars($toppingsString); ?></p>
        <p>Crust Type: <?php echo htmlspecialchars($crustType); ?></p>
        <p>Dine Option: <?php echo htmlspecialchars($dineOption); ?></p>
    </div>

    <button>
        <a href="../structure/form.html">Place another order</a>
    </button>

</body>
</html>
