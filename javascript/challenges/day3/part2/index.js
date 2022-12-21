async function loadFile(file) {
  const text = await file.text();
  const ruckbacksList = text.split("\n");
  const groupsList = getGroups(ruckbacksList);
  let sumOfTypes = 0;
  let typeList = [];

  groupsList.map((group) => {
    const firstId = group[0];
    const secondId = group[1];
    const thirdId = group[2];

    for (let index = 0; index <= firstId.length; index++) {
      const currentType = [...firstId][index];
      if (secondId?.includes(currentType) && thirdId?.includes(currentType)) {
        typeList.push(currentType);
        sumOfTypes += getTypeVal(currentType);
        index = groupsList.length;
      }
    }
  });
  document.getElementById("output").innerText = `Result: ${sumOfTypes}`;
}

const getGroups = (array) => {
  return array.reduce((accumulador, item, idx) => {
    const group = Math.floor(idx / 3);
    accumulador[group] = [...(accumulador[group] || []), item];
    return accumulador;
  }, []);
};

function getTypeVal(type) {
  if (type == type.toLowerCase()) {
    return type.codePointAt() - 96;
  } else {
    return type.codePointAt() - 38;
  }
}
