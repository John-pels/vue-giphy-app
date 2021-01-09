<template>
  <section class="gif-details">
    <div class="img-wrapper">
      <img
        src="https://images.unsplash.com/photo-1602524815920-35f31875e44c?ixid=MXwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60"
        alt="gif details"
        class="image"
      />
    </div>
    <div class="info">
      <p>Gif: Yes yes yes</p>
      <p>Name: Yes yes yes</p>
      <p>Gif Type: Yes yes yes</p>
    </div>
    <p>
      <a href="https://twitter.com" class="btn-download" target="_blank"
        >Download</a
      >
    </p>
    <p>
      <router-link to="/" class="back">Back to Homepage</router-link>
    </p>
  </section>
</template>

<script>
export default {
  name: "GifDetails",
};
</script>

<style scoped>
@import "./style.css";
</style>
