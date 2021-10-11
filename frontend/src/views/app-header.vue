<template>
  <section class="header">
    <nav class="navbar-container flex row flex-start">
      <label @click="$router.push('/').catch((err) => {})">TrenDoo</label>
      <div class="navbar flex align-center">
        <div
          @click="isShowen = !isShowen"
          class="hamburger-btn fa fa-bars"
        ></div>
        <div
          :class="{ showen: isShowen }"
          @click="isShowen = !isShowen"
          class="screen"
        ></div>
        <div
          @click="isShowen = !isShowen"
          :class="{ showen: isShowen }"
          class="navbar-btns flex align-center space-between"
        >
          <div class="navbar-routings">
            <router-link class="home-page-btn nav-btn" to="/">Home</router-link>
            <router-link class="nav-btn" to="/login">Login</router-link>
            <router-link class="nav-btn" to="/signup">Signup</router-link>
          </div>
          <div class="currentUser">{{ this.username }}</div>
          <button @click="demoInfluencer" class="demo-login-btn">
            demo login
          </button>
        </div>
      </div>
    </nav>
  </section>
</template>
<script>
export default {
  name: "app-header",
  data() {
    return {
      loggedInUser: null,
      //for demo purposes
      demoUser: {
        userType: "influencer",
        username: "kianetti8",
        password: "ij7QdH",
      },
      isShowen: false,
    };
  },
  methods: {
    //for demo purposes
    async demoInfluencer() {
      let demoUser = this.$store.getters.demoInfluencer;
      if (!demoUser) demoUser = this.demoUser;
      await this.$store.dispatch({
        type: "demoLogin",
        credentials: demoUser,
      });
      this.$router.push("/backoffice");
      this.loggedInUser = demoUser;
    },
  },
  computed: {
    username() {
      let user = this.$store.getters.loggedInUser;
      console.log(user);
      if (user) return user.credentials.username;
      else return "no logged in user";
    },
  },
};
</script>

<style>
</style>