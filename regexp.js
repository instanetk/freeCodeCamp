// Regular Expressions: Using the Test Method
//
// Regular expressions are used in programming languages to match parts of strings.
// You create patterns to help you do that matching.
//
// If you want to find the word "the" in the string "The dog chased the cat",
// you could use the following regular expression: /the/. Notice that quote marks
// are not required within the regular expression.
//
// JavaScript has multiple ways to use regexes. One way to test a regex is using
// the .test() method. The .test() method takes the regex, applies it to a string
// (which is placed inside the parentheses), and returns true or false if your
// pattern finds something or not.

let testStr = "freeCodeCamp";
let testRegex = /free/;
console.warn("Line 1 // Regular Expressions: Using the Test Method")
console.log(testRegex.test(testStr));
// Returns true

// Regular Expressions: Match a Literal String with Different Possibilities
// Using regexes like /coding/, you can look for the pattern "coding" in another string.
//
// This is powerful to search single strings, but it's limited to only one pattern.
// You can search for multiple patterns using the alternation or OR operator: |.
//
// This operator matches patterns either before or after it. For example, if you
// wanted to match "yes" or "no", the regex you want is /yes|no/.
//
// You can also search for more than just two patterns. You can do this by adding
// more patterns with more OR operators separating them, like /yes|no|maybe/.
//
let petString = "James has a pet cat.";
let petRegex = /dog|cat|fish|bird/; // Change this line
let resultA = petRegex.test(petString);
console.error("Line 21 // Regular Expressions: Match a Literal String with Different Possibilities")
console.log(resultA)

// Regular Expressions: Ignore Case While Matching
//
// Up until now, you've looked at regexes to do literal matches of strings.
// But sometimes, you might want to also match case differences.
//
// Case (or sometimes letter case) is the difference between uppercase letters and
// lowercase letters. Examples of uppercase are "A", "B", and "C". Examples of
// lowercase are "a", "b", and "c".
//
// You can match both cases using what is called a flag. There are other flags but
// here you'll focus on the flag that ignores case - the i flag. You can use it by
// appending it to the regex. An example of using this flag is /ignorecase/i.
// This regex can match the strings "ignorecase", "igNoreCase", and "IgnoreCase".

let myString = "freeCodeCamp";
let fccRegex = /freecodecamp/i; // Change this line
let resultB = fccRegex.test(myString);
console.warn("Line 33 // Regular Expressions: Ignore Case While Matching")
console.log(resultB)


// Regular Expressions: Extract Matches
//
// So far, you have only been checking if a pattern exists or not within a string.
// You can also extract the actual matches you found with the .match() method.
//
// To use the .match() method, apply the method on a string and pass in the regex
// inside the parentheses. Here's an example:

//"Hello, World!".match(/Hello/);
// Returns ["Hello"]
let ourStr = "Regular expressions";
let ourRegex = /expressions/;
let resultC = ourStr.match(ourRegex);
// Returns an array with value ["expressions"]

let extractStr = "Extract the word 'coding' from this string.";
let codingRegex = /coding/; // Change this line
let resultD = extractStr.match(codingRegex); // Change this line

console.error("Line 60 // Regular Expressions: Extract Matches")
console.log(resultC[0]);
console.log(resultD[0]);


// Regular Expressions: Find More Than the First Match / Global Flag
// To search or extract a pattern more than once, you can use the g flag.

let twinkleStar = "Twinkle, twinkle, little star";
let starRegex = /twinkle/gi; // Change this line
let resultE = twinkleStar.match(starRegex); // Change this line

console.warn("Line 84 // Regular Expressions: Find More Than the First Match")
console.log(resultE);


// Regular Expressions: Match Anything with Wildcard Period
//
// Sometimes you won't (or don't need to) know the exact characters in your patterns.
// Thinking of all words that match, say, a misspelling would take a long time.
// Luckily, you can save time using the wildcard character: .
//
// The wildcard character . will match any one character. The wildcard is also
// called dot and period. You can use the wildcard character just like any other
// character in the regex. For example, if you wanted to match "hug", "huh", "hut",
// and "hum", you can use the regex /hu./ to match all four words.
// Note that the .test method is being used instead of .match.

let exampleStr = "Let's have fun with regular expressions!";
let unRegex = /.un/; // Change this line
let resultF = unRegex.test(exampleStr);

console.error("Line 95 // Regular Expressions: Match Anything with Wildcard Period")
console.log(resultF);


// Regular Expressions: Match Single Character with Multiple Possibilities
//
// You learned how to match literal patterns (/literal/) and wildcard character (/./).
// Those are the extremes of regular expressions, where one finds exact matches and
// the other matches everything. There are options that are a balance between the
// two extremes.
//
// You can search for a literal pattern with some flexibility with character classes.
// Character classes allow you to define a group of characters you wish to match
// by placing them inside square ([ and ]) brackets.
//
// For example, you want to match "bag", "big", and "bug" but not "bog". You can
// create the regex /b[aiu]g/ to do this. The [aiu] is the character class that
// will only match the characters "a", "i", or "u".

let quoteSample = "Beware of bugs in the above code; I have only proved it correct, not tried it.";
let vowelRegex = /[aeiou]/ig; // Change this line
let resultG = quoteSample.match(vowelRegex); // Change this line
// Note: both the i (ignorecase) and g (global flag) were used here. See line 84.

console.warn("Line 115 // Regular Expressions: Match Anything with Wildcard Period")
console.log(resultG);

// Regular Expressions: Match Letters of the Alphabet
//
// You saw how you can use character sets to specify a group of characters to match,
// but that's a lot of typing when you need to match a large range of characters
// (for example, every letter in the alphabet). Fortunately, there is a built-in
// feature that makes this short and simple.
//
// Inside a character set, you can define a range of characters to match using a
// hyphen character: -.
//
// For example, to match lowercase letters a through e you would use [a-e].

let quoteSampleH = "The quick brown fox jumps over the lazy dog.";
let alphabetRegex = /[a-z]/ig; // Change this line
let resultH = quoteSampleH.match(alphabetRegex); // Change this line

console.error("Line 138 // Regular Expressions: Match Letters of the Alphabet")
console.log(resultH);


// Regular Expressions: Match Numbers and Letters of the Alphabet
//
// Using the hyphen (-) to match a range of characters is not limited to letters.
// It also works to match a range of numbers.
//
// For example, /[0-5]/ matches any number between 0 and 5, including the 0 and 5.
//
// Also, it is possible to combine a range of letters and numbers in a single
// character set.

let quoteSampleI = "Blueberry 3.141592653s are delicious.";
let myRegex = /[2-6h-s]/ig; // Change this line
let resultI = quoteSampleI.match(myRegex); // Change this line

console.warn("Line 158 // Regular Expressions: Match Numbers and Letters of the Alphabet")
console.log(resultI);


// Regular Expressions: Match Single Characters Not Specified
//
// So far, you have created a set of characters that you want to match, but you
// could also create a set of characters that you do not want to match.
// These types of character sets are called negated character sets.
//
// To create a negated character set, you place a caret character (^) after the
// opening bracket and before the characters you do not want to match.
//
// For example, /[^aeiou]/gi matches all characters that are not a vowel.
// Note that characters like ., !, [, @, / and white space are matched - the negated
// vowel character set only excludes the vowel characters.

let quoteSampleK = "3 blind mice.";
let myRegexK = /[^0-9aeiou]/ig; // Change this line
let resultK = quoteSampleK.match(myRegexK); // Change this line

console.error("Line 176 // Regular Expressions: Match Single Characters Not Specified")
console.log(resultI);


// Regular Expressions: Match Characters that Occur One or More Times
//
// Sometimes, you need to match a character (or group of characters) that appears
// one or more times in a row. This means it occurs at least once, and may be repeated.
//
// You can use the + character to check if that is the case. Remember, the character
// or pattern has to be present consecutively. That is, the character has to repeat
// one after the other.
//
// For example, /a+/g would find one match in "abc" and return ["a"].
// Because of the +, it would also find a single match in "aabc" and return ["aa"].
//
// If it were instead checking the string "abab", it would find two matches and
// return ["a", "a"] because the a characters are not in a row - there is a b
// between them. Finally, since there is no "a" in the string "bcd", it wouldn't
// find a match.

let difficultSpelling = "Mississippi";
let myRegexM = /s+/g; // Change this line
let resultM = difficultSpelling.match(myRegexM);

console.warn("Line 197 // Regular Expressions: Match Characters that Occur One or More Times")
console.log(resultM);


// Regular Expressions: Match Characters that Occur Zero or More Times
//
// The last challenge used the plus + sign to look for characters that occur one
// or more times. There's also an option that matches characters that occur zero
// or more times.
//
// The character to do this is the asterisk or star: *.

let chewieQuote = "Aaaaaaaaaaaaaaaarrrgh!";
let chewieRegex = /Aa*/; // Change this line
let resultN = chewieQuote.match(chewieRegex);

console.error("Line 222 // Regular Expressions: Match Characters that Occur Zero or More Times")
console.log(resultN);


// Regular Expressions: Find Characters with Lazy Matching
//
// In regular expressions, a greedy match finds the longest possible part of a string
// that fits the regex pattern and returns it as a match. The alternative is called a
// lazy match, which finds the smallest possible part of the string that satisfies
// the regex pattern.
//
// You can apply the regex /t[a-z]*i/ to the string "titanic". This regex is basically
// a pattern that starts with t, ends with i, and has some letters in between.
//
// Regular expressions are by default greedy, so the match would return ["titani"].
// It finds the largest sub-string possible to fit the pattern.
//
// However, you can use the ? character to change it to lazy matching. "titanic"
// matched against the adjusted regex of /t[a-z]*?i/ returns ["ti"].

// Fix the regex /<.*>/ to return the HTML tag <h1> and not the text
// "<h1>Winter is coming</h1>". Remember the wildcard . in a regular expression
// matches any character.



let text = "<h1>Winter is coming</h1>";
let myRegexO = /<h1>?/; // Change this line
let resultO = text.match(myRegexO);

console.warn("Line 238 // Regular Expressions: Find Characters with Lazy Matching")
console.log(resultO);


// Regular Expressions: Find One or More Criminals in a Hunt
//
// Time to pause and test your new regex writing skills. A group of criminals escaped
// from jail and ran away, but you don't know how many. However, you do know that they
// stay close together when they are around other people. You are responsible for
// finding all of the criminals at once.
//
// Here's an example to review how to do this:
//
// The regex /z+/ matches the letter z when it appears one or more times in a row.
//
// Write a greedy regex that finds one or more criminals within a group of other
// people. A criminal is represented by the capital letter C.

// example crowd gathering
let crowd = 'P1P2P3P4P5P6CCCP7P8P9';

let reCriminals = /C+/; // Change this line

let matchedCriminals = crowd.match(reCriminals);
console.error("Line 268 // Regular Expressions: Find One or More Criminals in a Hunt")
console.log(matchedCriminals);


// Regular Expressions: Match Beginning String Patterns
//
// Prior challenges showed that regular expressions can be used to look for a
// number of matches. They are also used to search for patterns in specific
// positions in strings.
//
// In an earlier challenge, you used the caret character (^) inside a character
// set to create a negated character set in the form [^thingsThatWillNotBeMatched].
// Outside of a character set, the caret is used to search for patterns at the
// beginning of strings.

// let firstString = "Ricky is first and can be found.";
// let firstRegex = /^Ricky/;
// firstRegex.test(firstString);
// // Returns true
// let notFirst = "You can't find Ricky now.";
// firstRegex.test(notFirst);
// // Returns false

// Use the caret character in a regex to find "Cal" only in the beginning of the
// string rickyAndCal.

let rickyAndCal = "Cal and Ricky both like racing.";
let calRegex = /^Cal/; // Change this line
let resultP = calRegex.test(rickyAndCal);

console.warn("Line 292 // Regular Expressions: Match Beginning String Patterns")
console.log(resultP);


// Regular Expressions: Match Ending String Patterns
//
// In the last challenge, you learned to use the caret character to search for
// patterns at the beginning of strings. There is also a way to search for
// patterns at the end of strings.
//
// You can search the end of strings using the dollar sign character $ at the end
// of the regex.
//
// let theEnding = "This is a never ending story";
// let storyRegex = /story$/;
// storyRegex.test(theEnding);
// // Returns true
// let noEnding = "Sometimes a story will have to end";
// storyRegex.test(noEnding);
// // Returns false
//
// Use the anchor character ($) to match the string "caboose" at the end of the
// string caboose.

let caboose = "The last car on a train is the caboose";
let lastRegex = /caboose$/; // Change this line
let resultQ = lastRegex.test(caboose);

console.error("Line 322 // Regular Expressions: Match Ending String Patterns")
console.log(resultQ);

//// Regular Expressions: Match All Letters and Numbers
//
// Using character classes, you were able to search for all letters of the alphabet
// with [a-z]. This kind of character class is common enough that there is a shortcut
// for it, although it includes a few extra characters as well.
//
// The closest character class in JavaScript to match the alphabet is \w.
// This shortcut is equal to [A-Za-z0-9_]. This character class matches upper
// and lowercase letters plus numbers. Note, this character class also includes
// the underscore character (_).
//
// let longHand = /[A-Za-z0-9_]+/;
// let shortHand = /\w+/;
// let numbers = "42";
// let varNames = "important_var";
// longHand.test(numbers); // Returns true
// shortHand.test(numbers); // Returns true
// longHand.test(varNames); // Returns true
// shortHand.test(varNames); // Returns true
//
// These shortcut character classes are also known as shorthand character classes.
//
// Use the shorthand character class \w to count the number of alphanumeric characters
// in various quotes and strings.

let quoteSampleR = "The five boxing wizards jump quickly now.";
let alphabetRegexV2 = /\w/g; // Change this line
let resultR = quoteSampleR.match(alphabetRegexV2).length;

console.warn("Line 349 // Regular Expressions: Match All Letters and Numbers")
console.log(resultR);


//// Regular Expressions: Match Everything But Letters and Numbers
//
// You've learned that you can use a shortcut to match alphanumerics [A-Za-z0-9_]
// using \w. A natural pattern you might want to search for is the opposite of
// alphanumerics.
//
// You can search for the opposite of the \w with \W. Note, the opposite pattern
// uses a capital letter. This shortcut is the same as [^A-Za-z0-9_].

let quoteSampleS = "The five boxing wizards jump quickly.";
let nonAlphabetRegex = /\W/g; // Change this line
let resultS = quoteSampleS.match(nonAlphabetRegex).length;

// This solution returns the number of spaces and punctuations characters
// in the above example.

console.error("Line 382 // Regular Expressions: Match Everything But Letters and Numbers")
console.log(resultS);


// Regular Expressions: Match All Numbers
//
// You've learned shortcuts for common string patterns like alphanumerics.
// Another common pattern is looking for just digits or numbers.
//
// The shortcut to look for digit characters is \d, with a lowercase d.
// This is equal to the character class [0-9], which looks for a single character
// of any number between zero and nine.

let numString = "Your sandwich will be $5.00";
let numRegex = /\d/g; // Change this line
let resultT = numString.match(numRegex).length;

console.warn("Line 402 // Regular Expressions: Match All Numbers")
console.log(resultT);


// Regular Expressions: Match All Non-Numbers
//
// The last challenge showed how to search for digits using the shortcut \d with a
// lowercase d. You can also search for non-digits using a similar shortcut that
// uses an uppercase D instead.
//
// The shortcut to look for non-digit characters is \D. This is equal to the
// character class [^0-9], which looks for a single character that is not a
// number between zero and nine.

let numStringU = "Your sandwich will be $5.00";
let noNumRegex = /\D/g; // Change this line
let resultU = numStringU.match(noNumRegex).length;

console.error("Line 419 // Regular Expressions: Match All Non-Numbers")
console.log(resultU);


// Regular Expressions: Restrict Possible Usernames
//
// Usernames are used everywhere on the internet. They are what give users a unique
// identity on their favorite sites.
//
// You need to check all the usernames in a database. Here are some simple rules
// that users have to follow when creating their username.
//
// 1) The only numbers in the username have to be at the end.
// There can be zero or more of them at the end.
//
// 2) Username letters can be lowercase and uppercase.
//
// 3) Usernames have to be at least two characters long.
// A two-letter username can only use alphabet letter characters.
//
// Change the regex userCheck to fit the constraints listed above.

let username = "JackOfAllTrades";
let userCheck = /\w[^d]/ig; // My solution (which passed)
//let userCheck = /^[a-z]{2,}\d*$/i; //freeCodeCamp's solution
let resultV = userCheck.test(username);

// The only numbers in the username have to be at the end.
// \d$ There can be zero or more of them at the end. *
//
// /\d*$/;
//
// Username letters can be lowercase and uppercase. i
//
// /\d*$/i;
//
// Usernames have to be at least two characters long. {2,}
// A two-letter username can only use alphabet letter characters. ^[a-z]
//
// /^[a-z]{2,}\d*$/i;

console.warn("Line 437 // Regular Expressions: Restrict Possible Usernames")
console.log(resultV);


// Regular Expressions: Match Whitespace
//
// The challenges so far have covered matching letters of the alphabet and numbers.
// You can also match the whitespace or spaces between letters.
//
// You can search for whitespace using \s, which is a lowercase s.
// This pattern not only matches whitespace, but also carriage return, tab,
// form feed, and new line characters. You can think of it as similar to the
// character class [ \r\t\f\n\v].
//
// let whiteSpace = "Whitespace. Whitespace everywhere!"
// let spaceRegex = /\s/g;
// whiteSpace.match(spaceRegex);
// // Returns [" ", " "] as an ARRAY.

let sample = "Whitespace is important in separating words";
let countWhiteSpace = /\s/g; // Change this line
let resultW = sample.match(countWhiteSpace);

console.error("Line 478 // Regular Expressions: Match Whitespace")
console.log(resultW);


// Regular Expressions: Match Non-Whitespace Characters
//
// You learned about searching for whitespace using \s, with a lowercase s.
// You can also search for everything except whitespace.
//
// Search for non-whitespace using \S, which is an uppercase s.
// This pattern will not match whitespace, carriage return, tab, form feed,
// and new line characters. You can think of it being similar to the
// character class [^ \r\t\f\n\v].

let sampleX = "Whitespace is important in separating words";
let countNonWhiteSpace = /\S/g; // Change this line
let resultX = sampleX.match(countNonWhiteSpace);

console.warn("Line 501 // Regular Expressions: Match Non-Whitespace Characters")
console.log(resultX);


// Regular Expressions: Specify Upper and Lower Number of Matches
//
// Recall that you use the plus sign + to look for one or more characters and
// the asterisk * to look for zero or more characters. These are convenient but
// sometimes you want to match a certain range of patterns.
//
// You can specify the lower and upper number of patterns with quantity specifiers.
// Quantity specifiers are used with curly brackets ({ and }). You put two numbers
// between the curly brackets - for the lower and upper number of patterns.
//
// For example, to match only the letter a appearing between 3 and 5 times in
// the string "ah", your regex would be /a{3,5}h/.
//
// let A4 = "aaaah";
// let A2 = "aah";
// let multipleA = /a{3,5}h/;
// multipleA.test(A4); // Returns true
// multipleA.test(A2); // Returns false
//
// Change the regex ohRegex to match only 3 to 6 letter h's in the word "Oh no".

let ohStr = "Ohhh no";
let ohRegex = /Oh{3,6}\sno/i; // Change this line
let resultY = ohRegex.test(ohStr);

console.error("Line 519 // Regular Expressions: Specify Upper and Lower Number of Matches")
console.log(resultY);


// Regular Expressions: Specify Only the Lower Number of Matches
//
// You can specify the lower and upper number of patterns with quantity specifiers
// using curly brackets. Sometimes you only want to specify the lower number of
// patterns with no upper limit.
//
// To only specify the lower number of patterns, keep the first number
// followed by a comma.
//
// For example, to match only the string "hah" with the letter a appearing at
// least 3 times, your regex would be /ha{3,}h/.
//
// let A4 = "haaaah";
// let A2 = "haah";
// let A100 = "h" + "a".repeat(100) + "h";
// let multipleA = /ha{3,}h/;
// multipleA.test(A4); // Returns true
// multipleA.test(A2); // Returns false
// multipleA.test(A100); // Returns true
//
// Change the regex haRegex to match the word "Hazzah" only when it
//  has four or more letter z's.

let haStr = "Hazzzzah";
let haRegex = /Haz{4,}ah/; // Change this line
let resultZ = haRegex.test(haStr);

console.warn("Line 548 // Regular Expressions: Specify Only the Lower Number of Matches")
console.log(resultZ);


// Regular Expressions: Specify Exact Number of Matches
//
// You can specify the lower and upper number of patterns with quantity specifiers
// using curly brackets. Sometimes you only want a specific number of matches.
//
// To specify a certain number of patterns, just have that one number between the
// curly brackets.
//
// For example, to match only the word "hah" with the letter a 3 times, your regex
// would be /ha{3}h/.
//
// let A4 = "haaaah";
// let A3 = "haaah";
// let A100 = "h" + "a".repeat(100) + "h";
// let multipleHA = /ha{3}h/;
// multipleHA.test(A4); // Returns false
// multipleHA.test(A3); // Returns true
// multipleHA.test(A100); // Returns false
//
// Change the regex timRegex to match the word "Timber"
// only when it has four letter m's.

let timStr = "Timmmmber";
let timRegex = /Tim{4}ber/; // Change this line
let resultAA = timRegex.test(timStr);

console.error("Line 579 // Regular Expressions: Specify Exact Number of Matches")
console.log(resultAA);

// Regular Expressions: Check for All or None
//
// Sometimes the patterns you want to search for may have parts of it that may or
// may not exist. However, it may be important to check for them nonetheless.
//
// You can specify the possible existence of an element with a question mark, ?.
// This checks for zero or one of the preceding element. You can think of this
// symbol as saying the previous element is optional.
//
// For example, there are slight differences in American and British English
// and you can use the question mark to match both spellings.
//
// let american = "color";
// let british = "colour";
// let rainbowRegex= /colou?r/;
// rainbowRegex.test(american); // Returns true
// rainbowRegex.test(british); // Returns true
//
// Change the regex favRegex to match both the American English (favorite) and
// the British English (favourite) version of the word.

let favWord = "favorite";
let favRegex = /favou?rite/; // Change this line
let resultAB = favRegex.test(favWord);

console.warn("Line 608 // Regular Expressions: Check for All or None")
console.log(resultAB);


//// Regular Expressions: Positive and Negative Lookahead
//
// Lookaheads are patterns that tell JavaScript to look-ahead in your string to
// check for patterns further along. This can be useful when you want to search
// for multiple patterns over the same string.
//
// There are two kinds of lookaheads: positive lookahead and negative lookahead.
//
// A positive lookahead will look to make sure the element in the search pattern
// is there, but won't actually match it. A positive lookahead is used as (?=...)
// where the ... is the required part that is not matched.
//
// On the other hand, a negative lookahead will look to make sure the element in
// the search pattern is not there. A negative lookahead is used as (?!...)
// where the ... is the pattern that you do not want to be there. The rest of the
// pattern is returned if the negative lookahead part is not present.
//
// Lookaheads are a bit confusing but some examples will help.
//
// let quit = "qu";
// let noquit = "qt";
// let quRegex= /q(?=u)/;
// let qRegex = /q(?!u)/;
// quit.match(quRegex); // Returns ["q"]
// noquit.match(qRegex); // Returns ["q"]
//
// A more practical use of lookaheads is to check two or more patterns in one
// string. Here is a (naively) simple password checker that looks for
// between 3 and 6 characters and at least one number:
//
// let password = "abc123";
// let checkPass = /(?=\w{3,6})(?=\D*\d)/;
// checkPass.test(password); // Returns true
//
// Use lookaheads in the pwRegex to match passwords that are greater
// than 5 characters long and have two consecutive digits.

let sampleWord = "ss123";
let pwRegex = /(?=\w{5,})(?=\D*\d{2})/;
let resultAC = pwRegex.test(sampleWord);

console.error("Line 637 // Regular Expressions: Positive and Negative Lookahead")
console.log(resultAC);


// Regular Expressions: Reuse Patterns Using Capture Groups
//
// Some patterns you search for will occur multiple times in a string.
// It is wasteful to manually repeat that regex. There is a better way to specify
// when you have multiple repeat substrings in your string.
//
// You can search for repeat substrings using capture groups.
// Parentheses, ( and ), are used to find repeat substrings.
// You put the regex of the pattern that will repeat in between the parentheses.
//
// To specify where that repeat string will appear, you use a backslash (\)
// and then a number. This number starts at 1 and increases with each additional
// capture group you use. An example would be \1 to match the first group.
//
// The example below matches any word that occurs twice separated by a space:
//
// let repeatStr = "regex regex";
// let repeatRegex = /(\w+)\s\1/;
// repeatRegex.test(repeatStr); // Returns true
// repeatStr.match(repeatRegex); // Returns ["regex regex", "regex"]
//
// Using the .match() method on a string will return an array with the string
// it matches, along with its capture group.
//
// Use capture groups in reRegex to match numbers that are repeated only
// three times in a string, each separated by a space.

let repeatNum = "42 42 42";
let reRegex = /^(\d+)\s\1\s\1$/; // Change this line
//let resultAE = reRegex.test(repeatNum);
resultAE = repeatNum.match(reRegex);

console.warn("Line 682 // Regular Expressions: Reuse Patterns Using Capture Groups")
console.log(resultAE);


// Regular Expressions: Use Capture Groups to Search and Replace
//
// Searching is useful. However, you can make searching even more powerful when
// it also changes (or replaces) the text you match.
//
// You can search and replace text in a string using .replace() on a string.
// The inputs for .replace() is first the regex pattern you want to search for.
// The second parameter is the string to replace the match
// or a function to do something.
//
// let wrongText = "The sky is silver.";
// let silverRegex = /silver/;
// wrongText.replace(silverRegex, "blue");
// // Returns "The sky is blue."
//
// You can also access capture groups in the replacement string
// with dollar signs ($).
//
// "Code Camp".replace(/(\w+)\s(\w+)/, '$2 $1');
// // Returns "Camp Code"
//
// Write a regex so that it will search for the string "good".
// Then update the replaceText variable to replace "good" with "okey-dokey".

let huhText = "This sandwich is good.";
let fixRegex = /good/; // Change this line
let replaceText = "bomb"; // Change this line
let resultAF = huhText.replace(fixRegex, replaceText);

console.error("Line 718 // Use Capture Groups to Search and Replace")
console.log(resultAF);


// Regular Expressions: Remove Whitespace from Start and End
//
// Sometimes whitespace characters around strings are not wanted but are there.
// Typical processing of strings is to remove the whitespace
// at the start and end of it.
//
// Write a regex and use the appropriate string methods to remove whitespace
// at the beginning and end of strings.
//
// Note
// The .trim() method would work here, but you'll need to complete
// this challenge using regular expressions.

let hello = "   Hello, World!  ";
let wsRegex = /^\s+|\s+$/g; // Change this line
let resultAG = hello.replace(wsRegex, ''); // Change this line

// this solution uses the | OR operator.

console.warn("Line 751 // Remove Whitespace from Start and End ")
console.log(resultAG);
console.log("Hello, World!")


// THIS CONCLUDES THE REGULAR EXPRESSION CHALLENGES
