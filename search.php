
<?php

require "dbconnect.php";


  $data = file_get_contents("php://input");

    if (isset($data)) {
        $request = json_decode($data);
        $brandName = $request->search;
    }

$sql ="SELECT * FROM medicine WHERE brandName LIKE '%$brandName%'";

 $result = mysqli_query($con, $sql);
 $response = array();

 while($row = mysqli_fetch_array($result)){

        array_push($response, array(
                  "brandName"=>$row[0],
                  "price"=>$row[1],
                  "town"=>$row[2],
                  "amount"=>$row[3] ));
}

 echo json_encode(array("server_response"=> $response));
mysqli_close($con)

 ?>
