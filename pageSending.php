<?php session_start(); ?>
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="" content="width=device-width, initial-scale=1.0" />
    <title>Отправка запроса</title>
    <link rel="stylesheet" href="./style.css" />
  </head>
  <body>
    <div class="loader__block">
    <div class="loader"></div>
        <div class="block__text">
        <h2 class="panel__content_text">
            <?php
            $message = $_SESSION['message'] ?? '';
            echo $message;
            unset($_SESSION['message']);
            ?>
        </h2>
        </div>
    </div>


        <script>
            setTimeout(function(){
	          window.location.href = 'index.html'; 
            },2000);
        </script>
    <script src="./main.js"></script>
  </body>
</html>

