$(document).ready(function(){
	var api = 'http://api.giphy.com/v1/gifs/search?q='
		,key = '&api_key=dc6zaTOxFJmzC'
		,target = $('#target')
		,input = $('input');
	
	$('input').attr('placeholder', 'Your Giff');
	$('input').on('click', function(){
		$('input').val('');
	});

	$('input').on('change', getData);
	function getData() {
		var url = api + input.val().replace(/\s/g, '+') + key;
		$.getJSON( url ).done(function(giff){
			gotData(giff);
		});
	};
	function gotData(giff){
		var index = 0;
		while(index < giff.data.length){
			var img = $('<img />', {
			src: giff.data[index].images.fixed_height.url
			});
			img.prependTo(target);
			index++;
		};
	};
	getData();
});
