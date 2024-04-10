// Code your solutions in this file
// for loop code along
// for( let age =30; age < 40; age++) {
//     console.log(`I'm ${age} years old. Happy Birthday to me!`);
    
// };

// const gifts =['teddy bear', 'toy car', 'doll'];

// function wrappedGifts(gifts) {
// for(let i = 0; i < gifts.length; i++) {
//     console.log(`wrapped ${gifts[i]} and added a bow!`);
// }
// return gifts;
// }
// wrappedGifts(gifts)

//  for loop assignment 
function writeCards(people,msg) {
    const thanksArray = [];
 for(let i= 0; i < people.length; i++) {
    let message = `Thank you, ${people[i]}, for the wonderful ${msg} gift!`;
    thanksArray.push(message);
 }
return thanksArray;
}
writeCards(["Guadalupe", "Ollie", "Aki"],'surprise');

// while loop assignemnt
function countDown(num) {
    while (num >= 0 ) {
        console.log(num--);       
    }
    return num;
}
countDown(10);

