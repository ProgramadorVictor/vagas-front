<template>
    <div>
        <h1>{{titulo}}</h1>
        <button @click="atualizarComponente">Atualizar Componente</button>
        <HomeKey/>
        <p>{{ $style }}</p>
        <PublicarVaga :class="$style.teste"/><!-- Somente funciona sem kebab-case. -->
        <div :class="$style['teste-1']" v-show="show"><!-- Acessando o estilo pela propriedade $style usando o atributo 'module' em style. -->
            Teste-1
        </div>
        <div :id="$style['teste-2']" v-show="show">
            Teste-2
        </div>
    </div>
</template>
<script>
    import HomeView from '@/components/views/HomeView.vue' // '@' Faz referência a src.
    import PublicarVaga from '@/components/views/PublicarVaga.vue'
    export default {
        components:{
            HomeKey: HomeView, //Atribuindo HomeView a chave HomeKey 
            PublicarVaga
        },
        data(){
            return{
                show: false,
                titulo: 'Componente Conteudo'
            }
        },
        methods:{
            atualizarComponente(){
                this.titulo = 'Componente atualizado';
            }
        },
        //Cada componente tem seu lifecycle, muito util para muitas coisas. Lifecycle
        beforeCreate() {
            console.log('Antes de criar')
        },
        created() { //Entre beforeCreate e created são injetados a propriedade des outros componentes
            console.log('Criado')
        },
        beforeMount() { //Podemos recuperar dados para compor o nosso componente.
            console.log('Antes de montar')
        },
        mounted() { //O componente é montado e passa a ficar no DOM real.
            console.log('Montado')
        },
        beforeUpdate() { //Antes d componente ser atualizado
            console.log('Antes de atualizar')
        },
        updated() { //Depois que o componente é atualizado
            console.log('Atualizado')
        },
        beforeUnmount() { //Antes da instancia do componente ser removido
            console.log('Antes de demonstar/destruir')
        },
        unmounted() { //Após a remoção do componente ser feita.
            console.log('Demonstado/destruído')
        },
        errorCaptured() {
            console.log('Erro capturado')
        },
        renderTracked() {
            console.log('Re-renderização rastreada')
        },
        renderTriggered() {
            console.log('Re-renderização acionada')
        },
        activated() {
            console.log('Componente é ativado')
        },
        deactivated() {
            console.log('Componente é desativado')
        }
    }
</script>
<style lang="css" module>/* Usado para quando os components tem estilos com mesmo nome não sobescrever os demais. */
.teste-1{
    /* { "teste-1": "ConteudoComponent_teste-1_CE3fI", "teste-2": "ConteudoComponent_teste-2_sG6zt" } */
    /* O processo de build do vue gerou isso acima, ao usar module. 'ConteudoComponent' => Nome do componente, teste-1 => nome da classe. O outro é uma hash*/
    background-color: red;
}
#teste-2{
    background-color: yellow;
}
.teste{ /* Acessando o estilo por notação de objeto, não pode ser usado kebab-case */
    background-color: black;
}
</style>