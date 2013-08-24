<?php 

mysql_connect('localhost','root','') or die('ERROR : ' . mysql_errno() .' : '. mysql_error());
mysql_select_db('test') or die('ERROR ' . mysql_errno() .' : '. mysql_error());


?>

<!DOCTYPE html>
<html>
<head>
	<title></title>
</head>
<body>
	<?php $query_run = mysql_query('SELECT * FROM book') ;
	while ($row = mysql_fetch_assoc($query_run)) {?>
		<h1><?php echo $row['title']; ?></h1>
	<?php } ?>
</body>
</html>