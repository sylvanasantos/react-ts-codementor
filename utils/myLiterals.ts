let myFavoriteNumber: 10 | 14 | 19;

// Error: type '2' is not assignable to type '10 | 14 | 19'
myFavoriteNumber = 2;

// Ok!
myFavoriteNumber = 14;

let mySuit: "Clubs" | "Diamonds" | "Hearts" | "Spades";

// Error: type 'Koalas' is not assignable to type '"Clubs" | "Diamonds" | "Hearts" | "Spades"'
mySuit = "Koalas";

// Ok!
mySuit = "Spades";
