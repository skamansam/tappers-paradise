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
* resource generation paradigms: ([see this reddit thread for more](https://www.reddit.com/r/incremental_games/comments/6jfuxq/list_of_incremental_games_by_archetype/))
  * Factory - uses a map where you can place generators. Generators can "output" resources to other generators.
  * Breeding - Two inital generators that generate more generators based on current values. New generators replace old ones.
  * Landlord/Ruler: Start with one house that generates money, then work your way up to whole neighborhood, then city.
  * Tower: Each floor generates resources. May be capped, or may allow infinite floors. (Tiny Death Star, )
  * Collector: Start generating a single resource, then use that resource to buy items (i.e. decorations) for your room which will add bonuses to your resource generation. This style relies heavily on bonuses instead of different types of resource generators. Instead of multiple generators or bonuses, the idea is to upgrade each item to a new level insted of having multiples. ([Game Dev Tycoon](http://www.greenheartgames.com/app/game-dev-tycoon/), [PewDiePie's Tuber Simulator](https://play.google.com/store/apps/details?id=com.outerminds.tubular&hl=en))

  * Civ Builder: start with a small resource generator (usually based on something IRL), then "evolve" until you get to a higher form. Generators have strict prerequisites for multiple resources and number of generators obtained. Bonuses usually do not consume resources, but have a prerequisite for number and type of generators obtained. (i.e. "spear" bonus for having 10 tree generators, 5 iron generators, and 3 training facilities)
  * RPG - help adventurers on quests by tapping. can be idle via grinding mechanic. Bonuses are gear and stats.
  * Progression - Start with a single generator, buy more generators and bonuses with enough currency. Most of these are Landlord/Ruler style. Progression relies heavily on bonuses and Universe Multipliers
  * Unfolding - start with a simple game mechanic, then unveil more mechanics later when certain conditions have been met

In Tapper's Paradise, these ideas are generalized as such (you can call these what you want in your game):

* **Resource** - used to purchase generators
* **Generator** - generates resources
* **Prestige** - an idea for global help. you usually need to reset the universe in order to use these.
* **Bonus Tree** - a list of bonuses to apply to generators based on certain prerequisites
* **World** - a logical divide between groups of generators
* **Universe** - The entire game, made up of all worlds.
* **Tapper** - a GUI object you can click or tap on to generate resources.
* **AutoTapper** - a logical idea for something that activates the **Tapper** for you, at a predetermined time.
* **Monetizer** - special bonuses applied when viewing an ad or buying currency. (Will talk about how to do this in the future, but will not do so for this builder. You will never see Monetization on Tapper's Paradise, but you may on games created with it.)

# Designing Your Tapper
Tapper's Paradise is a game builder for incremental games. You have nearly full control over all aspects of your universe while building it. Here is a breakdown of all the ideas and I recommend starting with a plan. What type of Tapper do you want to see? Is it based on one you like to play, but lacks certain features you want?

Tapper's Paradise minimal viable product (MVP) will be a builder for Landlord

## Where is the universe data saved?
For now, you can fork this repo and change one of the exisitng universes to be what you want. In the future, we will have a designer which will output the json description of the universe.

## Resources
## Generators

## Universe Multipliers

## Bonus Trees

## Worlds

## Universe

## Tapper

## AutoTapper

## The Future

## Building and Running - React version

There are two versions of this app - one using React and one using Vue. To change the version, use `git checkout vue` or `git checkout react`. Currently, the `master` branch uses Vue, so it should be up to date. Since you are on the React version now, these instructions are for building this app using said framework.

``` bash
# install dependencies
npm install -g yarn
yarn install

# serve with hot reload at localhost:8080
yarn start

# build for production with minification.
yarn build

# run tests using jest. see https://github.com/facebook/create-react-app/blob/master/packages/react-scripts/template/README.md#running-tests
yarn test
```

## Development

You are free to work on this app using react or vue, in your editor of choice. Since I use VSCode, the git repo contains the files needed for developing on VSCode.

```
Any PRs with modified VSCode files will be rejected.
```

That being said, if there is sufficient discussion around why it should be included, I may bend this rule from time to time. There is already a launch configuration for debugging in VSCode, called "Debug Chrome." This configuration requires the `Debugger for Chrome` extension to be installed. This configuration is for using VSCode's debugging tools.

The other debug configuration just runs the yarn task for running a local server. This configuration is for using your browser's native debug tools, or for testing in other browsers.
