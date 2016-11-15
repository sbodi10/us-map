$(document).ready(function() {

	$('#map').usmap({
		stateStyles: {fill: 'green'},
		stateHoverStyles: {fill: 'blue'},
		stateHoverAnimation: 300,
		stateSpecificStyles: {
			'MD': {fill: 'yellow'},
			'VA': {fill: 'teal'},
			'NJ': {fill: 'lightgreen'}
		},
		showLabels: false,
		mouseover: function(event, data) {
			console.log(data.name);
		}

	});

});