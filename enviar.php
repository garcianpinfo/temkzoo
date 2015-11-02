<?php


$nome=$_POST['nome'];
$email=$_POST['email'];
$assunto=$_POST['assunto'];
$mensagem=$_POST['mensagem'];

$destinatario="contato@piramidalacademia.com.br";

$msg.="Nome:$nome\n";
$msg.="Email:$email\n";
$msg.="Assunto:$assunto\n";
$msg.="Mensagem:$mensagem\n";  

mail("$destinatario","Formulario de contato da minha Empresa","$msg","from:piramidal@piramidalacademia.com.br");
header('location:index.php');


?>