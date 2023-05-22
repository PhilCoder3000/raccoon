export function BMSearch(text: string, pattern: string): number {
  const matchTable = getMatchTable(pattern);
  let offset = 0;
  const patternLastIndex = pattern.length - 1;
  const maxOffset = text.length - pattern.length;

  while (offset <= maxOffset) {
    let scanIndex = 0;
    while (pattern[scanIndex] === text[scanIndex + offset]) {
      if (scanIndex === patternLastIndex) {
        return offset;
      }
      scanIndex++;
    }
    const badMatchString = text[offset + patternLastIndex];
    if (matchTable[badMatchString]) {
      offset += matchTable[badMatchString];
    } else {
      offset++;
    }
  }
  return -1;
}

function getMatchTable(pattern: string) {
  const table: Record<string, number> = {},
    pl = pattern.length - 1;

  for (let i = 0; i < pl; i++) {
    table[pattern.at(i)!] = pl - 1 - i;
  }
  if (table[pattern[pl - 1]] === undefined) {
    table[pattern[pl - 1]] = pl;
  }

  return table;
}