import { Model, fk, many, attr } from 'redux-orm';

export default class Universe extends Model {
  modelNmae = 'Universe'
  fields = {
      id: attr(), // non-relational field for any value; optional but highly recommended
      name: attr(),
      game: fk('Game', 'worlds')
  }
  toString() {
      return `Game: ${this.name}`;
  }
  // Declare any static or instance methods you need.
}

const BoardJSON = {
  "id": 0,
  "universes": [{
    "name": "Pleasant Pueblo",
    "multipliers": [],
    "resources": {
      "buck": {
        "id": 0,
        "icon": "attach_money ",
        "plural_name": "bucks",
        "auto_convert": true,
        "conversions": {
          "1,000": "megabuck",
          "1,000,000": "ultrabuck"
        }
      }
    }
  }],
  "worlds": [
    {
      "name": "The Bottom Block",
      "id": 0,
      "generators": [
        {
          "id": 0,
          "name": "House",
          "type": "cell",
          "timer": {
            "initialValue": 3000,
            "intervals": [
              2,4,8,16,32,64,128,256,512,1024
            ],
            "intervalType": "binary"
          },
          "base_cost": 1.00,
          "cost_multiplier": 0.01,
          "resource_cost": "buck",
          "generates": "buck",
          "resource_multiplier_per_tick": 1.00,
          "prerequisites": {},
          "visibility": "always"
        },
        {
          "id": 1,
          "name": "Street",
          "type": "cell",
          "timer": {
            "initialValue": 10000,
            "intervals": [
              2,4,8,16,32,64,128,256,512,1024
            ],
            "intervalType": "binary"
          },
          "base_cost": 1.00,
          "cost_multiplier": 0.01,
          "resource_cost": "buck",
          "generates": "buck",
          "resource_multiplier_per_tick": 1.00,
          "prerequisites": {},
          "visibility": "always"
        },
        {
          "id": 2,
          "name": "Neighborhood",
          "type": "cell",
          "timer": {
            "initialValue": 30000,
            "intervals": [
              2,4,8,16,32,64,128,256,512,1024
            ],
            "intervalType": "binary"
          },
          "base_cost": 1000.00,
          "cost_multiplier": 0.01,
          "resource_cost": "buck",
          "generates": "buck",
          "resource_multiplier_per_tick": 1.00,
          "prerequisites": {},
          "visibility": "always"
        }
      ]
    },
    {
      "name": "The Love Shacks",
      "id": 1,
      "generators": [
        {
          "name": "Simple Shack",
          "type": "cell",
          "timer": false,
          "base_cost": 1.00,
          "cost_multiplier": 0.01,
          "resource_cost": "buck",
          "generates": "buck",
          "resource_multiplier_per_tick": 1.00,
          "prerequisites": {},
          "visibility": "always"
        }
      ]
    }
  ],
  "bonuses": {
    "_options": {}
  }
}
