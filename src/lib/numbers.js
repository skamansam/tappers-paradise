export const NEW_GREEK = 0
export const SHORT = 1
export const LONG = 2

export function humanReadable (n, scale = SHORT) {
  switch (scale) {
    case NEW_GREEK:
      return customScale(n, newGreekScale)
    case SHORT:
      return customScale(n, shortScale)
    case LONG:
      return customScale(n, longScale)
    default:
      return customScale(n, scale)
  }
}
export default humanReadable

export function _places (n) {
  if (n < 10) {
    return 0
  }
  return Math.floor(Math.log10(Math.abs(n)).toFixed(10))
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

function shortScale (n) {
  return n
}
function longScale (n) {
  return n
}
