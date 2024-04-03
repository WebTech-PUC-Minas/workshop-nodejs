evens = [ 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20 ];

var odds = evens.map( v => v + 1 );
var nums = evens.map( (v, i) => v + i );
var pairs = evens.map( v =>  ({ evens: v, odds: v+ 1 }))

console.log("Evens:", evens);
console.log("Odds:", odds);
console.log("Nums:", nums);
console.log("Pairs:", pairs);

var bob = {
    _name: "Bob",
    _friends: [],
 
    printFriends() {
        this._friends.forEach(f =>
            console.log(this._name + " knows " + f));
    }
}

bob.printFriends();