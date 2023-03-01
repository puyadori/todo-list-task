<template>
  <div class="card" style="width: 18rem">
    <div class="card-header">
      {{ user.name }}
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">{{ user.username }}</li>
      <li class="list-group-item">{{ user.address.street }}</li>
      <li class="list-group-item">{{ user.phone }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "CardView",
  props: {
    user: Object,
  },
};
</script>

<style></style>
