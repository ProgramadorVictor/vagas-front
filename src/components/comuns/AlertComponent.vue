<template>
    <div :class="`alert ${alert.class}`" role="alert">
        <slot></slot>
        <!-- <slot name="titulo"></slot><br> -->
        <slot name="descricao">{{ alert.msg }}</slot>
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