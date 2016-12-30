<?php
	header('Content-type: application/json');


    $name = @trim(stripslashes($_POST['nombrePersona']));
    $surname = @trim(stripslashes($_POST['apellidoPersona']));
    $email = @trim(stripslashes($_POST['emailPersona']));
    $phone = @trim(stripslashes($_POST['telefonoPersona']));
    $subject = @trim(stripslashes($_POST['asuntoCorreo']));
    $message = @trim(stripslashes($_POST['mensajeCorreo']));



    $email_from = $email;
    $email_to = 'info@pallozabaltasar.com';//replace with your email

    $body = 'Nombre: ' . $name ." ".$surname."\n\n" . 'Correo: ' . $email."\n\n" . 'Teléfono: ' . $phone . "\n\n" . 'Asunto: ' . $subject . "\n\n" . 'Mensaje: ' . $message;

    $success = @mail($email_to, $subject, $body, 'De: <'.$email_from.'>');

$status = array(
    'type'=>'success',
    'message'=>'Gracias por ponerte en contacto con nosotros.Nos pondremos en contacto contigo lo mas pronto posible! '
);

    echo json_encode($status);
    die;