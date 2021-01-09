<template>
  <div class="card">
    <div class="img-wrapper">
      <img
        src="https://images.unsplash.com/photo-1602524815920-35f31875e44c?ixid=MXwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60"
        alt="gif"
        class="gif"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "Card",
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
}
</style>
