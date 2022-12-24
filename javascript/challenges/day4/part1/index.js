async function loadFile(file) {
  const text = await file.text();
  const pairsList = text.split("\n");

  let total = 0;

  pairsList.map((pair) => {
    if (pair) {
      const sections = pair.split(",");
      const firstSection = sections[0]?.split("-");
      const secondSection = sections[1]?.split("-");

      const firstCond =
        Number(firstSection[0]) <= Number(secondSection[0]) &&
        Number(firstSection[1]) >= Number(secondSection[1]);

      const secondCond =
        Number(secondSection[0]) <= Number(firstSection[0]) &&
        Number(secondSection[1]) >= Number(firstSection[1]);
      console.log(firstCond || secondCond);

      if (firstCond || secondCond) {
        total += 1;
      }
    }
  });
  document.getElementById("output").innerText = `Result: ${total}`;
}
