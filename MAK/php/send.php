<?php

if($_POST['submit']) {

        $mail = substr(htmlspecialchars(trim($_POST['name__mailArea'])), 0, 1000);
        $mess =  substr(htmlspecialchars(trim($_POST['name__textArea'])), 0, 1000000);

        $title = 'Web Dev Order Request';
        $to = '7853637@gmail.com';

        $from=$mail;

        mail($to, $title, $mess, 'From:'.$from);
        echo 'Thank you! Your request sent. I will contact to you shortly!';
}
?>
