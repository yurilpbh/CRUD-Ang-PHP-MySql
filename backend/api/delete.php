<?php

require 'database.php';

$id = $_GET['id'];

// Delete
$sql = "DELETE FROM `students` WHERE `sId` = '{$id}' LIMIT 1";

if(mysqli_query($con, $sql)){
  htt_response_code(204);
}
else{
  return http_response_code(422);
}