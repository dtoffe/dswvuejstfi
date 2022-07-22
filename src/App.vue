<template>
  <v-app>
    <Header msg = "Trabajo Final Integrador"/>
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
import Header from "./components/Header"

export default {
  name: 'App',
  components: {
    Header
  },
  data: () => ({
    //
  }),
};
</script>

<style>
.hello {
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
.horiz {
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
}
</style>
