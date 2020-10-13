<template>
  <tr>
    <td class="users-id">
      {{userId}}
    </td>
    <td>
      <img v-bind:src="userImg"/>
    </td>
    <td class="users-login">
      {{userLogin}}
    </td>
    <td>
      <a
        v-bind:href="userUrl"
        target="_blank"
        rel="noopener noreferrer"
      >
        {{userUrl}}
      </a>
    </td>
    
  </tr>
</template>

<script>
export default {
  
  props: {
    userLogin: {
      type:String,
      required: true
    },
    userId: {
    type:Number,
    required: true
    },
    userImg: {
    type:String,
    required: true
    },
    userUrl: {
    type:String,
    required: true
    }
  }
}
</script>

<style scoped>
.users-id {
  font-size: 20px;
}
img {
  border-radius: 50%;
  height: 30px;
  width: 30px;
}
</style>
