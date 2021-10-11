<template>
  <section class="signup-container">
    Sign-up as:
    <button class="btn" @click="setUserType('influencer')">Influencer</button>
    <button class="btn" @click="setUserType('brand')">Brand</button>
    <!-- //dynamic component - renders brandCreate if userType==brand -->
    <component
      v-if="userType"
      :is="`${userType}Create`"
      class="user-signup"
    ></component>
  </section>
</template>

<script>
import influencerCreate from "../components/influencer-create.vue";
import brandCreate from "../components/brand-create.vue";
export default {
  name: "signup-page",
  data() {
    return {
      userType: "influencer",
    };
  },
  methods: {
    setUserType(userType) {
      this.userType = userType;
    },
  },
  components: {
    influencerCreate,
    brandCreate,
  },
};
</script>
