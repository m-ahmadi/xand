<?php 
require_once(LIBRARY.'database.php');

class Product {

	public $product;
	
	
	public function get_product($query, $product) {
		global $database;
		if (!empty($query)) {
			$database->query($query); ?>
			
			<?php while($row = $database->fetch_assoc()) { ?>
			
			<div class="product_thumbnail">
				<div class="thumbnail_picture">
					<a href="product.php?id=<?php echo $row['product_id']; ?>&amp;p_cat=<?php echo $row['p_cat']; ?>" class="wrapper_link">
						<img src="<?php echo $row['img_brand']; ?>" class="brand_img"/>
						
						<?php
						if ($product == 'cpu') {echo '<img src="'.$row['img_generation'].'" class="generation_img"/>';} else
						if ($product == 'motherboard') {echo '<img src="'.$row['img_chipset'].'" class="chipset_img"/>';} 
						?>
						
						<img src="<?php echo $row['img_1']; ?>" class="product_img"/>
					</a>
				</div>
				
				<div class="tubmnail_info">
					<a href="product.php?id=<?php echo $row['product_id']; ?>&amp;p_cat=<?php echo $row['p_cat']; ?>" class="product_link"><?php echo $row['company'].' '.$row['model']; ?></a>
					<input type="checkbox" value="compare" class="fleft">
					<table>
						<tr>
							<th>قيمت </th>
							<td class="green" data-price="<?php echo $row['price']; ?>"><?php echo $row['price']; ?>&nbsp;</td>
							<td>تومان</td>
						</tr>
						<tr>
							<th>موجود </th>
							<td colspan="2"></td>
						</tr>
					</table>
					<a class="view_details_link" href="product.php?id=<?php echo $row['product_id']; ?>&amp;p_cat=<?php echo $row['p_cat']; ?>">مشاهده جزئيات</a>
					<button type="button" value="enabled" class="atc" id="<?php echo $row['company'].' '.$row['model']; ?>">اضافه به سبد خريد</button>
				</div>
			</div>
				
			<?php }
		}
	}

	public function get_query($product, $arr) {
		$str = '';
		$product = '`'.$product.'` ';
		$sql = 'SELECT * FROM ' . $product;
		
		if ( empty($arr) ) { return $sql; }
		
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
										$field = '`'.   $k1 .'_'. $k2 .'_'. $k3   .'`';
										$value = '"'. $v3 . '"';
										
										$sql .= $field .'='. $value;
										$sql .= ' OR ';
									}
									
								} else {
									//echo $k1 .'_'. $k2 .' = '. $v3.'<br>';
									if ($v3 !== 'none') {
										$field = '`'.   $k1 .'_'. $k2   .'`';
										$value = '"'. $v3 . '"';
										
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
								$field = '`'.   $k1 .'_'. $k2   .'`';
								$value = '"'. $v2 . '"';
								
								$sql .= $field .'='. $value;
								$sql .= ' OR ';
							}
						} else {
							//echo $k1 .' = '. $v2 .'<br>';
							if ($v2 !== 'none') {
								$field = '`'. $k1 .'`';
								$value = '"'. $v2 . '"';
								
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
						$field = '`'. $k1 .'`';
						$value = '"'. $v1 . '"';
						
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
		return $sql;
	}

	public function get_options($product) {
		$content = get_file('../layouts/search_options/'. $product .'.htm');
		
		$html  = '<div id="search_options">';
		$html .= $content;
		$html .= '</div>';
		
		return $html;
	}

	public function get_sort() {
		$sort = '
			<div id="sort_options">
				<select>
					<option value="">نرولي</option>
					<option value="">صعودي</option>
				</select>
				<select>
					<option value="view">بازديد</option>
					<option value="price">فيمت</option>
					<option value="rate">امتياز کاربران</option>
					<option value="year">تاريخ انتشار</option>
					<option value="available">موحود</option>
				</select>
				<label>مرتب سازي بر اساس</label>
			</div>
		';
		return $sort;
	}

	public function get_comments($product) {
		global $database;
		
		$sql = 'SELECT `avatar_pic`,`username`,`firstname`,`lastname`,`comment_date`,`comment_text` ';
		$sql .= 'FROM `comments` ';
		$sql .= 'JOIN `users` USING(user_id) ';
		$sql .= 'JOIN `'. $product .'` USING(product_id);';
		$database->query('SET NAMES utf8;');
		$database->query($sql);
		
		while ($row = $database->fetch_assoc()) { ?>
			<li>
				<div class="comment_wrap">
					<div class="avatar">
						<a href="#"><img alt="" src="images/avatar.png" height="60" width="60"/></a>
					</div>
					
					<div class="comment">
						<div class="username">
							<a href="http://www.site.com/myProfile"><?php echo $row['firstname'].' '.$row['lastname']; ?></a>
						</div>
						
						<div class="comment_text"><p><?php echo $row['comment_text']; ?></p></div>
						
						<div class="comment_time"><time pubdate="" datetime=""><?php echo $row['comment_date']; ?></time></div>
					</div>
				
				</div>
			</li>
		<?php }
	}
	
}

$product = new Product();
 ?>