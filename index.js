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

}


