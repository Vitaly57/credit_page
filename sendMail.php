<?php
session_start();
$message = "";
$to = "info@gorodcredita.ru";
$subject = "Заявка городское кредитное сообщество";
$name = '';
$phone = '';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = trim(htmlspecialchars($_POST["name"]));
    $phone = trim(htmlspecialchars($_POST["phone"]));

    if (!empty($name) && !empty($phone)) {
        $message = "Имя: " . $name . "<br>";
        $message .= "Номер телефона: " . $phone . "<br>";

        $headers = 'MIME-Version: 1.0' . "\r\n";
        $headers .= 'Content-type: text/html; charset=utf-8' . "\r\n";

        if (mail($to, $subject, $message, $headers)) {
            $message = "Заявка успешно отправлена";
        } else {
            $message = "Ошибка отправки заявки, попробуйте еще раз";
        }
    } else {
        $message = "Пожалуйста, заполните все поля формы";
    }

    $_SESSION['message'] = $message;
    header('Location: pageSending.php');
}
