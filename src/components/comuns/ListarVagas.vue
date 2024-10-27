<template>
    <!-- Passando atributos para o slot, do componente pai -->
    <slot 
        atributo1="Esse é um atributo do slot filho, encaminhado para o template do componente pai"
        atributo2="teste"
        :array="[1,2,3,4,5]">
    <!-- Conteúdo padrão, caso não passar o conteúdo HTML em HomeView -->
        <div class="row mt-5" v-for="(vaga,id) in vagas" :key="id" :vaga="vaga">
            <div class="col">
                <VagaComponent :vaga="vaga" :kebab-case="vaga.descricao"/>
            </div>
        </div>
    </slot>
</template>
<script>
    import VagaComponent from './VagaComponent.vue';

    export default {
        name: 'ListarVagas',
        components: {VagaComponent},
        data: () => ({
            vagas: []
        }),
        activated() { //Para melhora a performance, podemos usar activated ou deactivated. //Pois ao usar oomponent :is o componente é desmontado e renderizado.
            //Ao usar esses dois o componente é guardado em cache. Para indica para o vue utiliza-se com <keep-alive></keep-alive>
            console.log('Componente é ativado');
            this.vagas = JSON.parse(localStorage.getItem('vagas')); //Convertendo a string que é retornada em localStorage e convertendo em um objeto JSON
        },
        mounted(){
            this.emitter.on('pesquisarVaga', (titulo) => {
                const vagas = JSON.parse(localStorage.getItem('vagas'));
                if(titulo.trim().length != 0){
                    return this.vagas = vagas.filter((vaga) => vaga.titulo.toLowerCase().includes(titulo.toLowerCase()));
                }
                return this.vagas = vagas;
            });
        },
    }
</script>
<style lang="css">
</style>