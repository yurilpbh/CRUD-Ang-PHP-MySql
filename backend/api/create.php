<?php
require 'database.php';

// Get the posted data
$postdata = file_get_contents("php://input");

if(isset($postdata) && !empty($postdata)){
  //Extract the data.
  $request = json_decode($postdata);

  // Sanitize
  $nome = mysqli_real_escape_string($con, $request->nome);
  $telefone = mysqli_real_escape_string($con, $request->telefone);
  $email = mysqli_real_escape_string($con, $request->email);
  $pedido = mysqli_real_escape_string($con, $request->pedido);
  $descricao = mysqli_real_escape_string($con, $request->descricao);
  $condicao = mysqli_real_escape_string($con, $request->condicao);

  // Create
  $sql = "INSERT INTO requests (nome, telefone, email, pedido, descricao, condicao) VALUES
    ('{$nome}', '{$telefone}','{$email}', '{$pedido}', '{$descricao}', '{$condicao}')";

  if(mysqli_query($con,$sql)){
    http_response_code(201);
  }
  else {
    http_response_code(422);
  }
}