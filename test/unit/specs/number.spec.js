import * as Numbers from '../../../src/lib/numbers.js'

describe('numbers.js', () => {
/* describe('determining places', () => {
    it('0 - 10 should have 0 places', () => {
      for (let i = 0; i < 10; i = i + 1) {
        //let res = Numbers.humanReadable(i, Numbers.NEW_GREEK)
        expect(Numbers._places(i)).to.equal(0)
        //expect(res).to.be.a('string')
        //expect(res).to.equal('')
      }
    })
    it('10 - 99 should have 1 place', () => {
      for (let i = 10; i < 100; i = i + 1) {
        //let res = Numbers.humanReadable(i, Numbers.NEW_GREEK)
        expect(Numbers._places(i)).to.equal(1)
        //expect(res).to.be.a('string')
        //expect(res).to.equal('')
      }
    })
    describe('GREEK: 1.00e3 - 1.00e6 should print Thousand', () => {
      for (let exp = 3; exp < 6; exp++) {
        it('1.00e' + exp + ' to 1.00e' + (exp + 1) + ' should have ' + exp + ' places', () => {
          for (let i = parseFloat('1.00e' + exp); i < parseFloat('1.00e' + (exp + 1)); i = exp - 3 + i + exp * exp) {
            expect(Numbers._places(i)).to.equal(exp)
            expect(Numbers.humanReadable(i, Numbers.NEW_GREEK)).to.equal('Thousand')
          }
        })
      }
    })
    describe('GREEK: 1.00e6 - 1.00e9 should print Million', () => {
      for (let exp = 6; exp < 9; exp++) {
        it('1.00e' + exp + ' to 1.00e' + (exp + 1) + ' should have ' + exp + ' places', () => {
          for (let i = parseFloat('1.00e' + exp); i < parseFloat('1.00e' + (exp + 1)); i = i + 17 + Math.pow(exp - 6)) {
            expect(Numbers._places(i)).to.equal(exp)
            expect(Numbers.humanReadable(i, Numbers.NEW_GREEK)).to.equal('Million')
          }
        })
      }
    })
    it('should print Gillion', () => {
      let res = Numbers.humanReadable(1.00e9, Numbers.NEW_GREEK)
      expect(res).to.be.a('string')
      expect(res).to.equal('Gillion')
    })
    it('should print Tetrillion', () => {
      let res = Numbers.humanReadable(1.00e12, Numbers.NEW_GREEK)
      expect(res).to.be.a('string')
      expect(res).to.equal('Tetrillion')
    })
    it('should print Tetrillion', () => {
      let res = Numbers.humanReadable(1.00e13, Numbers.NEW_GREEK)
      expect(res).to.be.a('string')
      expect(res).to.equal('Tetrillion')
    })
    it('should print Tetrillion', () => {
      let res = Numbers.humanReadable(1.00e14, Numbers.NEW_GREEK)
      expect(res).to.be.a('string')
      expect(res).to.equal('Tetrillion')
    })
    it('should print Pentillion', () => {
      let res = Numbers.humanReadable(1.00e15, Numbers.NEW_GREEK)
      expect(Numbers._places(1.00e15)).to.equal(15)
      expect(res).to.be.a('string')
      expect(res).to.equal('Pentillion')
    })
    it('should print Pentillion', () => {
      let res = Numbers.humanReadable(1.00e15 + 5, Numbers.NEW_GREEK)
      expect(Numbers._places(1.00e15 + 5)).to.equal(15)
      expect(res).to.be.a('string')
      expect(res).to.equal('Pentillion')
    })
    it('should print Pentillion', () => {
      let res = Numbers.humanReadable(1.00e15 + 25, Numbers.NEW_GREEK)
      expect(Numbers._places(1.00e15 + 25)).to.equal(15)
      expect(res).to.be.a('string')
      expect(res).to.equal('Pentillion')
    })
    it('should print Pentillion', () => {
      let res = Numbers.humanReadable(1.00e15 + 27, Numbers.NEW_GREEK)
      expect(Numbers._places(1.00e15 + 27)).to.equal(15)
      expect(res).to.be.a('string')
      expect(res).to.equal('Pentillion')
    })
    it('should print Pentillion', () => {
      let res = Numbers.humanReadable(1.00e16 + 27, Numbers.NEW_GREEK)
      expect(Numbers._places(1.00e15 + 27)).to.equal(15)
      expect(res).to.be.a('string')
      expect(res).to.equal('Pentillion')
    })
    it('should print Hexillion', () => {
      let res = Numbers.humanReadable(1.00e18, Numbers.NEW_GREEK)
      expect(res).to.be.a('string')
      expect(res).to.equal('Hexillion')
    })
    it('should print Ennillion', () => {
      let res = Numbers.humanReadable(1000000000000000000000000000.00, Numbers.NEW_GREEK)
      expect(res).to.be.a('string')
      expect(res).to.equal('Ennillion')
    })
    it('should print Dodekillion', () => {
      let res = Numbers.humanReadable(1000000000000000000000000000000000000.00, Numbers.NEW_GREEK)
      expect(res).to.be.a('string')
      expect(res).to.equal('Dodekillion')
    })
    it('should print Pentadekillion', () => {
      let res = Numbers.humanReadable(1000000000000000000000000000000000000000000000.00, Numbers.NEW_GREEK)
      expect(res).to.be.a('string')
      expect(res).to.equal('Pentadekillion')
    })
    it('should print Oktadekillion', () => {
      let res = Numbers.humanReadable(1000000000000000000000000000000000000000000000000000000.00, Numbers.NEW_GREEK)
      expect(res).to.be.a('string')
      expect(res).to.equal('Oktadekillion')
    })
    it('should print Icosihenillion', () => {
      let res = Numbers.humanReadable(10000000000000000000000000000000000000000000000000000000000000000.00, Numbers.NEW_GREEK)
      expect(res).to.be.a('string')
      expect(res).to.equal('Icosihenillion')
    })
    it('should print Icositetrillion', () => {
      let res = Numbers.humanReadable(1000000000000000000000000000000000000000000000000000000000000000000000000.00, Numbers.NEW_GREEK)
      expect(res).to.be.a('string')
      expect(res).to.equal('Icositetrillion')
    })
    it('should print Icosiheptillion', () => {
      let res = Numbers.humanReadable(1000000000000000000000000000000000000000000000000000000000000000000000000000000000.00, Numbers.NEW_GREEK)
      expect(res).to.be.a('string')
      expect(res).to.equal('Icosiheptillion')
    })
    it('should print Triacontillion', () => {
      let res = Numbers.humanReadable(1.00e90, Numbers.NEW_GREEK)
      expect(res).to.be.a('string')
      expect(res).to.equal('Triacontillion')
    })
    it('should print Triacontillion', () => {
      let res = Numbers.humanReadable(1.00e91, Numbers.NEW_GREEK)
      expect(res).to.be.a('string')
      expect(res).to.equal('Triacontillion')
    })
    it('should print Triacontillion', () => {
      let res = Numbers.humanReadable(1.00e92, Numbers.NEW_GREEK)
      expect(res).to.be.a('string')
      expect(res).to.equal('Triacontillion')
    })
    it('should print Triacontillion', () => {
      let res = Numbers.humanReadable(1.00e93, Numbers.NEW_GREEK)
      expect(res).to.be.a('string')
      expect(res).to.equal('Triacontillion')
    })
    it('should print Thousand Triacontillion', () => {
      let res = Numbers.humanReadable(1.00e96, Numbers.NEW_GREEK)
      expect(res).to.be.a('string')
      expect(res).to.equal('Thousand Triacontillion')
    })
  })
/*  describe('Short Scale (English [US/British])', () => {
    describe('0 - 1.00e3 should print nothing', () => {
      it('0 - 10 should have 0 places', () => {
        for (let i = 0; i < 10; i = i + 1) {
          let res = Numbers.humanReadable(i, Numbers.SHORT)
          expect(res).to.be.a('string')
          expect(res).to.equal('')
        }
      })
      it('10 - 99 should have 1 place', () => {
        for (let i = 10; i < 100; i = i + 1) {
          let res = Numbers.humanReadable(i, Numbers.SHORT)
          expect(res).to.be.a('string')
          expect(res).to.equal('')
        }
      })
      it('100 - 999 should have 2 places', () => {
        for (let i = 100; i < 1000; i = i + 1) {
          let res = Numbers.humanReadable(i, Numbers.SHORT)
          expect(res).to.be.a('string')
          expect(res).to.equal('')
        }
      })
    })
    describe('0 - 1.00e3 should print nothing', () => {
      it('0 - 10 should have 0 places', () => {
        for (let i = 0; i < 10; i = i + 1) {
          let res = Numbers.humanReadable(i, Numbers.SHORT)
          expect(Numbers.findShortN(i)).to.equal(0)
          expect(res).to.be.a('string')
          expect(res).to.equal('')
        }
      })
      it('10 - 99 should have 1 place', () => {
        for (let i = 10; i < 100; i = i + 1) {
          let res = Numbers.humanReadable(i, Numbers.SHORT)
          expect(Numbers.findShortN(i)).to.equal(0)
          expect(res).to.be.a('string')
          expect(res).to.equal('')
        }
      })
      it('100 - 999 should have 2 places', () => {
        for (let i = 100; i < 1000; i = i + 1) {
          let res = Numbers.humanReadable(i, Numbers.SHORT)
          expect(Numbers.findShortN(i)).to.equal(0)
          expect(res).to.be.a('string')
          expect(res).to.equal('')
        }
      })
    })
    describe('SHORT: 1.00e3 - 1.00e6 should print Thousand', () => {
      for (let exp = 3; exp < 6; exp++) {
        it('1.00e' + exp + ' to 1.00e' + (exp + 1) + ' should have ' + exp + ' places', () => {
          for (let i = parseFloat('1.00e' + exp); i < parseFloat('1.00e' + (exp + 1)); i = i + (4 * exp) - 3) {
            expect(Numbers._places(i)).to.equal(exp)
            expect(Numbers.findShortN(i)).to.equal(0)
            expect(Numbers.humanReadable(i, Numbers.SHORT)).to.equal('Thousand')
          }
        })
      }
    })
    describe('1.00e6 - 1.00e9 should print Million', () => {
      for (let exp = 6; exp < 9; exp++) {
        it('1.00e' + exp + ' to 1.00e' + (exp + 1) + ' should have ' + exp + ' places', () => {
          for (let i = parseFloat('1.00e' + exp); i < parseFloat('1.00e' + (exp + 1)); i = i + 17 + Math.pow(exp - 6)) {
            expect(Numbers._places(i)).to.equal(exp)
            expect(Numbers.findShortN(i)).to.equal(1)
            expect(Numbers.humanReadable(i, Numbers.SHORT)).to.equal('Million')
          }
        })
      }
    })
    */
    let tests = [
      // ShortScaleIndex, LongScaleIndex, Exponent, ShortName, LongName, IntlName, GreekName, Abbr, SciPrefix
      [ 0, 0, 1,   'Ten',         'Ten',                  'Ten',          '',           ''          ],
      [ 0, 0, 2,   'Hundred',     'Hundred',              'Hundred',      '',           ''          ],
      [ 0, 0, 3,   'Thousand',    'Thousand',             'Thousand',     'Thousand',   'K', 'Kilo' ],
      [ 1, 1, 6,   'Million',     'Million',              'Million',      'Million',    'M', 'Mega' ],
      [ 2, 1, 9,   'Billion',     'Thousand million',     'Milliard',     'Gillion',    'G', 'Giga' ],
      [ 3, 2, 12,  'Trillion',    'Billion',              'Billion',      'Tetrillion', 'T', 'Tera' ],
      [ 4, 2, 15,  'Quadrillion', 'Thousand billion',     'Billiard',     'Pentillion', 'P', 'Peta' ],
      [ 5, 3, 18,  'Quintillion', 'Trillion',             'Trillion',     'Hexillion',  'E', 'Exa'  ],
      [ 6, 3, 21,  'Sextillion',  'Thousand trillion',    'Trilliard',    'Heptillion', 'Z', 'Zetta'],
      [ 7, 4, 24,  'Septillion',  'Quadrillion',          'Quadrillion',  'Oktillion',  'Y', 'Yotta'],
      [ 8, 4, 27,  'Octillion',   'Thousand quadrillion', 'Quadrilliard', 'Ennillion',              ],
      [ 9, 5, 30,  'Nonillion',   'Quintillion',          'Quintillion',  'Dekillion'               ],
      [ 10, 5, 33, 'Decillion',   'Thousand quintillion', 'Quintilliard', 'Hendekillion'            ],
      /*[ 11, 6, 36, 'Undecillion', 'Sextillion', 'Sextillion', 'Dodekillion' ],
      [ 12, 6, 39, 'Duodecillion', 'Thousand sextillion', 'Sextilliard', 'Trisdekillion' ],
      [ 13, 7, 42, 'Tredecillion', 'Septillion', 'Septillion', 'Tetradekillion' ],
      [ 14, 7, 45, 'Quattuordecillion', 'Thousand septillion', 'Septilliard', 'Pentadekillion' ],
      [ 15, 8, 48, 'Quinquadecillion', 'Octillion', 'Octillion', 'Hexadekillion' ],
      [ 16, 8, 51, 'Sedecillion', 'Thousand octillion', 'Octilliard', 'Heptadekillion' ],
      [ 17, 9, 54, 'Septendecillion', 'Nonillion', 'Nonillion', 'Oktadekillion' ],
      [ 18, 9, 57, 'Octodecillion', 'Thousand nonillion', 'Nonilliard', 'Enneadekillion' ],
      [ 19, 10, 60, 'Novendecillion', 'Decillion', 'Decillion', 'Icosillion' ],
      [ 20, 10, 63, 'Vigintillion', 'Thousand decillion', 'Decilliard', 'Icosihenillion' ],
      [ 21, 11, 66, 'Unvigintillion', 'Undecillion', 'Undecillion', 'Icosidillion' ],
      [ 22, 11, 69, 'Duovigintillion', 'Thousand undecillion', 'Undecilliard', 'Icositrillion' ],
      [ 23, 12, 72, 'Tresvigintillion', 'Duodecillion', 'Duodecillion', 'Icositetrillion' ],
      [ 24, 12, 75, 'Quattuorvigintillion', 'Thousand duodecillion', 'Duodecilliard', 'Icosipentillion' ],
      [ 25, 13, 78, 'Quinquavigintillion', 'Tredecillion', 'Tredecillion', 'Icosihexillion' ],
      [ 26, 13, 81, 'Sesvigintillion', 'Thousand tredecillion', 'Tredecilliard', 'Icosiheptillion' ],
      [ 27, 14, 84, 'Septemvigintillion', 'Quattuordecillion', 'Quattuordecillion', 'Icosioktillion' ],
      [ 28, 14, 87, 'Octovigintillion', 'Thousand quattuordecillion', 'Quattuordecilliard', 'Icosiennillion' ],
      [ 29, 15, 90, 'Novemvigintillion', 'Quindecillion', 'Quindecillion', 'Triacontillion' ],
      [ 30, 15, 93, 'Trigintillion', 'Thousand quindecillion', 'Quindecilliard', '' ],
      [ 31, 16, 96, 'Untrigintillion', 'Sedecillion', 'Sedecillion', '' ],
      [ 32, 16, 99, 'Duotrigintillion', 'Thousand sedecillion', 'Sedecilliard', '' ],
      [ 33, 17, 2, 'Trestrigintillion', 'Septendecillion', 'Septendecillion', '' ],
      [ 34, 17, 5, 'Quattuortrigintillion', 'Thousand septendecillion', 'Septendecilliard', '' ],
      [ 35, 18, 8, 'Quinquatrigintillion', 'Octodecillion', 'Octodecillion', '' ],
      [ 36, 18, 111, 'Sestrigintillion', 'Thousand octodecillion', 'Octodecilliard', '' ],
      [ 37, 19, 114, 'Septentrigintillion', 'Novendecillion', 'Novendecillion', '' ],
      [ 38, 19, 117, 'Octotrigintillion', 'Thousand novendecillion', 'Novendecilliard', '' ],
      [ 39, 20, 120, 'Noventrigintillion', 'Vigintillion', 'Vigintillion', '' ],
      [ 40, 20, 123, 'Quadragintillion', 'Thousand vigintillion', 'Vigintilliard', '' ],
      [ 50, 25, 153, 'Quinquagintillion', 'Thousand quinquavigintillion', 'Quinquavigintilliard', '' ],
      [ 60, 30, 183, 'Sexagintillion', 'Thousand trigintillion', 'Trigintilliard', '' ],
      [ 70, 35, 213, 'Septuagintillion', 'Thousand quinquatrigintillion', 'Quinquatrigintilliard', '' ],
      [ 80, 40, 243, 'Octogintillion', 'Thousand quadragintillion', 'Quadragintilliard', '' ],
      [ 90, 45, 273, 'Nonagintillion', 'Thousand quinquaquadragintillion', 'Quinquaquadragintilliard', '' ],
      [ 100, 50, 303, 'Centillion', 'Thousand quinquagintillion', 'Quinquagintilliard', '' ],
      [ 101, 51, 306, 'Uncentillion', 'Unquinquagintillion', 'Unquinquagintillion', '' ],
      [ 102, 51, 309, 'Duocentillion', 'Thousand unquinquagintillion', 'Unquinquagintilliard', '' ],
      [ 103, 52, 312, 'Trescentillion', 'Duoquinquagintillion', 'Duoquinquagintillion', '' ],
      [ 110, 55, 333, 'Decicentillion', 'Thousand quinquaquinquagintillion', 'Quinquaquinquagintilliard', '' ],
      [ 111, 56, 336, 'Undecicentillion', 'Sesquinquagintillion', 'Sesquinquagintillion', '' ],
      [ 120, 60, 363, 'Viginticentillion', 'Thousand sexagintillion', 'Sexagintilliard', '' ],
      [ 121, 61, 366, 'Unviginticentillion', 'Unsexagintillion', 'Unsexagintillion', '' ],
      [ 130, 65, 393, 'Trigintacentillion', 'Thousand quinquasexagintillion', 'Quinquasexagintilliard', '' ],
      [ 140, 70, 423, 'Quadragintacentillion', 'Thousand septuagintillion', 'Septuagintilliard', '' ],
      [ 150, 75, 453, 'Quinquagintacentillion', 'Thousand quinquaseptuagintillion', 'Quinquaseptuagintilliard', '' ],
      [ 160, 80, 483, 'Sexagintacentillion', 'Thousand octogintillion', 'Octogintilliard', '' ],
      [ 170, 85, 513, 'Septuagintacentillion', 'Thousand quinquaoctogintillion', 'Quinquaoctogintilliard', '' ],
      [ 180, 90, 543, 'Octogintacentillion', 'Thousand nonagintillion', 'Nonagintilliard', '' ],
      [ 190, 95, 573, 'Nonagintacentillion', 'Thousand quinquanonagintillion', 'Quinquanonagintilliard', '' ],
      [ 200, 100, 603, 'Ducentillion', 'Thousand centillion', 'Centilliard', '' ],
      [ 300, 150, 903, 'Trecentillion', 'Thousand quinquagintacentillion', 'Quinquagintacentilliard', '' ],
      [ 400, 200, 1203, 'Quadringentillion', 'Thousand ducentillion', 'Ducentilliard', '' ],
      [ 500, 250, 1503, 'Quingentillion', 'Thousand quinquagintaducentillion', 'Quinquagintaducentilliard', '' ],
      [ 600, 300, 1803, 'Sescentillion', 'Thousand trecentillion', 'Trecentilliard', '' ],
      [ 700, 350, 2103, 'Septingentillion', 'Thousand quinquagintatrecentillion', 'Quinquagintatrecentilliard', '' ],
      [ 800, 400, 2403, 'Octingentillion', 'Thousand quadringentillion', 'Quadringentilliard', '' ],
      [ 900, 450, 2703, 'Nongentillion', 'Thousand quinquagintaquadringentillion', 'Quinquagintaquadringentilliard', '' ],
      [ 1000, 500, 3003, 'Millinillion', 'Thousand quingentillion', 'Quingentilliard', '' ]*/
    ]
    for( let testNum of tests ){
      console.info(testNum)
      let shortn, longn, exp, shortName, longName, intlName, greekName
      [shortn, longn, exp, shortName, longName, intlName, greekName] = testNum
      const num = '1e' + exp
      describe('Testing 10^'+exp, () =>{
        it('should have the correct findShortN()', () => {
          expect(Numbers.findShortN(num)).to.equal(shortn)
        })
        it('should have the correct length', () => {
          expect(Numbers._places(num)).to.equal(exp)
        })
        it('should have the correct short', () => {
          let res = Numbers.humanReadable(num, Numbers.SHORT)
          expect(res).to.be.a('string')
          expect(res).to.equal(shortName)
        })
        it('should have the correct greek', () => {
          let res = Numbers.humanReadable(num, Numbers.NEW_GREEK)
          expect(res).to.be.a('string')
          expect(res).to.equal(greekName)
        })
      })
    }
/*    it('should print Billion', () => {
      let res = Numbers.humanReadable(1.00e9, Numbers.SHORT)
      expect(Numbers.findShortN(i)).to.equal(2)
      expect(res).to.be.a('string')
      expect(res).to.equal('Billion')
    })
    it('should print Trillion', () => {
      let res = Numbers.humanReadable(1.00e12, Numbers.SHORT)
      expect(Numbers.findShortN(i)).to.equal(3)
      expect(res).to.be.a('string')
      expect(res).to.equal('Trillion')
    })
    it('should print Trillion', () => {
      let res = Numbers.humanReadable(1.00e13, Numbers.SHORT)
      expect(Numbers.findShortN(i)).to.equal(3)
      expect(res).to.be.a('string')
      expect(res).to.equal('Trillion')
    })
    it('should print Trillion', () => {
      let res = Numbers.humanReadable(1.00e14, Numbers.SHORT)
      expect(Numbers.findShortN(i)).to.equal(3)
      expect(res).to.be.a('string')
      expect(res).to.equal('Trillion')
    })
    it('should print Quadrillion', () => {
      let res = Numbers.humanReadable(1.00e15, Numbers.SHORT)
      expect(Numbers._places(1.00e15)).to.equal(15)
      expect(Numbers.findShortN(i)).to.equal(4)
      expect(res).to.be.a('string')
      expect(res).to.equal('Quadrillion')
    })
    it('should print Quadrillion', () => {
      let res = Numbers.humanReadable(1.00e15 + 5, Numbers.SHORT)
      expect(Numbers._places(1.00e15 + 5)).to.equal(15)
      expect(res).to.be.a('string')
      expect(res).to.equal('Quadrillion')
    })
    it('should print Quadrillion', () => {
      let res = Numbers.humanReadable(1.00e15 + 25, Numbers.SHORT)
      expect(Numbers._places(1.00e15 + 25)).to.equal(15)
      expect(res).to.be.a('string')
      expect(res).to.equal('Quadrillion')
    })
    it('should print Quadrillion', () => {
      let res = Numbers.humanReadable(1.00e15 + 27, Numbers.SHORT)
      expect(Numbers._places(1.00e15 + 27)).to.equal(15)
      expect(res).to.be.a('string')
      expect(res).to.equal('Quadrillion')
    })
    it('should print Quadrillion', () => {
      let res = Numbers.humanReadable(1.00e16 + 27, Numbers.SHORT)
      expect(Numbers._places(1.00e16 + 27)).to.equal(16)
      expect(res).to.be.a('string')
      expect(res).to.equal('Quadrillion')
    })
    it('should print Quintillion', () => {
      let res = Numbers.humanReadable(1.00e18, Numbers.SHORT)
      expect(res).to.be.a('string')
      expect(res).to.equal('Quintillion')
    })
    it('should print Sextillion', () => {
      let res = Numbers.humanReadable(1000000000000000000000.00, Numbers.SHORT)
      expect(res).to.be.a('string')
      expect(res).to.equal('Sextillion')
    })
    it('should print Septillion', () => {
      let res = Numbers.humanReadable(1000000000000000000000000.00, Numbers.SHORT)
      expect(res).to.be.a('string')
      expect(res).to.equal('Septillion')
    })
    it('should print Octillion', () => {
      let res = Numbers.humanReadable(1000000000000000000000000000.00, Numbers.SHORT)
      expect(res).to.be.a('string')
      expect(res).to.equal('Octillion')
    })
    it('should print Undecillion', () => {
      let res = Numbers.humanReadable(1000000000000000000000000000000000000.00, Numbers.SHORT)
      expect(res).to.be.a('string')
      expect(res).to.equal('Undecillion')
    })
    it('should print Quattuordecillion', () => {
      let res = Numbers.humanReadable(1000000000000000000000000000000000000000000000.00, Numbers.SHORT)
      expect(res).to.be.a('string')
      expect(res).to.equal('Quattuordecillion')
    })
    it('should print Septendecillion', () => {
      let res = Numbers.humanReadable(1000000000000000000000000000000000000000000000000000000.00, Numbers.SHORT)
      expect(res).to.be.a('string')
      expect(res).to.equal('Septendecillion')
    })
    it('should print Vigintillion', () => {
      let res = Numbers.humanReadable(1000000000000000000000000000000000000000000000000000000000000000.00, Numbers.SHORT)
      expect(res).to.be.a('string')
      expect(res).to.equal('Vigintillion')
    })
    it('should print Novemvigintillion', () => {
      let res = Numbers.humanReadable(1.00e90, Numbers.SHORT)
      expect(res).to.be.a('string')
      expect(res).to.equal('Novemvigintillion')
    })
    it('should print Novemvigintillion', () => {
      let res = Numbers.humanReadable(1.00e91, Numbers.SHORT)
      expect(res).to.be.a('string')
      expect(res).to.equal('Novemvigintillion')
    })
    it('should print Novemvigintillion', () => {
      let res = Numbers.humanReadable(1.00e92, Numbers.SHORT)
      expect(res).to.be.a('string')
      expect(res).to.equal('Novemvigintillion')
    })
    it('should print Trigintillion', () => {
      let res = Numbers.humanReadable(1.00e93, Numbers.SHORT)
      expect(res).to.be.a('string')
      expect(res).to.equal('Trigintillion')
    })
    it('should print Untrigintillion', () => {
      let res = Numbers.humanReadable(1.00e96, Numbers.SHORT)
      expect(res).to.be.a('string')
      expect(res).to.equal('Untrigintillion')
    })
    it('should print Duotrigintillion', () => {
      let res = Numbers.humanReadable(1.00e99, Numbers.SHORT)
      expect(res).to.be.a('string')
      expect(res).to.equal('Duotrigintillion')
    })
    it('should print Trestrigintillion', () => {
      let res = Numbers.humanReadable(1.00e102, Numbers.SHORT)
      expect(res).to.be.a('string')
      expect(res).to.equal('Trestrigintillion')
    })
    it('should print Quattuortrigintillion', () => {
      let res = Numbers.humanReadable(1.00e105, Numbers.SHORT)
      expect(res).to.be.a('string')
      expect(res).to.equal('Quattuortrigintillion')
    })
    it('should print Quinquatrigintillion', () => {
      let res = Numbers.humanReadable(1.00e108, Numbers.SHORT)
      expect(res).to.be.a('string')
      expect(res).to.equal('Quinquatrigintillion')
    })
    it('should print Sestrigintillion', () => {
      let res = Numbers.humanReadable(1.00e111, Numbers.SHORT)
      expect(res).to.be.a('string')
      expect(res).to.equal('Sestrigintillion')
    })
    it('should print Septentrigintillion', () => {
      let res = Numbers.humanReadable(1.00e114, Numbers.SHORT)
      expect(res).to.be.a('string')
      expect(res).to.equal('Septentrigintillion')
    })
    it('should print Octotrigintillion', () => {
      let res = Numbers.humanReadable(1.00e117, Numbers.SHORT)
      expect(res).to.be.a('string')
      expect(res).to.equal('Octotrigintillion')
    })
    it('should print Noventrigintillion', () => {
      let res = Numbers.humanReadable(1.00e120, Numbers.SHORT)
      expect(res).to.be.a('string')
      expect(res).to.equal('Noventrigintillion')
    })
    it('should print Quadragintillion', () => {
      let res = Numbers.humanReadable(1.00e123, Numbers.SHORT)
      expect(res).to.be.a('string')
      expect(res).to.equal('Quadragintillion')
    })
    it('should print Quinquagintillion', () => {
      let res = Numbers.humanReadable(1.00e153, Numbers.SHORT)
      expect(res).to.be.a('string')
      expect(res).to.equal('Quinquagintillion')
    })
    it('should print Sexagintillion', () => {
      let res = Numbers.humanReadable(1.00e183, Numbers.SHORT)
      expect(res).to.be.a('string')
      expect(res).to.equal('Sexagintillion')
    })
    it('should print Septuagintillion', () => {
      let res = Numbers.humanReadable(1.00e213, Numbers.SHORT)
      expect(res).to.be.a('string')
      expect(res).to.equal('Septuagintillion')
    })
    it('should print Octogintillion', () => {
      let res = Numbers.humanReadable(1.00e243, Numbers.SHORT)
      expect(res).to.be.a('string')
      expect(res).to.equal('Octogintillion')
    })
    it('should print Nonagintillion', () => {
      let res = Numbers.humanReadable(1.00e273, Numbers.SHORT)
      expect(res).to.be.a('string')
      expect(res).to.equal('Nonagintillion')
    })
    it('should print Centillion', () => {
      let res = Numbers.humanReadable(1.00e303, Numbers.SHORT)
      expect(res).to.be.a('string')
      expect(res).to.equal('Centillion')
    })
    it('should print Uncentillion', () => {
      let res = Numbers.humanReadable(1.00e306, Numbers.SHORT)
      expect(res).to.be.a('string')
      expect(res).to.equal('Uncentillion')
    })
    it('should print Duocentillion', () => {
      let res = Numbers.humanReadable('1.00e309', Numbers.SHORT)
      expect(res).to.be.a('string')
      expect(res).to.equal('Duocentillion')
    })
    it('should print Trescentillion', () => {
      let res = Numbers.humanReadable('1.00e312', Numbers.SHORT)
      expect(res).to.be.a('string')
      expect(res).to.equal('Trescentillion')
    })
    it('should print Decicentillion', () => {
      let res = Numbers.humanReadable('1.00e333', Numbers.SHORT)
      expect(res).to.be.a('string')
      expect(res).to.equal('Decicentillion')
    })
    it('should print Undecicentillion', () => {
      let res = Numbers.humanReadable('1.00e336', Numbers.SHORT)
      expect(res).to.be.a('string')
      expect(res).to.equal('Undecicentillion')
    })
    it('should print Viginticentillion', () => {
      let res = Numbers.humanReadable('1.00e363', Numbers.SHORT)
      expect(Numbers._places('1.00e363')).to.equal(363)
      expect(res).to.be.a('string')
      expect(res).to.equal('Viginticentillion')
    })
    it('should print Unviginticentillion', () => {
      let res = Numbers.humanReadable('1.00e366', Numbers.SHORT)
      expect(Numbers._places('1.00e366')).to.equal(366)
      expect(res).to.be.a('string')
      expect(res).to.equal('Unviginticentillion')
    })
    it('should print Trigintacentillion', () => {
      let res = Numbers.humanReadable('1.00e393', Numbers.SHORT)
      expect(Numbers._places('1.00e393')).to.equal(393)
      expect(res).to.be.a('string')
      expect(res).to.equal('Trigintacentillion')
    })
    it('should print Quadragintacentillion', () => {
      let res = Numbers.humanReadable('1.00e423', Numbers.SHORT)
      expect(Numbers._places('1.00e423')).to.equal(423)
      expect(res).to.be.a('string')
      expect(res).to.equal('Quadragintacentillion')
    })
    it('should print Quinquagintacentillion', () => {
      let res = Numbers.humanReadable('1.00e453', Numbers.SHORT)
      expect(Numbers._places('1.00e453')).to.equal(453)
      expect(res).to.be.a('string')
      expect(res).to.equal('Quinquagintacentillion')
    })
    it('should print Sexagintacentillion', () => {
      let res = Numbers.humanReadable('1.00e483', Numbers.SHORT)
      expect(Numbers._places('1.00e483')).to.equal(483)
      expect(res).to.be.a('string')
      expect(res).to.equal('Sexagintacentillion')
    })
    it('should print Septuagintacentillion', () => {
      let res = Numbers.humanReadable('1.00e513', Numbers.SHORT)
      expect(Numbers._places('1.00e513')).to.equal(513)
      expect(res).to.be.a('string')
      expect(res).to.equal('Septuagintacentillion')
    })
    it('should print Octogintacentillion', () => {
      let res = Numbers.humanReadable('1.00e543', Numbers.SHORT)
      expect(Numbers._places('1.00e543')).to.equal(543)
      expect(res).to.be.a('string')
      expect(res).to.equal('Octogintacentillion')
    })
    it('should print Nonagintacentillion', () => {
      let res = Numbers.humanReadable('1.00e573', Numbers.SHORT)
      expect(Numbers._places('1.00e573')).to.equal(573)
      expect(res).to.be.a('string')
      expect(res).to.equal('Nonagintacentillion')
    })
    it('should print Ducentillion', () => {
      let res = Numbers.humanReadable('1.00e603', Numbers.SHORT)
      expect(Numbers._places('1.00e603')).to.equal(603)
      expect(res).to.be.a('string')
      expect(res).to.equal('Ducentillion')
    })
    it('should print Quinquacentillion', () => {
      let res = Numbers.humanReadable('1.00e753', Numbers.SHORT)
      expect(Numbers._places('1.00e753')).to.equal(753)
      expect(res).to.be.a('string')
      expect(res).to.equal('Quinquacentillion')
    })
    it('should print Trecentillion', () => {
      let res = Numbers.humanReadable('1.00e423', Numbers.SHORT)
      expect(Numbers._places('1.00e903')).to.equal(903)
      expect(res).to.be.a('string')
      expect(res).to.equal('Trecentillion')
    })
    it('should print Quadringentillion', () => {
      let res = Numbers.humanReadable('1.00e1203', Numbers.SHORT)
      expect(Numbers._places('1.00e1203')).to.equal(1203)
      expect(res).to.be.a('string')
      expect(res).to.equal('Quadringentillion')
    })
    it('should print Quingentillion', () => {
      let res = Numbers.humanReadable('1.00e1503', Numbers.SHORT)
      expect(Numbers._places('1.00e1503')).to.equal(1503)
      expect(res).to.be.a('string')
      expect(res).to.equal('Quingentillion')
    })
    it('should print Sescentillion', () => {
      let res = Numbers.humanReadable('1.00e1803', Numbers.SHORT)
      expect(Numbers._places('1.00e1803')).to.equal(1803)
      expect(res).to.be.a('string')
      expect(res).to.equal('Sescentillion')
    })
    it('should print Septingentillion', () => {
      let res = Numbers.humanReadable('1.00e2103', Numbers.SHORT)
      expect(Numbers._places('1.00e2103')).to.equal(2103)
      expect(res).to.be.a('string')
      expect(res).to.equal('Septingentillion')
    })
    it('should print Octingentillion', () => {
      let res = Numbers.humanReadable('1.00e2403', Numbers.SHORT)
      expect(Numbers._places('1.00e2403')).to.equal(2403)
      expect(res).to.be.a('string')
      expect(res).to.equal('Octingentillion')
    })
    it('should print Nongentillion', () => {
      let res = Numbers.humanReadable('1.00e2703', Numbers.SHORT)
      expect(Numbers._places('1.00e2703')).to.equal(2703)
      expect(res).to.be.a('string')
      expect(res).to.equal('Nongentillion')
    })
    it('should print Millinillion', () => {
      let res = Numbers.humanReadable('1.00e3003', Numbers.SHORT)
      expect(Numbers._places('1.00e3003')).to.equal(3003)
      expect(res).to.be.a('string')
      expect(res).to.equal('Millinillion')
    })
    it('should print the insanity', () => {
      let res = Numbers.humanReadable('1.00e' + (1.00e100), Numbers.SHORT)
      expect(Numbers._places('1.00e' + (1.00e100)).to.equal(1.00e100))
      expect(Numbers.findShortN('1.00e' + (1.00e100))).to.equal(1e100)
      expect(res).to.be.a('string')
      expect(res).to.equal('trillitrestrigintatrecentillitrestrigintatrecentillitrestrigintatrecentillitrestrigintatrecentillitrestrigintatrecentillitrestrigintatrecentillitrestrigintatrecentillitrestrigintatrecentillitrestrigintatrecentillitrestrigintatrecentillitrestrigintatrecentillitrestrigintatrecentillitrestrigintatrecentillitrestrigintatrecentillitrestrigintatrecentillitrestrigintatrecentillitrestrigintatrecentillitrestrigintatrecentillitrestrigintatrecentillitrestrigintatrecentillitrestrigintatrecentillitrestrigintatrecentillitrestrigintatrecentillitrestrigintatrecentillitrestrigintatrecentillitrestrigintatrecentillitrestrigintatrecentillitrestrigintatrecentillitrestrigintatrecentillitrestrigintatrecentillitrestrigintatrecentillitrestrigintatrecentilliduotrigintatrecentillion')
    })
  })
   */
/*  describe('findShortN()', () => {
    it('should return the correct exponents for N <= 1.00e100', () => {
      for (let exp = 6; exp < 100; exp = exp + 1) {
        expect(Numbers.findShortN('1.00e'+exp)).to.equal(Math.floor((exp - 3)/3))
      }
    })
    it('should return the correct exponents for 1.00e100 <= N <= 1.00e1000', () => {
      for (let exp = 102; exp < 1000; exp = exp + 1) {
        expect(Numbers.findShortN('1.00e' + exp)).to.equal(Math.floor((exp - 3) / 3))
      }
    })
  })*/
})
