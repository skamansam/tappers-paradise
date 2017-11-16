<template>
  <v-card>
    <v-card-title primary-title class="headline text-md-center">
      <div class="headline">{{ totalValue | currency}}</div>
    </v-card-title>
    <v-card-text class="text-md-center">
      <v-progress-circular v-model="progress" v-bind:size="100" v-bind:rotate="-90" color="primary">{{ businessCount }}</v-progress-circular>
    </v-card-text>
    <v-card-actions>
      <v-btn v-on:click="_increment()">Add business {{ businessCost | currency }}</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
  export default {
    name: 'business-tapper',
    components: {

    },
    data () {
      return {
        businessCount: 0,
        progress: 0,
        businessCost: 1.00,
        earnedIncomePerBusiness: 1.00,
        totalValue: 0.00,
        businessSpeed: 1000
      }
    },
    filters: {
      currency (val) {
        return '$' + val.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,')
        // return '$' + val.toFixed(2).toString().split('3').
      }
    },
    computed: {
      // businessCount: this._getValue
    },
    mounted () {
      this.businessCount = Number.parseInt(this._getValue())
      // this.setNewValue(this.calculateValueSince())
      this.startTimers()
    },
    methods: {
      /* attached () {
        this.businessCount = Number.parseInt(this._getValue())
      }, */
      // setNewValue (new_val) {},
      // calculateValueSince () {},
      startTimers () {
        this.incrementIncome()
        this._incomeLoop = setInterval(this.incrementIncome, this.businessSpeed)
      },
      incrementIncome () {
        // clearTimeout(this._progressLoop)
        this._progressLoop = setInterval(this.incrementIncomeLoop, this.businessSpeed / 100)
      },
      calculateEarnedIncome (fraction = 1) {
        this.totalValue += (this.businessCount * this.earnedIncomePerBusiness) / fraction
      },
      incrementIncomeLoop () {
        this.progress = this.progress + 1
        this.calculateEarnedIncome(100)
        if (this.progress >= 100) {
          this.progress = 0
          this._stopProgress()
        }
      },
      _stopProgress () {
        clearTimeout(this._progressLoop)
      },
      _getValue () {
        return this.$localStorage.get('businessCount', 0)
      },
      _increment (evt) {
        this.businessCount += 1
        this._setValue(this.businessCount)
      },
      detached () {
        this._setValue(this.businessCount)
      },
      _setValue (val) {
        return this.$localStorage.set('businessCount', val)
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
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
