$(window).ready(function() {

	window.tableFunctionality = function() {

		var $tableWrap = $('.table-data');

		// Get Table Data
		var tableData = [];
		
		var columnTags = [];
		$tableWrap.find('.table__head .table__th').each(function() {

			columnTags.push($(this).attr('data-name'));

		});

		$tableWrap.find('.table__body .table__row').each(function() {

			var row = {
				data: {},
				html: $(this).clone()
			};

			$(this).find('.table__td').each(function(i, ele) {
				row.data[columnTags[i]] = ( columnTags[i] == 'rank' ) ? parseInt($(ele).text(), 10) : $(ele).text();
			});

			tableData.push(row);

		});

		// Get Filter Selects
		var filters = [];

		$tableWrap.find('.table-filter').each(function() {

			filters.push({
				name: $(this).attr('data-name'),
				ele: $(this),
				value: ""
			});

		});

		/*
		 * User Interactions
		 *
		*/

		// User Changes a filter
		for(var x in filters) {
			(function() { // IEFE

				var y = x;
				var filter = filters[x];

				filter.ele.change(function() {
					filters[y]['value'] = filter.ele.val();
					// Re-render the table body
					renderTable();
				});

			})();
		};

		// User Changes Table Order
		var sort = {
			for: '',
			direction: 1
		}

		var tableHeaders = $tableWrap.find('.table__head .table__th');

		tableHeaders.data('order', 0);
		tableHeaders.eq(0).data('order', 1);
		tableHeaders.click(function(e) {
			switch( $(e.target).data('order') ) {
				case 0:
					tableHeaders.removeClass('table__th--reverse');
					tableHeaders.data('order', 0);
					$(e.target).data('order', 1);
					sort.for = $(e.target).attr('data-name');
					sort.direction = 1;
					break;

				case 1:
					tableHeaders.removeClass('table__th--reverse');
					tableHeaders.data('order', 0);
					$(e.target).addClass('table__th--reverse').data('order', -1);
					sort.for = $(e.target).attr('data-name');
					sort.direction = -1;
					break;

				case -1:
					tableHeaders.removeClass('table__th--reverse');
					tableHeaders.data('order', 0);
					$(e.target).removeClass('table__th--reverse').data('order', 1);
					sort.for = $(e.target).attr('data-name');
					sort.direction = 1;
					break;
			}

			renderTable();
		});

		/*
		 * Function that re-renders the table whenever there's a change to the filter/sorting
		 *
		*/
		function renderTable() {

			// Fiilter the tableData into a new object
			var viewObject = [];

			for(var x in tableData) {
				(function() {

					var row = tableData[x];
					var passes = true;

					for(var z in filters) {
						if( filters[z].value != "" && row.data[filters[z].name] != filters[z].value ) {
							passes = false;
						}
					}

					if(passes) {
						viewObject.push(row);
					}

				})();
			};

			// Sort it based on the selected sorting options
			if( sort.for != '' && typeof( viewObject[0].data[sort.for] ) == 'string' && viewObject[0].data[sort.for].indexOf('$') == 0 ) {
				viewObject = viewObject.sort(function(a, b) {
					var x = parseInt( a.data[sort.for].replace('$', '').replaceAll(',', ''), 10 );
					var y = parseInt( b.data[sort.for].replace('$', '').replaceAll(',', ''), 10 );
					if( sort.direction == 1 ) {
						if( x == y ) { return 0; }
						return ( x > y ) ? 1 : -1;
					}
					else {
						if( x == y ) { return 0; }
						return ( x > y ) ? -1 : 1;
					}
				});
			}
			else if( sort.for != '' ) {
				viewObject = viewObject.sort(function(a, b) {
					if( sort.direction == 1 ) {
						if( a.data[sort.for] == b.data[sort.for] ) { return 0; }
						return ( a.data[sort.for] > b.data[sort.for] ) ? 1 : -1;
					}
					else {
						if( a.data[sort.for] == b.data[sort.for] ) { return 0; }
						return ( a.data[sort.for] > b.data[sort.for] ) ? -1 : 1;
					}
				});
			}

			// Render the table using the new object
			var $tempContainer = $('<div></div>');

			for(var x in viewObject) {
				(function() { // IEFE

					$tempContainer.append( viewObject[x].html );

				})();
			};

			$tableWrap.find('.table__body').html( $tempContainer.html() );

		};
	
	};

});