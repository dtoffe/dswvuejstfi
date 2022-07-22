<template>
  <div id="app" class="hello">
    <v-btn to="/" class="mb-4 mt-2" elevation="2" color="#00aec3">Volver a la página principal</v-btn>
    <div class="horiz">
      <v-select outlined :items="users" item-value="id" item-text="name" v-model="selectedUserId" class="mt-2 mr-2"></v-select>
      <v-btn @click="traerPosts()" class="mb-4 ml-2" elevation="2" color="#00aec3">Recuperar Posts</v-btn>
    </div>
    <v-data-table
      dense
      :headers="headers"
      :items="posts"
      item-key="id"
      class="elevation-1"
      v-if="mostrarTabla"
    ></v-data-table>
  </div>
</template>

<script>
import {mapActions, mapGetters} from "vuex"
export default {
  name: 'Posts',
  data: () => ({
    headers: [
      { text: 'User Id', align: 'center', value: 'userId' },
      { text: 'Post Id', value: 'id' },
      { text: 'Title', value: 'title' },
      { text: 'Body', value: 'body'},
    ],
    mostrarTabla: false,
  }),
  computed: {
    ...mapGetters(['users']),
    ...mapGetters(['posts']),
    selectedUserId: {
      get() { return this.$store.state.selectedUserId },
      set(value) { 
        this.$store.commit('setSelectedUserId', value) 
        }
    }
  },
  async created() {
    try {
      this.fetchUsers();
    } catch (error) {
      console.log(error);
    }
    if (this.selectedUserId) {
      this.traerPosts()
    }
  },
  methods: {
    ...mapActions(['fetchUsers']),
    ...mapActions(['fetchPosts']),
    ...mapActions(['setSelectedUserId']),
    traerPosts(){
      this.setSelectedUserId(this.selectedUserId)
      this.fetchPosts()
      this.mostrarTabla = true
    }
  }
}
</script>

<style>

</style>
