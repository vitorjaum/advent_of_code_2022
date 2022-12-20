async function loadFile(file) {
  const text = await file.text();
  const rucksacks = text.split("\n");
  let sumOfTypes = 0;

  rucksacks.map((character) => {
    const characterLength = character.length;
    const firstCompartiment = character.slice(0, characterLength / 2);
    const secondCompartiment = character.slice(characterLength / 2);

    for (let index = 0; index <= firstCompartiment.length; index++) {
      const element = firstCompartiment[index];
      if (secondCompartiment.includes(element)) {
        sumOfTypes += getTypeVal(element);
        index = characterLength;
      }
    }
    document.getElementById("output").innerText = `Result: ${sumOfTypes}`;
  });

  function getTypeVal(string) {
    if (string == string.toLowerCase()) {
      return string.codePointAt() - 96;
    } else {
      return string.codePointAt() - 65 + 27;
    }
  }
}
