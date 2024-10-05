<template>
    <div>
        <h1>Home Componente</h1>
        <p>Home: {{ $style }}</p>
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