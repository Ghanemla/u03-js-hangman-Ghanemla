const letterContainer = document.getElementById('letter_container')

let words = [
  'abruptly',
  'absurd',
  'abyss',
  'affix',
  'askew',
  'avenue',
  'awkward',
  'axiom',
  'azure',
  'bagpipes',
  'bandwagon',
  'banjo',
  'bayou',
  'beekeeper',
  'bikini',
  'blitz',
  'blizzard',
  'boggle',
  'bookworm',
  'boxcar',
  'boxful',
  'buckaroo',
  'buffalo',
  'buffoon',
  'buxom',
  'buzzard',
  'buzzing',
  'buzzwords',
  'caliph',
  'cobweb',
  'cockiness',
  'croquet',
  'crypt',
  'curacao',
  'cycle',
  'daiquiri',
  'dirndl',
  'disavow',
  'dizzying',
  'duplex',
  'dwarves',
  'embezzle',
  'equip',
  'espionage',
  'euouae',
  'exodus',
  'faking',
  'fishhook',
  'fixable',
  'fjord',
  'flapjack',
  'flopping',
  'fluffiness',
  'flyby',
  'foxglove',
  'frazzled',
  'frizzled',
  'fuchsia',
  'funny',
  'gabby',
  'galaxy',
  'galvanize',
  'gazebo',
  'giaour',
  'gizmo',
  'glowworm',
  'glyph',
  'gnarly',
  'gnostic',
  'gossip',
  'grogginess',
  'haiku',
  'haphazard',
  'hyphen',
  'iatrogenic',
  'icebox',
  'injury',
  'ivory',
  'ivy',
  'jackpot',
  'jaundice',
  'jawbreaker',
  'jaywalk',
  'jazziest',
  'jazzy',
  'jelly',
  'jigsaw',
  'jinx',
  'jiujitsu',
  'jockey',
  'jogging',
  'joking',
  'jovial',
  'joyful',
  'juicy',
  'jukebox',
  'jumbo',
  'kayak',
  'kazoo',
  'keyhole',
  'khaki',
  'kilobyte',
  'kiosk',
  'kitsch',
  'kiwifruit',
  'klutz',
  'knapsack',
  'larynx',
  'lengths',
  'lucky',
  'luxury',
  'lymph',
  'marquis',
  'matrix',
  'megahertz',
  'microwave',
  'mnemonic',
  'mystify',
  'naphtha',
  'nightclub',
  'nowadays',
  'numbskull',
  'nymph',
  'onyx',
  'ovary',
  'oxidize',
  'oxygen',
  'pajama',
  'peekaboo',
  'phlegm',
  'pixel',
  'pizazz',
  'pneumonia',
  'polka',
  'pshaw',
  'psyche',
  'puppy',
  'puzzling',
  'quartz',
  'queue',
  'quips',
  'quixotic',
  'quiz',
  'quizzes',
  'quorum',
  'razzmatazz',
  'rhubarb',
  'rhythm',
  'rickshaw',
  'schnapps',
  'scratch',
  'shiv',
  'snazzy',
  'sphinx',
  'spritz',
  'squawk',
  'staff',
  'strength',
  'strengths',
  'stretch',
  'stronghold',
  'stymied',
  'subway',
  'swivel',
  'syndrome',
  'thriftless',
  'thumbscrew',
  'topaz',
  'transcript',
  'transgress',
  'transplant',
  'triphthong',
  'twelfth',
  'twelfths',
  'unknown',
  'unworthy',
  'unzip',
  'uptown',
  'vaporize',
  'vixen',
  'vodka',
  'voodoo',
  'vortex',
  'voyeurism',
  'walkway',
  'waltz',
  'wave',
  'wavy',
  'waxy',
  'wellspring',
  'wheezy',
  'whiskey',
  'whizzing',
  'whomever',
  'wimpy',
  'witchcraft',
  'wizard',
  'woozy',
  'wristwatch',
  'wyvern',
  'xylophone',
  'yachtsman',
  'yippee',
  'yoked',
  'youthful',
  'yummy',
  'zephyr',
  'zigzag',
  'zigzagging',
  'zilch',
  'zipper',
  'zodiac',
  'zombie',
]

let answer = '';
let maxWrong = 6;
let wrongs = 0;
let guess = [];
let theWord = null;



//slumpa ordet
function randomWord() {
  answer = words[Math.floor(Math.random() * words.length)]
}



//generera knapparna
function generatebtn() {
  let buttonsHTML = 'abcdefghijklmnopqrstuvwxyz'.split('').map(letter =>
    `<button id='${letter}' onClick="checkGuess('${letter}')">${letter}</button>`).join('');

  document.getElementById('letter_container').innerHTML = buttonsHTML;
}

//tar hand om gissningar
function checkGuess(letters) {
  guess.indexOf(letters) === -1 ? guess.push(letters) : null;
  document.getElementById(letters).setAttribute('disabled', true);

  if (answer.indexOf(letters) >= 0) {
    guessedWord();
    IfGameWon();
  } else if (answer.indexOf(letters) === -1) {
    wrongs++;
    updateWrongs();
    IfGameLost();
    updatePicture();
  }
}

//uppdaterar bilden
function updatePicture() {
  document.getElementById('hangman').src = './images/h' + wrongs + '.png';
}


//kolla om du har gissat rätt
function IfGameWon() {
  if (theWord === answer) {
    document.getElementById('hiddenWord').innerHTML = `The word was: ${answer}`;
    document.getElementById('letter_container').innerHTML = 'You won Good Job!'
  }
}

//kolla om du gissat fel
function IfGameLost() {
  if (wrongs === maxWrong) {
    document.getElementById('hiddenWord').innerHTML = `The word was: ${answer}`;
    document.getElementById('letter_container').innerHTML = 'You Lost Better Luck Next Time!'
  }
}

//välj ett ord och dela upp det i bokstäver
function guessedWord() {
  theWord = answer.split('').map(letter => (guess.indexOf(letter) >= 0 ? letter : "_")).join('');

  document.getElementById('hiddenWord').innerHTML = theWord;
}

//uppdatera fel gissning
function updateWrongs() {
  document.getElementById('wrongs').innerHTML = wrongs
}

//starta om spelet
function reset() {
  wrongs = 0;
  guess = [];
  document.getElementById('hangman').src = './images/h0.png'

  randomWord();
  guessedWord()
  updateWrongs()
  generatebtn()
}

randomWord()
generatebtn()
guessedWord()
console.log(answer)