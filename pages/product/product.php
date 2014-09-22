<?php
require_once('../../libs/php/initialize.php');
require_once(PRODUCT_PHP . 'product_class.php');
require_once(PRODUCT_PHP . 'comment_class.php');

$p_cat = isset($_GET['p_cat']) ? $_GET['p_cat'] : null;
$id = isset($_GET['id']) ? $_GET['id'] : null;

//($p_cat!=='motherboard' || $p_cat!=='cpu' || $p_cat!=='graphic' || $p_cat!=='memory')
if (!$p_cat ) { redirect_to(PAGES.'shop/shop.php'); }


$product = new Product($p_cat.'s');
$this_product = $product->find_by_id($id);
$session->product_id($id);


include_header('product', $this_product->company .' '. $this_product->model);
?>


<div id="product">

<div id="top">
	<ul class="other">
		<li><img src="<?php echo $this_product->img_2; ?>"></li>
		<li><img src="<?php echo $this_product->img_3; ?>"></li>
		<li><img src="<?php echo $this_product->img_4; ?>"></li>
	</ul>
	<img src="<?php echo $this_product->img_1; ?>" class="product"/>
	
	<table class="header">
		<tr>
			<td><img src="<?php echo $this_product->img_brand; ?>" class="brand" /></td><th>کمپانی</th>
		</tr>
		<tr>
			<td><img src="<?php if( $this_product->has_property('img_chipset') ) echo $this_product->img_chipset; ?>" class="brand" /></td><th>چیپست</th>
		</tr>
	</table>
</div>
	
<div id="product_details">
	
	<?php
	include('html/product_details/'. $this_product->p_cat .'.php');
	?>

	
</div>


<div id="product_comments">
		<h4>نظرات کاربران</h4>
		
		<ul id="comments">
		
		<?php
		$comments = $this_product->comments();
		
		//$database->query('SET NAMES utf8;');
		
		
		foreach ($comments as $comment): ?>
			<li>
				<div class="comment_wrap">
				
					<div class="avatar"><a href="#"><img alt="" src="<?php echo $comment->avatar_pic; ?>" height="60" width="60"/></a></div>
					
					<div class="comment">
						<div class="username"><a href="http://www.site.com/myProfile"><?php echo $comment->firstname .' '. $comment->lastname; ?></a></div>
						
						<div class="comment_text"><p><?php echo $comment->comment_text; ?></p></div>
						
						<div class="comment_time"><time datetime=""><?php echo $comment->comment_date; ?></time></div>
					</div>
				
				</div>
			</li>
			
					
		<?php endforeach; ?>
		
		</ul>
		
		
		
		<div id="add_comment">
			<div id="text_editor_buttons">
				<ul>
					<li><a id="text_editor_quote" class="tetbb"></a></li>
					<li><a id="text_editor_link" class="tetbb"></a></li>
					<li><a id="text_editor_image" class="tetbb"></a></li>
					<li><a id="text_editor_italic" class="tetbb"></a></li>
					<li><a id="text_editor_bold" class="tetbb"></a></li>
				</ul>
			</div>
			
			
			<a class="button" id="add_comment_button" style="clear:both;">اضافه کردن نظر</a>
			
		</div>
	




</div>



<?php include_footer('product'); ?>

