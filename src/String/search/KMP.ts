export function KMPSearch(str: string, pattern: string): number[] {
  const prefixTable = getPrefixTable(pattern),
    matches = [];

  let sInd = 0,
    pInd = 0;

  while (sInd < str.length) {
    if (str.charAt(sInd) === pattern.charAt(pInd)) {
      sInd++;
      pInd++;
    }

    if (pInd === pattern.length) {
      matches.push(sInd - pInd);
      pInd = prefixTable[pInd - 1];
    } else if (sInd < str.length && str.charAt(sInd) !== pattern.charAt(pInd)) {
      if (pInd !== 0) {
        pInd = prefixTable[pInd - 1];
      } else {
        sInd++;
      }
    }
  }

  return matches;
}

function getPrefixTable(pattern: string) {
  const prefixTable = new Array(pattern.length);
  let prefixLength = 0;
  prefixTable[0] = 0;

  for (let i = 1; i < pattern.length; i++) {
    console.log('🚀 ~ file: ~ prefixTable:', prefixTable);
    while (
      prefixLength > 0 &&
      pattern.charAt(i) !== pattern.charAt(prefixLength)
    ) {
      prefixLength = prefixTable[prefixLength - 1];
    }

    if (pattern.charAt(i) === pattern.charAt(prefixLength)) {
      prefixLength++;
    }

    prefixTable[i] = prefixLength;
  }
  return prefixTable;
}
