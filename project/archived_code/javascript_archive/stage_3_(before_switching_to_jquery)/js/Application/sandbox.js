/*
	Only the sandbox knows which application core is being used.
	Modules can rely on the methods to always be here.
	Knows what the modules are allowed to access and do on the framework.
	
	Sandbox Jobs:
	
	Consistency
	– Interface must be dependable
	
	Security
	– Determine which parts of the framework a module can access
	
	Communication
	– Translate module requests into core actions
 */

 
function Sandbox() {
	var m = Sandbox.methods;
	
	// what stuff modules will need?
	// cookie
	// ajax
	// event
}
Sandbox.methods = function() {
	
	
	
}();
var sandbox = new Sandbox();