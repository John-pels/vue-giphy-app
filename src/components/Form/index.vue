<template>
  <div>
    <form class="form" @submit.prevent="handleSubmit">
      <div class="input-group">
        <input
          type="text"
          v-model="input"
          placeholder="Enter a keyword"
          class="input"
        />
      </div>
      <button type="submit" class="btn-search">Search</button>
    </form>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  name: "Form",
  computed: {
    ...mapState(["isLoading"]),
  },
  data() {
    return {
      input: "",
    };
  },
  methods: {
    ...mapActions(["getSearchResults"]),
    handleSubmit() {
      this.getSearchResults(this.input);
    },
  },
};
</script>

<style scoped>
@import "./style.css";
</style>
