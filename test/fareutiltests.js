const fareutils = require('../fareutil')
const mocha = require('mocha')
const chai = require('chai')

const expect = chai.expect 

describe('fareutils', function() {
    it('expect fare to be 50 for 0km, 0min', () => {
        let fare = fareutils.calcFare(0,0)
        expect(fare).to.equal(50)
    })

    it('expect fare to be 100 for 10km, 0min', () => {
        let fare = fareutils.calcFare(10,0)
        expect(fare).to.equal(100)
    })

    it('expect fare to be 110 for 10km, 20min', () => {
        let fare = fareutils.calcFare(10,20)
        expect(fare).to.equal(110)
    })
})