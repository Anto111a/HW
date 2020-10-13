<template>
  <b-row>
    <b-col cols="12">
      <Loader v-if="loading"/>
      <UsersList
        v-else
        v-bind:users="users"
      />
    </b-col>
  </b-row>
</template>

<script>
import UsersList from '../components/UsersList'
import Loader from '../components/Loader'
export default {
  name: 'LocalState',
  data() {
    return {
      users: [],
      loading: true
    }
  },
  components: {
    UsersList,
    Loader
  },

  mounted() {
    fetch('https://api.github.com/users')
    .then(response => response.json())
    .then(json => {
      this.users = json
      this.loading = false
    })
  }
}
</script>
