<template>
  <div class="filter-price-container flex space-around align-center">
    <div class="min-price flex column">
      <label>Min.</label>
      <input
        type="number"
        v-model.number="price.min"
        placeholder="$"
        class="filter-price"
      />
    </div>
    <div class="max-price flex column align-start">
      <label>Max.</label>
      <input
        type="number"
        v-model.number="price.max"
        placeholder="$"
        class="filter-price"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "filter-price",
  data() {
    return {
      price: {
        min: 0,
        max: null,
      },
    };
  },
  watch: {
    price: {
      deep: true,
      handler() {
        this.$emit("setPrice", this.price);
      },
    },
  },
};
</script>
