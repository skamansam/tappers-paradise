export const NEW_GREEK = 0
export const SHORT = 1
export const LONG = 2

export function humanReadable (n, scale = SHORT, scaleLog = 3) {
  switch (scale) {
    case NEW_GREEK:
      return customScale(n, newGreekScale, scaleLog)
    case SHORT:
      return customScale(n, shortScale, scaleLog)
    case LONG:
      return customScale(n, longScale, scaleLog)
    default:
      return customScale(n, scale, scaleLog)
  }
}
export default humanReadable

export function _places (n) {
  return Math.log(n) * Math.LOG10E + 1 | 0
  //return n === 0 ? 0 : 1 + Math.round(Math.log10(Math.abs(n)))
}

export function customScale (n, scaleFunction) {
  const numberLength = _places(n) - 1
  const idx = Math.floor(numberLength / 3)
  console.log(n, numberLength, idx)
  return scaleFunction(n)[idx]
}

function newGreekScale (n, len) {
  while(len > 90){
    return
  }
  return [ '',
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
}

function shortScale (n) {
  return n
}
function longScale (n) {
  return n
}
