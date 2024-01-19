 function togglePlan() {
 	var checkbox = document.getElementById( 'planCheckbox' );
 	var monthlyTable = document.getElementById( 'monthlyTable' );
 	var yearlyTable = document.getElementById( 'yearlyTable' );

 	if ( checkbox.checked ) {
 		monthlyTable.style.display = 'none';
 		yearlyTable.style.display = 'table';
 		document.getElementById( 'planCheckbox' ).classList.add( 'active' );
 	} else {
 		monthlyTable.style.display = 'table';
 		yearlyTable.style.display = 'none';
 		document.getElementById( 'planCheckbox' ).classList.remove( 'active' );
 	}
 }


 function openTab( evt, cityName ) {
 	// Declare all variables
 	var i, tabcontent, tablinks;

 	// Get all elements with class="tabcontent" and hide them
 	tabcontent = document.getElementsByClassName( "tabcontent" );
 	for ( i = 0; i < tabcontent.length; i++ ) {
 		tabcontent[ i ].style.display = "none";
 	}

 	// Get all elements with class="tablinks" and remove the class "active"
 	tablinks = document.getElementsByClassName( "tablinks" );
 	for ( i = 0; i < tablinks.length; i++ ) {
 		tablinks[ i ].className = tablinks[ i ].className.replace( " active", "" );
 	}

 	// Show the current tab, and add an "active" class to the button that opened the tab
 	document.getElementById( cityName ).style.display = "block";
 	evt.currentTarget.className += " active";
 }

 