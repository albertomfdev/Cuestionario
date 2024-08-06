<?php
	
header('Access-Control-Allow-Origin: *');	
	$var1 = $_POST['prueba'];
	$var2 = $_POST['prueba2'];

 $destinatario = "albertomoralesflores12@gmail.com";
 $asunto = "POR FAVOR YA ";



mail($destinatario,$asunto,$var1,$var2);
echo json_encode($var2);



?>
