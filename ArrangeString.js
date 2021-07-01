
// after be arrrived two My so  ----------->  be ARRRIVED two AFTER my SO

//  str[0].length < str[1].length > str[2].length < str[3].length > str[4].length ..........


function arrange(strng) {
    strng = strng.split(' ');
    for (let i = 0; i < strng.length; i++) {
        if (i % 2 === 0) {
            if (strng[i - 1] && strng[i - 1].length < strng[i].length) {
                [strng[i], strng[i - 1]] = [strng[i - 1], strng[i]]
            }
            if (strng[i + 1] && strng[i].length > strng[i + 1].length) {
                [strng[i], strng[i + 1]] = [strng[i + 1], strng[i]]
            }
            strng[i] = strng[i].toLowerCase();
        } else {

            if (strng[i + 1] && strng[i].length < strng[i + 1].length) {
                [strng[i], strng[i + 1]] = [strng[i + 1], strng[i]]
            }
            strng[i] = strng[i].toUpperCase();
        }
    }
    strng = strng.join(' ')
    return strng

}

console.log(arrange("after be arrrived two My so"))