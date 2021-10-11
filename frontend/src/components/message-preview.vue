<template >
  <section class="message-container-wrapper" @click="toggleExpandContent">
    <section class="message-preview-container flex space-between">
      <div class="message-time">{{ messageTime }}</div>
      <div class="message-subject">{{ message.subject }}</div>
      <section class="action-btns flex space-between">
        <a
          :href="`https://mail.google.com/mail/?view=cm&fs=1&to=${this.message.subject}`"
          class="action-btn accept-btn"
          @click.stop="acceptOffer"
        >
          Accept
        </a>
        <!-- <a
          :href="`mailto:${this.message.subject}`"
          class="action-btn accept-btn"
          @click.stop="acceptOffer"
        >
          Accept
        </a> -->
        <button class="action-btn decline-btn" @click.stop="declineOffer()">
          Decline
        </button>
      </section>
    </section>
    <section v-if="showExpandedContent" class="flex message-content">
      {{ message.content }}
    </section>
  </section>
</template>
<script>
import { eventBus } from "../services/event.bus.service.js";
import socket from "../services/socket.service.js";
export default {
  props: {
    message: Object,
  },
  data() {
    return {
      elPreview: null,
      showExpandedContent: false,
    };
  },
  created() {
    socket.setup();
  },
  computed: {
    messageTime() {
      let msgTime = new Date(this.message.timeSent);
      return `${msgTime.toDateString()} ${msgTime.toLocaleTimeString()}`;
    },
  },
  methods: {
    toggleExpandContent() {
      this.showExpandedContent = !this.showExpandedContent;
    },
    acceptOffer() {
      this.message.type = "message";
      console.log("offer accepted", this.message);
    },
    declineOffer() {
      let msgId = this.message._id;
      this.$store.dispatch({ type: "removeMessage", msgId });
      socket.emit("REMOVE_MESSAGE", this.message);
      socket.off("REMOVE_MESSAGE", this.message);
      this.$emit("remove-message", this.message._id);
    },
  },
};
</script>

<style>
</style>