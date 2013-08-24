<?php 
require_once(LIBRARY.'database.php');

class Shop {
	
	public static function main_page_for($product) {
		self::set_defaults($product);
		$product .= 's';
		$path = '../js/application/modules/shop/';
		
		$html  = @file_get_contents('../layouts/shop/search_options/'.$product.'.htm');
		$html .= @file_get_contents('../layouts/shop/view_options.htm');
		$html .= '<div id="products">';
		$html .= 	self::add_pagination_links();
		$html .= 	self::find_by_sql( self::bring_sql() );
		$html .= '</div>';
		
		$html .= script($path.'searchOptions.ajax.js', $path.'viewOptions.ajax.js', $path.'pagination.ajax.js');
		echo $html;
	}
	public static function search($arr) {
		$sql  = self::bring_sql($arr);
		
		$html  = self::add_pagination_links();
		$html .= self::find_by_sql( $sql );
		echo $html;
	}
	public static function view($arr) {
		$sql  = self::bring_sql(null, $arr);
		
		$html  = self::add_pagination_links();
		$html .= self::find_by_sql($sql);
		
		echo $html;
		
	}
	public static function paginate($arr) {
		$sql  = self::bring_sql(null, null, $arr);
		
		$html  = self::add_pagination_links($arr);
		$html .= self::find_by_sql($sql);
		
		echo $html;
	}
	
	
	
	
	// different functions
	private static function find_by_sql($sql) {
		$html = '';
		foreach (Product::find_by_sql($sql) as $value) {
			$html .= self::create_thumbnail($value);
		};
		return $html;
	}
	private static function find_all($category) {
		new Product($category);
		$html = '';
		foreach (Product::find_by_sql($sql) as $value) {
			$html .= self::create_thumbnail($value);
		};
		return $html;
	}
	
	private static function create_thumbnail($product) {
		$column = $product->p_cat .'_id';
		
		$html  = '<div class="product_thumbnail">';
		$html .= 	'<div class="thumbnail_picture">';
		$html .= 		'<a href="product.php?id='. $product->$column .'&amp;p_cat='. $product->p_cat .'" class="wrapper_link">';
		$html .= 			'<img src="'. $product->img_brand .'" class="brand_img"/>';

		if ($product->p_cat == 'cpu') {
			$html .= 		'<img src="'. $product->img_generation .'" class="generation_img"/>';
		} else if ($product->p_cat == 'motherboard') {
			$html .= 		'<img src="'. $product->img_chipset .'" class="chipset_img"/>';
		} 
		
		$html .= 			'<img src="'. $product->img_1 .'" class="product_img"/>';
		$html .= 		'</a>';
		$html .= 	'</div>';
		$html .= 	'<div class="tubmnail_info">';
		$html .=    	'<div class="product_link">';
		$html .= 			'<a href="product.php?id='. $product->$column .'&amp;p_cat='. $product->p_cat .'" class="">'. $product->company .' '. $product->model .'</a>';
		$html .=        '</div>';
		$html .=        '<div class="price_and_availablity">';
		$html .= 			'<table>';
		$html .= 				'<tr>';
		$html .= 					'<th>قيمت </th>';
		$html .= 					'<td class="green" data-price="'. $product->price .'">'. $product->price .'&nbsp;</td>';
		$html .= 					'<td>تومان</td>';
		$html .= 				'</tr>';
		$html .= 				'<tr>';
		$html .= 					'<th>موجود </th>';
		$html .= 					'<td colspan="2"></td>';
		$html .= 				'</tr>';
		$html .= 			'</table>';
		$html .=        '</div>';
		$html .=        '<div class="compare_product">';
		$html .= 			'<input type="checkbox" value="compare" id="'.$product->model.'" class="fleft">';
		$html .=        	'<label for="'.$product->model.'">مقایسه</label>';
		$html .=        '</div>';
		$html .=        '<div class="thumbnail_buttons">';
		$html .= 			'<a class="view_details_link" href="product.php?id='. $product->$column .'&amp;p_cat='. $product->p_cat .'">مشاهده جزئيات</a>';
		$html .= 			'<button type="button" value="enabled" class="atc" id="'. $product->company .'_'. $product->model .'">اضافه به سبد خريد</button>';
		$html .=        '</div>';
		$html .= 	'</div>';
		$html .= '</div>';
		
		return $html;
	}
	
	private static function search_sql($arr=null) {
		global $db; global $session;
		
		if (!$arr) {
			if ( $session->search_sql() ) {
				return $session->search_sql();
			} else {
				return $session->default_search_sql();
			}
		}
		
		$sql = 'SELECT * FROM ';
		$sql .= '`'. $session->shop_section() .'s` ';
		
		unset($arr['form']);
		
		
		$sql .= 'WHERE ';
		
		foreach($arr as $k1 => $v1) {
			if ( is_array($v1) ) {
				foreach ($v1 as $k2 => $v2) {
					if ( is_array($v2) ) {
						foreach($v2 as $k3 => $v3) {
							if ( is_array($v3) ) {
								// Going deeper...
							} else {
							
								if ( is_string($k3) ) {
									//echo $k1 .'_'. $k2 .'_'. $k3 .' = '. $v3.'<br>';
									if ($v3 !== 'none') {
										$field = '`'. $db->escape_string($k1) .'_'. $db->escape_string($k2) .'_'. $db->escape_string($k3)   .'`';
										$value = '"'. $db->escape_string($v3) . '"';
										
										$sql .= $field .'='. $value;
										$sql .= ' OR ';
									}
									
								} else {
									//echo $k1 .'_'. $k2 .' = '. $v3.'<br>';
									if ($v3 !== 'none') {
										$field = '`'. $db->escape_string($k1) .'_'. $db->escape_string($k2)   .'`';
										$value = '"'. $db->escape_string($v3) . '"';
										
										$sql .= $field .'='. $value;
										$sql .= ' OR ';
									}
								}
							}
						}
					} else {
						if ( is_string($k2) ) {
							//echo $k1 .'_'. $k2 .' = '.   $v2. '<br>';
							if ($v2 !== 'none') {
								$field = '`'. $db->escape_string($k1) .'_'. $db->escape_string($k2)   .'`';
								$value = '"'. $db->escape_string($v2) . '"';
								
								$sql .= $field .'='. $value;
								$sql .= ' OR ';
							}
						} else {
							//echo $k1 .' = '. $v2 .'<br>';
							if ($v2 !== 'none') {
								$field = '`'. $db->escape_string($k1) .'`';
								$value = '"'. $db->escape_string($v2) . '"';
								
								$sql .= $field .'='. $value;
								$sql .= ' OR ';
							}
						}
					}
				}
			} else { // if !is_array($v1)
				
				// 'something' => value
				if ( is_string($k1) ) {    
					//echo $k1 .' = '. $v1 . '<br>' ;
					if ($v1 !== 'none') {
						$field = '`'. $db->escape_string($k1) .'`';
						$value = '"'. $db->escape_string($v1) . '"';
						
						$sql .= $field .'='. $value;
						$sql .= ' OR ';
					}
				
				// 25 => value
				} else {
				}
			}
			$sql = substr($sql, 0, -4);
			$sql .= ' AND ';
		}
		$sql = substr($sql, 0, -4);
		$session->search_sql($sql);
		return $sql;
	}
	private static function view_sql($arr=null) {
		global $session;
		if (!$arr) {
			if ( $session->view_sql() ) {
				return $session->view_sql();
			} else {
				return $session->default_view_sql();
			}
		}
		global $db;

		$column   = $db->escape_string( $arr['sort_by']['category'] );
		$asc_desc = $db->escape_string( strtoupper($arr['sort_by']['asc_desc']) );
		$page     = $db->escape_string( (int)$arr['per_page'] );
		$session->shop_perPage($page);
		
		$sql = 'ORDER BY `'. $column .'` '. $asc_desc .' LIMIT '. $page .' ';
		$session->view_sql($sql);
		return $sql;
	}
	private static function pagination_sql($arr=null) {
		if (!$arr) {
			return 'OFFSET 0 ';
		}
		
		global $session;
		
		$sql = 'OFFSET ' . Pagination::calc_offset($session->shop_perPage(), $arr['page']) . ' ';
		return $sql;
	}
 
	private static function initiate_pagination($arr=null) {
		global $db; global $session;
		$page     = isset($arr['page'])     ? $db->escape_string($arr['page']) : 1;
		$per_page = isset($arr['per_page']) ? $db->escape_string($arr['per_page']) : $session->shop_perPage();
		
		
		new Product( $session->shop_section().'s' );
		$resault = Product::find_by_sql( self::search_sql() );
		$total_count = count($resault);
		
		return new Pagination($page, $per_page, $total_count);
	}
	private static function add_pagination_links($arr=null) {
		global $db;
		$pagination = self::initiate_pagination($arr);
		$html = '<div id="products_pagination">';
		if ($pagination->total_pages() > 1) {
			if ( $pagination->has_previous_page() ) { 
				$html .= ' <a href="#" data-page="'. $pagination->previous_page() .'">&laquo; Previous</a> '; 
			}
			for ($i=1; $i <= $pagination->total_pages(); $i++) {
				if ($i == $pagination->current_page) {
					$html .= ' <span class="selected" style="font-weight:bold;">'. $i .'</span> ';
				} else {
					$html .= ' <a href="#" data-page="'. $i .'">'. $i .'</a> '; 
				}
			}
			if ($pagination->has_next_page()) { 
				$html .= ' <a href="#" data-page="'. $pagination->next_page() .'">Next &raquo;</a> '; 
			}
		}
		$html .= '</div>';
		return $html;
	}
	
	
	private static function set_defaults($section) {
		global $session;
		$session->shop_clearAll();
		$session->shop_section($section);
		$session->shop_perPage(6);
		$search = 'SELECT * FROM `'. $section .'s` ';
		$view = 'ORDER BY `price` ASC LIMIT 6 ';
		$session->default_search_sql($search);
		$session->default_view_sql($view);
	}
	private static function bring_sql($search=null, $view=null, $pagination=null) {
		$sql  = isset($search)     ? self::search_sql($search)         : self::search_sql();
		$sql .= isset($view)       ? self::view_sql($view)             : self::view_sql();
		$sql .= isset($pagination) ? self::pagination_sql($pagination) : self::pagination_sql();
		return $sql;
	}
	
	
}
 
 
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
