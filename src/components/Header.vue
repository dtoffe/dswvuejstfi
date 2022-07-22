<template>
  <div class="hello">
    <img alt="Banner Provincia" src="../assets/banner_OK_2.png">
    <h1>{{ msg }}</h1>
    <p>
      correspondiente al curso "Desarrollo de Aplicaciones Web con Vue.js"<br/>
    </p>
    <p>
      Autor:  Alejandro Daniel Toffetti<br/>
    </p>
    <hr color="#00aec3" size="2" width="80%" >
  </div>
</template>

<script>
export default {
  name: 'Header',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
