import * as Numbers from '../../../src/lib/numbers.js'

describe('numbers.js', () => {
  describe('New Greek System', () => {
    describe('GREEK: 0 - 1.00e3 should print nothing', () => {
      it('GREEK: 0 - 10 should have 0 places', () => {
        for (let i = 0; i < 10; i = i + 1) {
          let res = Numbers.humanReadable(i, Numbers.NEW_GREEK)
          expect(Numbers._places(i)).to.equal(0)
          expect(res).to.be.a('string')
          expect(res).to.equal('')
        }
      })
      it('GREEK: 10 - 99 should have 1 place', () => {
        for (let i = 10; i < 100; i = i + 1) {
          let res = Numbers.humanReadable(i, Numbers.NEW_GREEK)
          expect(Numbers._places(i)).to.equal(1)
          expect(res).to.be.a('string')
          expect(res).to.equal('')
        }
      })
    })
    describe('GREEK: 1.00e3 - 1.00e6 should print Thousand', () => {
      for (let exp = 3; exp < 6; exp++) {
        it('1.00e' + exp + ' to 1.00e' + (exp + 1) + ' should have ' + exp + ' places', () => {
          for (let i = parseFloat('1.00e' + exp); i < parseFloat('1.00e' + (exp + 1)); i = exp - 3 + i + exp) {
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
  describe('Short Scale (English [US/British])', () => {
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
    describe('SHORT: 1.00e3 - 1.00e6 should print Thousand', () => {
      for (let exp = 3; exp < 6; exp++) {
        it('1.00e' + exp + ' to 1.00e' + (exp + 1) + ' should have ' + exp + ' places', () => {
          for (let i = parseFloat('1.00e' + exp); i < parseFloat('1.00e' + (exp + 1)); i = i + exp + exp - 3) {
            expect(Numbers._places(i)).to.equal(exp)
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
            expect(Numbers.humanReadable(i, Numbers.SHORT)).to.equal('Million')
          }
        })
      }
    })
    it('should print Billion', () => {
      let res = Numbers.humanReadable(1.00e9, Numbers.SHORT)
      expect(res).to.be.a('string')
      expect(res).to.equal('Billion')
    })
    it('should print Trillion', () => {
      let res = Numbers.humanReadable(1.00e12, Numbers.SHORT)
      expect(res).to.be.a('string')
      expect(res).to.equal('Trillion')
    })
    it('should print Trillion', () => {
      let res = Numbers.humanReadable(1.00e13, Numbers.SHORT)
      expect(res).to.be.a('string')
      expect(res).to.equal('Trillion')
    })
    it('should print Trillion', () => {
      let res = Numbers.humanReadable(1.00e14, Numbers.SHORT)
      expect(res).to.be.a('string')
      expect(res).to.equal('Trillion')
    })
    it('should print Quadrillion', () => {
      let res = Numbers.humanReadable(1.00e15, Numbers.SHORT)
      expect(Numbers._places(1.00e15)).to.equal(15)
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
      let res = Numbers.humanReadable(1.00e333, Numbers.SHORT)
      expect(res).to.be.a('string')
      expect(res).to.equal('Decicentillion')
    })
    it('should print Undecicentillion', () => {
      let res = Numbers.humanReadable(1.00e336, Numbers.SHORT)
      expect(res).to.be.a('string')
      expect(res).to.equal('Undecicentillion')
    })
    it('should print Viginticentillion', () => {
      let res = Numbers.humanReadable(1.00e363, Numbers.SHORT)
      expect(res).to.be.a('string')
      expect(res).to.equal('Viginticentillion')
    })
    it('should print Unviginticentillion', () => {
      let res = Numbers.humanReadable(1.00e366, Numbers.SHORT)
      expect(res).to.be.a('string')
      expect(res).to.equal('Unviginticentillion')
    })
    it('should print Trigintacentillion', () => {
      let res = Numbers.humanReadable(1.00e393, Numbers.SHORT)
      expect(res).to.be.a('string')
      expect(res).to.equal('Trigintacentillion')
    })
    it('should print Quadragintacentillion', () => {
      let res = Numbers.humanReadable(1.00e423, Numbers.SHORT)
      expect(res).to.be.a('string')
      expect(res).to.equal('Quadragintacentillion')
    })
  })
})
