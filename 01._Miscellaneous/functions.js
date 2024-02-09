// Hoisting... All declarations get hoisted up in the scope
getRandomInt();

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - 1 - min) + min);
}

const getRandomIntAnonFunction = function (min, max) {
  return Math.floor(Math.random() * (max - 1 - min) + min);
};

const getRandomIntArrowFunction = (min, max) => {
  return Math.floor(Math.random() * (max - 1 - min) + min);
};

const getRandomIntArrowFunctionOneLiner = (min, max) => Math.floor(Math.random() * (max - 1 - min) + min);

// Exercise 1:

// String // Callback function
function genericActionPerformer(name, genericAction) {
  return genericAction(name);
}

// Kernen af callback: En callback funktion er eksekverbar kode, der bliver sendt som et argument, til en anden funktion

const running = (name) => `${name} is running`;

const runningResult = genericActionPerformer("Alex", running);

console.log(runningResult);

// Exercise 2:

console.log(genericActionPerformer("Louis", (name) => `${name} is eating`));
