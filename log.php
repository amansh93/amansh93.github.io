<?php
$file='log.txt;
$handle = fopen($file, 'a');
$ip=$_SERVER['REMOTE_ADDR'];
fputs($handle, $ip."\n");
fclose($handle);
?>