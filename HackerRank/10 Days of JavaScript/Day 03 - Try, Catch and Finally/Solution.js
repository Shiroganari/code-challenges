/*
 * Complete the reverseString function
 * Use console.log() to print to stdout.
 */
function reverseString(s) {
    try {
        let resultString = s.split('').reverse().join('');
        console.log(resultString);
    } catch(e) {
        console.log(e.message);
        console.log(s);
    }
}