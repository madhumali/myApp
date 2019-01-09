<?php

require "dbconnect.php";

$data = file_get_contents("php://input");
if (isset($data)) {
    $request = json_decode($data);
    $fname = $request->fname;
    $town = $request->town;
    $mobile = $request->mobile;
    $email = $request->email;
    //$password = $request->password;
    $encryptPassword = $request->password;
    $password = password_hash($encryptPassword, PASSWORD_BCRYPT);

}

$sql = "INSERT INTO users (fName,town,tel,email,password,role_id) 
VALUES ('$fname','$town','$mobile','$email','$password',3)";

if ($con->query($sql) === TRUE) {
    $response = 1;
} else {
    $response = "Error: " . $sql . "<br>" . $con->error;
}
echo json_encode($response);
?>
