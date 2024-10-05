<template>
    <div class="h-100 p-5 roudend-3 border" :class="adicionarEstilo">
        <p>{{ titulo }}</p>
        <h2>{{ numero }}</h2>
    </div>
</template>
<script>
    export default {
        name: 'IndicadorComponent',
        props:['titulo', 'numero', 'estilo'],
        computed:{
            adicionarEstilo(){
                return this.estilo ?? 'bg-dark text-white'
            }
        }
    }
</script>
<style lang="css">
</style>