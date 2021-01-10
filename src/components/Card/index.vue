<template>
  <div class="card" @click="getGifDetails(gif)">
    <div class="img-wrapper">
      <router-link :to="{ name: 'Gif Details', params: { id: gif.id } }">
        <img
          :src="gif.images.fixed_height_downsampled.url"
          alt="gif"
          class="gif"
        />
      </router-link>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "Card",
  props: {
    gif: {
      type: Object,
      default: () => {},
    },
  },
  methods: {
    ...mapActions(["getGifDetails"]),
  },
};
</script>

<style scoped>
.card {
  width: 23.5%;
  padding: 0.5rem;
  cursor: pointer;
  transition: transform 0.5s ease-in-out;
}
.card:hover {
  transform: scale(1.05);
}
.img-wrapper {
  width: 100%;
  height: 200px;
}

.gif {
  border-radius: 5px;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

@media (max-width: 768px) {
  .card {
    width: 45%;
  }
  .card:hover {
    transform: none;
  }
}
</style>
