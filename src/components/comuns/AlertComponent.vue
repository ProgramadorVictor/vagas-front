<template>
    <div :class="`alert ${alert.class}`" role="alert">
        <slot></slot>
        <!-- <slot name="titulo"></slot><br> -->
        <slot name="descricao">
            Todo conteúdo dentro do componente que esta sendo injetado um slot.
            as tags slots dentro dele com os devidos conteúdos são valores padrões.
            Como este conteudo acima.

            Caso deixe de passar alguma informação para o componente com injeção com slots.
            Os valores que estão aqui serão usados, caso contrário, ou seja os valores passados vão substituir os valores daquis.
        </slot>
    </div>
</template>
<script>
    export default {
        name: 'AlertComponent',
        props: ['alert']
    }
</script>
<style lang="css">
</style>