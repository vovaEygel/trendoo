<template>
  <section v-if="currInfluencer" class="influencer-details-container">
    <influencer-details-header
      class="influencer-header"
      :fullName="fullName"
      :age="age"
    />
    <influencer-photos-carousel
      class="influencer-photos-carousel"
      :photosUrls="getInfluencerPhotosUrls()"
    />
    <influencer-details-socials
      class="influencer-details-socials"
      :socials="currInfluencer.socials"
    />
    <section class="influencer-details-right-side-bar">
      <influencer-details-footer
        class="influencer-details-footer"
        :followersInterests="currInfluencer.tags"
        :pricePerPost="currInfluencer.pricePerPost"
      />
      <section
        v-if="loggedInUser"
        class="send-offer-container flex justify-center"
      >
        <button class="send-offer-btn" @click="toggleOfferModal">
          Contact Me
        </button>
        <!-- <button class="send-offer-btn" @click="onMakeOffer">make an offer</button> -->
      </section>
    </section>
    <section v-if="makingOffer" class="offer-modal flex column">
      <div class="modal-content">
        <div class="offer-text-container">
          <label for=""></label>
          <textarea
            class="offer-text"
            name
            id
            cols="30"
            rows="10"
            v-model="offerContent"
          ></textarea>
        </div>
        <div class="offer-buttons">
          <button class="btn" @click="onMakeOffer">Send</button>
          <button class="btn" @click="toggleOfferModal">Close</button>
        </div>
      </div>
    </section>
  </section>
</template>

<script>
import moment from "moment";
import influencerDetailsHeader from "../components/influencer-details-header";
import influencerPhotosCarousel from "../components/influencer-photos-carousel";
import influencerDetailsFooter from "../components/influencer-details-footer";
import influencerDetailsSocials from "../components/influencer-details-socials";
import { eventBus } from "../services/event.bus.service.js";
import socket from "../services/socket.service.js";
export default {
  name: "influencer-details",
  data() {
    return {
      influencerId: null,
      currInfluencer: null,
      loggedInUser: null,
      makingOffer: false,
      offer: {},
      content: "blablabla",
      offerContent: "",
    };
  },
  created() {
    this.influencerId = this.$route.params.id;
    this.loggedInUser = this.$store.getters.loggedInUser;
    this.getInfluencerById();
    socket.setup();
    socket.emit("MSG_TOPIC", this.influencerId);
  },
  computed: {
    fullName() {
      return `${this.currInfluencer.firstName} ${this.currInfluencer.lastName}`;
    },
    age() {
      return moment().diff(
        new Date(+this.currInfluencer.dateOfBirth * 1000),
        "years",
        false
      );
    },
  },
  methods: {
    toggleOfferModal() {
      this.makingOffer = !this.makingOffer;
    },
    getInfluencerPhotosUrls() {
      return this.currInfluencer.photos?.map((currPhoto) => {
        return currPhoto.regular;
      });
    },
    onMakeOffer() {
      eventBus.$emit("showMsg", {
        txt: `messsage has been sent to: ${this.currInfluencer.firstName} ${this.currInfluencer.lastName}`,
      });
      if (this.loggedInUser) {
        this.offer = {
          from: this.loggedInUser._id,
          to: this.currInfluencer._id,
          timeSent: Date.now(),
          type: "offer",
          subject: this.loggedInUser?.email,
          content: this.offerContent,
        };
        socket.emit("ADD_MESSAGE", this.offer);
      }
      this.offer.offerContent = "";
      this.toggleOfferModal();
    },
    async getInfluencerById() {
      const influencer = await this.$store.dispatch({
        type: "getInfluencerById",
        influencerId: this.influencerId,
      });
      this.currInfluencer = influencer;
    },
  },
  destroyed() {
    socket.off("ADD_MESSAGE", this.addMsg);
    socket.terminate();
  },
  components: {
    influencerDetailsHeader,
    influencerPhotosCarousel,
    influencerDetailsFooter,
    influencerDetailsSocials,
  },
};
</script>
