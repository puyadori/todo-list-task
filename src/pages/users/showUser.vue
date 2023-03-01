<template>
  <div v-if="loading" class="spinner-border" role="status">
    <span class="sr-only"></span>
  </div>
  <div v-else class="col-3 mt-5">
    gggg
    <CardView :user="user" />
  </div>
</template>
<script>
import axios from 'axios'
import CardView from '@/components/users/CardView.vue'
import { useRoute } from 'vue-router'
import { ref } from 'vue'
export default {
  name: 'showUser',

  components: {
    CardView,
  },
  setup() {
    const user = ref({})
    const loading = ref(true)
    const route = useRoute()
    function getUser() {
      axios
        .get(`https://jsonplaceholder.typicode.com/users/${route.params.id}`)
        .then(function (response) {
          user.value = response.data
          loading.value = false
        })
        .catch(function (error) {
          console.log(error)
        })
    }

    getUser()
    return { user, loading }
  },
}
</script>

<style></style>
