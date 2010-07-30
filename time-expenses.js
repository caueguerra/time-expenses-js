var script = document.createElement("script");
script.src="http://caueguerra.github.com/time-expenses-js/jquery-1.4.2.min.js";
document.body.appendChild(script);

var script = document.createElement("script");
script.src="http://caueguerra.github.com/time-expenses-js/jquery.dateFormat.js";
document.body.appendChild(script);

script = document.createElement("script");
script.src="http://caueguerra.github.com/time-expenses-js/jquery.csv.js";
document.body.appendChild(script);


$('#content h1').after('<input type="file" id="arquivo" />')
$('#content h1').after('<input type="submit" id="submit"/>')
$('#submit').click(function() {
	var data = document.getElementById('arquivo').files[0].getAsText('utf-8');
	var csv = jQuery.csv()(data);
	csv.sort(function(a, b) {
		return (a[5] < b[5]) ? -1 : (a[5] > b[5]) ? 1 : 0
	});
	$(csv).each(function(index) {
		row = csv[index];
		$('#activities_0_activity').val(row[5]);
		
		$('#activities_0_items_0_item_date_string').val(Date.parseExact(row[0], "dd/MM/yyyy").toString('dd MMM yyyy'));
		$('#activities_0_items_0_amount').val();
		
	});
});