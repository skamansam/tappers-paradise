<template>
  <v-card>
    <v-card-title primary-title class="headline text-md-center">
      <div class="headline">{{ currentValue | currency(income.symbol) }}</div>
      <div class="headline">{{ name }}</div>
    </v-card-title>
    <v-card-text class="text-md-center text-xs-center" >
        <v-progress-circular v-model="progress" v-bind:size="100" v-bind:rotate="-90" v-on:click="generateIncome()" color="primary">{{ owned }}</v-progress-circular>
    </v-card-text>
    <v-card-actions>
      <v-btn round block color="primary" v-on:click="build()" v-bind:disabled="tooExpensive">Build {{ currentCost | currency(income.symbol) }}</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
  export default {
    name: 'income-generator',
    components: {

    },
    data () {
      return {
        name: 'Home',
        owned: 0,
        lastStarted: 0,
        cost: 1.00,
        costMultiplier: 1.00,
        costPerUnit: 0.01, // next generator cost is cost * (owned * costPerUnit)
        income: {
          name: 'dollar',
          pluralName: 'dollars',
          symbol: '$',
          iconName: 'attach_money',
          perUnit: 1.00,
          perUnitMultiplier: 0.01
        },
        currentValue: 0.00,
        speed: 1000,
        progress: 0,
        currentCost: 1.00,
        autoTapper: false
      }
    },
    filters: {
      currency (val, symbol) {
        return symbol + val.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,')
      }
    },
    computed: {
      tooExpensive: function () {
        return this.currentCost > this.currentValue
      }
    },
    watch: {
      currentValue: function (val) {
        this._storeValue(val)
      },
      owned: function (val) {
        this.currentCost = (this.cost + (val * this.costPerUnit * this.costMultiplier))
        this._storeOwned(val)
      },
      costMultiplier: function (val) {
        this.currentCost = (this.cost + (this.owned * this.costPerUnit * val))
      },
      autoTapper: function (val) {
        if (val) {
          this.startIncomeTimer()
        } else {
          this.stopIncomeTimer()
        }
      }
    },
    mounted () {
      this._loadData()
      // this.setNewValue(this.calculateValueSince())
      this.startTimers()
    },
    methods: {
      /* attached () {
        this.owned = Number.parseInt(this._getValue())
      }, */
      // setNewValue (new_val) {},
      // calculateValueSince () {},
      startTimers () {
        // this.incrementIncome()
        //  this._incomeLoop = setInterval(this.incrementIncome, this.speed)
        // this.startIncomeTimer()
      },
      generateIncome (fraction = 1) {
        // if progress loop is active, do nothing.
        if (this._progressLoopIsRunning) {
          return
        }

        this.startProgressLoop(() => {
          this.currentValue += (this.owned * this.income.perUnit) / fraction
        })
      },
      startProgressLoop (cb) {
        this._progressLoop = setInterval(() => {
          this._progressLoopIsRunning = true
          this.progress = this.progress + 1
          if (this.progress >= 100) {
            this._progressLoopIsRunning = false
            this.progress = 0
            this.stopIncomeTimer()
            cb()
          }
        }, this.speed / 100)
      },
      stopIncomeTimer () {
        clearTimeout(this._progressLoop)
      },
      build (evt) {
        if (this.currentValue < this.currentCost) {
          return
        }
        this.owned += 1
        this._storeOwned(this.owned)
        this.currentValue -= this.currentCost
      },
      _loadData () {
        this._loadOwned()
        this._loadValue()
      },
      _loadOwned () {
        this.owned = Number.parseInt(this.$localStorage.get('owned', 0))
      },
      _storeOwned (val) {
        return this.$localStorage.set('owned', val || this.owned)
      },
      _loadValue () {
        this.currentValue = Number.parseInt(this.$localStorage.get('value', 0.00))
      },
      _storeValue (val) {
        this.$localStorage.set('value', val || this.currentValue)
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .headline{
    text-align: center;
    width: 100%;
  }
  .progress-circular__overlay {
    stroke: currentColor;
    z-index: 2;
    transition: all 0s ease-in-out;
  }
</style>
