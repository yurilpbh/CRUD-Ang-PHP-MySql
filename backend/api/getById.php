<?php
/**
 * Returns the an student by id
 */
require 'database.php';

$id = $_GET['id'];

  $sql = "SELECT * FROM `students` WHERE `sId` = '{$id}' LIMIT 1";

  $result = mysqli_query($con, $sql);
  $row = mysqli_fetch_assoc($result);

  echo $json = json_encode($row);

exit;
