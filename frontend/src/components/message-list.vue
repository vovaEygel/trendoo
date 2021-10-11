<template>
  <section class="message-container">
    <h2 v-if="messagesForDisplay.length === 0">No Messages to Show</h2>
    <ul class="message-list clean-list">
      <li v-for="(message, idx) in messages" class="message-preview" :key="idx">
        <message-preview
          @remove-message="removeMessage"
          :message="message"
        ></message-preview>
      </li>
    </ul>
  </section>
</template>
<script>
import messagePreview from "./message-preview.vue";
import socket from "../services/socket.service.js";
import { eventBus } from "../services/event.bus.service.js";
export default {
  props: ["user"],
  components: {
    messagePreview,
  },
  data() {
    return {
      messagesForDisplay: [],
      clickedMessage: null,
      loggedInUser: null,
    };
  },
  created() {
    socket.setup();
    socket.on("USER_MESSAGES", (messages) => {
      this.$store.dispatch("setUserMessages", messages);
      this.messagesForDisplay = messages.reverse();
    });
    socket.on("USER_NEW_MESSAGE", (newMessage) => {
      this.messagesForDisplay.unshift(newMessage); // latest message on top of the list
      eventBus.$emit("showMsg", {
        txt: "You have a new message",
      });
    });
    socket.emit("MSG_TOPIC", this.user._id);
    socket.emit("GET_USER_MESSAGES", this.user._id);
  },
  computed: {
    messages() {
      return this.messagesForDisplay;
    },
  },
  methods: {
    async getInfluencerById() {
      const influencer = await this.$store.dispatch({
        type: "getInfluencerById",
        influencerId: this.influencerId,
      });
      this.currInfluencer = influencer;
    },
    removeMessage(id) {
      // eventBus.$emit("showMsg", { txt: "declined message" });
      this.messagesForDisplay = this.messagesForDisplay?.filter(
        (item) => item._id !== id
      );
    },
  },
  destroyed() {
    socket.terminate();
  },
};
</script>

<style>
</style>