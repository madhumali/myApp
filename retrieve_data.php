<?php

require  "dbconnect.php";

  $data = file_get_contents("php://input");

    if (isset($data)) {
        $request = json_decode($data);
        $username = $request->username;
    }

$sql ="SELECT * FROM users WHERE username='$username'";
 $result = mysqli_query($con, $sql);
 $response = array();

 while($row = mysqli_fetch_array($result)){

        array_push($response, array("id"=>$row[0],
                  "username"=>$row[1],
                  "password"=>$row[2],
                  "mobile"=>$row[3],
                  "email"=>$row[4] ));
}

 echo json_encode(array("server_response"=> $response));
mysqli_close($con)

 ?>
