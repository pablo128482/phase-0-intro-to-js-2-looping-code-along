//Function Write Cards
function writeCards(names, event) { 

  const thankYouMessages = [];

  for (let i = 0; i < names.length; i++) {
    const message = `Thank you, ${names[i]}, for the wonderful ${event} gift!`;
    thankYouMessages.push(message);
  }
  
  return thankYouMessages;
}

function countDown(num) {
  for (let i = num; i >= 0; i--) {
    console.log(i);
  }
  10
  9
  8
  7
  6
  5
  4
  3
  2
  1
  0
}


