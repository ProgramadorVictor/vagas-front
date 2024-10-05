<template>
  <!-- 
    Single file Component/Single file template
    É a ideia de que podemos reutilizar código com vários componentes em arquivos unicos, cada componente...
    Tendo suas funções unicas. E sendo colocado em diversas partes da estrutura HTML. Desta forma podemos encapsular e reutilizar o código.
  -->
  <Topo/><!-- Percebe-se que ao utilizar sintaxe mais clara o component é chamado pela sua chave, não por seu nome. -->
  <!--
    <ConteudoComponent/>
    <conteudo-component/> Utilização da case, kebab-case
    <conteudo-kebab-case/>
  -->
</template>

<script>
import ConteudoComponent from './components/layouts/ConteudoComponent.vue'
import TopoComponent from './components/layouts/TopoComponent.vue' 

export default {
  name: 'App',
  components: { //Precisamos registar os components, para usar no contexto de template.
    ConteudoComponent, //Sintaxe enxuta.
    Topo: TopoComponent, //Topo é a chave e TopoComponent é o conteúdo que vai ser recebido pela chave Topo, Topo faz referencia a TopoComponent.
    'conteudo-kebab-case': ConteudoComponent, //Abordagem pouco usada para nomeação de ccomponents.
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
  /* margin-top: 60px; */
}
</style>
