const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');
const Card = require('../src/Card')

describe('Turn', () => {

  let turn, card;

  beforeEach(() => {
    turn = new Turn('object', card);
    card = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
  })

  it('should be a function', () => {
    expect(Turn).to.be.a('function');
  })

  it('Should be an instance Turn', () => {
    expect(turn).to.be.an.instanceof(Turn);
  })

  it('Should be able to make a guess at each turn', () => {
    expect(turn.guess).to.equal('object')
  })

  it('Should use a card from the deck on each turn', () => {
    expect(turn.currentCard).to.deep.equal(card);
  })

  it('Should be able to return the guess made', () => {
    let guess = turn.returnGuess()

    expect(guess).to.equal('object')
  })

  it('Should be able to return the card used on the turn', () => {
    let cardUsed = turn.returnCard()

    expect(cardUsed).to.deep.equal(card)
  })

  it('Should be able to see if the guess made is the correct answer', () => {
    let guessMade = turn.evaluateGuess()

    expect(guessMade).to.deep.equal(false)
  })

  it('Should be able to give the user feedback', () => {
    let feedback = turn.giveFeedback()

    expect(feedback).to.deep.equal('incorrect!')
  })
})