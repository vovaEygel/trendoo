<template>
  <div>
    <h1>hello {{ someThingComputed }}</h1>
  </div>
</template>

<script>
import { compile } from "vue/types/umd";
export default {
  data() {
    return {
      someData: "string data",
    };
  },
  created() {
    console.log("component created");
    this.seyHello();
  },
  destroyed() {
    console.log("component created");
    this.sayGoodBye();
  },
  methods: {
    seyHello() {
      console.log("hello!");
    },
    sayGoodBye() {
      console.log("good bye!");
    },
  },
  computed: {
    someThingComputed() {
      return this.someData + "and something else...";
    },
  },
  components: {
    //   someComponent
  },
};
</script>

<style lang="scss" scoped>
//your css
</style>