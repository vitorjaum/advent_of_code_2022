async function loadFile(file) {
  const text = await file.text();

  const rounds = text.split("\n");
  let myScore = 0;

  const winShapes = { A: 2, B: 3, C: 1 };
  const shapeValue = { A: 1, B: 2, C: 3 };
  const loseShapes = { A: 3, B: 1, C: 2 };

  const winnerPoints = 6;
  const drawPoints = 3;
  const loserPoints = 0;

  rounds.map((round) => {
    const elfShape = round[0];
    const secondColumn = round[2];

    switch (secondColumn) {
      case "X":
        myScore += loseShapes[elfShape] + loserPoints;
        break;
      case "Y":
        myScore += shapeValue[elfShape] + drawPoints;
        break;
      case "Z":
        myScore += winShapes[elfShape] + winnerPoints;
        break;
    }
  });

  document.getElementById("output").innerText = `Result: ${myScore}`;
}
