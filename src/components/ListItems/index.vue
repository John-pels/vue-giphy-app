<template>
  <section class="list-item">
    <Card />
    <Card />
    <Card />
    <Card />
    <Card />
    <Card />
    <Card />
    <Card />
    <Card />
    <Card />
    <Card />
  </section>
</template>

<script>
import Card from "@/components/Card";

export default {
  name: "ListItems",
  components: {
    Card,
  },
};
</script>

<style scoped>
.list-item {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  padding: 1rem;
}
</style>
