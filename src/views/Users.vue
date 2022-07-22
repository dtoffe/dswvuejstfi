<template>
  <div id="app" class="hello">
    <v-btn to="/" class="mb-4 mt-2" elevation="2" color="#00aec3">Volver a la página principal</v-btn>
    <v-data-table dense :headers="headers" :items="users" item-key="name" class="elevation-1">
      <template v-slot:[`item.actions`]="{ item }">
        <v-icon small class="mr-2" @click="verPosts(item)">mdi-email</v-icon>
      </template>
    </v-data-table>
  </div>
</template>

<script>
import {mapActions, mapGetters} from "vuex"
export default {
  name: 'Users',
    data: () => ({
      headers: [
        { text: 'Id', align: 'center', value: 'id' },
        { text: 'Name', value: 'name' },
        { text: 'Username', value: 'username' },
        { text: 'Company Name', value: 'company.name'},
        { text: 'Email', value: 'email' },
        { text: 'City', value: 'address.city' },
        { text: 'Phone', value: 'phone' },
        { text: 'Website', value: 'website' },
        { text: 'Ver Posts', value: 'actions', align: 'center', sortable: false },
      ],
    }),
  computed: {
    ...mapGetters(['users']),
  },
  async created() {
    try {
      this.fetchUsers();
    } catch (error) {
      console.log(error);
    }
  },
  methods: {
    ...mapActions(['fetchUsers']),
    ...mapActions(['setSelectedUserId']),
    verPosts(item) {
      this.setSelectedUserId(item.id)
      this.$router.push('posts')
    }
  }
}
</script>

<style>

</style>
