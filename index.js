/* EXERCICI 1 */

let name = "MARTA";

for (let i = 0; i < name.length; i++){
  const substr = name.substring(i,i+1)
  console.log(substr)
}

/* EXERCICI 2 */

name = "MART4";

var vowelTest = (function() { 
  var re = /^[aeiou]$/i; 
  return function(s) { 
    return re. test(s); } })(); 
var consonantTest = (function() { 
  var re = /^[bcdfghjklmnpqrstvwxys]$/i; 
  return function(s) { 
    return re. test(s); } })(); 
var numberTest = (function() { 
  var re = /^[0-9]$/i; 
  return function(s) { 
    return re. test(s); } })(); 

for (let i = 0; i < name.length; i++){
  const substr = name.substring(i,i+1)
  if(vowelTest(substr) == true){
    console.log(`He trobat la VOCAL: ${substr}`)
  } else if (consonantTest(substr) == true){
    console.log(`He trobat la CONSONANT:${substr}`)
  } else if (numberTest(substr) == true){
    console.log(`Els noms de persones no contenen el número:${substr}`)
  }
}

/* EXERCICI 3 */

name = "MARTA";

const dividedName = name.split("")

const separateLetters = dividedName.map(letter => letter)

function countTimesWordApperesInArray(words) {
        let size = words.length;
        for (let i = 0; i < size; i += 1) {
            let count = 0;

            let element = words[i];
            for (let j = 0; j < size; j += 1) {
                if (words[j] == element) {
                    count += 1;
                }
            }
            console.log(words[i] + " " + count);
        }
    }

countTimesWordApperesInArray(separateLetters)
