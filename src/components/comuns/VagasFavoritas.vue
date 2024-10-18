<template>
    <div>
        <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
            <div class="offcanvas-header">
                <h5 class="offcanvas-title" id="offcanvasExampleLabel">Vagas Favoritadas</h5>
                <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div class="offcanvas-body">
                <ul class="list-group">
                    <li class="list-group-item" v-for="(vaga, index) in vagas_favoritas" :key="index">
                        {{ vaga }}
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'VagasFavoritas',
        data: () => ({
            vagas_favoritas: []
        }),
        mounted(){
            this.emitter.on('favoritarVaga', (titulo_da_vaga) => {
                this.vagas_favoritas.push(titulo_da_vaga);
            });
            this.emitter.on('desfavoritarVaga', (titulo_da_vaga) => {
                var pos = this.vagas_favoritas.findIndex((vaga) => vaga == titulo_da_vaga); //Na aula ele usou o indexOf, parece ser interessante também.
                if(pos != -1){
                    this.vagas_favoritas.splice(pos, 1);
                }
            });
            //Primeiro parametro é o evento que esta escutando e o segundo é a função de callback.
            // this.emitter.on('eventoGlobal', (msg) => {
            //     console.log(msg)
            // }) //Aqui estamos escutando o evento.
        }
    }
</script>
<style lang="css">

</style>