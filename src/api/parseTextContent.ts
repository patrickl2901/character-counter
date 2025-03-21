/**
 * Parses a string of text and returns an array
 * containing the number of characters, words and sentences.
 * @param {string} content The string to be parsed
 * @param {boolean} countSpaces Specifies if spaces are to be counted as characters
 * @returns {Array} The resulting array, containing amounts
 */
export default function parseTextContent(
  content: string,
  excludeSpaces: boolean
): Array<number> {
  const charsCount: number = parseChars(content, excludeSpaces);
  const wordsCount: number = parseWords(content);
  const sentencesCount: number = parseSentences(content);

  return [charsCount, wordsCount, sentencesCount];
}

// TODO: fix sentence count being set to 0 if string contains two periods in succession

function parseSentences(content: string): number {
  let count: number = 0;
  let contentString: string = content;

  if (contentString.includes(".") == false) {
    return 0;
  }

  while (contentString) {
    if (contentString.indexOf(".") == 0) {
      if (contentString.length > 1) {
        contentString = contentString.substring(1);
      } else {
        return 0;
      }
    } else {
      if (contentString.includes(".")) {
        count++;
        if (contentString.length > contentString.indexOf(".")) {
          contentString = contentString.substring(
            contentString.indexOf(".") + 1
          );
        } else {
          return count;
        }
      } else {
        return count;
      }
    }
  }
  return count;
}

function parseWords(content: string): number {
  let contentString: string = content;
  let count: number = 0;

  if (contentString.length == 0) {
    return 0;
  }

  contentString = contentString.replace(/\s{2,}/g, " ").trim();
  const words: Array<string> = contentString.split(" ");
  count = words.length;

  return count;
}

function parseChars(content: string, excludeSpaces: boolean): number {
  let contentString: string = content;
  let count: number = 0;

  if (contentString.length == 0) {
    return 0;
  }

  if (excludeSpaces) {
    contentString = contentString.replace(/\s+/g, "");
    count = contentString.length;
  } else {
    contentString = contentString.replace(/\s{2,}/g, " ").trim();
    count = contentString.length;
  }
  return count;
}
