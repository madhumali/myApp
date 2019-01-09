<?php

require "dbconnect.php";

$data = file_get_contents("php://input");

if (isset($data)) {
    $request = json_decode($data);
    $fname = $request->fname;
    $password = $request->password;
}

$fname = mysqli_real_escape_string($con, $fname);
$password = mysqli_real_escape_string($con, $password);

$checkPassword = "SELECT password FROM users WHERE fname='$fname'";     /*select query for get password*/
$result = mysqli_query($con, $checkPassword);
$row1 = mysqli_fetch_array($result, MYSQLI_ASSOC);


if (password_verify($password, $row1['password'])) {
    $sql = "SELECT id FROM users WHERE fName = '$fname'";               /*select query for get id*/

    $result = mysqli_query($con, $sql);
    $row = mysqli_fetch_array($result, MYSQLI_ASSOC);
    $count = mysqli_num_rows($result);


    if ($count > 0) {
        $response = "Your Login success";

    } else {
        $response = "Your Login Email or Password is invalid";
    }

} else {
    $response = "Invalid password";
}


echo json_encode($response);
?>
