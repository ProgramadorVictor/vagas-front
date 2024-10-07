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
            vagas: [  {
                titulo: 'Analista Programador PHP Pleno',
                descricao: 'Profissional com conhecimentos em PHP, Laravel e MySQL. Necessário 3 anos de experiências. Atuará na manutenção de sistemas legados da empresa.',
                salario: 6000,
                modalidade: 'Home Office',
                tipo: 'PJ',
                publicacao: '2021-10-10'
            },
            {
                titulo: 'Programador JavaScript Angular',
                descricao: 'Profissional com conhecimentos avançados em JavaScript e Angular.',
                salario: 5000,
                modalidade: 'Presencial',
                tipo: 'CLT',
                publicacao: '2021-10-07'
            },
            {
                titulo: 'Programador JavaScript Vue',
                descricao: 'Profissional com conhecimentos avançados em JavaScript e Vue.',
                salario: 5000,
                modalidade: 'Home Office',
                tipo: 'CLT',
                publicacao: '2021-10-06'
            },
            {
                titulo: 'Analista de Banco de Dados Sênior',
                descricao: 'Domínio dos bancos de dados SQL Server, Oracle, Postgre e MySQL',
                salario: 9000,
                modalidade: 'Presencial',
                tipo: 'PJ',
                publicacao: '2021-10-06'
            },
            {
                titulo: 'Programador Web Júnior',
                descricao: 'Conhecimentos básicos em HTML, CSS, JavaScript, Bootstrap, PHP e MySQL',
                salario: 3000,
                modalidade: 'Presencial',
                tipo: 'CLT',
                publicacao: '2021-10-05'
            }]
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
            console.log('Componente é ativado')
        },
        deactivated() {
            console.log('Componente é desativado')
        }
    }
</script>
<style lang="css" module>
</style>