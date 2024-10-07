<template>
    <div class="card">
        <div class="card-header bg-dark text-white">{{ vaga.titulo }}</div>
        <div class="card-body">
            <p>
                {{kebabCase}} <!-- Vue.js recebeu ma kebab-case e ela é chamada oomo CamelCase -->
            </p>
        </div>
        <div class="card-footer">
            <small class="text-muted">Salário: R$ {{vaga.salario}} | Modalidade: {{ vaga.modalidade }} | Tipo: {{vaga.tipo}} | Publicação: {{vaga.publicacao}}</small>
        </div>
    </div>
</template>
<script>
    export default {
        props: ['vaga', 'kebab-case']
    }
</script>
<style lang="css">
</style>