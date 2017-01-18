<?php
$subject = 'Заявка с сайта';
$mess = '';
$mess .= '<hr>';
if(isset($_POST['info'])) {
    $subject = $_POST['info'];
}
if(isset($_POST['contact_name'])) {
    $name = substr(htmlspecialchars(trim($_POST['contact_name'])), 0, 100);
    $mess .= '<b>Имя:</b>' . $name . '<br>';
}
if(isset($_POST['contact_tel'])) {
    $tel = substr(htmlspecialchars(trim($_POST['contact_tel'])), 0, 100);
    $mess .= '<b>Телефон:</b>' . $tel . '<br>';
}
if(isset($_POST['add-service'])) {
    $tel = substr(htmlspecialchars(trim($_POST['add-service'])), 0, 100);
    $mess .= '<b>дополнительная услуга:</b>' . $tel . '<br>';
}
if(isset($_POST['brand'])) {
    $mail = substr(htmlspecialchars(trim($_POST['brand'])), 0, 100);
    $mess .= '<b>Марка:</b>' . $mail . '<br>';
}
if(isset($_POST['model'])) {
    $mail = substr(htmlspecialchars(trim($_POST['model'])), 0, 100);
    $mess .= '<b>Модель:</b>' . $mail . '<br>';
}
if(isset($_POST['year'])) {
    $mail = substr(htmlspecialchars(trim($_POST['year'])), 0, 100);
    $mess .= '<b>Год:</b>' . $mail . '<br>';
}
if(isset($_POST['zap-name'])) {
    $mail = substr(htmlspecialchars(trim($_POST['zap-name'])), 0, 100);
    $mess .= '<b>название запчасти:</b>' . $mail . '<br>';
}
if(isset($_POST['diagnostika'])) {
    $mail = substr(htmlspecialchars(trim($_POST['diagnostika'])), 0, 100);
    $mess .= '<b>Диагностика:</b>' . $mail . '<br>';
}
if(isset($_POST['service'])) {
    $mail = substr(htmlspecialchars(trim($_POST['service'])), 0, 100);
    $mess .= '<b>Услуга клиента:</b>' . $mail . '<br>';
}
if(isset($_POST['service-text'])) {
    $mail = substr(htmlspecialchars(trim($_POST['service-text'])), 0, 100);
    $mess .= '<b>Сообщение клиента:</b>' . $mail . '<br>';
}
$mess .= '<hr>';
// подключаем файл класса для отправки почты
require 'class.phpmailer.php';

$mail = new PHPMailer();
$mail->AddAddress('a.baranov@cheviplus.ru','');   // кому - адрес, Имя
$mail->IsHTML(true);                        // выставляем формат письма HTML
$mail->Subject = $subject; // тема письма
$mail->CharSet = "UTF-8";                   // кодировка
$mail->Body = $mess;
if(isset($_FILES['file'])) {
    if($_FILES['file']['error'] == 0){
        $mail->AddAttachment($_FILES['file']['tmp_name'], $_FILES['file']['name']);
    }
}
// отправляем наше письмо
if (!$mail->Send()){
    die ('Mailer Error: ' . $mail->ErrorInfo);
}else{
    echo 'true';
}?>