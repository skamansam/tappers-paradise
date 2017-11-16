# Tapper's Paradise
Design your own Incremental ("Idle") Game!

## What is a Tapper?

A Tapper is a game where you tap to get items. These are also called "Idle Games" or "Idle Strategy Games." Wikipedia lists them as [_Incremental Games_](https://en.wikipedia.org/wiki/Incremental_game). You know the kind I am talking about - where you start off with a single item that generates resources which you then use to obtain more items that generate more resources. Once you build enough basic items, you can expand to new sections of the game where you can build new classes of items that may generate different resources. This can go on forever, but is usually limited to a set number of sections and items. They all follow this basic premise.

Most of them have a button or window you can tap or click to generate resources, then eventually obtain some kind of auto-tapper that taps for you every so often. It is this feature that originally gave them the _Tapper_ name, but not all tappers have this feature.

Here is a list of features from these kinds of games. Most games on the market only have a subset of these features.

* Different types of resources, which are used to build different things(i.e. gold, platinum, silver). These can be used in combination.
* a screen or button where you can tap feverishly to generate resources
* a special button that applies a multiplier to generators for a specific length of time. (i.e. 2x more gold for the next 3 minutes!)
* once a certain number of resources have been generated, a new gloabl resource is generated that can only be used when the game is reset. Once reset, these resources add multipliers to all or some of your generators. (i.e. [angel investors](https://en.wikipedia.org/wiki/Angel_investor) in businesses)
* bonuses for generators (more resource per generator or faster generation time), according to certain resources generated. (i.e. you build 10 generators and your generation speed increases by 1.5x)
* bonuses for generators based on amount of resources generated (i.e. you can buy a speed multiplier for 10 gold and 2 platinum)
* generators may consume resources, or just require a number of resources to become active
* generators start off having to be tapped. When enough money or generators are built, a timer can be started which generates resources every X interval.
* resource generation paradigms:
  * Landlord: Start with one house that generates money, then work your way up to whole neighborhood, then city.
  * Office: Each floor generates resources. May be capped, or may allow infinite floors.
  * Simulation: start with a small resource generator based on something IRL, then "evolve" until you get to a higher form. Generators have strict prerequisites for multiple resources and number of generators obtained. Bonuses usually do not consume resources, but have a prerequisite for number and type of generators obtained. (i.e. "spear" bonus for having 10 tree generators, 5 iron generators, and 3 training facilities)

In Tapper's Paradise, these ideas are generalized as such:

* **Resource** - used to purchase generators
* **Generator** - generates resources
* **Universe Multiplier** - an idea for global help. you usually need to reset the universe in order to use these.
* **Bonus Tree** - a list of bonuses to apply to generators based on certain prerequisites
* **World** - a logical divide between generators
* **Universe** - The entire game, made up of all worlds.
* **Tapper** - a GUI object you can click or tap on to generate resources.
* **AutoTapper** - a logical idea for something that taps the **Tapper** for you, at a predetermined time.

## Resources
## Generators

## Universe Multipliers

## Bonus Trees

## Worlds

## Universe

## Tapper

## AutoTapper

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
