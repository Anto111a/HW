<template>
  <div id="app">
    <b-container>
      <Navigation />
      <router-view/>
    </b-container>
  </div>
</template>

<script>
import Navigation from './components/Navigation' 
export default {
  components: {
    Navigation
  }
}
</script>

<style>
#app {
  display: flex;
  flex-direction: column;
}
</style>
