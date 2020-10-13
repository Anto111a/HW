<template>
  <table class="table table-striped table-bordered table-hover">
    <thead>
      <tr>
        <th>ID</th>
        <th>Avatar</th>
        <th>Name</th>
        <th>Link</th>
      </tr>
    </thead>
    <tbody>
      <UserItem
        v-for="(user, index) of users"
        v-bind:userLogin="user.login"
        v-bind:userId="user.id"
        v-bind:userImg="user.avatar_url"
        v-bind:userUrl="user.html_url"
        v-bind:index="index"
        v-bind:key="user.id"
      />
    </tbody>
  </table>  
</template>

<script>
import UserItem from './UserItem'
export default {
  props: ['users'],
  components: {
    UserItem
  }
}
</script>
