function vowelsAndConsonants(s) {
    var vowel = "aeiou";
    var constant = "";

    for (var i = 0; i <= s.length - 1; i++) {
        if (vowel.includes(s[i])) {
            console.log(s[i]);
        } else {
            constant = constant + s[i] + "\n";
        }

    }

    console.log(constant)
}
