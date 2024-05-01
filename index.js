const characters = [
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
];

let genPassBtn = document.getElementById('generatePass');
let outPutB1 = document.getElementById('ob1');
let length = document.getElementById('passwordLength');
let includeNumbers = document.getElementById('ifNumbers');
let includeSpecialChars = document.getElementById('ifSpacialChars');
let includeUppercase = document.getElementById('ifUppercase');
outPutB1.addEventListener('click', copyText);

let pass1 = '';

function generatePassword() {
  let characterSet = characters.slice();
  if (includeNumbers.checked) {
    characterSet = characterSet.concat([
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
    ]);
  }
  if (includeSpecialChars.checked) {
    characterSet = characterSet.concat([
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
    ]);
  }
  if (includeUppercase.checked) {
    characterSet = characterSet.concat(
      characterSet.map((char) => char.toUpperCase())
    );
  }
  let password = '';
  for (let i = 0; i < length.value; i++) {
    const randomIndex = Math.floor(Math.random() * characterSet.length);
    password += characterSet[randomIndex];
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
  pass1 = generatePassword(
    length.value,
    includeNumbers.checked,
    includeSpecialChars.checked,
    includeUppercase.checked
  );
  outPutB1.textContent = pass1;
});
