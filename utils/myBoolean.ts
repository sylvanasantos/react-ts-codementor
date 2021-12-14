// Typescript now knows myBoolean is of type 'boolean'
const myBoolean = 2 > 3;

// The 'boolean' type does not have a 'toUpperCase' method
// Error: Property 'toUpperCase' does not exist on type 'boolean'.
const error1 = myBoolean.toUpperCase();

// A 'boolean' type cannot be added with a 'number' type
// Error: Operator '+' cannot be applied to types 'boolean' and 'number'
const error2 = myBoolean + 10;

const newBoolean = myBoolean && true;
