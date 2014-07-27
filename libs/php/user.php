<?php
require_once(LIB_PHP.'database.php');

class User extends DatabaseObject {
	
	protected static $table_name = 'users';
	protected static $db_fields = [];
	
	function __construct() {
		global $database;
		$database->query('SHOW FIELDS FROM `'. self::$table_name .'`');
		
		while ($row = $database->fetch_assoc()) {
			$field = $row['Field'];
			self::$db_fields[] = $field;
			
			$this->$field = null;
		}
	}
	
	public static function username_exists($username='') {
		global $db;
		$username = $db->escape_string($username);
		
		$sql = 'SELECT * FROM `users` ';
		$sql .= 'WHERE `username`= "'.$username.'" ';
		$sql .= 'LIMIT 1';
		
		$arr = self::find_by_sql($sql);
		
		return !empty($arr) ? true: false;
	}
	public static function authenticate($username='', $password='') {
		global $database;
		$username = $database->escape_string($username);
		$password = $database->escape_string($password);
		
		$sql = 'SELECT * FROM `users` ';
		$sql .= 'WHERE `username`= "' . $username;
		$sql .= '" AND `password`="' . $password; //md5()
		$sql .= '" LIMIT 1';
		
		$result_array = self::find_by_sql($sql);
		if (!empty($result_array)) {
			$obj = array_shift($result_array);
			return $obj;
		} else {
			return false;
		}
		
	}
	public function fullname() {
		if ($this->firstname && $this->lastname) {
			$full_name = $this->firstname . ' ' . $this->lastname;
			return $full_name;
		}
	}
}

$user = new User();
?>