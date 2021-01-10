<template>
  <section>
    <Spinner v-if="isLoading" />
    <section v-else-if="!isLoading && giphy.length" class="list-item">
      <Card v-for="gif in giphy" :key="gif.id" :gif="gif" />
    </section>
  </section>
</template>

<script>
import Card from "@/components/Card";
import Spinner from "@/components/Spinner";
import { mapState } from "vuex";

export default {
  name: "ListItems",
  computed: {
    ...mapState(["isLoading", "giphy"]),
  },
  components: {
    Card,
    Spinner,
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
