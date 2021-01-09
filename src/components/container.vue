<template>
  <section class="container">
    <slot />
  </section>
</template>

<script>
export default {
  name: "Container",
};
</script>

<style scoped>
.container {
  max-width: 80%;
  margin: 0 auto;
}

@media (max-width: 768px) {
  .container {
    max-width: 100%;
  }
}
</style>
