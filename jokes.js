const jokes = [
  '"A lot of people are afraid of heights. Not me, I’m afraid of widths." --Steve Wright',
  '"All those who believe in psychokinesis raise my hand." --Steve Wright',
  '"Ambition is a poor excuse for not having enough sense to be lazy." --Steve Wright',
  '"Bills travel through the mail at twice the speed of checks." --Steve Wright',
  '"Borrow money from pessimists-they don’t expect it back." --Steve Wright',
  '"Change is inevitable….except from vending machines." --Steve Wright',
  '"Cross country skiing is great if you live in a small country." --Steve Wright',
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
