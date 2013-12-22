<?php

class MySQLDatabase {
	public $last_query;
	private $mysql;
	private $result;
	
	function __construct() {
		$this->open_connection();
		$this->mysql->set_charset('utf8');
	}
	
	public function open_connection() {
		$this->mysql = @new mysqli(DB_SERVER, DB_USER, DB_PASS, DB_NAME);
		if (mysqli_connect_error()) {
			$output = 'Database connection failed.<br>';
			$output .= '<b>Error</b>: ('. mysqli_connect_errno() .') '. mysqli_connect_error();
			die($output);
		}
	}
	public function close_connection() {
		if (isset($this->mysql)) {
			$this->mysql->close();
			unset($this->mysql);
		}
	}
	public function escape_string($string) {
		return $this->mysql->real_escape_string($string);
	}
	public function fetch_assoc() {
		return $this->result->fetch_assoc();
	}
	public function fetch_array() {
		return $this->result->fetch_array();
	}
	public function insert_id() {
		return $this->mysql->insert_id;
	}
	public function affected_rows() {
		return $this->mysql->affected_rows;
	}
	public function query($sql) {
		$this->last_query = $sql;
		$this->result = $this->mysql->query($sql);
		$this->check_result($this->result);
		return $this->result;
	}
	private function check_result($result) {
		if (!$result) {
			$output = '<br>Database query failed.<br>';
			$output .= '<b>Query :</b> ' . $this->last_query . '<br>';
			$output .= '<b>Error :</b> (' . $this->mysql->errno .') '. $this->mysql->error;
			die($output);
		} else {
			return $result;
		}
	}

};

$database = new MySQLDatabase();
$db =& $database;




/*
Useful methods and properties thus far.
	$this->result->fetch_array();
	$this->result->num_rows;
	$this->mysql->insert_id;
	$this->mysql->affected_rows;
*/
?>