<template>
  <section class="influencer-create-container flex column">
    <h1>You are an Influencer</h1>
    <div class="text-info">
      <label>Username:</label>
      <input type="text" v-model="user.credentials.username" />
    </div>
    <div class="text-info">
      <label>password</label>
      <input type="password" v-model="user.credentials.password" />
    </div>
    <div class="text-info">
      <label>First Name:</label>
      <input type="text" v-model="user.firstName" />
    </div>
    <div class="text-info">
      <label>Last Name:</label>
      <input type="text" v-model="user.lastName" />
    </div>
    <div class="text-info">
      <label>Email</label>
      <input type="email" v-model="user.email" />
    </div>
    <div class="text-info upload-photo">
      <label>Profile Picture</label>
      <input type="file" @change="uploadImg($event)" class="input-file" />
    </div>
    <!-- <div class="text-info upload-photo">
      <label>Profile Picture 2</label>
      <input type="file" @change="uploadImg($event)" class="input-file" />
    </div>
    <div class="text-info upload-photo">
      <label>Profile Picture 3</label>
      <input type="file" @change="uploadImg($event)" class="input-file" />
    </div> -->
    <div class="gender-select-container flex">
      <label>Gender</label>
      <div class="gender-select">
        <input type="radio" value="man" v-model="user.gender" />
        <label>Male</label>
        <input type="radio" value="woman" v-model="user.gender" />
        <label>Female</label>
      </div>
    </div>
    <!-- Add multypile tags choises -->
    <div class="socials-select-container space-between flex align-center">
      <label>Social Networks</label>
      <div class="select-btns social-checkbox-btn flex align-center">
        <label class="checkbox-container checkbox-facebook">
          <input
            type="checkbox"
            value="facebook"
            @click.prevent="addSocialNetwork('facebook')"
          />
          <span class="checkmark fa fa-facebook"></span>
        </label>
        <label class="checkbox-container checkbox-instagram">
          <input
            type="checkbox"
            value="instagram"
            @click.prevent="addSocialNetwork('instagram')"
          />
          <span class="checkmark fa fa-instagram"></span>
        </label>
        <label class="checkbox-container checkbox-snapchat">
          <input
            type="checkbox"
            value="snapchat"
            @click.prevent="addSocialNetwork('snapchat')"
          />
          <span class="checkmark fa fa-snapchat"></span>
        </label>
        <label class="checkbox-container checkbox-tiktok">
          <input
            type="checkbox"
            value="tiktok"
            @click.prevent="addSocialNetwork('tiktok')"
          />
          <span class="checkmark">
            <img src="../assets/icons/tik-tok.svg" class="tiktok-icon" />
          </span>
        </label>
      </div>
    </div>
    <label>Tags</label>
    <div class="text-info">
      <label>Price per post</label>
      <input type="number" v-model.number="user.pricePerPost" />
    </div>
    <button @click="saveUser()" class="btn">Save</button>
    <button @click="saveUser('demo')" class="btn">Demo sign up</button>
  </section>
</template>

<script>
import CloudinaryService from "../services/CloudinaryService.js";

export default {
  name: "influencer-create",
  data() {
    return {
      user: {
        credentials: {
          userType: "influencer",
        },
        socials: [],
        photos: [],
      },
    };
  },
  methods: {
    addSocialNetwork(sType) {
      let typeExsits = this.user.socials.find((type) => type === sType);
      if (typeExsits) {
        this.user.socials = this.user.socials.filter((type) => type !== sType);
      } else {
        this.user.socials.push(sType);
      }
    },
    async saveUser(signupType = null) {
      if (signupType === "demo") {
        this.user.credentials.username = "demo";
        this.user.credentials.password = "demo";
        this.user.firstName = "demo";
        this.user.lastName = "demo";
        this.user.socials.push("instagram");
      }
      const savedUser = await this.$store.dispatch({
        type: "addInfluencer",
        influencer: this.user,
      });
      console.log("Saved!", savedUser);
      this.$router.push("/app");
    },
    async uploadImg(ev) {
      // Cloudinary upload img
      const res = await CloudinaryService.uploadImg(ev);
      const { url } = res;
      this.user.photos.push({ regular: url });
    },
  },
};
</script>

<style scoped>
</style>