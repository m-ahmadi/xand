<?php

$mysql = new mysqli('localhost', 'PC-Fantasy', 'php1020315106016php', 'p');

run('db_p.sql', $mysql);
run('table_comments.sql' , $mysql);
run('table_users.sql', $mysql);
run('table_motherboards/motherboards.sql', $mysql);
run('table_cpus/cpus.sql', $mysql);


function run($path, $mysql) {
	$content = file_get_contents($path);
	
	if ( $mysql->query($content) ) {
		echo 'done <br>';
	} else {
		echo $mysql->errno .' : '. $mysql->error . "<br><br>";
	}
	
}
$mysql->close();


?>