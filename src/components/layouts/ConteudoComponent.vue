<template>
    <div>
        <p>Contéudo</p>
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
<style lang="css">
</style>