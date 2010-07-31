$('#content h1').after('<input type="file" id="arquivo" />')
$('#content h1').after('<input type="submit" id="submit"/>')
$('#submit').click(function() {
	var data = document.getElementById('arquivo').files[0].getAsText('utf-8');
	var csv = jQuery.csv()(data);
	$(csv).each(function(index) {
		$('#activities_0_items_' + (index + 4) + '_row').after(new_row(index + 5));
		row = csv[index];
		$('#activities_0_items_' + index + '_activity').val(row[5]);
		$('#activities_0_items_' + index + '_category').replaceWith('<input type="text" id="activities_0_items_' + index + '_category" value="' + row[6] +'"/>')
		$('#activities_0_items_' + index + '_item_date_string').val(Date.parseExact(row[0], "dd/MM/yyyy").toString('dd MMM yyyy'));
		$('#activities_0_items_' + index + '_amount').val($.trim(row[1]));
		// $('#activities_0_items_' + index + '_currency').val('AUD');
		$('#activities_0_items_' + index + '_description').val(row[3]);
		$('#activities_0_items_' + index + '_vendor').val(row[2]);
		$('#activities_0_items_' + index + '_payment').replaceWith('<input type="text" id="activities_0_items_' + index + '_payment" value="' + row[7] +'"/>')
	});
	$('#sub[value=Save as draft]').click();
});

var new_row = function(index) {
	return '<tr id="activities_0_items_' + index + '_row">' +
	    '<td><input id="activities_0_items_' + index + '_activity" name="expense_items[' + index + '][activity]" type="hidden" value="" /></td>' +
	    '<td><select id="activities_0_items_' + index + '_category" name="expense_items[' + index + '][category]" style="width: 150px;"><option value=""></option>' +
		'<option value="EXPAUPGR">Airfare &amp; Upgrades</option>' +
		'<option value="EXPCHFEE">Airfare Change Fees</option>' +
	'<option value="EXPBENFITNESS">Benefits (Fitness)</option>' +
	'<option value="EXPBENTRANSIT">Benefits (Transit)</option>' +
	'<option value="EXPBOOKS">Books</option>' +
	'<option value="EXPBMEAL">Business Meals</option>' +
	'<option value="EXPCRENT">Car Rental</option>' +
	'<option value="EXPCONFE">Conference</option>' +
	'<option value="EXPCORPAPT">Corporate Apartment</option>' +
	'<option value="EXPDSUBS">Dues &amp; Subscriptions</option>' +
	'<option value="EXPEMPLACTIVITY">Employee Activities (OZ/China/India ONLY)</option>' +
	'<option value="EXPENTERTAIN">Entertainment (OZ/China/India ONLY)</option>' +
	'<option value="EXPGAS">Gas</option>' +
	'<option value="EXPHSINT">High Speed Internet</option>' +
	'<option value="EXPHOTEL">Hotel</option>' +
	'<option value="EXPLTRAN">Local Transportation</option>' +
	'<option value="EXPMILE">Mileage/Parking/Tolls</option>' +
	'<option value="EXPOSUPP">Office Supplies</option>' +
	'<option value="EXPOTHER">Other</option>' +
	'<option value="EXPPASS">Passport/Visa/Immigration</option>' +
	'<option value="EXPSTIPEND">Per Diem/Stipend (pre-approved)</option>' +
	'<option value="EXPPSHIP">Postage &amp; Shipping</option>' +
	'<option value="EXPSALARYSAC">Salary Sacrifice (OZ/India ONLY)</option>' +
	'<option value="EXPTELE">Telephone</option>' +
	'<option value="EXPTRNG">Training/Education</option></select></td>        ' +
	    '<td class="date_column">' +
	      '<input id="activities_0_items_' + index + '_item_date_string" name="expense_items[' + index + '][item_date_string]" onblur="copy_date(0, 4)" size="18" type="text" />' +
	      '<input id="activities_0_items_' + index + '_item_date_copy" name="expense_items[' + index + '][item_date_copy]" type="hidden" />' +
	    '</td>' +
	    '<td><input id="activities_0_items_' + index + '_amount" maxlength="12" name="expense_items[' + index + '][amount]" size="20" type="text" /></td>' +
	    '<td>' +
	      '<span class="select-box">' +
	        '<select id="activities_0_items_' + index + '_currency" name="expense_items[' + index + '][currency]" style="width: 100px;"><option value=""></option>' +
			'<option value="AUD" selected="selected">AUD - Australian Dollar</option>' +
			'<option value="BRL">BRL - Brazilian Real</option>' +
			'<option value="USD">USD - US Dollar</option>' +
			'<option value="USN">USN - US Dollar (Next day)</option>' +
			'<option value="USS">USS - US Dollar (Same day)</option>' +
	      '</span>' +
	    '</td>       ' + 
	    '<td><input id="activities_0_items_' + index + '_description" maxlength="255" name="expense_items[' + index + '][description]" size="14" type="text" /></td>' +
	    '<td><input id="activities_0_items_' + index + '_vendor" maxlength="100" name="expense_items[' + index + '][vendor]" size="10" type="text" /></td>' +
	    '<td>' +
	      '<span class="select-box">' +
	      '  <select id="activities_0_items_' + index + '_payment" name="expense_items[' + index + '][payment]" style="width: 120px;"><option value=""></option>' +
			'	<option value="PMTPERS">Personal Card</option>' +
			'	<option value="PMTCASH">Personal Cash or Check</option>' +
			'	<option value="PMTVEND">TW Billed by Vendor</option>' +
			'	<option value="PMTAMEX">TW Corp. Amex (OZ ONLY)</option>' +
			'	<option value="PMTCOMP">TW Travel Dept. Paid</option>' +
		'		<option value="PMTMSTC">US Bank Prepaid Credit Card (US ONLY)</option>' +
		'	</select>' +
	     ' </span>' +
	    '</td>       ' + 
	    '<td><input id="activities_0_items_' + index + '_attendees" maxlength="255" name="expense_items[' + index + '][attendees]" size="14" type="text" /></td>' +
	    '<td align="center">' +
		'	<input id="activities_0_items_' + index + '_personal" name="expense_items[' + index + '][personal]" type="checkbox" value="1" />' +
		'	<input name="expense_items[' + index + '][personal]" type="hidden" value="0" />' +
	'	</td>' +
	'</tr>';
};