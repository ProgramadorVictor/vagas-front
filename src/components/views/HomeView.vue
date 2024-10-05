<template>
    <div class="container py-4">
        <div class="row">
            <div class="col">
                <div class="h-100 p-5 bg-light border rounded-3">
                    <h2>Pesquisar Vagas</h2>
                    <div class="row">
                        <div class="col">
                            <div class="form-group">
                                <label for="">Titulo da vaga</label>
                                <input type="text" name="" id="" class="form-control" placeholder="Pesquise por palavras chaves por exemplo PHP, Pleno, Analista">
                                <small class="form-text text-muted">Informe palavras que estejam relacionada ao titulo da vaga que você procura</small>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col text-center">
                            <button class="btn btn-outline-dark mt-2">Buscar</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="row mt-5">
            <div class="col-4">
                <div class="h5 p-5 roudend-3 border bg-dark text-white">
                    <p>Vagas Abertas</p>
                    <h2>50</h2>
                </div>
            </div>
            <div class="col-4">
                <div class="h5 p-5 roudend-3 border bg-dark text-white">
                    <p>Profissionais cadastrados</p>
                    <h2>125</h2>
                </div>
            </div>
            <div class="col-4">
                <div class="h5 p-5 roudend-3 border bg-light text-dark">
                    <p>Visitantes Online</p>
                    <h2>25</h2>
                </div>
            </div>
        </div>
        <!-- <h1>Home Componente</h1>
        <p>Home: {{ $style }}</p> -->
    </div>
</template>
<script>
    export default {
        name: 'HomeView',
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