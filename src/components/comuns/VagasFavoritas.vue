<template>
    <div>
        <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
            <div class="offcanvas-header">
                <h5 class="offcanvas-title" id="offcanvasExampleLabel">Vagas Favoritadas</h5>
                <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div class="offcanvas-body">
                
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'VagasFavoritas',
        mounted(){
            //Primeiro parametro é o evento que esta escutando e o segundo é a função de callback.
            this.emitter.on('eventoGlobal', (msg) => {
                console.log(msg)
            }) //Aqui estamos escutando o evento.
        }
    }
</script>
<style lang="css">

</style>