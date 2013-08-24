<?php
require_once('library/initialize.php');

include_layout('header.php', User::find_by_id($session->user_id)->fullname(), 'shop');
?>

 


<?php
include_layout('footer.php');
?>