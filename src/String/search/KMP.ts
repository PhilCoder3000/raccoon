export function KMPSearch(string: string, pattern: string): number[] {
  const prefixTable = getPrefixTable(pattern),
    matches = [];

  let sInd = 0,
    pInd = 0;

  while (sInd < string.length) {
    if (string.at(sInd) === pattern.at(pInd)) {
      sInd++;
      pInd++;
    }

    if (pInd === pattern.length) {
      matches.push(sInd - pInd);
      pInd = prefixTable[pInd - 1];
    } else if (sInd < string.length && string.at(sInd) !== pattern.at(pInd)) {
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
    while (
      prefixLength > 0 &&
      pattern.at(i) !== pattern.at(prefixLength)
    ) {
      prefixLength = prefixTable[prefixLength - 1];
    }

    if (pattern.at(i) === pattern.at(prefixLength)) {
      prefixLength++;
    }

    prefixTable[i] = prefixLength;
  }
  return prefixTable;
}
