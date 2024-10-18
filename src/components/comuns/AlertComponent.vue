<template>
    <div :class="`alert ${alert.class}`" role="alert">
        {{ alert.msg }}
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