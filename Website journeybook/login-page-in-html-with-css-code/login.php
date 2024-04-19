<?php
// login.php

// Database connection
$servername = "localhost"; // Change this to your database server
$username = "your_username"; // Change this to your database username
$password = "your_password"; // Change this to your database password
$dbname = "login_system"; // Change this to your database name

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

// Get username and password from the form
$username = $_POST['username'];
$password = $_POST['password'];

// SQL query to check if the username and password match
$sql = "SELECT * FROM users WHERE username='$username'";
$result = $conn->query($sql);

if ($result->num_rows == 1) {
  $row = $result->fetch_assoc();
  // Verify the password
  if (password_verify($password, $row['password_hash'])) {
    // Redirect to the user's profile page or dashboard
    header("Location: profile.php");
  } else {
    echo "Incorrect password!";
  }
} else {
  echo "User not found!";
}

$conn->close();
?>