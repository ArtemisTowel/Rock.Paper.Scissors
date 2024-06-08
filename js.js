var items = ["rock", "paper", "scissors"];
var getResult = function(a, b){
    if (a === -1){
        return "I said rock, paper, scissors!";
    }
    s = ["Player 1 wins","Player 2 wins","Draw"][(a-b+2)%3];
    return s + " ( "+items[a]+" vs. "+items[b]+")";
}
console.log(getResult(items.indexOf(prompt("Pick rock, paper, or scissors.")),
Math.floor(Math.random()*3)));

