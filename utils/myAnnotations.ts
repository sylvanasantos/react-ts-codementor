let myAnnotatedBoolean: boolean;

// Error: type 'string' is not assignable to type 'boolean'
myAnnotatedBoolean = "true";

// Ok!
myAnnotatedBoolean = true;

const welcomeWithParamTypes = (hasAccess: boolean) => {
  const greeting = hasAccess ? "welcome!" : "go away!";
  console.log(greeting);
};

// Error: Expected 1 arguments, but got 0.
// An argument for 'hasAccess' was not provided.
welcomeWithParamTypes();

// Error: Argument of type 'number' is not assignable...
// ...to parameter type 'boolean'
welcomeWithParamTypes(1);

// Ok!
welcomeWithParamTypes(myAnnotatedBoolean);
