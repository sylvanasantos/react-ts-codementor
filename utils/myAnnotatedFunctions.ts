let annotatedWelcome: (hasAccess: boolean) => void;

// parameter types can be inferred when a function type is provided
// in this case, Typescript knows that hasAccess has type 'boolean'

annotatedWelcome = (hasAccess) => {
  const greeting = hasAccess ? "welcome!" : "go away!";
  console.log(greeting);
};

let lengthCalculator: (word: string) => number;

lengthCalculator = (word) => word.length;

let errorLogger: () => void;

errorLogger = () => console.log("whoops");
