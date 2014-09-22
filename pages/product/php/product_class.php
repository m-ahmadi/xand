<?php

class Product extends DatabaseObject {
	
	protected static $table_name;
	protected static $db_fields = [];

	function __construct($table_name='') {
		if($table_name) {
			self::$table_name = $table_name;
			global $db;
			$db->query('SHOW FIELDS FROM `'. self::$table_name .'`');
			while ( $row = $db->fetch_assoc() ) {
				$field = $row['Field'];
				self::$db_fields[] = $field;
				
				$this->$field = null;
			}
		} 
	}
	
	
	
	public function comments() {
		return Comment::find_comments_on(self::$table_name, $this->product_id);
	}
	
	
}

?>