<?php
require 'database.php';

// Get the posted data
$postdata = file_get_contents("php://input");

if(isset($postdata) && !empty($postdata)){
  // Extract the data
  $request = json_decode($postdata);

  // Sanitize
  $id = mysqli_real_escape_string($con, (int)$_GET['id']);
  $fName = mysqli_real_escape_string($con, trim($request->fName));
  $lName = mysqli_real_escape_string($con, trim($request->lName));
  $email = mysqli_real_escape_string($con, $request->email);

  // Update
  $sql = "UPDATE `students` SET `fName`='$fName',`lName`='$lName',
  `email` = '$email' WHERE `sId` = '{$id}' LIMIT 1";
  
  if(mysqli_query($con, $sql)){
    http_response_code(204);
  }
  else {
    return http_response_code(422);
  }
}