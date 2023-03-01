<template>
  <div class="container mt-5">
    <div class="row">
      <div v-if="loading" class="spinner-border" role="status">
        <span class="sr-only"></span>
      </div>

      <div v-else class="col-3 mt-5" v-for="user in users" :key="user.data">
        <CardView :user="user" />
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import CardView from '@/components/users/CardView.vue'
import { useRoute } from 'vue-router'
import { ref } from 'vue'
export default {
  name: 'indexUser',

  components: {
    CardView,
  },
  setup() {
    const users = ref([])
    const loading = ref(true)
    const route = useRoute()

    function getUsers() {
      axios
        .get('https://jsonplaceholder.typicode.com/users')
        .then(function (response) {
          users.value = response.data
          loading.value = false
        })
        .catch(function (error) {
          console.log(error)
        })
    }

    getUsers()
    return { users, loading, route }
  },
}
</script>

<style></style>
