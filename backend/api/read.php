<?php
/**
 * Returns the list of students
 */
require 'database.php';
error_reporting(E_ERROR);
$students = [];
$sql = "SELECT * FROM students";

if($result = mysqli_query($con, $sql)) {
  $i = 0;
  while($row = mysqli_fetch_assoc($result)){
    $students[$i]['sId'] = $row['sId'];
    $students[$i]['fName'] = $row['fName'];
    $students[$i]['lName'] = $row['lName'];
    $students[$i]['email'] = $row['email'];
    $i++;
  }

  echo json_encode($students);
}
else {
  http_response_code(404);
}