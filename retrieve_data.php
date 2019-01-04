<?php

require  "dbconnect.php";

  $data = file_get_contents("php://input");

    if (isset($data)) {
        $request = json_decode($data);
        $fname = $request->fname;
    }

$sql ="SELECT fName,town,tel,email FROM users WHERE fname='$fname'";
 $result = mysqli_query($con, $sql);
 $response = array();

 while($row = mysqli_fetch_array($result)){

        array_push($response, array(
                  "fname"=>$row[0],
                  "town"=>$row[1],
                  "tel"=>$row[2],
                  "email"=>$row[3] ));
}

 echo json_encode(array("server_response"=> $response));
mysqli_close($con)

 ?>
