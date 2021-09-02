function main() {
    var i = 4
    var d = 4.0
    var s = "HackerRank "

    // Declare second integer, double, and String variables.
    let secondInt;
    let secondDouble;
    let secondString;

    // Read and save an integer, double, and String to your variables.
    secondInt = input_stdin_array[0];
    secondDouble = input_stdin_array[1];
    secondString = input_stdin_array[2];

    // Print the sum of both integer variables on a new line.
    console.log(i + (+secondInt));

    // Print the sum of the double variables on a new line.
    console.log((d + (+secondDouble)).toFixed(1));

    // Concatenate and print the String variables on a new line
    // The 's' variable above should be printed first.
    console.log(s + secondString);
}