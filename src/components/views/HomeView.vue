<template>
    <div class="container py-4">
        <div class="row">
            <div class="col">
                <PesquisarVaga/>
            </div>
        </div>
        
        <!-- 'slotProps' é recomendado pela documentação do Vue. -->
        <ListarVagas v-slot:default="slotProps"><!-- Quando trabalhamos com slot padrão conseguimos colocar diretamente o v-slot na tag que faz a instancia do componente. Assim não tendo a necessidade do template -->
            <!-- Sobrepor o valor padrão. -->
            <ul>
                <!-- O 'slotProps' enviar um array com todos os atributos que são mandados pelo slot de ListarVagas -->
                <li v-for="(slotProp, id) in slotProps.vagas" :key="id">{{ slotProp }}</li>
            </ul>
            <!-- Isso é otimo para ter diversas customizações em um componente. Tendo slots, padrão, como podemos mudar o tema do site. Natal, Halloween-->
        </ListarVagas>

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
    import ListarVagas from '../comuns/ListarVagas.vue';
    import PesquisarVaga from '../comuns/PesquisarVaga.vue'

    export default {
        name: 'HomeView',
        components: {
            PesquisarVaga,
            IndicadorComponent,
            ListarVagas
        },
        data: () => ({
            usuarioOnline: 0
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
        deactivated() {
            console.log('Componente é desativado')
        }
    }
</script>
<style lang="css" module>
</style>