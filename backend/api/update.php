<?php
require 'database.php';

// Get the posted data
$postdata = file_get_contents("php://input");

if(isset($postdata) && !empty($postdata)){
  // Extract the data
  $request = json_decode($postdata);

  // Sanitize
  $clientId = mysqli_real_escape_string($con, (int)$_GET['id']);
  $nome = mysqli_real_escape_string($con, $request->nome);
  $telefone = mysqli_real_escape_string($con, $request->telefone);
  $email = mysqli_real_escape_string($con, $request->email);
  $pedido = mysqli_real_escape_string($con, $request->pedido);
  $descricao = mysqli_real_escape_string($con, $request->descricao);
  $condicao = mysqli_real_escape_string($con, $request->condicao);

  // Update
  $sql = "UPDATE requests SET nome='$nome', telefone='$telefone',
    email = '$email', pedido = '$pedido', descricao = '$descricao', condicao = '$condicao' 
    WHERE clientId = '{$clientId}' LIMIT 1";
  
  if(mysqli_query($con, $sql)){
    http_response_code(204);
  }
  else {
    return http_response_code(422);
  }
}