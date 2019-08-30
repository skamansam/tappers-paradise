import { Model, fk, many, attr } from 'redux-orm';

export default class Preq extends Model {
  modelName = 'Preq'
  fields = {
      id: attr(), // non-relational field for any value; optional but highly recommended
      name: attr(),
      game: fk('Game', 'prerequisites'),
      world: fk('World', 'prerequisites'),
      universe: fk('Universe', 'prerequisites'),
      generator: fk('Generator', 'prerequisites'),
      bonus: fk('Bonus', 'prerequisites'),
      equation: attr()
  }
  
  toString() {
      return `Prerequisite: ${this.name} => ${this.equation}`;
  }

  calculate() {
    // caclulates the value of the string based on the input object
  }
}