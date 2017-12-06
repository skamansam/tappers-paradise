import * as Numbers from '../../../src/lib/numbers.js'

describe('numbers.js', () => {
  describe('New Greek System', () => {
    it('should print nothing', () => {
      let res = Numbers.humanReadable(1.00, Numbers.NEW_GREEK)
      expect(res).to.be.a('string')
      expect(res).to.equal('')
    })
    it('should print nothing', () => {
      let res = Numbers.humanReadable(10.00, Numbers.NEW_GREEK)
      expect(res).to.be.a('string')
      expect(res).to.equal('')
    })
    it('should print nothing', () => {
      let res = Numbers.humanReadable(100.00, Numbers.NEW_GREEK)
      expect(res).to.be.a('string')
      expect(res).to.equal('')
    })
    it('should print Thousand', () => {
      let res = Numbers.humanReadable(1.00e3, Numbers.NEW_GREEK)
      expect(res).to.be.a('string')
      expect(res).to.equal('Thousand')
    })
    it('should print Million', () => {
      let res = Numbers.humanReadable(1.00e6, Numbers.NEW_GREEK)
      expect(res).to.be.a('string')
      expect(res).to.equal('Million')
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
    //1,000,000,000,000,000
    it('should print Pentillion', () => {
      let res = Numbers.humanReadable(1.00e15, Numbers.NEW_GREEK)
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
  })
})
