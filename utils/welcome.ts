// let's say this function was refactored
// previously, it had no parameters
// now, it has one parameter
// that parameter, hasAccess, determines the output of the function
const welcome = (hasAccess) => {
  const greeting = hasAccess ? "welcome!" : "go away!";
  console.log(greeting);
};

// Error: Expected 1 arguments, but got 0.
// An argument for 'hasAccess' was not provided.
welcome();

// Ok!
welcome(false);
