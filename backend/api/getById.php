<?php
/**
 * Returns the an student by id
 */
require 'database.php';

$clientId = $_GET['id'];

  $sql = "SELECT * FROM requests WHERE clientId = '{$clientId}' LIMIT 1";

  $result = mysqli_query($con, $sql);
  $row = mysqli_fetch_assoc($result);

  echo $json = json_encode($row);

exit;
