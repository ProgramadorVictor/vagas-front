<template>
    <div>
        <h1>Contéudo Componente</h1>
        <HomeKey/>
        <PublicarVaga/>
    </div>
</template>
<script>
    import HomeView from '@/components/views/HomeView.vue' // '@' Faz referência a src.
    import PublicarVaga from '@/components/views/PublicarVaga.vue'
    export default {
        components:{
            HomeKey: HomeView, //Atribuindo HomeView a chave HomeKey 
            PublicarVaga
        }
    }
</script>
<style lang="css" scoped>
h1{
    color: pink !important;
}
</style>