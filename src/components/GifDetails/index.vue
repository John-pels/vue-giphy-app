<template>
  <section class="gif-details">
    <div class="img-wrapper">
      <img
        :src="gifDetails.images.fixed_height_downsampled.url"
        alt="gif details"
        class="image"
      />
    </div>
    <div class="info">
      <p>Gif Title: {{ gifDetails.title }}</p>
      <p>Gif Type: {{ gifDetails.type }}</p>
    </div>
    <p>
      <a
        :href="gifDetails.images.fixed_height_downsampled.url"
        class="btn-download"
        target="_blank"
        >Download</a
      >
    </p>
    <p>
      <router-link to="/" class="back">Back to Homepage</router-link>
    </p>
  </section>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "GifDetails",
  data() {
    return {};
  },
  computed: {
    ...mapState(["gifDetails"]),
  },
};
</script>

<style scoped>
@import "./style.css";
</style>
