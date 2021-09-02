<script>
import Vue from 'vue';
import VueFlopCard from '@/vue-flop-card.vue';

export default Vue.extend({
  name: 'ServeDev',
  components: {
    VueFlopCard
  },
  data() {
    return {
      earAmount: 0
    }
  },
  mounted() {
    this.change()
  },
  methods: {
    change() {
      setInterval(() => {
        this.earAmount += 1232
      }, 1000);
    }
  }
});
</script>

<template>
  <div id="app">
    <div class="example-item">
      <span>Default config:</span>
      <vue-flop-card
          :amount="earAmount"
          :places="9"
          :flop-width="45"
          :flop-height="60">
      </vue-flop-card>
    </div>
    <div class="example-item">
      <span>Set font family:</span>
      <vue-flop-card
          :amount="earAmount"
          :places="9"
          font-family="mc"
          :flop-width="45"
          :flop-height="60">
      </vue-flop-card>
    </div>
    <div class="example-item">
      <span>Change card width height and font size to larger:</span>
      <vue-flop-card
          :amount="earAmount"
          :places="9"
          :font-size="30"
          :flop-width="60"
          :flop-height="90">
      </vue-flop-card>
    </div>
    <div class="example-item">
      <span>Change card width and height and font size to small:</span>
      <vue-flop-card
          :amount="earAmount"
          :places="9"
          :font-size="18"
          :flop-width="30"
          :flop-height="40">
      </vue-flop-card>
    </div>
    <div class="example-item">
      <span>Change default places:</span>
      <vue-flop-card
          :amount="earAmount"
          :places="12"
          color="#333333"
          :flop-width="45"
          :flop-height="60">
      </vue-flop-card>
    </div>
    <div class="example-item">
      <span>Change background color and font color:</span>
      <vue-flop-card
          :amount="earAmount"
          :places="9"
          background-color="#1890ff"
          :flop-width="45"
          :flop-height="60">
      </vue-flop-card>
    </div>
    <div class="example-item">
      <span>Change separator:</span>
      <vue-flop-card
          :amount="earAmount"
          separator="|"
          color="#333333"
          :places="9"
          :flop-width="45"
          :flop-height="60">
      </vue-flop-card>
    </div>
    <div class="example-item">
      <span>No separator:</span>
      <vue-flop-card
          :amount="earAmount"
          :places="9"
          :is-separator="false"
          :flop-width="45"
          :flop-height="60">
      </vue-flop-card>
    </div>
    <div class="example-item">
      <span>No zero padding:</span>
      <vue-flop-card
          :amount="earAmount"
          :places="9"
          :is-coverage="false"
          :flop-width="45"
          :flop-height="60">
      </vue-flop-card>
    </div>
  </div>
</template>

<style lang="scss">
html, body {
  height: 100%;
  margin: 0;
  padding: 0;
}

#app {
  width: 100%;
  height: 100%;
  padding: 20px;
  background: #e2e2e2;
}

.example-item {
  display: flex;
  align-items: center;
  margin-top: 25px;

  span {
    display: inline-block;
    width: 450px;
    color: #333333;
    font-size: 18px;
    padding-right: 15px;
    text-align: right;
  }
}

.basic-card {
  padding: 12px;
}

.styled-card {
  p {
    padding: 6px;
  }
}
</style>