<template>
  <section v-if="loggedInUser" class="backoffice-page-container">
    <dash-board :user="loggedInUser"></dash-board>
    <div class="backoffice-navbar">
      <message-list v-if="messageShow" :user="loggedInUser"></message-list>
    </div>
    <router-view></router-view>
  </section>
</template>
// <script>
// import { eventBus } from "../services/event.bus.service.js";
import dashBoard from "../components/dash-board.vue";
import offerList from "../components/offer-list.vue";
import messageList from "../components/message-list.vue";
import socket from "../services/socket.service.js";
export default {
  name: "backoffice-page",
  data() {
    return {
      loggedInUser: null,
      messageShow: true,
      credentials: null,
    };
  },
  created() {
    socket.setup();
    this.credentials = this.$store.getters.demoInfluencer;
    this.login();
  },
  methods: {
    async login() {
      let loggedInUser = await this.$store.dispatch({
        type: "login",
        credentials: this.credentials,
      });
      this.loggedInUser = loggedInUser;
    },
    toggle(el) {
      if (el === "offer") {
        this.offerShow = !this.offerShow;
        this.messageShow = false;
      }
      if (el === "message") {
        this.offerShow = false;
        this.messageShow = !this.messageShow;
      }
    },
  },
  computed: {
    userId() {
      if (this.loggedInUser) return this.loggedInUser._id;
      else return " ";
    },
  },
  components: {
    dashBoard,
    messageList,
  },
};
</script>


