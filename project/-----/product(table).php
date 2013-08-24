<?php
require_once('inc/initialize.php');

if (isset($_GET['p_cat'])) {
	$p_cat_test = $_GET['p_cat'];
	if ($p_cat_test == 'motherboard' || $p_cat_test == 'cpu' || $p_cat_test == 'graphic' || $p_cat_test == 'memory') {
		$p_cat = $p_cat_test;
	} else {
		redirect_to('shop.php');
	}
} else {
	redirect_to('shop.php');
}

$database->query('SELECT * FROM '.$p_cat);
$products[0] = null;

while ($row = $database->fetch_assoc()) {
	$products[] = $row; 
} 
if (isset($_GET['id'])) {
	$id = $_GET['id'];
	$product = $products[$id]; 
} else {
  redirect_to('pc-shop.php');
}

include_layout('header.php', $product['model']);
?>

<div class="product_panel">
	<ul class="other">
		<li><img src="<?php echo $product['img_2']; ?>"></li>
		<li><img src="<?php echo $product['img_3']; ?>"></li>
		<li><img src="<?php echo $product['img_4']; ?>"></li>
	</ul>
	<img src="<?php echo $product['img_1']; ?>" class="product"/>
	
	<table class="header">
		<tr>
			<td><img src="<?php echo $product['img_brand']; ?>" class="brand" /></td><th>کمپانی</th>
		</tr>
		<tr>
			<td><img src="<?php echo $product['img_chipset']; ?>" class="brand" /></td><th>چیپست</th>
		</tr>
	</table>
	
	
	<table border="1" class="details">
		<tr>
			<td><?php echo $product['company']; ?></td><th>کمپانی</th>
		</tr>
		
		<tr>
			<td><?php echo $product['model']; ?></td><th>مدل</th>
		</tr>
		
		<tr>
			<td>Intel&reg; C606 Express Chipset</td><th>چیپست</th>
		</tr>
		
		<tr>
			<td>
				<table border="1">
					<tr>
						<td>INTEL</td><td>کمپانی</td>
					</tr>
					<tr>
						<td>2011</td><td>سوکت</td>
					</tr>
					<tr>
						<td>
							<ol>
								<li>Support for Intel&reg; Core&trade; i7 processors in the LGA2011 package</li>
								<li>L3 cache varies with CPU</li>
							</ol>
						</td>
						<td>توضیحات</td>
					</tr>
				</table>
			</td>
			<th>سی پی یو</th>
		</tr>
		
		
		<tr>
			<td>
				<table border="1">
					<tr>
						<td>
							<table border="1">
								<tr>
									<td>8</td><td>تعداد اسلات</td>
								</tr>
								<tr>
									<td>64</td><td>حداکثر حجم</td>
								</tr>
								<tr>
									<td>2133-1866-1600-1333-1066</td><td>باس های</td>
								</tr>
							</table>
						</td>
						<td>DDR III</td>
					</tr>
					
					
					<tr>
						<td>
							<table border="1">
								<tr>
									<td></td><td>تعداد اسلات</td>
								</tr>
								<tr>
									<td></td><td>حداکثر حجم</td>
								</tr>
								<tr>
									<td></td><td>باس های</td>
								</tr>
							</table>
						</td>
						<td>DDR II</td>
					</tr>
					
					<tr>
						<td>4 channel</td><td>معماری</td>
					</tr>
					
					<tr>
						<td>
							<table border="1">
								<tr>
									<td>بلی</td><td>unbuffered ecc memory modules</td>
								</tr>
								<tr>
									<td>خیر</td><td>non-ecc memory modules</td>
								</tr>
								<tr>
									<td>خیر</td><td>xmp memory modules</td>
								</tr>
							</table>
						</td>
						<td>پشتیبانی از</td>
					</tr>
				</table>
			</td>
			
			<th>مموری</th>
		</tr>
		
		
		
		
		
		<tr>
			<td>
				<table border="1">
					<tr>
						<td>Realtek ALC898</td><td>اسم چیپ</td>
					</tr>
					
					<tr>
						<td>2/4/5.1/7.1</td><td>کانال ها</td>
					</tr>
					
					
					<td>
						<table border="1">
							<tr>
								<td>بلی</td><td>SPDIF Out</td>
							</tr>
							<tr>
								<td>خیر</td><td>HD Audio</td>
							</tr>
							<tr>
								<td>بلی</td><td>Dolby® Home Theater</td>
							</tr>
							<tr>
								<td>خیر</td><td>Eax® Advanced HD™ 5.0</td>
							</tr>
							<tr>
								<td>خیر</td><td>X-Fi Xtreme Fidelity®</td>
							</tr>
						</table>
					</td>
					<td>پشتیبانی از</td>
				</table>
			</td>
			
			<th>صدا</th>
		</tr>
		
		<tr>
			<td>
				<table border="1">
					<tr>
						<td>Intel GbE LAN chip (10/100/1000 Mbit) (LAN1)</td><td>چیپ یک</td>
					</tr>
					<tr>
						<td></td><td>چیپ دو</td>
					</tr>
				</table>
			</td>
			
			<th>شبکه</th>
		</tr>
		
		<tr>
			
			
			<td>
				<table border="1">
					<tr>
						<td>
							<table border="1">
								<tr>
									<td>
										<table border="1">
											<tr>
												<td>2</td><td>تعداد اسلات</td>
											</tr>
											<tr>
												<td>PCIEX16_1, PCIEX16_2</td><td>اسم اسلات روی مادربرد</td>
											</tr>
											<tr>
												<td></td><td>نکته</td>
											</tr>
										</table>
									</td>
									<td>Running at 16X</td>
								</tr>
								
								<tr>
									<td>
										<table border="1">
											<tr>
												<td>1</td><td>تعداد اسلات</td>
											</tr>
											<tr>
												<td>PCIEX8</td><td>اسم اسلات روی مادربرد</td>
											</tr>
											<tr>
												<td></td><td>نکته</td>
											</tr>
										</table>
									</td>
									<td>Running at 8X</td>
								</tr>
								
								<tr>
									<td>
										<table border="1">
											<tr>
												<td>1</td><td>تعداد اسلات</td>
											</tr>
											<tr>
												<td>PCIEX4</td><td>اسم اسلات روی مادربرد</td>
											</tr>
											<tr>
												<td></td><td>نکته</td>
											</tr>
										</table>
									</td>
									<td>Running at 4X</td>
								</tr>
								
								<tr>
									<td></td><td>نکته</td>
								</tr>
							</table>
						</td>
						<td>PCI Express X16</td>
					</tr>
					
					
					<tr>
						<td>
							<table border="1">
								<tr>
									<td></td><td>تعداد اسلات</td>
								</tr>
								<tr>
									<td></td><td>نکته</td>
								</tr>
							</table>
						</td>
						<td>PCI Express X1</td>
					</tr>
					
					
					
					<tr>
						<td></td><td>PCI</td>
					</tr>
				</table>
			</td>
			
			<th>اسلات های گسترش</th>
		</tr>
		
		<tr>
			<td>
				<table border="1">
					<tr>
						<td>
							<table border="1" >
								<tr>
									<td></td><td>اسم چیپ</td>
								</tr>
								
								<tr>
									<td>
										<table border="1">
											<tr>
												<td></td><td>تعداد</td>
											</tr>
											<tr>
												<td></td><td>نسخه</td>
											</tr>
											<tr>
												<td></td><td>حداکثر</td>
											</tr>
										</table>
									</td>
									<td>SATA 6Gb/s اتصال</td>
								</tr>
								
								<tr>
									<td>
										<table border="1">
											<tr>
												<td></td><td>تعداد</td>
											</tr>
											<tr>
												<td></td><td>نسخه</td>
											</tr>
											<tr>
												<td></td><td>حداکثر</td>
											</tr>
										</table>
									</td>
									<td>SATA 3Gb/s اتصال</td>
								</tr>
								
								<tr>
									<td>
										<table border="1">
											<tr>
												<td></td><td>Raid 0</td>
											</tr>
											<tr>
												<td></td><td>Raid 1</td>
											</tr>
											<tr>
												<td></td><td>Raid 5</td>
											</tr>
											<tr>
												<td></td><td>Raid 10</td>
											</tr>
											<tr>
												<td></td><td>نکته</td>
											</tr>
										</table>
									</td>
									<td>Raid پشتیبانی از</td>
								</tr>
								
								<tr>
									<td>
										<table border="1">
											<tr>
												<td></td><td>تعداد</td>
											</tr>
											<tr>
												<td></td><td>ورژن</td>
											</tr>
											<tr>
												<td></td><td>حداکثر</td>
											</tr>
											<tr>
												<td></td><td>نکته</td>
											</tr>
											
											<tr>
												<td>
													<table border="1">
														<tr>
															<td></td><td>Raid 0</td>
														</tr>
														<tr>
															<td></td><td>Raid 1</td>
														</tr>
														<tr>
															<td></td><td>Raid 5</td>
														</tr>
														<tr>
															<td></td><td>Raid 10</td>
														</tr>
													</table>
												</td>
												<td>پشتیبانی از Raid</td>
											</tr>
										</table>
									</td>
									<td>SAS 3Gb/s Connector</td>
								</tr>
							</table>
						</td>
						<td>چیپ یک</td>
					</tr>
					
					
					
					
					<tr>
						<td>
							<table border="1">
								<tr>
									<td></td><td>اسم چیپ</td>
								</tr>
								
								<tr>
									<td>
										<table border="1">
											<tr>
												<td></td><td>تعداد</td>
											</tr>
											<tr>
												<td></td><td>نسخه</td>
											</tr>
											<tr>
												<td></td><td>حداکثر</td>
											</tr>
										</table>
									</td>
									<td>SATA 6Gb/s اتصال</td>
								</tr>
								
								<tr>
									<td>
										<table border="1">
											<tr>
												<td></td><td>تعداد</td>
											</tr>
											<tr>
												<td></td><td>نسخه/توضیح</td>
											</tr>
											<tr>
												<td></td><td>حداکثر</td>
											</tr>
											<tr>
												<td></td><td>نکته</td>
											</tr>
										</table>
									</td>
									<td>eSATA 6Gb/s اتصال</td>
								</tr>
								
								<tr>
									<td>
										<table border="1">
											<tr>
												<td></td><td>Raid 0</td>
											</tr>
											<tr>
												<td></td><td>Raid 1</td>
											</tr>
											<tr>
												<td></td><td>Raid 5</td>
											</tr>
											<tr>
												<td></td><td>Raid 10</td>
											</tr>
											<tr>
												<td></td><td>نکته</td>
											</tr>
										</table>
									</td>
									<td>Raid پشتیبانی از</td>
								</tr>
							</table>
						</td>
						<td>چیپ دو</td>
					</tr>
				</table>
			</td>
		
			<th>واسط ذخیره سازی</th>
		</tr>
		
		
		
		
		
		<tr>
			<td>
				<table border="1">
					<tr>
						<td>
							<table border="1">
								<tr>
									<td></td><td>تعداد پورت</td>
								</tr>
								<tr>
									<td></td><td>نسخه پورت</td>
								</tr>
								<tr>
									<td></td><td>تعداد پورت های موجود روی صفحه پشتی مادربرد</td>
								</tr>
								<tr>
									<td></td><td>تعداد پورت های قابل دسترسی از طریق هدرهای داخلی مادربرد</td>
								</tr>
							</table>
						</td>
						<td>چیپ یک</td>
					</tr>
					
					<tr>
						<td>
							<table border="1">
								<tr>
									<td></td><td>اسم چیپ</td>
								</tr>
								<tr>
									<td></td><td>تعداد چیپ</td>
								</tr>
								<tr>
									<td></td><td>تعداد پورت</td>
								</tr>
								<tr>
									<td></td><td>نسخه پورت</td>
								</tr>
								<tr>
									<td></td><td>تعداد پورت های موجود روی صفحه پشتی مادربرد</td>
								</tr>
								<tr>
									<td></td><td>تعداد پورت های قابل دسترسی از طریق هدرهای داخلی مادربرد</td>
								</tr>
								<tr>
									<td></td><td>نکته</td>
								</tr>
							</table>
						</td>
						<td>چیپ دو</td>
					</tr>
					
					<tr>
						<td>
							<table border="1">
								<tr>
									<td></td><td>اسم چیپ</td>
								</tr>
								<tr>
									<td></td><td>تعداد چیپ</td>
								</tr>
								<tr>
									<td></td><td>تعداد پورت</td>
								</tr>
								<tr>
									<td></td><td>نسخه پورت</td>
								</tr>
								<tr>
									<td></td><td>تعداد پورت های موجود روی صفحه پشتی مادربرد</td>
								</tr>
								<tr>
									<td></td><td>تعداد پورت های قابل دسترسی از طریق هدرهای داخلی مادربرد</td>
								</tr>
								<tr>
									<td></td><td>نکته</td>
								</tr>
							</table>
						</td>
						<td>چیپ سه</td>
					</tr>
				</table>
			</td>
			<th>یو اس بی</th>
		</tr>
		
		<tr>
			<td>
				<table border="1">
					<tr>
						<td></td><td>اسم چیپ</td>
					</tr>
					<tr>
						<td></td><td>تعداد پورت</td>
					</tr>
					<tr>
						<td></td><td>نسخه پورت</td>
					</tr>
					<tr>
						<td></td><td>تعداد پورت های موجود روی صفحه پشتی مادربرد</td>
					</tr>
					<tr>
						<td></td><td>IEEE 1394a تعداد پورت های قابل دسترسی از طریق هدر داخلی</td>
					</tr>
				</table>
			</td>
			<th>IEEE 1394</th>
		</tr>
		
		<tr>
			<td>
				<table border="1">
					<tr>
						<td></td><td>24-pin ATX main power connector</td>
					</tr>
					<tr>
						<td></td><td>8-pin ATX 12V power connector</td>
					</tr>
					<tr>
						<td></td><td>4-pin ATX 12V power connector</td>
					</tr>
					<tr>
						<td></td><td>PCIe power connector</td>
					</tr>
					<tr>
						<td></td><td>SATA 6Gb/s connector</td>
					</tr>
					<tr>
						<td></td><td>SATA 3Gb/s connector</td>
					</tr>
					<tr>
						<td></td><td>SAS 3Gb/s connector</td>
					</tr>
					<tr>
						<td></td><td>mSATA connector</td>
					</tr>
					<tr>
						<td></td><td>CPU fan header</td>
					</tr>
					<tr>
						<td></td><td>system fan header</td>
					</tr>
					<tr>
						<td></td><td>front panel header</td>
					</tr>
					<tr>
						<td></td><td>front panel audio header</td>
					</tr>
					<tr>
						<td></td><td>S/PDIF Out header</td>
					</tr>
					<tr>
						<td></td><td>USB 3.0/2.0 header</td>
					</tr>
					<tr>
						<td></td><td>USB 2.0/1.1 header</td>
					</tr>
					<tr>
						<td></td><td>IEEE 1394a header</td>
					</tr>
					<tr>
						<td></td><td>serial port header</td>
					</tr>
					<tr>
						<td></td><td>parallel port</td>
					</tr>
					<tr>
						<td></td><td>chassis intrusion header</td>
					</tr>
					<tr>
						<td></td><td>digital microphone header</td>
					</tr>
					<tr>
						<td></td><td>speaker header</td>
					</tr>
					<tr>
						<td></td><td>AIO speaker header</td>
					</tr>
					<tr>
						<td></td><td>LVDS drive voltage header</td>
					</tr>
					<tr>
						<td></td><td>LVDS connector</td>
					</tr>
					<tr>
						<td></td><td>flat panel display power header</td>
					</tr>
					<tr>
						<td></td><td>flat panel display power connector</td>
					</tr>
					<tr>
						<td></td><td>flat panel display switch header</td>
					</tr>
					<tr>
						<td></td><td>backlight switch header</td>
					</tr>
					<tr>
						<td></td><td>WIFI activity indicator LED header</td>
					</tr>
					<tr>
						<td></td><td>Clear CMOS jumper</td>
					</tr>
					<tr>
						<td></td><td>Trusted Platform Module (TPM) header</td>
					</tr>
					<tr>
						<td></td><td>onboard voltage measurement module</td>
					</tr>
					<tr>
						<td></td><td>Voltage Measurement Points</td>
					</tr>
					<tr>
						<td></td><td>power button</td>
					</tr>
					<tr>
						<td></td><td>reset button</td>
					</tr>
					<tr>
						<td></td><td>Clear CMOS button</td>
					</tr>
					<tr>
						<td></td><td>Gear button</td>
					</tr>
					<tr>
						<td></td><td>CPU BCLK Down button</td>
					</tr>
					<tr>
						<td></td><td>CPU BCLK Up button</td>
					</tr>
					<tr>
						<td></td><td>CPU Ratio Down button</td>
					</tr>
					<tr>
						<td></td><td>CPU Ratio Up button</td>
					</tr>
					<tr>
						<td></td><td>BIOS Switch</td>
					</tr>
					<tr>
						<td></td><td>LN2 switch</td>
					</tr>
				</table>
				<th>اتصال های ورودی/خروجی داخلی</th>
			</td>
		</tr>
		
		<tr>
			<td>
				<table border="1">
					<tr>
						<td></td><td>PS/2 keyboard port</td>
					</tr>
					<tr>
						<td></td><td>PS/2 mouse port</td>
					</tr>
					<tr>
						<td></td><td>PS/2 keyboard/mouse port</td>
					</tr>
					<tr>
						<td></td><td>CPU overclocking button</td>
					</tr>
					<tr>
						<td></td><td>BIOS switch button</td>
					</tr>
					<tr>
						<td></td><td>Clear CMOS button</td>
					</tr>
					<tr>
						<td></td><td>IEEE 1394a port</td>
					</tr>
					<tr>
						<td></td><td>USB 3.0/2.0 port</td>
					</tr>
					<tr>
						<td></td><td>USB 2.0/1.1 port</td>
					</tr>
					<tr>
						<td></td><td>eSATA/USB Combo connector</td>
					</tr>
					<tr>
						<td></td><td>eSATA 6Gb/s connector</td>
					</tr>
					<tr>
						<td></td><td>RJ-45 port</td>
					</tr>
					<tr>
						<td></td><td>parallel port</td>
					</tr>
					<tr>
						<td></td><td>serial port</td>
					</tr>
					<tr>
						<td></td><td>optical S/PDIF Out connector</td>
					</tr>
					<tr>
						<td></td><td>coaxial S/PDIF Out connector</td>
					</tr>
					<tr>
						<td></td><td>DC-In power connector</td>
					</tr>
					<tr>
						<td></td><td>audio jacks</td>
					</tr>
					<tr>
						<td></td><td>audio jacks_detail</td>
					</tr>
					<tr>
						<td></td><td>D-Sub port</td>
					</tr>
					<tr>
						<td></td><td>DVI-D port</td>
					</tr>
					<tr>
						<td></td><td>HDMI port</td>
					</tr>
					<tr>
						<td></td><td>DisplayPort</td>
					</tr>
				</table>
			</td>
			<th>پورت های صفحه پشتی</th>
		</tr>
		
		<tr>
			<td></td><th>I/O Controller</th>
		</tr>
		
		<tr>
			<td>
				<table border="1">
					<tr>
						<td></td><td>System voltage detection</td>
					</tr>
					<tr>
						<td></td><td>CPU/System temperature detection</td>
					</tr>
					<tr>
						<td></td><td>CPU/System fan speed detection</td>
					</tr>
					<tr>
						<td></td><td>CPU overheating warning</td>
					</tr>
					<tr>
						<td></td><td>CPU/System fan fail warning</td>
					</tr>
					<tr>
						<td></td><td>CPU/System fan speed control</td>
					</tr>
				</table>
			</td>
			<th>H/W Monitoring</th>
		</tr>
		
		<tr>
			<td>
				<ol>
					<li>something</li>
					<li>something</li>
				</ol>
			</td>
			<th>بایوس</th>
		</tr>
		
		<tr>
			<td>
				<table border="1">
					<td>
						<table border="1">
							<tr>
								<td></td><td>@BIOS</td>
							</tr>
							<tr>
								<td></td><td>Q-Flash</td>
							</tr>
							<tr>
								<td></td><td>Xpress BIOS Rescue</td>
							</tr>
							<tr>
								<td></td><td>Download Center</td>
							</tr>
							<tr>
								<td></td><td>Xpress Install</td>
							</tr>
							<tr>
								<td></td><td>Xpress Recovery2</td>
							</tr>
							<tr>
								<td></td><td>EasyTune</td>
							</tr>
							<tr>
								<td></td><td>Smart 6™</td>
							</tr>
							<tr>
								<td></td><td>eXtreme Hard Drive (X.H.D)</td>
							</tr>
							<tr>
								<td></td><td>ON/OFF Charge</td>
							</tr>
							<tr>
								<td></td><td>Cloud OC</td>
							</tr>
							<tr>
								<td></td><td>TouchBIOS</td>
							</tr>
							<tr>
								<td></td><td>3TB+ Unlock</td>
							</tr>
							<tr>
								<td></td><td>Q-Share</td>
							</tr>
							<tr>
								<td></td><td>3D Power</td>
							</tr>
						</table>
					</td>
					<td>پشتیبانی از</td>
				</table>
			</td>
			<th>قابلیت های خاص</th>
		</tr>
		
		<tr>
			<td></td><th>نرم افزار های همراه</th>
		</tr>
		
		<tr>
			<td></td><th>سیستم عامل</th>
		</tr>
		
		<tr>
			<td></td><th>Form Factor</th>
		</tr>
		
		<tr>
			<td>
				<ol>
					<li>something</li>
					<li>something</li>
				</ol>
			</td>
			<th>Remark</th>
		</tr>
	</table>
</div>

<div class="product_comment">
	<label>نظرات</label>
</div>

<?php include_layout('footer.php'); ?>