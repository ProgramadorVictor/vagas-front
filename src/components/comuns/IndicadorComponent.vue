<template>
    <div :class="adicionarEstilo" >
        <p>{{ titulo }}</p>
        <h2>{{ numero ?? online }}</h2> <!-- Props ainda continuam reativos quando encaminhados para o componente filho. -->
    </div>
</template>
<script>
    export default {
        name: 'IndicadorComponent',
        props:['titulo', 'numero', 'estilo', 'online'], //Props enviados do pai ainda continuam reativos no filho, portanto se sofrem alteração no componente filho, vão sofrer alteração no componente pai.
        computed:{
            adicionarEstilo(){
                return `h-100 p-5 roudend-3 border ${this.estilo ?? `bg-dark text-white`}`
            }
        }
    }
</script>
<style lang="css">
</style>