<template>
  <div class="home">
    <h1 class="h1">Giphy Search Engine</h1>
    <container>
      <Form />
      <ListItems />
      <!-- <Spinner /> -->
    </container>
  </div>
</template>

<script>
// @ is an alias to /src
import Form from "@/components/Form";
import Container from "@/components/container";
import ListItems from "@/components/ListItems";
// import Spinner from "@/components/Spinner";

export default {
  components: {
    Form,
    Container,
    ListItems,
    // Spinner,
  },
};
</script>
<style lang="css" scoped>
.h1 {
  font-size: 3rem;
  font-family: "Oleo Script", cursive;
  text-align: center;
  margin: 2rem 0 4rem 0;
}
@media (max-width: 768px) {
  .h1 {
    font-size: 1.5rem;
  }
}
</style>
