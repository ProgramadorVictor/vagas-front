<template>
    <div>
        <nav class="navbar navbar-expand-lg bg-dark">
            <div class="container-fluid">
                <a class="navbar-brand text-white" href="#">Vagas</a>
                <nav class="navbar navbar-dark bg-dark">
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <button class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
                        Vagas Favoritas
                    </button>
                </nav>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a class="nav-link active text-white" aria-current="page" href="#" @click="navegarParaConteudo('HomeKey')">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-white" href="#" @click="navegarParaConteudo('PublicarVaga')">Publicar Vaga</a>
                        </li>
                        <!-- <li class="nav-item">
                            <a class="nav-link active text-white" aria-current="page" href="#" @click="funcaoCallback('HomeKey', 'Home')">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-white" href="#" @click="funcaoCallback('PublicarVaga', 'Vaga')">Publicar Vaga</a>
                        </li> -->
                    </ul>
                </div>
            </div>
        </nav>
    </div>
    <VagasFavoritas/>
</template>
<script>
    import VagasFavoritas from '@/components/comuns/VagasFavoritas.vue';
    export default {//Configura a instancia do component, data, watcher, computed, methods.
        name: 'TopoComponent', //Podemos determinar o nome do componente no proprio componente.
        props: {
            funcaoCallback: Function
        },
        components: {
            VagasFavoritas
        },
        methods:{
            navegarPara(){
                this.$emit('evento', (menu, texto) => { //Toda vez que o evento é lançado o filho recupera o evento com os dois parametros que o pai esta envianndo 
                    console.log(texto);
                    console.log(menu);
                    return menu;
                });
            },
            navegarParaConteudo(aba){
                this.$emit('trocarAba', aba); //Deve acessar o valor pelo $event se não associar o evento a uma função no pai
            }
        }
    }
</script>
<style lang="css">
</style>