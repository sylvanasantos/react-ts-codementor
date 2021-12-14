// Typescript now knows myBoolean is of type 'boolean'
var myBoolean = 2 > 3;
// The 'boolean' type does not have a 'toUpperCase' method
// Error: Property 'toUpperCase' does not exist on type 'boolean'.
var error1 = myBoolean.toUpperCase();
// A 'boolean' type cannot be added with a 'number' type
// Error: Operator '+' cannot be applied to types 'boolean' and 'number'
var error2 = myBoolean + 10;
var newBoolean = myBoolean && true;
