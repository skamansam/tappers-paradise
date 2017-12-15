// let NumberClass = require('bignumber.js')
// NumberClass.config({ DECIMAL_PLACES: 15, ROUNDING_MODE: BigNumber.ROUND_DOWN })
let NumberClass = require('decimal.js')

export const NEW_GREEK = 0
export const SHORT = 1
export const LONG = 2
export const INTL = 3

export function humanReadable (n, scale = SHORT) {

  let num = new NumberClass(n)
  switch (scale) {
    case NEW_GREEK:
      return customScale(num, newGreekScale)
    case SHORT:
      return customScale(num, shortScale)
    case LONG:
      return customScale(num, longScale)
    case INTL:
      return customScale(num, longIntlScale)
    default:
      return customScale(num, scale)
  }
}
export default humanReadable

export function _places (n) {
  let num = n
  if (!(n instanceof NumberClass)) {
    // console.error('NOT a BigNumber!')
    num = new NumberClass(n)
  }
  if (num < 10) {
    return 0
  }
  debugger
  return Math.floor(Math.log10(Math.abs(num)).toFixed(10))
}

export function customScale (n, scaleFunction) {
  const numberLength = _places(n)
  return scaleFunction(n, numberLength)
}

function newGreekScale (n, len) {
  if (n === undefined || n < 1) {
    return ''
  }
  const maxNumber = 1e93 - 1
  const maxDigits = 92
  const idx = Math.floor(len / 3)
  const strings = [ '',
    'Thousand', 'Million', 'Gillion',
    'Tetrillion', 'Pentillion', 'Hexillion',
    'Heptillion', 'Oktillion', 'Ennillion',
    'Dekillion', 'Hendekillion', 'Dodekillion',
    'Trisdekillion', 'Tetradekillion', 'Pentadekillion',
    'Hexadekillion', 'Heptadekillion', 'Oktadekillion',
    'Enneadekillion', 'Icosillion', 'Icosihenillion',
    'Icosidillion', 'Icositrillion', 'Icositetrillion',
    'Icosipentillion', 'Icosihexillion', 'Icosiheptillion',
    'Icosioktillion', 'Icosiennillion', 'Triacontillion'
  ]
  let result = ''
  if (idx > strings.length - 1) {
    let prefix = newGreekScale(n - maxNumber, len - maxDigits)
    result = (prefix !== '' ? prefix + ' ' : '') + strings[strings.length - 1]
  } else {
    result = strings[idx]
  }
  return result
}

function shortScale (n, len) {
  if (n === undefined || n < 1e3) {
    return ''
  }
  // const maxNumber = 1e93 - 1
  // const maxDigits = 92
  const idx = Math.floor(len / 3)
  // short scale - US, Canada, Modern British
  const lowerNumbers = [ '',
    'Thousand', 'Million', 'Billion', 'Trillion', 'Quadrillion', 'Quintillion',
    'Sextillion', 'Septillion', 'Octillion', 'Nonillion', 'Decillion', 'Undecillion',
    'Duodecillion', 'Tredecillion', 'Quattuordecillion', 'Quinquadecillion',
    'Sedecillion', 'Septendecillion', 'Octodecillion', 'Novendecillion', 'Vigintillion',
    'Unvigintillion', 'Duovigintillion', 'Tresvigintillion', 'Quattuorvigintillion',
    'Quinquavigintillion', 'Sesvigintillion', 'Septemvigintillion', 'Octovigintillion',
    'Novemvigintillion'
  ]
  let result = lowerNumbers[idx]
  if (result === undefined) {
    let newLen = len - 93
    let triplets = newLen / 3
    const calcPrefixes = ['', 'Un', 'duo', 'tres', 'quattuor', 'quinqua', 'ses', 'septen', 'octo', 'noven']
    const calcSuffixes = ['Trigintillion', 'Quadragintillion', 'Quinquagintillion', 'Sexagintillion',
      'Septuagintillion', 'Octogintillion', 'Nonagintillion', 'Centillion',
      'Decicentillion', 'Undecicentillion', 'Viginticentillion', 'Unviginticentillion',
      'Trigintacentillion', 'Quadragintacentillion', 'Quinquagintacentillion',
      'Sexagintacentillion', 'Septuagintacentillion', 'Octogintacentillion',
      'Nonagintacentillion', 'Ducentillion', 'Trecentillion', 'Quadringentillion',
      'Quingentillion', 'Sescentillion', 'Septingentillion', 'Octingentillion',
      'Nongentillion', 'Millinillion'
    ]
    // console.log(len, new_len, triplets, triplets % 10, Math.floor(triplets / 10))
    result = '' + calcPrefixes[triplets % 10] + '' + calcSuffixes[Math.floor(triplets / 10)]
  }
  result = result.toLowerCase()
  result = result.charAt(0).toUpperCase() + result.slice(1)
  return result
}

function longScale (n, len) {
  // long scale - Traditional British
  const dict = [ '',
    'Thousand', 'Million', 'Thousand million', 'Billion', 'Thousand billion', 'Trillion', 'Thousand trillion',
    'Quadrillion', 'Thousand quadrillion', 'Quintillion', 'Thousand quintillion', 'Sextillion',
    'Thousand sextillion', 'Septillion', 'Thousand septillion', 'Octillion', 'Thousand octillion',
    'Nonillion', 'Thousand nonillion', 'Decillion', 'Thousand decillion', 'Undecillion',
    'Thousand undecillion', 'Duodecillion', 'Thousand duodecillion', 'Tredecillion',
    'Thousand tredecillion', 'Quattuordecillion', 'Thousand quattuordecillion', 'Quindecillion',
    'Thousand quindecillion', 'Sedecillion', 'Thousand sedecillion', 'Septendecillion',
    'Thousand septendecillion', 'Octodecillion', 'Thousand octodecillion', 'Novendecillion',
    'Thousand novendecillion', 'Vigintillion', 'Thousand vigintillion',
    'Thousand quinquavigintillion', 'Thousand trigintillion', 'Thousand quinquatrigintillion',
    'Thousand quadragintillion', 'Thousand quinquaquadragintillion', 'Thousand quinquagintillion',
    'Unquinquagintillion', 'Thousand unquinquagintillion', 'Duoquinquagintillion',
    'Thousand quinquaquinquagintillion', 'Sesquinquagintillion', 'Thousand sexagintillion',
    'Unsexagintillion', 'Thousand quinquasexagintillion', 'Thousand septuagintillion',
    'Thousand quinquaseptuagintillion', 'Thousand octogintillion', 'Thousand quinquaoctogintillion',
    'Thousand nonagintillion', 'Thousand quinquanonagintillion', 'Thousand centillion',
    'Thousand quinquagintacentillion', 'Thousand ducentillion', 'Thousand quinquagintaducentillion',
    'Thousand trecentillion', 'Thousand quinquagintatrecentillion', 'Thousand quadringentillion',
    'Thousand quinquagintaquadringentillion', 'Thousand quingentillion'
  ]
  return dict[n / 3]
}

function longIntlScale (n) {
  // long scale - traditional european
  const dict = ['',
    'Thousand', 'Million', 'Milliard', 'Billion', 'Billiard', 'Trillion', 'Trilliard', 'Quadrillion',
    'Quadrilliard', 'Quintillion', 'Quintilliard', 'Sextillion', 'Sextilliard', 'Septillion',
    'Septilliard', 'Octillion', 'Octilliard', 'Nonillion', 'Nonilliard', 'Decillion',
    'Decilliard', 'Undecillion', 'Undecilliard', 'Duodecillion', 'Duodecilliard', 'Tredecillion',
    'Tredecilliard', 'Quattuordecillion', 'Quattuordecilliard', 'Quindecillion', 'Quindecilliard',
    'Sedecillion', 'Sedecilliard', 'Septendecillion', 'Septendecilliard', 'Octodecillion',
    'Octodecilliard', 'Novendecillion', 'Novendecilliard', 'Vigintillion', 'Vigintilliard',
    'Quinquavigintilliard', 'Trigintilliard', 'Quinquatrigintilliard', 'Quadragintilliard',
    'Quinquaquadragintilliard', 'Quinquagintilliard', 'Unquinquagintillion',
    'Unquinquagintilliard', 'Duoquinquagintillion', 'Quinquaquinquagintilliard',
    'Sesquinquagintillion', 'Sexagintilliard', 'Unsexagintillion', 'Quinquasexagintilliard',
    'Septuagintilliard', 'Quinquaseptuagintilliard', 'Octogintilliard', 'Quinquaoctogintilliard',
    'Nonagintilliard', 'Quinquanonagintilliard', 'Centilliard', 'Quinquagintacentilliard',
    'Ducentilliard', 'Quinquagintaducentilliard', 'Trecentilliard',
    'Quinquagintatrecentilliard', 'Quadringentilliard', 'Quinquagintaquadringentilliard',
    'Quingentilliard'
  ]
  return dict[n / 3]
}
