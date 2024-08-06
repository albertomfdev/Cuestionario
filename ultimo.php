<?php
header('Access-Control-Allow-Origin: *');	
require 'PHPMailer/PHPMailerAutoload.php';
//header('Access-Control-Allow-Origin: *');	
//Create a new PHPMailer instance
$mail = new PHPMailer();
$mail->IsSMTP();


//Configuracion servidor mail
$mail->From = "albertomoralesflores12@gmail.com"; //remitente
$mail->SMTPAuth = true;
$mail->SMTPSecure = 'tls'; //seguridad
$mail->Host = "smtp.gmail.com"; // servidor smtp
$mail->Port = 587; //puerto
$mail->Username ='albertomoralesflores12@gmail.com'; //nombre usuario
$mail->Password = 'tjhgbpytqrakioyj'; //contraseña


$message= " FAVOR DE NO RESPONDER ESTE CORREO\n\n INFORMACION DE CONTACTO\n DATOS SOBRE LA MASCOTA\n";

	//Agregar destinatario
	$mail->AddAddress("albertomoralesflores12@gmail.com");
	$mail->Subject = "INFORMACION";
	$mail->Body =  $message;
	 
	//Avisar si fue enviado o no y dirigir al index
	if ($mail->Send()) {
		echo'<script type="text/javascript">
			   alert("Enviado Correctamente");
			</script>';
	} else {
		echo'<script type="text/javascript">
			   alert("NO ENVIADO, intentar de nuevo");
			</script>';
	}
?>