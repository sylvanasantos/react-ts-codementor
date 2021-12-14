const myUnionFunction = (error: string | undefined) => {
  // Error: object is possibly 'undefined'
  console.log(error.toUpperCase());

  // Ok!
  if (error) console.log(error.toUpperCase());
};

// Error: Expected 1 arguments, but got 0.
// An argument for 'error' was not provided.
myUnionFunction();

// Ok!
myUnionFunction("something went wrong");

// Ok!
myUnionFunction(undefined);
