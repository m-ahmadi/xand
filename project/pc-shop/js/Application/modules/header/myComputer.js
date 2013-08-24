Header.extend('click', 'myComputer', function (t, m, e) {

	if (t.id == 'mc_button') {
		this.minMax(t.id, 'mc-open', 'mc_min', 'mc_max');
		
	}
});
