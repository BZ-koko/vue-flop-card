<template>
  <div class="vue-flop">
    <div class="flop" :style="setFlop()">
      <div class="flop-item"
           v-for="(item, index) in flopOptions"
           :key="index"
           :style=" isSeparator && isSymbol(index) ? {...flopStyle,backgroundColor: 'transparent'} : flopStyle">
        <div v-if=" isSeparator && isSymbol(index)">{{ separator }}</div>
        <div class="num-scroll"
             v-else
             :style="setNumScroll(item)">
          <i
              v-for="(num, i) in 10"
              :key="i"
              :style="setFont()">
            {{ num - 1 }}
          </i>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'vue-flop',
  props: {
    /**
     * Card numerical value
     * Type: Number | default: 0
     */
    amount: {
      type: Number,
      default: 0
    },
    /**
     * Card background color
     * Type: String | default: #05c8c0
     */
    backgroundColor: {
      type: String,
      default: '#05c8c0'
    },
    /**
     * Card font color
     * Type: String | default: #FFFFFF
     */
    color: {
      type: String,
      default: '#FFFFFF'
    },
    /**
     * Is show separator
     * Type: Boolean | default: true
     */
    isSeparator: {
      type: Boolean,
      default: true
    },
    /**
     * Separator style
     * Type: String | default: ,
     */
    separator: {
      type: String,
      default: ','
    },
    /**
     * Card places
     * Type: Number | default: 9,
     */
    places: {
      type: Number,
      default: 9
    },
    /**
     * Card width
     * Type: Number | default: 22,
     */
    flopWidth: {
      type: Number,
      default: 22
    },
    /**
     * Card height
     * Type: Number | default: 38,
     */
    flopHeight: {
      type: Number,
      default: 38
    },
    /**
     * Font size
     * Type: Number | default: 26,
     */
    fontSize: {
      type: Number,
      default: 26
    },
    /**
     * IS zero padding
     * Type: boolean | default: true,
     */
    isCoverage: {
      type: Boolean,
      default: true
    },
    /**
     * Card font family
     * Type: String | default: '',
     */
    fontFamily: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      //flop options
      flopOptions: [],
      //flop value
      numbers: 0,
      //flop style
      flopStyle: {}
    }
  },
  watch: {
    amount: {
      immediate: true,
      handler() {
        this.refreshFlop()
      }
    }
  },
  created() {
    this.initStyle()
  },
  mounted() {
    this.refreshFlop()
  },
  methods: {
    /** Init flop card style */
    initStyle() {
      this.flopStyle = {
        backgroundColor: this.backgroundColor,
        color: this.color,
        width: `${this.flopWidth}px`,
        height: `${this.flopHeight}px`,
        lineHeight: `${this.flopHeight}px`,
        fontFamily: this.fontFamily
      }
    },
    /** Is show separator */
    isSymbol(index) {
      if (!this.isCoverage) return false
      return ((index + 1) / 4) % 1 === 0
    },
    /** Set flop card value top */
    setNumScroll(data) {
      return {top: `${-data * this.flopWidth}px`}
    },
    setFlop() {
      return {height: `${this.flopHeight}px`}
    },
    setFont() {
      return {
        fontSize: `${this.fontSize}px`,
        height: `${this.flopWidth}px`,
        color: this.color,
      }
    },
    dealFlopOptions(num, length) {
      let flops = (Array(length).join('0') + num).slice(-length).split('');
      //zero padding
      if (!this.isCoverage) return num.toString().split('')
      if (!this.isSeparator) return flops
      for (let i = 0; i < flops.length; i++) {
        if (((i + 1) / 4) % 1 === 0) {
          flops.splice(i, 0, ',')
        }
      }
      return flops;
    },
    setFlopOptions() {
      this.flopOptions = this.dealFlopOptions(this.amount, this.places);
    },
    refreshFlop() {
      this.numbers = this.amount;
      this.setFlopOptions()
    }
  }
}
</script>

<style lang="scss" scoped>
.vue-flop {
  float: left;
  display: flex;
  flex-direction: column;
  justify-content: center;

  .flop {
    float: left;

    .flop-item {
      float: left;
      border-radius: 3px;
      text-align: center;
      margin: 0 2px;
      position: relative;
      z-index: 3;
      overflow: hidden;
      font-weight: bold;

      span {
        display: flex;
        align-items: center;
        justify-content: center;
      }

      .num-scroll {
        width: 100%;
        position: absolute;
        left: 0;
        top: 0;
        transition: all .5s ease-in-out;

        i {
          width: 100%;
          float: left;
          font-style: normal;
        }
      }
    }
  }
}
</style>
