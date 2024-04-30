const characters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z',
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z',
  '0',
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  '~',
  '`',
  '!',
  '@',
  '#',
  '$',
  '%',
  '^',
  '&',
  '*',
  '(',
  ')',
  '_',
  '-',
  '+',
  '=',
  '{',
  '[',
  '}',
  ']',
  ',',
  '|',
  ':',
  ';',
  '<',
  '>',
  '.',
  '?',
  '/',
];

let genPassBtn = document.getElementById('generatePass');
let outPutB1 = document.getElementById('ob1');
let outPutB2 = document.getElementById('ob2');
outPutB1.addEventListener('click', copyText);
outPutB2.addEventListener('click', copyText);
let pass1 = '';
let pass2 = '';

function generatePassword() {
  let password = '';
  let passwordLength = 15;
  for (let i = 0; i <= passwordLength; i++) {
    password += characters[Math.floor(Math.random() * characters.length)];
  }
  return password;
}

function copyText() {
  const range = document.createRange();
  range.selectNode(outPutB1);
  window.getSelection().removeAllRanges(); // Clear any existing selection
  window.getSelection().addRange(range); // Select the contents of the element
  document.execCommand('copy'); // Copy the selected text
  window.getSelection().removeAllRanges(); // Clear the selection after copying
  alert('Copied the text: ' + outPutB1.innerText);
}

genPassBtn.addEventListener('click', () => {
  pass1 = generatePassword();
  pass2 = generatePassword();
  outPutB1.textContent = pass1;
  outPutB2.textContent = pass2;
});
