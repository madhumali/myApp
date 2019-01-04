<?php

    require "dbconnect.php";

    $data = file_get_contents("php://input");

    if (isset($data)) {
        $request = json_decode($data);
        $fname = $request->fname;
        $password = $request->password;
      }

      $fname= mysqli_real_escape_string($con,$fname);
      $password = mysqli_real_escape_string($con,$password);

      $checkPassword="SELECT password FROM users WHERE fname='$fname'";
    $result = mysqli_query($con,$checkPassword);
    $row1 = mysqli_fetch_array($result,MYSQLI_ASSOC);


//$hash = '$2y$07$BCryptRequires22Chrcte/VlQH0piJtjXl.0t1XkA8pw9dMXTpOq';

if (password_verify($password, $row1['password'])) {
    //echo 'Password is valid!'// and password = '$checkPassword';
    $sql = "SELECT id FROM users WHERE fName = '$fname'";

    $result = mysqli_query($con,$sql);
    $row = mysqli_fetch_array($result,MYSQLI_ASSOC);
    //$active = $row['active'];
    $count = mysqli_num_rows($result);

    // If result matched myusername and mypassword, table row must be 1 row

    if($count >0) {
        $response= "Your Login success";

    }else {
        $response= "Your Login Email or Password is invalid";
    }

} else {
    $response= "Invalid password";
}



 echo json_encode( $response);
?>
