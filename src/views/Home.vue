<template>
  <div id="app" class="hello">
    <v-btn to="/users" class="mb-4 mt-2" elevation="2" color="#00aec3">Ver la lista de usuarios</v-btn>
    <v-btn @click="elegirPosts()"  class= "mb-4 mt-2" elevation="2" color="#00aec3">Ver la lista de posts por usuario</v-btn>
  </div>
</template>

<script>
export default {
  name: 'Home',
  methods: {
    elegirPosts(){
      this.$store.commit('setSelectedUserId', null)
      this.$router.push('posts')
    }
  }
}
</script>

<style>

</style>
