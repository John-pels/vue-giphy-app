<template>
  <h1 class="h1">Gif Details</h1>
  <Container :class="flex">
    <GifDetails />
  </Container>
</template>

<script>
import GifDetails from "@/components/GifDetails";
import Container from "@/components/container";
export default {
  components: {
    GifDetails,
    Container,
  },
  data() {
    return {
      flex: "flex",
    };
  },
};
</script>
<style scoped>
.h1 {
  text-align: center;
  padding: 1.5rem 0;
}
.flex {
  display: flex;
  justify-content: center;
}

@media (max-width: 768px) {
  .flex {
    padding: 0 1rem;
  }
}
</style>
