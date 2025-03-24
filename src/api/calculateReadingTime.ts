/**
 * Calculates the approximate reading time for a given number of words.
 * @param {number} wordCount The number of words to read
 * @returns {string} Approximate reading time in minutes as string
 */
export default function calculateReadingTime(wordCount: number): string {
  const wpm = 225;
  const readingTime: number = Math.ceil(wordCount / wpm);
  if (readingTime > 1) {
    return readingTime.toString() + " minutes";
  }
  return "less than 1 minute";
}
