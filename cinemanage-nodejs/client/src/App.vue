<template lang="pug">
    div#app
        navbar
        b-container
            router-view
</template>

<script>
import navbar from './components/NavBar'

export default {
    name: 'App',
    components: {
        navbar
    }
}
</script>

<style lang="scss">
@import "../node_modules/bootstrap/scss/bootstrap.scss";
sh1 {
    font-size: 1rem;
    display: block;
    color: #999999;
}

sh2 {
    font-size: 0.8rem;
    display: block;
    font-family: 'Source Sans Pro Semibold', Arial, sans-serif;
    line-height: 1rem;
    text-transform: none;
}
</style>
