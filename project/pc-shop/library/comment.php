<?php

class Comment extends DatabaseObject {

	protected static $table_name = 'comments';
	protected static $db_fields;

	function __construct() {
		global $database;
		$database->query('SHOW FIELDS FROM `'. self::$table_name .'`');
		
		while ($row = $database->fetch_assoc()) {
			$field = $row['Field'];
			self::$db_fields[] = $field;
		}
		foreach (self::$db_fields as $field) {
			$this->$field = null;
		}
	}
	
	public static function make($user_id, $product_id, $body) {
		global $db;
		$comment = new Comment();
		$comment->product_id = $product_id;
		$comment->user_id = $user_id;
		$comment->comment_date = date('Y-m-d', time());//time();
		$comment->comment_text = htmlentities($body);
		$comment->save();
		return $comment;
	}
	
	public static function find_comments_on($product_table, $product_id=0) {
		global $db;
		$arr = ['username', 'firstname', 'lastname', 'avatar_pic'];
		self::$db_fields = array_merge(self::$db_fields, $arr);
		
		$sql  = 'SELECT comment_date,comment_text,' . join(',', $arr) . ' ';
		$sql .= 'FROM `comments` ';
		$sql .= 'JOIN `users` USING(user_id) ';
		$sql .=	'JOIN `'. $product_table .'` USING(product_id) ';
		$sql .= 'WHERE product_id="' . $product_id . '"';
		
		$obj_arr = static::find_by_sql($sql);
		array_splice(self::$db_fields, 5);
		
		return $obj_arr;
	}
}

$comment = new Comment();

?>