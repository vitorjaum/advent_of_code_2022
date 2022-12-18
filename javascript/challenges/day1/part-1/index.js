async function loadFile(file) {
  let text = await file.text();

  const bagsList = text.split("\n\n");
  const bagsCalories = [];

  bagsList.map((arr, idx) => {
    const bag = arr.split("\n");
    const bagValue = bag.reduce(
      (accumulador, value) => accumulador + Number(value),
      0
    );
    bagsCalories[idx] = bagValue;
  });

  document.getElementById("output").innerText = `Result: ${getHighestValue(
    bagsCalories
  )}`;
}

function getHighestValue(value) {
  return Math.max(...value);
}
