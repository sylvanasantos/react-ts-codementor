interface Hero {
  name: string;
  superPower: () => void;
}

// Error: type {} is missing the following...
// properties from type 'Hero': name, superPower
let ironMan: Hero = {};

ironMan = {
  // Error: type 'number' is not assignable to type 'string'
  name: 17,
  // Error: type 'boolean' is not assignable to type '() => void'
  superPower: false,
};

// Ok
ironMan = {
  name: "Tony Stark",
  superPower: () => console.log("I am Iron Man"),
};

ironMan.superPower();
