async function loadFile(file) {
  const text = await file.text();
  const list = text.split("\n");
  let overlappings = 0;

  list.map((item) => {
    const pairCoords = item.split(",");
    if (pairCoords != "") {
      const firstSection = pairCoords[0].split("-");
      const secondSection = pairCoords[1].split("-");

      const position1 = Number(firstSection[0]);
      const position2 = Number(firstSection[1]);
      const position3 = Number(secondSection[0]);
      const position4 = Number(secondSection[1]);

      if (position2 >= position3 && position4 >= position1) {
        overlappings += 1;
      }
    }
    document.getElementById("output").innerText = `Result: ${overlappings}`;
  });
}
