<template>
  <!-- 
    Single file Component/Single file template
    É a ideia de que podemos reutilizar código com vários componentes em arquivos unicos, cada componente...
    Tendo suas funções unicas. E sendo colocado em diversas partes da estrutura HTML. Desta forma podemos encapsular e reutilizar o código.
  -->
  <!-- O pai escuta o evento e o filho logo executa -->
  <!-- <Topo @evento="$event('1', '2')"/> --><!-- Percebe-se que ao utilizar sintaxe mais clara o component é chamado pela sua chave, não por seu nome. Poderia passar uma callback () => {}  no lugar do event.-->
  <!-- <Topo :funcaoCallback="acao"/> -->
  <Topo @trocarAba="conteudo = $event"/><!-- $event, pode ser recuperado ele é associado a um evento disparado. Não associando a uma função recuperando diretamente. -->
  <Alert v-if="alert.exibir" :alert="alert">
    <!-- Trabalhando com slots nomeados, podemos utilizar multiplos slots. -->
    <template #titulo></template><!-- #titulo ou v-slot:titulo -->
    <template #descricao></template>
  </Alert>
  <!--
    <ConteudoComponent/>
    <conteudo-component/> Utilização da case, kebab-case
    <conteudo-kebab-case/>
  -->
  <ConteudoComponent v-if="visibilidade" :conteudo="conteudo"/>
  <button @click="desmontarComponente" style="margin: 0 auto; display: block;">Desmontar o Componente Conteudo</button>
  <!-- <h1>Componente App</h1>
  <p>App: {{ $style }}</p> -->
</template>

<script>
import ConteudoComponent from './components/layouts/ConteudoComponent.vue'
import TopoComponent from './components/layouts/TopoComponent.vue' 
import AlertComponent from './components/comuns/AlertComponent.vue';

export default {
  name: 'App',
  components: { //Precisamos registar os components, para usar no contexto de template.
    ConteudoComponent, //Sintaxe enxuta.
    Topo: TopoComponent, //Topo é a chave e TopoComponent é o conteúdo que vai ser recebido pela chave Topo, Topo faz referencia a TopoComponent.
    'conteudo-kebab-case': ConteudoComponent, //Abordagem pouco usada para nomeação de ccomponents.
    Alert: AlertComponent
  },
  mounted(){
    this.emitter.on('alerta', (obj) => {
      this.alert.exibir = true;
      this.alert.msg = obj.msg;
      this.alert.class = obj.class;
      console.log(this.alert);
      setTimeout(() => {
        this.alert.exibir = false;
        this.alert.msg = '';
        this.alert.class = '';
      }, 2500);
    });
  },
  data: () => ({
    visibilidade: true,
    conteudo: 'HomeKey',
    alert: {
      exibir: false,
      msg: '',
      class: '',
    },
  }),
  methods:{
    desmontarComponente(){
      this.visibilidade = false;
    },
    trocarConteudo(filhoParaPai){
      this.visibilidade = filhoParaPai;
    },
    acao(p1,p2){ //Recebendo parametros do filho
      console.log('Eai, filho ', p1, p2);
    }
  }
}
</script>

<style lang="css" module> /* 'scoped' adiciona estilo somente ao componente especificado. No caso somente o 'App.vue' vai ter o estilo */
/* sem 'scoped' O estilo que esta no componente mais alto em questão de hierarquia recebe o estilo, os que estão mais baixo podem modificar o estilo. Causando uma confusão */
</style>
