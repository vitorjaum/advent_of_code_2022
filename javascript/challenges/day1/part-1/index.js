async function loadFile(file) {
  let text = await file.text();

  const splitedValues = text.split("\n\n");
  const arrayOfValues = [];

  splitedValues.map((arr, idx) => {
    const bag = arr.split("\n");
    const bagValue = bag.reduce(
      (accumulador, value) => accumulador + Number(value),
      0
    );
    arrayOfValues[idx] = bagValue;
  });

  document.getElementById("output").innerText = Math.max(...arrayOfValues);
}
