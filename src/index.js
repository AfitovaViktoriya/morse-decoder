const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let arr = [];
    let str = '';

    for (let i = 0, j = 0; i < expr.length; i += 10, j++) {
        arr[j] = expr.slice(i, i + 10).replace(/00/g, ' ').replace(/10/g, '.').replace(/11/g, '-');
    }

    for (let i = 0; i < arr.length; i++) {
        let substr = '';
        for (let j = 0; j < arr[i].length; j++) {
            if (arr[i][j] != ' ') {
                substr += arr[i][j];
            }
        }
        arr[i] = substr;
        if (arr[i] == '**********') {
            str += ' ';
        } else {
            str += MORSE_TABLE[arr[i]];
        }
    }

    return str;
}

module.exports = {
    decode
}