/**
 * Creates and returns a map containing every char in the string
 * and its amount.
 * @param {string} contentString String to be parsed
 * @returns {Map<string, number>} The resulting map, containing chars and amounts
 */
export default function createCharSet(
  contentString: string
): Map<string, number> {
  const charSet: Map<string, number> = new Map();
  contentString = contentString.toLowerCase();

  // Loop through each character in the string
  for (let i = 0; i < contentString.length; i++) {
    const char = contentString.charAt(i);

    // If the character is already in the map, increment its count
    if (charSet.has(char)) {
      charSet.set(char, charSet.get(char)! + 1);
    } else {
      // Otherwise, add it with count 1
      charSet.set(char, 1);
    }
  }

  return charSet;
}
