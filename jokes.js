const jokes = [
  '"A lot of people are afraid of heights. Not me, I’m afraid of widths." --Steven Wright',
  '"All those who believe in psychokinesis raise my hand." --Steven Wright',
  '"Ambition is a poor excuse for not having enough sense to be lazy." --Steven Wright',
  '"Bills travel through the mail at twice the speed of checks." --Steven Wright',
  '"Borrow money from pessimists-they don’t expect it back." --Steven Wright',
  '"Change is inevitable….except from vending machines." --Steven Wright',
  '"Cross country skiing is great if you live in a small country." --Steven Wright',
];

const jokeGen = (array) => {
  return (
    "********************************************************************************\n" +
    array[Math.floor(Math.random() * array.length)] +
    "\n" +
    "********************************************************************************\n"
  );
};

console.log(jokeGen(jokes));
