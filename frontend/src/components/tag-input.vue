<template>
  <div class="clean-list tag">
    <input type="checkbox" name="text1" value="value1" @click="check(tag)" />
    <label for="text1">{{ tag }}</label>
  </div>
</template>

<script>
export default {
  name: "tag-input",
  props: {
    tag: String,
  },
  data() {
    return {};
  },
  methods: {
    check(tag) {
      this.$emit("check-tag", tag);
    },
  },
};
</script>