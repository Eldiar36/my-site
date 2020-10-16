<?php
    use PHPMailer\PHPMailer\PHPMailer;
    use PHPMailer\PHPMailer\Exception;

    require 'phpmailer/src/Exception.php'
    require 'phpmailer/src/PHPMailer.php'

    $mail = new PHPMailer(true);
    $mail->CharSet = "UTF-8";
    $mail->setLanguage('ru','phpmailer/language/');
    $mail->IsHtml(true);

    //От кого письмо
    $mail->setFrom('info@fls.guru',"Фрилансер по жизни");
    //Кому отправить
    $mail->addAddress('eduit312@gmail.com');
    //Тема письма
   $mail->Subject = "Письмо с сайта"

   //Тело письма

   $body = "<h1>Встречайте супер письмо!</h1>";

   if(trim(!empty($_POST['name']))){
   $body.="<p><strong>Имя:</strong> '$_POST['name'].'</p>"
   }
   if(trim(!empty($_POST['email']))){
   $body.="<p><strong>Имя:</strong> '$_POST['email'].'</p>"
   }
   if(trim(!empty($_POST['phone']))){
      $body.="<p><strong>Имя:</strong> '$_POST['phone'].'</p>"
      }


    $mail->Body = $body

    //Отправляем
    if(!$mail->send()){
        $message = "Ошибка"
    }else{
        $message = "Данные отправлены!";
    }

    $response = ['message' => $message]


    header('Content-type: application/json');
    echo json_encode($response)
    ?>