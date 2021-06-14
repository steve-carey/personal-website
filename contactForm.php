<?php

if (isset($_POST['submit'])) {
    $name = $_POST['name'];
    $emailFrom = $_POST['email'];
    $message = $_POST['message'];

    $mailTo = "ste_carey@live.co.uk";
    $header = "From: ".$emailFrom;
    $txt  = "New email recieved from ".$emailFrom.".\n\n".$message;

    mail($mailTo, $txt, $header);
    header("Location: contact.php?mailsend");
    
}
?>
