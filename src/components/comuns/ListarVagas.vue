<template>
    <!-- Passando atributos para o slot, do componente pai -->
    <slot name="titulo" titulo="Titulo da listagem de vagas">
        <h3 class="text-center">
            Titulo da listagem de vaga padrão
        </h3>
    </slot>
    <slot :vagas="vagas"> <!-- Conteúdo padrão, caso não passar o conteúdo HTML em HomeView -->
        <div class="row mt-5" v-for="(vaga,id) in vagas" :key="id" :vaga="vaga">
            <div class="col">
                <VagaComponent :vaga="vaga" :kebab-case="vaga.descricao"/>
            </div>
        </div>
    </slot>
    <slot name="rodape">
        <h3 class="text-center">
            Rodapé da listagem de vaga padrão
        </h3>
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