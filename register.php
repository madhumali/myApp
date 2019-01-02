<?php

require "dbconnect.php";

    $data = file_get_contents("php://input");
    if (isset($data)) {
        $request = json_decode($data);
        $username = $request->username;
        $password = $request->password;
       $mobile = $request->mobile;
        $emailadd = $request->email;

    }

$username = stripslashes($username);
$password = stripslashes($password);
$sql = "INSERT INTO users (fname, password, mobile, email) VALUES ('$username', '$password','$mobile' , '$emailadd')";

if ($con->query($sql) === TRUE) {
  $response= 1;
} else {
   $response= "Error: " . $sql . "<br>" . $con->error;
}
 echo json_encode( $response);
?>
