<?php
$subject = 'Заявка с сайта';
$mess = '';
$mess .= '<hr>';
if(isset($_POST['info'])) {
    $subject = $_POST['info'];
}
if(isset($_POST['title_name'])) {
    $name1 = substr(htmlspecialchars(trim($_POST['title_name'])), 0, 100);
    $mess .= '<b>Заголовок сообщения:</b>' . $name1 . '<br>';
}
if(isset($_POST['contact_name'])) {
    $name = substr(htmlspecialchars(trim($_POST['contact_name'])), 0, 100);
    $mess .= '<b>Имя:</b>' . $name . '<br>';
}
if(isset($_POST['contact_tel'])) {
    $tel = substr(htmlspecialchars(trim($_POST['contact_tel'])), 0, 100);
    $mess .= '<b>Телефон:</b>' . $tel . '<br>';
}
if(isset($_POST['contact_email'])) {
    $tel1 = substr(htmlspecialchars(trim($_POST['contact_email'])), 0, 100);
    $mess .= '<b>Телефон:</b>' . $tel1 . '<br>';
}
if(isset($_POST['add-service'])) {
    $tel2 = substr(htmlspecialchars(trim($_POST['add-service'])), 0, 100);
    $mess .= '<b>дополнительная услуга:</b>' . $tel2 . '<br>';
}
if(isset($_POST['brand'])) {
    $mail = substr(htmlspecialchars(trim($_POST['brand'])), 0, 100);
    $mess .= '<b>Марка:</b>' . $mail . '<br>';
}
if(isset($_POST['model'])) {
    $mail1 = substr(htmlspecialchars(trim($_POST['model'])), 0, 100);
    $mess .= '<b>Модель:</b>' . $mail1 . '<br>';
}
if(isset($_POST['custom-model'])) {
    $mail2 = substr(htmlspecialchars(trim($_POST['custom-model'])), 0, 100);
    $mess .= '<b>Модель пользователя:</b>' . $mail2 . '<br>';
}
if(isset($_POST['year'])) {
    $mail3 = substr(htmlspecialchars(trim($_POST['year'])), 0, 100);
    $mess .= '<b>Год:</b>' . $mail3 . '<br>';
}
if(isset($_POST['zap-name'])) {
    $mail4 = substr(htmlspecialchars(trim($_POST['zap-name'])), 0, 100);
    $mess .= '<b>название запчасти:</b>' . $mail4 . '<br>';
}
if(isset($_POST['diagnostika'])) {
    $mail5 = substr(htmlspecialchars(trim($_POST['diagnostika'])), 0, 100);
    $mess .= '<b>Диагностика:</b>' . $mail5 . '<br>';
}
if(isset($_POST['service'])) {
    $mail6 = substr(htmlspecialchars(trim($_POST['service'])), 0, 100);
    $mess .= '<b>Услуга клиента:</b>' . $mail6 . '<br>';
}
if(isset($_POST['service-text'])) {
    $mail7 = substr(htmlspecialchars(trim($_POST['service-text'])), 0, 100);
    $mess .= '<b>Сообщение клиента:</b>' . $mail7 . '<br>';
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