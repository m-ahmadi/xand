<?php

class Session {
	
	public $user_id;
	private $logged_in = false;
	
	function __construct() {
		session_start();
		$this->check_login();
	}
	public function shop_clearAll() {
		$_SESSION['shop_section'] = null;
		$_SESSION['shop_perPage'] = null;
		$_SESSION['search_sql'] = null;
		$_SESSION['view_sql'] = null;
		$_SESSION['default_search_sql'] = null;
		$_SESSION['default_view_sql'] = null;
	}

	public function shop_section($str='') {
		$sess =& $_SESSION['shop_section'];
		if (!$str) {	
			if ( !empty($sess) ) { return $sess; }
		} else {
			$sess = $str;
		}
	}
	public function shop_perPage($num=0) {
		$sess =& $_SESSION['shop_perPage'];
		if (!$num) {	
			if ( !empty($sess) ) { return $sess; }
		} else {
			$sess = $num;
		}
	}
	
	
	public function search_sql($str='') {
		$sess =& $_SESSION['search_sql'];
		if (!$str) {	
			if ( !empty($sess) ) { return $sess; }
		} else {
			$sess = $str;
		}
	}
	public function view_sql($str='') {
		$sess =& $_SESSION['view_sql'];
		if (!$str) {	
			if ( !empty($sess) ) { return $sess; }
		} else {
			$sess = $str;
		}
	}
	public function default_search_sql($str='') {
		$sess =& $_SESSION['default_search_sql'];
		if (!$str) {	
			if ( !empty($sess) ) { return $sess; }
		} else {
			$sess = $str;
		}
		
	}
	public function default_view_sql($str='') {
		$sess =& $_SESSION['default_view_sql'];
		if (!$str) {	
			if ( !empty($sess) ) { return $sess; }
		} else {
			$sess = $str;
		}
	}
	
	
	
	
	public function product_id($id=0) {
		$sess =& $_SESSION['product_id'];
		if (!$id) {	
			if ( !empty($sess) ) { return $sess; }
		} else {
			$sess = $id;
		}
	}
	
	public function is_logged_in() {
		return $this->logged_in;
	}
	public function login($user) {
		if ($user) {
			$this->user_id = $_SESSION['user_id'] = $user->user_id;
			$this->logged_in = true;
		}
	}
	public function logout() {
		unset($_SESSION['user_id']);
		unset($this->user_id);
		$this->logged_in = false;
	}
	private function check_login() {
		if (isset($_SESSION['user_id'])) {
			$this->logged_in = true;
			$this->user_id = $_SESSION['user_id'];
		} else {
			unset($this->user_id);
			$this->logged_in = false;
		}
	}
}

$session = new Session();
?>