<template>
  <b-row>
    <b-col cols="12">
      <Loader v-if="isLoading"/>
      <UsersList
        v-else
        v-bind:users="usersList"
      />
    </b-col>
  </b-row>
</template>

<script>
import UsersList from '../components/UsersList'
import Loader from '../components/Loader'
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'VuexState',
  computed: {...mapGetters(['usersList', 'isLoading'])},
  components: {
    UsersList,
    Loader
  },
  methods: {
    ...mapActions(['getUsersList']),
    },
  mounted() {
    this.getUsersList()
  }
}
</script>
