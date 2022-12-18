async function loadFile(file) {
  const text = await file.text();
  const rounds = text.split("\n");
  let myScore = 0;

  const shapeValue = { X: 1, Y: 2, Z: 3 };
  const playValues = {
    A: { X: 3, Y: 6, Z: 0 },
    B: { X: 0, Y: 3, Z: 6 },
    C: { X: 6, Y: 0, Z: 3 },
  };

  rounds.map((round) => {
    const elfShape = round[0];
    const myShape = round[2];

    if (round) {
      myScore += playValues[elfShape][myShape] + shapeValue[myShape];
    }
  });

  document.getElementById("output").innerText = `Result: ${myScore}`;
}
