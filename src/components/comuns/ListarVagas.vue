<template>
    <div class="row mt-5" v-for="(vaga,id) in vagas" :key="id" :vaga="vaga">
        <div class="col">
            <VagaComponent :vaga="vaga" :kebab-case="vaga.descricao"/>
        </div>
    </div>
</template>
<script>
    import VagaComponent from './VagaComponent.vue';

    export default {
        name: 'ListarVagas',
        components: {VagaComponent},
        props: {
            vagas: {
                required: true,
                type: Array
            }
        }
    }
</script>
<style lang="css">
</style>