<?php
/**
 * Returns the list of requests
 */
require 'database.php';
error_reporting(E_ERROR);
$requests = [];
$sql = "SELECT * FROM requests";

if($result = mysqli_query($con, $sql)) {
  $i = 0;
  while($row = mysqli_fetch_assoc($result)){
    $requests[$i]['clientId'] = $row['clientId'];
    $requests[$i]['nome'] = $row['nome'];
    $requests[$i]['telefone'] = $row['telefone'];
    $requests[$i]['email'] = $row['email'];
    $requests[$i]['pedido'] = $row['pedido'];
    $requests[$i]['descricao'] = $row['descricao'];
    $requests[$i]['condicao'] = $row['condicao'];
    $i++;
  }

  echo json_encode($requests);
}
else {
  http_response_code(404);
}