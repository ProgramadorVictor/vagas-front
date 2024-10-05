<template>
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
</template>
<script>
    export default {
        name: 'PesquisarVaga'
    }
</script>
<style lang="css">
</style>