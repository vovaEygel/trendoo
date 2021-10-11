<template>
  <section class="brand-create-container flex column">
    <h1>You are a Brand</h1>
    <div class="text-info">
      <label>Username:</label>
      <input type="text" v-model="user.credentials.username" />
    </div>
    <div class="text-info">
      <label>password</label>
      <input type="password" v-model="user.credentials.password" />
    </div>
    <div class="text-info">
      <label>Name:</label>
      <input type="text" v-model="user.lastName" />
    </div>
    <div class="text-info">
      <label>Email</label>
      <input type="email" v-model="user.email" />
    </div>
    <div class="text-info upload-photo">
      <label>Upload Photo</label>
      <input type="file" @change="uploadImg($event)" class="input-file" />
    </div>
    <div class="tags">
      <ul>
        <li v-for="(tag, idx) in tags" :key="idx" class="clean-list">
          <tag-input :tag="tag" @check-tag="checkTag"></tag-input>
        </li>
      </ul>
    </div>
    <!-- Add multypile subjects choises -->
    <button @click="saveUser" class="btn">Save</button>
  </section>
</template>

<script>
import CloudinaryService from "../services/CloudinaryService.js";
import tagInput from "./tag-input";
export default {
  name: "brand-create",
  components: {
    tagInput,
  },
  data() {
    return {
      user: {
        credentials: {
          userType: "brand",
          username: "",
          password: "",
        },
        subjects: [],
      },
      tagsForDisplay: [
        "Books",
        "Garden",
        "Sports",
        "Industrial",
        "Health",
        "Music",
        "Movies",
        "Automotive",
        "Computers",
        "Electronics",
        "Grocery",
        "Kids",
        "Jewelery",
        "Baby",
        "Clothing",
        "Beauty",
        "Shoes",
        "Tools",
        "Home",
        "Animals",
        "Games",
        "Toys",
        "Outdoors",
        "Traveling",
        "Cooking",
      ],
    };
  },
  methods: {
    async saveUser() {
      const newBrand = await this.$store.dispatch({
        type: "addBrand",
        brand: this.user,
      });
      this.$router.push("/app");
    },
    async uploadImg(ev) {
      // Cloudinary upload img
      const res = await CloudinaryService.uploadImg(ev);
      const { url } = res;
      this.user.imgUrl = url;
    },
    checkTag(tag) {
      //change to reduce later
      let item = this.user.subjects.find((item) => item === tag);
      if (item)
        this.user.subjects = this.user.subjects.filter((item) => item !== tag);
      else this.user.subjects.push(tag);
    },
  },
  computed: {
    tags() {
      return this.tagsForDisplay;
    },
  },
};
</script>

<style>
</style>