<?php
// Файлы phpmailer
require 'phpmailer/PHPMailer.php';
require 'phpmailer/SMTP.php';
require 'phpmailer/Exception.php';

$title = "Заголовок письма";
$file = $_FILES['file'];

$c = true;
// Формирование самого письма
$title = "Я - Ваш новий клієнт";
foreach ( $_POST as $key => $value ) {
  if ( $value != "" && $key != "project_name" && $key != "admin_email" && $key != "form_subject" ) {
    $body .= "
    " . ( ($c = !$c) ? '<tr>':'<tr style="background-color: #f8f8f8;">' ) . "
      <td style='padding: 10px; border: #e9e9e9 1px solid;'><b>$key</b></td>
      <td style='padding: 10px; border: #e9e9e9 1px solid;'>$value</td>
    </tr>
    ";
  }
}

$body = "<table style='width: 100%;'>$body</table>";

// Настройки PHPMailer
$mail = new PHPMailer\PHPMailer\PHPMailer();

try {
  $mail->isSMTP();
  $mail->CharSet = "UTF-8";
  $mail->SMTPAuth   = true;

 // Настройки моей почты
 $mail->Host       = 'smtp.ukr.net'; // SMTP сервера моей почты
 $mail->Username   = 'gateway.2024@ukr.net'; // Логин на почте
 $mail->Password   = 'UOdur0dzwWVrwNvr'; // Пароль на почте
 $mail->SMTPSecure = 'ssl';
 $mail->Port       = 465;


  $mail->setFrom('gateway.2024@ukr.net', 'Заявка з вашого сайту'); // Адрес самой почты и имя отправителя

  // Получатель письма

  $mail->addAddress('m.chukhrai@gmail.com');
  $mail->addAddress('tarasenko.igor@ukr.net');
 

  // Прикрипление файлов к письму
//   if (!empty($file['name'][0])) {
//     for ($ct = 0; $ct < count($file['tmp_name']); $ct++) {
//       $uploadfile = tempnam(sys_get_temp_dir(), sha1($file['name'][$ct]));
//       $filename = $file['name'][$ct];
//       if (move_uploaded_file($file['tmp_name'][$ct], $uploadfile)) {
//           $mail->addAttachment($uploadfile, $filename);
//           $rfile[] = "Файл $filename прикріплено";
//       } else {
//           $rfile[] = "Не вдалося прікрипити файл $filename";
//       }
//     }
//   }

  // Отправка сообщения
  $mail->isHTML(true);
  $mail->Subject = $title;
  $mail->Body = $body;

  $mail->send();

} catch (Exception $e) {
  $status = "Повідомлення не було відправлено. Причина помилки: {$mail->ErrorInfo}";
}