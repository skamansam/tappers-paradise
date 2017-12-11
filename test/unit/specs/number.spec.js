import * as Numbers from '../../../src/lib/numbers.js'

describe('numbers.js', () => {
  describe('New Greek System', () => {
    describe('0 - 1.00e3 should print nothing', () => {
      it('0 - 10 should have 0 places', () => {
        for (let i = 0; i < 10; i = i + 1) {
          let res = Numbers.humanReadable(i, Numbers.NEW_GREEK)
          expect(Numbers._places(i)).to.equal(0)
          expect(res).to.be.a('string')
          expect(res).to.equal('')
        }
      })
      it('10 - 99 should have 1 place', () => {
        for (let i = 10; i < 100; i = i + 1) {
          let res = Numbers.humanReadable(i, Numbers.NEW_GREEK)
          expect(Numbers._places(i)).to.equal(1)
          expect(res).to.be.a('string')
          expect(res).to.equal('')
        }
      })
    })
    describe('1.00e3 - 1.00e6 should print Thousand', () => {
      for (let exp = 3; exp < 6; exp++) {
        it('1.00e' + exp +' to 1.00e' + (exp + 1) +' should have ' + exp + ' places', () => {
          for (let i = parseFloat('1.00e' + exp); i < parseFloat('1.00e' + (exp+1)); i = i + exp) {
            expect(Numbers._places(i)).to.equal(exp)
            expect(Numbers.humanReadable(i, Numbers.NEW_GREEK)).to.equal('Thousand')
          }
        })
      }
    })
    describe('1.00e6 - 1.00e9 should print Million', () => {
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
})
