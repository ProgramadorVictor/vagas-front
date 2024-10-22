<template>
    <div class="container py-4">
        <div class="row">
            <div class="col">
                <PesquisarVaga/>
            </div>
        </div>
        
        <div class="row mt-5" v-for="(vaga,id) in vagas" :key="id" :vaga="vaga">
            <div class="col">
                <VagaComponent :vaga="vaga" :kebab-case="vaga.descricao"/><!-- self-closing -->
            </div>
        </div>

        <div class="row mt-5">
            <div class="col-4">
                <IndicadorComponent titulo="Vagas Abertas" numero="50"/>
            </div>
            <div class="col-4">
                <IndicadorComponent titulo="Profissionais cadastrados" numero="125"/>
            </div>
            <div class="col-4">
                <IndicadorComponent :online="usuarioOnline" titulo="Visitantes Online" estilo="bg-light text-dark"/>
                <!-- Props ainda continuam reativos quando encaminhados para o componente filho. -->
            </div>
        </div>
        <!-- <h1>Home Componente</h1>
        <p>Home: {{ $style }}</p> -->
    </div>
</template>
<script>
    import IndicadorComponent from '../comuns/IndicadorComponent.vue'
    import PesquisarVaga from '../comuns/PesquisarVaga.vue'
    import VagaComponent from '../comuns/VagaComponent.vue'

    export default {
        name: 'HomeView',
        components: {
            PesquisarVaga,
            IndicadorComponent,
            VagaComponent
        },
        data: () => ({
            usuarioOnline: 0,
            vagas: []
        }),
        methods: { 
            getUserOnline(){ //Simulando solicitações para o back-end para usuarios online
                this.usuarioOnline = Math.floor(Math.random() * 100);
            }
        },
        created(){
            setInterval(this.getUserOnline, 1000); //Função passada por referência não chamada. Chamada getUserOnline(), Referência getUserOnline
        },
        beforeUnmount() { //Antes da instancia do componente ser removido
            console.log('Antes de demonstar/destruir')
        },
        unmounted() { //Após a remoção do componente ser feita.
            console.log('Demonstado/destruído')
        },
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
        deactivated() {
            console.log('Componente é desativado')
        }
    }
</script>
<style lang="css" module>
</style>