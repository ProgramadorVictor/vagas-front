<template>
  <!-- 
    Single file Component/Single file template
    É a ideia de que podemos reutilizar código com vários componentes em arquivos unicos, cada componente...
    Tendo suas funções unicas. E sendo colocado em diversas partes da estrutura HTML. Desta forma podemos encapsular e reutilizar o código.
  -->
  <HelloWorld msg="Welcome to Your Vue.js App"/>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
