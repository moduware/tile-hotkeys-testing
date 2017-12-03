
document.addEventListener('NexpaqAPIReady', function() {

	Nexpaq.API.Module.addEventListener('DataReceived', function(event) {
		// we don't care about data not related to our module
		if(event.module_uuid != Nexpaq.Arguments[0]) return;
		if(event.data_source == 'HotKeysStateChanged') {
			document.getElementById('innerState').textContent = event.variables.inner_button_state;
			document.getElementById('outerState').textContent = event.variables.outer_button_state;
		}
    }); 
});

/* =========== ON PAGE LOAD HANDLER */
document.addEventListener("DOMContentLoaded", function(event) {
	Nexpaq.Header.create('Hotkeys');
 });
