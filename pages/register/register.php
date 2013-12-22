<?php require_once('library/initialize.php');
include_layout('header.php', 'ثبت نام');
?>

<div class="register">
	<form action="register.php" method="POST">
		<table>
			<tr>
				<td><input type="text" name="username" maxlength="30" size="15" placeholder="       نام کاربری" class="fft"></td><td><span class="red">*</span> : نام کاربری</td>
			</tr>
			<tr>
				<td><input type="password" name="password" maxlength="30" size="15" placeholder="        رمز عبور" class="fft"></td><td><span class="red">*</span> : رمز عبور</td>
			</tr>
			<tr>
				<td><input type="password" name="password_again" maxlength="30" size="15" placeholder="     تکرار رمز عبور" class="fft"></td><td><span class="red">*</span> : تکرار رمز عبور</td>
			</tr>
			<tr>
				<td><input type="text" name="first_name" maxlength="30" size="15" placeholder="            نام" class="drtl fft"></td><td><span class="red">*</span> : نام</td>
			</tr>
			<tr>
				<td><input type="text" name="last_name" maxlength="30" size="15" placeholder="     نام خانوادگی" class="drtl fft"></td><td><span class="red">*</span> : نام خانوادگی</td>
			</tr>
			<tr>
				<td><select><option value="none">...</option><option value="male">مرد</option><option value="female">زن</option></select></td><td><span class="red">*</span> : جنسیت</td>
			</tr>
			<tr>
				<td>
					<select><option value="none">...</option></select><label>روز</label>
					<select><option value="none">...</option></select><label>ماه</label>
					<select><option value="none">...</option></select><label>سال</label>
				</td>
				<td>: تاریخ تولد</td>
			</tr>
			<tr>
				<td><input type="text" name="tell" maxlength="12" size="15" placeholder="       تلفن ثابت" class="fft"></td><td>: تلفن ثابت</td>
			</tr>
			<tr>
				<td><input type="text" name="mobile" maxlength="11" size="15" placeholder="         موبایل" class="fft"></td><td><span class="red">*</span> : موبایل</td>
			</tr>
			<tr>
				<td><input type="text" name="mobile" maxlength="11" size="15" placeholder="      کد پستی" class="fft"></td><td><span class="red">*</span> : کد پستی</td>
			</tr>
			<tr>
				<td><select><option value="none">...</option></select></td><td>: استان</td>
			</tr>
			<tr>
				<td><input type="text" name="mobile" maxlength="11" size="15" placeholder="         موبایل" class="fft"></td><td><span class="red">*</span> : شهر</td>
			</tr>
			<tr>
				<td><textarea name="address" cols="45" rows="3" maxlength="140" class="fft"></textarea></td><td><span class="red">*</span> : آدرس پستی</td>
			</tr>
			<tr>
				<td colspan="2"><input type="button" name="clear_all" value="پاک کردن همه" class="button"></td><td colspan="2"><input type="submit" name="submit" value="ثبت نام" class="button"></td>
			</tr>
		</table>
	</form>
</div>




<?php include_layout('footer.php'); ?>