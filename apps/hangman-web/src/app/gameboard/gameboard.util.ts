export const wordList: string[] = [
  'Aruba',
  'Benin',
  'Chile',
  'China',
  'Congo',
  'Egypt',
  'Gabon',
  'Ghana',
  'Haiti',
  'India',
  'Italy',
  'Japan',
  'Kenya',
  'Macao',
  'Malta',
  'Nauru',
  'Nepal',
  'Niger',
  'Palau',
  'Qatar',
  'Samoa',
  'Spain',
  'Sudan',
  'Tonga',
  'Yemen',
];

export const checkResult = (correct, wrong, answer) => {
  let win = 'winner';

  answer.split('').forEach((letter) => {
    if (!correct.includes(letter)) {
      win = '';
    }
  });

  if (wrong.length === answer.length) {
    win = 'loose';
  }

  return win;
};
