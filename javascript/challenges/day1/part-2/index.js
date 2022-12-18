async function loadFile(file) {
  let text = await file.text();

  const bagsList = text.split("\n\n");
  const bagsCalories = [];

  bagsList.map((arr, idx) => {
    const bag = arr.split("\n");
    bagsCalories[idx] = bag.reduce(
      (accumulador, value) => accumulador + Number(value),
      0
    );
  });

  let sumThree = 0;

  for (let index = 0; index < 3; index++) {
    const currentHighestValue = getHighestValue(bagsCalories);
    sumThree += currentHighestValue;
    bagsCalories.splice(bagsCalories.indexOf(currentHighestValue), 1);
  }

  document.getElementById("output").innerText = `Result: ${sumThree}`;
}

function getHighestValue(value) {
  return Math.max(...value);
}
